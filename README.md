# Adaptive Mule Intelligence Network

A local full-stack prototype for detecting suspicious transactions and mule accounts from cross-channel bank data, fraud monitoring alerts, transaction monitoring alerts, government cyber fraud tickets, regulatory feeds, and consumer identity-misuse checks.

## Project structure

```text
backend/
  server.py
  .env.example
frontend/
  index.html
  app.js
  styles.css
data/
  adaptive_mule_training_dataset.csv
  kaggle/
    creditcard.csv
    PS_20174392719_1491204439457_log.csv
```

## What is included

- Python backend API with real-time transaction generation and ingestion endpoints.
- AI/ML-style backend risk scoring using feature extraction, supervised probability, anomaly scoring, graph risk, rules, and feedback learning.
- Mule-network graph that links accounts, beneficiaries, devices, and high-risk fund flows.
- Investigator alert queue with containment recommendations.
- Decision engine outputs for allow, step-up authentication, transaction hold, debit freeze, and escalation.
- Manual transaction ingest form connected to the backend.
- Separate B2C Satark AI webpage where a user can verify whether a suspicious account was opened using their PAN or phone number.

## AI/ML backend design

The backend in `server.py` has four model layers:

- `FeatureStore`: online behavioral features for account velocity, beneficiary reuse, shared devices, channel switching, amount baselines, and watchlist/regulatory signals.
- `AdaptiveRiskModel`: a trained lightweight logistic classifier with calibrated thresholding, blended with anomaly score, rules score, graph score, and investigator feedback boost.
- `GraphIntelligence`: mule-network risk propagation across accounts, beneficiaries, devices, phones, and cyber case IDs.
- `record_feedback`: stores investigator labels and raises or lowers future linked-entity risk.

The model is dependency-free so it runs immediately. At startup, it trains on synthetic labeled fraud/mule patterns with overlapping benign cases and label noise, then calibrates its threshold on a validation split. The `/api/model` endpoint exposes validation accuracy, precision, recall, F1, confusion matrix counts, and threshold.

The current local validation profile is approximately:

```text
accuracy  0.945
precision 0.953
recall    0.911
F1        0.932
```

For production, replace the synthetic training generator with confirmed bank fraud labels and a trained XGBoost, LightGBM, logistic regression, or graph ML artifact.

## Add Kaggle datasets

The backend can train from these Kaggle datasets when the files exist locally:

- [Credit Card Fraud Detection](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud)
- [Synthetic Financial Datasets For Fraud Detection / PaySim](https://www.kaggle.com/datasets/ealaxi/paysim1)

Expected local paths:

```text
data/kaggle/creditcard.csv
data/kaggle/PS_20174392719_1491204439457_log.csv
```

Option A: download manually from Kaggle and place the CSV files at those paths.

Option B: use the helper script after setting up Kaggle CLI credentials:

```powershell
pip install kaggle
cd backend
python download_kaggle_datasets.py
```

Then restart the backend:

```powershell
python server.py
```

Check what training sources were used:

```text
http://127.0.0.1:5173/api/model
```

When Kaggle files are present, the model metadata will include:

```text
creditcard.csv
PS_20174392719_1491204439457_log.csv
```

## B2C consumer protection angle

The main intelligence dashboard links to a separate Satark AI page at `/selfcheck.html`. A consumer can enter PAN or phone number with consent, and the backend returns a masked result showing whether partner onboarding records contain suspicious account openings linked to that identifier.

Satark AI is designed for senior citizens and first-time digital users: it has large touch targets, simple step-by-step text, language selection for English, Hindi, Marathi, Tamil, Telugu, Punjabi, Kannada, and Bengali, plus a browser-based voice assistant. Where supported by the browser, users can speak their PAN or phone number and hear the result and reporting guidance in the selected language.

The prototype intentionally masks identifiers and simulates matching so no real PAN or phone data is stored. A production version should hash/tokenize identifiers, require explicit consent, integrate with regulated KYC/account-opening feeds, add OTP verification, and route positive matches into bank dispute, cybercrime, and account-freeze workflows.

## Run it

```powershell
cd backend
python server.py
```

Then open:

```text
http://127.0.0.1:5173
```

No package installation is required. The backend uses Python standard library modules only.

## Add your Adapt API key

1. Copy the example env file:

```powershell
Copy-Item backend\.env.example backend\.env
```

2. Open `backend\.env` and replace:

```text
ADAPT_API_KEY=your_adapt_api_key_here
```

with your real Adapt key.

3. Restart the backend:

```powershell
cd backend
python server.py
```

4. Check whether the backend sees the key:

```text
http://127.0.0.1:5173/api/adapt/status
```

The API will only show a masked preview, never the full key.

## Adapt API workflow

The backend now has a full Adapt workflow. It does not start a credit-consuming run unless you explicitly call the run endpoint with `confirm=true`.

1. Build the Adapt instruction dataset locally:

```text
GET http://127.0.0.1:5173/api/adapt/build-instruction-dataset
```

This creates:

```text
data/adapt_instruction_dataset.csv
```

with:

```text
instruction, context, response
```

2. Upload the dataset to Adapt:

```powershell
Invoke-RestMethod -Method Post http://127.0.0.1:5173/api/adapt/upload
```

Save the returned `dataset_id`.

3. Estimate Adapt credits before running:

```powershell
$body = @{ dataset_id = "YOUR_DATASET_ID"; max_rows = 40 } | ConvertTo-Json
Invoke-RestMethod -Method Post http://127.0.0.1:5173/api/adapt/estimate -ContentType "application/json" -Body $body
```

4. Start the Adapt run only if you accept the estimate:

```powershell
$body = @{ dataset_id = "YOUR_DATASET_ID"; max_rows = 40; confirm = $true } | ConvertTo-Json
Invoke-RestMethod -Method Post http://127.0.0.1:5173/api/adapt/run -ContentType "application/json" -Body $body
```

5. Check status:

```text
GET http://127.0.0.1:5173/api/adapt/dataset-status?dataset_id=YOUR_DATASET_ID
```

6. Download processed data:

```powershell
$body = @{ dataset_id = "YOUR_DATASET_ID" } | ConvertTo-Json
Invoke-RestMethod -Method Post http://127.0.0.1:5173/api/adapt/download -ContentType "application/json" -Body $body
```

Downloaded Adapt output is saved to:

```text
data/adapt_processed_dataset.csv
```

## API endpoints

```text
GET  /api/health
GET  /api/adapt/status
GET  /api/adapt/datasets
GET  /api/adapt/build-instruction-dataset
GET  /api/adapt/dataset-status?dataset_id=...
GET  /api/state
GET  /api/model
POST /api/transactions
POST /api/cyber-alerts
POST /api/identity-checks
POST /api/alerts/{alert_id}/resolve
POST /api/feedback
POST /api/adapt/upload
POST /api/adapt/estimate
POST /api/adapt/run
POST /api/adapt/download
```

Example transaction ingest:

```powershell
$body = @{
  account = "AC88420"
  beneficiary = "AC44771"
  amount = 125000
  channel = "UPI"
  device = "DEV-71A"
  phone = "+91-98XXXX2310"
  location = "Mumbai"
  caseId = "NCRP-26-11820"
} | ConvertTo-Json

Invoke-RestMethod -Method Post -Uri http://127.0.0.1:5173/api/transactions -ContentType "application/json" -Body $body
```

Example consumer identity check:

```powershell
$body = @{
  identifierType = "pan"
  identifier = "ABCDE1234F"
  consent = $true
} | ConvertTo-Json

Invoke-RestMethod -Method Post -Uri http://127.0.0.1:5173/api/identity-checks -ContentType "application/json" -Body $body
```

## Prototype architecture

```text
Bank, TMS, fraud, cyber and regulatory feeds
  -> real-time ingestion
  -> entity resolution
  -> feature engineering
  -> ML/rules/graph risk scoring
  -> containment decision
  -> investigator workflow
  -> feedback loop
```

## Production extension path

- Replace the simulated event generator in `app.js` with Kafka, Pulsar, API, or webhook ingestion.
- Replace the in-memory store in `server.py` with PostgreSQL, Redis Streams, Kafka, or a fraud-event lake.
- Replace the built-in `AdaptiveRiskModel` weights with a trained model artifact and calibrated probability thresholds.
- Store entities and fund-flow edges in a graph database such as Neo4j, TigerGraph, Neptune, or Cosmos DB Gremlin.
- Train supervised models on confirmed fraud and mule labels, then combine them with anomaly detection and graph features.
- Add privacy, consent logging, OTP verification, audit logging, role-based access, model explainability, and maker-checker controls before automated account action.
- Integrate with case management, AML/TMS tooling, cybercrime ticketing, and regulatory reporting workflows.
