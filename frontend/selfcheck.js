const API = window.API_BASE_URL || "";

const LANG = {
  en: {
    speech: "en-IN",
    language: "Language",
    misuseVerification: "Account misuse verification",
    heroTitle: "Check if your PAN or phone number was used to open a suspicious account",
    heroBody: "Satark AI checks identity misuse signals and shows a simple, masked safety result.",
    consentText: "I consent to checking this identity number for account misuse signals",
    runSelfCheck: "Check safely",
    panLabel: "PAN number",
    phoneLabel: "Phone number",
    ready: "Ready",
    checking: "Checking",
    readyToCheck: "Ready to check",
    readyBody: "Enter your PAN or phone number, confirm consent, and run Satark AI.",
    privacyCopy: "Your data is analyzed securely and never stored permanently.",
    voiceTitle: "Prefer speaking?",
    voiceReady: "Press the microphone and speak your PAN or phone number slowly.",
    speakNow: "Speak now",
    readHelp: "Read help",
    trustScore: "Trust Score",
    noMisuse: "No misuse found",
    review: "Possible match",
    urgent: "Misuse likely",
    invalid: "Invalid",
    whyFlagged: "Why flagged?",
    noFlagYet: "No check has been run yet.",
    reasonClean: "No suspicious mule-account signal found",
    reasonSuspicious: "Linked to suspicious activity",
    reasonReported: "Reported by users",
    reasonUnusual: "Unusual transaction behavior",
    recommendedAction: "Recommended Action",
    readyRecommendation: "Run a check before sharing sensitive documents or making large transfers.",
    safeRecommendation: "No suspicious account was found. Stay careful and use official support if anyone pressures you.",
    reviewRecommendation: "Avoid large transfers and verify directly with official support before sharing documents or money.",
    urgentRecommendation: "Do not transfer money. Contact your bank, report at cybercrime.gov.in, or call 1930.",
    contactHeading: "Where to report",
    cyberPortal: "National Cyber Crime Portal",
    cyberDetail: "Report at cybercrime.gov.in or call 1930 for cyber fraud assistance.",
    bankContact: "Your bank or wallet provider",
    bankDetail: "Ask for KYC dispute review and temporary restrictions on accounts you did not open.",
    clearSpeech: "No mule account or suspicious account was found for this identity in the current partner records.",
    reviewSpeech: "A possible suspicious account match was found. Please verify ownership and contact your bank or the National Cyber Crime Portal.",
    urgentSpeech: "A likely mule account or suspicious account match was found. Contact your bank immediately, report at cybercrime.gov.in, or call 1930.",
    invalidSpeech: "Please check the number format and consent box, then try again.",
    helpSpeech: "Select PAN or phone. Press speak now. Say the number slowly. I will check and read the result.",
    voiceUnsupported: "Voice input is not supported in this browser. You can still type the number.",
    listening: "Listening. Please speak now.",
    heard: "I heard",
  },
  hi: {
    speech: "hi-IN",
    language: "भाषा",
    misuseVerification: "खाता दुरुपयोग जांच",
    heroTitle: "जांचें कि आपके PAN या फोन नंबर से संदिग्ध खाता तो नहीं खुला",
    heroBody: "Satark AI पहचान दुरुपयोग संकेतों की जांच करता है और सुरक्षित, छुपा हुआ परिणाम दिखाता है।",
    consentText: "मैं इस पहचान की जांच के लिए सहमति देता/देती हूं",
    runSelfCheck: "सुरक्षित जांच करें",
    panLabel: "PAN नंबर",
    phoneLabel: "फोन नंबर",
    ready: "तैयार",
    checking: "जांच हो रही है",
    readyToCheck: "जांच के लिए तैयार",
    readyBody: "PAN या फोन नंबर डालें, सहमति दें और Satark AI चलाएं।",
    privacyCopy: "आपका डेटा सुरक्षित रूप से जांचा जाता है और स्थायी रूप से संग्रहीत नहीं किया जाता।",
    voiceTitle: "बोलकर जांच करना चाहते हैं?",
    voiceReady: "माइक्रोफोन दबाएं और अपना PAN या फोन नंबर धीरे बोलें।",
    speakNow: "बोलें",
    readHelp: "मदद सुनें",
    trustScore: "ट्रस्ट स्कोर",
    noMisuse: "दुरुपयोग नहीं मिला",
    review: "संभावित मैच",
    urgent: "दुरुपयोग की संभावना",
    invalid: "गलत",
    whyFlagged: "क्यों चिह्नित हुआ?",
    noFlagYet: "अभी कोई जांच नहीं हुई है।",
    reasonClean: "कोई संदिग्ध म्यूल-अकाउंट संकेत नहीं मिला",
    reasonSuspicious: "संदिग्ध गतिविधि से जुड़ा",
    reasonReported: "उपयोगकर्ताओं द्वारा रिपोर्ट किया गया",
    reasonUnusual: "असामान्य लेन-देन व्यवहार",
    recommendedAction: "सुझाव",
    readyRecommendation: "बड़े ट्रांसफर या दस्तावेज साझा करने से पहले जांच करें।",
    safeRecommendation: "कोई संदिग्ध खाता नहीं मिला। फिर भी केवल आधिकारिक सहायता पर भरोसा करें।",
    reviewRecommendation: "बड़े ट्रांसफर से बचें और आधिकारिक सहायता से सीधे सत्यापन करें।",
    urgentRecommendation: "पैसे ट्रांसफर न करें। अपने बैंक से संपर्क करें, cybercrime.gov.in पर रिपोर्ट करें या 1930 पर कॉल करें।",
    contactHeading: "कहां रिपोर्ट करें",
    cyberPortal: "राष्ट्रीय साइबर अपराध पोर्टल",
    cyberDetail: "cybercrime.gov.in पर रिपोर्ट करें या साइबर धोखाधड़ी सहायता के लिए 1930 पर कॉल करें।",
    bankContact: "अपना बैंक या वॉलेट प्रदाता",
    bankDetail: "KYC विवाद समीक्षा और अस्थायी रोक लगाने के लिए कहें।",
    clearSpeech: "इस पहचान से कोई म्यूल अकाउंट या संदिग्ध खाता वर्तमान रिकॉर्ड में नहीं मिला।",
    reviewSpeech: "संभावित संदिग्ध खाता मिला है। अपने बैंक या राष्ट्रीय साइबर अपराध पोर्टल से संपर्क करें।",
    urgentSpeech: "संभावित म्यूल अकाउंट मिला है। तुरंत बैंक से संपर्क करें, cybercrime.gov.in पर रिपोर्ट करें या 1930 पर कॉल करें।",
    invalidSpeech: "कृपया नंबर और सहमति बॉक्स जांचें, फिर प्रयास करें।",
    helpSpeech: "PAN या फोन चुनें। बोलें बटन दबाएं। नंबर धीरे बोलें। मैं परिणाम पढ़ दूंगा।",
    voiceUnsupported: "इस ब्राउज़र में आवाज़ इनपुट उपलब्ध नहीं है। आप नंबर टाइप कर सकते हैं।",
    listening: "सुन रहा हूं। कृपया बोलें।",
    heard: "मैंने सुना",
  },
  mr: {
    speech: "mr-IN",
    language: "भाषा",
    misuseVerification: "खाते गैरवापर तपासणी",
    heroTitle: "तुमच्या PAN किंवा फोन नंबरवर संशयास्पद खाते उघडले आहे का ते तपासा",
    heroBody: "Satark AI ओळख गैरवापर संकेत तपासते आणि सुरक्षित, मास्क केलेला निकाल दाखवते.",
    runSelfCheck: "सुरक्षित तपासणी करा",
    panLabel: "PAN नंबर",
    phoneLabel: "फोन नंबर",
    ready: "तयार",
    checking: "तपासणी सुरू",
    readyToCheck: "तपासणीस तयार",
    readyBody: "PAN किंवा फोन नंबर भरा, संमती द्या आणि Satark AI चालवा.",
    voiceTitle: "बोलून तपासायचे आहे?",
    voiceReady: "माइक दाबा आणि PAN किंवा फोन नंबर हळू बोला.",
    speakNow: "बोला",
    readHelp: "मदत ऐका",
    noMisuse: "गैरवापर आढळला नाही",
    review: "संभाव्य जुळणी",
    urgent: "गैरवापराची शक्यता",
  },
  ta: {
    speech: "ta-IN",
    language: "மொழி",
    misuseVerification: "கணக்கு தவறான பயன்பாடு சரிபார்ப்பு",
    heroTitle: "உங்கள் PAN அல்லது தொலைபேசி எண்ணால் சந்தேகமான கணக்கு திறக்கப்பட்டதா பார்க்கவும்",
    heroBody: "Satark AI அடையாள தவறான பயன்பாட்டு சிக்னல்களை சரிபார்த்து மறைக்கப்பட்ட முடிவை காட்டும்.",
    runSelfCheck: "பாதுகாப்பாக சரிபார்க்கவும்",
    panLabel: "PAN எண்",
    phoneLabel: "தொலைபேசி எண்",
    ready: "தயார்",
    checking: "சரிபார்க்கிறது",
    readyToCheck: "சரிபார்க்க தயார்",
    readyBody: "PAN அல்லது தொலைபேசி எண்ணை உள்ளிட்டு Satark AI இயக்கவும்.",
    voiceTitle: "பேசி சரிபார்க்க வேண்டுமா?",
    voiceReady: "மைக்ரோஃபோனை அழுத்தி PAN அல்லது தொலைபேசி எண்ணை மெதுவாக சொல்லுங்கள்.",
    speakNow: "பேசுங்கள்",
    readHelp: "உதவி கேளுங்கள்",
    noMisuse: "தவறான பயன்பாடு இல்லை",
    review: "சாத்தியமான பொருத்தம்",
    urgent: "தவறான பயன்பாடு இருக்கலாம்",
  },
  te: {
    speech: "te-IN",
    language: "భాష",
    misuseVerification: "ఖాతా దుర్వినియోగ తనిఖీ",
    heroTitle: "మీ PAN లేదా ఫోన్ నంబర్‌తో అనుమానాస్పద ఖాతా తెరవబడిందా చూడండి",
    heroBody: "Satark AI గుర్తింపు దుర్వినియోగ సంకేతాలను తనిఖీ చేసి మాస్క్ చేసిన ఫలితాన్ని చూపిస్తుంది.",
    runSelfCheck: "సురక్షితంగా తనిఖీ చేయండి",
    panLabel: "PAN నంబర్",
    phoneLabel: "ఫోన్ నంబర్",
    ready: "సిద్ధం",
    checking: "తనిఖీ జరుగుతోంది",
    readyToCheck: "తనిఖీకి సిద్ధం",
    readyBody: "PAN లేదా ఫోన్ నంబర్ నమోదు చేసి Satark AI నడపండి.",
    voiceTitle: "మాట్లాడి తనిఖీ చేయాలా?",
    voiceReady: "మైక్ నొక్కి PAN లేదా ఫోన్ నంబర్‌ను నెమ్మదిగా చెప్పండి.",
    speakNow: "మాట్లాడండి",
    readHelp: "సహాయం వినండి",
    noMisuse: "దుర్వినియోగం లేదు",
    review: "సంభావ్య మ్యాచ్",
    urgent: "దుర్వినియోగం ఉండవచ్చు",
  },
  pa: {
    speech: "pa-IN",
    language: "ਭਾਸ਼ਾ",
    misuseVerification: "ਖਾਤਾ ਦੁਰਵਰਤੋਂ ਜਾਂਚ",
    heroTitle: "ਚੈੱਕ ਕਰੋ ਕਿ ਤੁਹਾਡੇ PAN ਜਾਂ ਫੋਨ ਨੰਬਰ ਨਾਲ ਸ਼ੱਕੀ ਖਾਤਾ ਖੁੱਲਿਆ ਹੈ ਜਾਂ ਨਹੀਂ",
    heroBody: "Satark AI ਪਛਾਣ ਦੁਰਵਰਤੋਂ ਸੰਕੇਤਾਂ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ ਅਤੇ ਮਾਸਕ ਕੀਤਾ ਨਤੀਜਾ ਦਿਖਾਉਂਦਾ ਹੈ।",
    runSelfCheck: "ਸੁਰੱਖਿਅਤ ਜਾਂਚ ਕਰੋ",
    panLabel: "PAN ਨੰਬਰ",
    phoneLabel: "ਫੋਨ ਨੰਬਰ",
    ready: "ਤਿਆਰ",
    checking: "ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ",
    readyToCheck: "ਜਾਂਚ ਲਈ ਤਿਆਰ",
    readyBody: "PAN ਜਾਂ ਫੋਨ ਨੰਬਰ ਭਰੋ ਅਤੇ Satark AI ਚਲਾਓ।",
    voiceTitle: "ਬੋਲ ਕੇ ਜਾਂਚ ਕਰਨੀ ਹੈ?",
    voiceReady: "ਮਾਈਕ ਦਬਾਓ ਅਤੇ PAN ਜਾਂ ਫੋਨ ਨੰਬਰ ਹੌਲੀ ਬੋਲੋ।",
    speakNow: "ਬੋਲੋ",
    readHelp: "ਮਦਦ ਸੁਣੋ",
    noMisuse: "ਦੁਰਵਰਤੋਂ ਨਹੀਂ ਮਿਲੀ",
    review: "ਸੰਭਾਵੀ ਮਿਲਾਣ",
    urgent: "ਦੁਰਵਰਤੋਂ ਦੀ ਸੰਭਾਵਨਾ",
  },
  kn: {
    speech: "kn-IN",
    language: "ಭಾಷೆ",
    misuseVerification: "ಖಾತೆ ದುರುಪಯೋಗ ಪರಿಶೀಲನೆ",
    heroTitle: "ನಿಮ್ಮ PAN ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆಯಿಂದ ಅನುಮಾನಾಸ್ಪದ ಖಾತೆ ತೆರೆಯಲಾಗಿದೆಯೇ ಪರಿಶೀಲಿಸಿ",
    heroBody: "Satark AI ಗುರುತು ದುರುಪಯೋಗ ಸೂಚನೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮಾಸ್ಕ್ ಮಾಡಿದ ಫಲಿತಾಂಶ ತೋರಿಸುತ್ತದೆ.",
    runSelfCheck: "ಸುರಕ್ಷಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ",
    panLabel: "PAN ಸಂಖ್ಯೆ",
    phoneLabel: "ಫೋನ್ ಸಂಖ್ಯೆ",
    ready: "ಸಿದ್ಧ",
    checking: "ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ",
    readyToCheck: "ಪರಿಶೀಲನೆಗೆ ಸಿದ್ಧ",
    readyBody: "PAN ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ Satark AI ನಡೆಸಿ.",
    voiceTitle: "ಮಾತನಾಡಿ ಪರಿಶೀಲಿಸಬೇಕೆ?",
    voiceReady: "ಮೈಕ್ ಒತ್ತಿ PAN ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಿಧಾನವಾಗಿ ಹೇಳಿ.",
    speakNow: "ಮಾತನಾಡಿ",
    readHelp: "ಸಹಾಯ ಕೇಳಿ",
    noMisuse: "ದುರುಪಯೋಗ ಕಂಡುಬಂದಿಲ್ಲ",
    review: "ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆ",
    urgent: "ದುರುಪಯೋಗ ಸಾಧ್ಯತೆ",
  },
  bn: {
    speech: "bn-IN",
    language: "ভাষা",
    misuseVerification: "অ্যাকাউন্ট অপব্যবহার পরীক্ষা",
    heroTitle: "আপনার PAN বা ফোন নম্বর দিয়ে সন্দেহজনক অ্যাকাউন্ট খোলা হয়েছে কি না দেখুন",
    heroBody: "Satark AI পরিচয় অপব্যবহারের সংকেত পরীক্ষা করে মাস্ক করা ফলাফল দেখায়।",
    runSelfCheck: "নিরাপদে পরীক্ষা করুন",
    panLabel: "PAN নম্বর",
    phoneLabel: "ফোন নম্বর",
    ready: "প্রস্তুত",
    checking: "পরীক্ষা হচ্ছে",
    readyToCheck: "পরীক্ষার জন্য প্রস্তুত",
    readyBody: "PAN বা ফোন নম্বর দিন এবং Satark AI চালান।",
    voiceTitle: "বলে পরীক্ষা করবেন?",
    voiceReady: "মাইক চাপুন এবং PAN বা ফোন নম্বর ধীরে বলুন।",
    speakNow: "বলুন",
    readHelp: "সাহায্য শুনুন",
    noMisuse: "অপব্যবহার পাওয়া যায়নি",
    review: "সম্ভাব্য মিল",
    urgent: "অপব্যবহারের সম্ভাবনা",
  },
};

Object.assign(LANG, {
  or: {
    ...LANG.en,
    speech: "or-IN",
    language: "Language",
    misuseVerification: "Account misuse verification",
    heroTitle: "ଆପଣଙ୍କ PAN କିମ୍ବା ଫୋନ୍ ନମ୍ବରରେ ସନ୍ଦେହଜନକ ଖାତା ଖୋଲାଯାଇଛି କି ଯାଞ୍ଚ କରନ୍ତୁ",
    heroBody: "Satark AI ପରିଚୟ ଦୁରୁପଯୋଗ ସଙ୍କେତ ଯାଞ୍ଚ କରି ସୁରକ୍ଷିତ, ମାସ୍କ୍ କରାଯାଇଥିବା ଫଳାଫଳ ଦେଖାଏ।",
    consentText: "ମୁଁ ଏହି ପରିଚୟ ସଂଖ୍ୟାକୁ ଖାତା ଦୁରୁପଯୋଗ ସଙ୍କେତ ପାଇଁ ଯାଞ୍ଚ କରିବାକୁ ସମ୍ମତି ଦେଉଛି",
    runSelfCheck: "ସୁରକ୍ଷିତ ଯାଞ୍ଚ କରନ୍ତୁ",
    panLabel: "PAN number",
    phoneLabel: "Phone number",
    ready: "Ready",
    checking: "Checking",
    readyToCheck: "Ready to check",
    readyBody: "PAN କିମ୍ବା ଫୋନ୍ ନମ୍ବର ଦିଅନ୍ତୁ, ସମ୍ମତି ଦିଅନ୍ତୁ ଏବଂ Satark AI ଚଲାନ୍ତୁ।",
    noMisuse: "ଦୁରୁପଯୋଗ ମିଳିଲା ନାହିଁ",
    review: "ସମ୍ଭାବ୍ୟ ମେଳ",
    urgent: "ଦୁରୁପଯୋଗ ସମ୍ଭାବନା",
    safeRecommendation: "କୌଣସି ସନ୍ଦେହଜନକ ଖାତା ମିଳିଲା ନାହିଁ। ତଥାପି କେବଳ ଅଧିକୃତ ସହାୟତାକୁ ଭରସା କରନ୍ତୁ।",
    reviewRecommendation: "ବଡ଼ ଟ୍ରାନ୍ସଫର୍ ଏଡ଼ାନ୍ତୁ ଏବଂ ବ୍ୟାଙ୍କ କିମ୍ବା ଅଧିକୃତ ସହାୟତା ସହିତ ସତ୍ୟାପନ କରନ୍ତୁ।",
    urgentRecommendation: "ଟଙ୍କା ପଠାନ୍ତୁ ନାହିଁ। ବ୍ୟାଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ, cybercrime.gov.in ରେ ରିପୋର୍ଟ କରନ୍ତୁ କିମ୍ବା 1930 କୁ କଲ୍ କରନ୍ତୁ।",
  },
  as: {
    ...LANG.en,
    speech: "as-IN",
    language: "Language",
    heroTitle: "আপোনাৰ PAN বা ফোন নম্বৰৰে সন্দেহজনক একাউন্ট খোলা হৈছে নেকি পৰীক্ষা কৰক",
    heroBody: "Satark AI-এ পৰিচয় অপব্যৱহাৰৰ সংকেত পৰীক্ষা কৰি সুৰক্ষিত, মাস্ক কৰা ফলাফল দেখুৱায়।",
    consentText: "মই এই পৰিচয় নম্বৰটো একাউন্ট অপব্যৱহাৰৰ সংকেতৰ বাবে পৰীক্ষা কৰিবলৈ সন্মতি দিছোঁ",
    runSelfCheck: "সুৰক্ষিতভাৱে পৰীক্ষা কৰক",
    readyBody: "PAN বা ফোন নম্বৰ দিয়ক, সন্মতি দিয়ক আৰু Satark AI চলাওক।",
    noMisuse: "অপব্যৱহাৰ পোৱা নগ'ল",
    review: "সম্ভাব্য মিল",
    urgent: "অপব্যৱহাৰৰ সম্ভাৱনা",
    reviewRecommendation: "ডাঙৰ ট্ৰান্সফাৰ এৰাই চলক আৰু বেংক বা চৰকাৰী সহায়ৰ সৈতে সত্যাপন কৰক।",
    urgentRecommendation: "টকা প্ৰেৰণ নকৰিব। বেংকৰ সৈতে যোগাযোগ কৰক, cybercrime.gov.in-ত ৰিপ'ৰ্ট কৰক বা 1930-ত ফোন কৰক।",
  },
  bho: {
    ...LANG.en,
    speech: "hi-IN",
    language: "भाषा",
    heroTitle: "देखीं कि रउआ PAN या फोन नंबर से संदिग्ध खाता खुलल बा कि ना",
    heroBody: "Satark AI पहचान के गलत इस्तेमाल के संकेत जांचेला आ सुरक्षित, छुपावल नतीजा देखावेला।",
    consentText: "हम एह पहचान नंबर के खाता दुरुपयोग संकेत खातिर जांचे के सहमति देत बानी",
    runSelfCheck: "सुरक्षित जांच करीं",
    readyBody: "PAN या फोन नंबर डालीं, सहमति दीं आ Satark AI चलाईं।",
    noMisuse: "दुरुपयोग ना मिलल",
    review: "संभावित मेल",
    urgent: "दुरुपयोग के संभावना",
    reviewRecommendation: "बड़का ट्रांसफर से बचीं आ बैंक भा आधिकारिक सहायता से सत्यापन करीं।",
    urgentRecommendation: "पइसा मत भेजीं। बैंक से संपर्क करीं, cybercrime.gov.in पर रिपोर्ट करीं या 1930 पर कॉल करीं।",
  },
  mai: {
    ...LANG.en,
    speech: "hi-IN",
    language: "भाषा",
    heroTitle: "देखू जे अहां के PAN वा फोन नंबर सँ संदिग्ध खाता खुलल अछि कि नहि",
    heroBody: "Satark AI पहचान दुरुपयोग संकेत जाँचैत अछि आ सुरक्षित, मास्क कएल परिणाम देखबैत अछि।",
    consentText: "हम एहि पहचान नंबर केँ खाता दुरुपयोग संकेत लेल जाँच करबाक सहमति दैत छी",
    runSelfCheck: "सुरक्षित जाँच करू",
    readyBody: "PAN वा फोन नंबर भरू, सहमति दिअ आ Satark AI चलाउ।",
    noMisuse: "दुरुपयोग नहि भेटल",
    review: "संभावित मिलान",
    urgent: "दुरुपयोगक संभावना",
    reviewRecommendation: "पैघ ट्रांसफर सँ बचू आ बैंक वा आधिकारिक सहायता सँ सत्यापन करू।",
    urgentRecommendation: "धन नहि पठाउ। बैंक सँ संपर्क करू, cybercrime.gov.in पर रिपोर्ट करू वा 1930 पर कॉल करू।",
  },
});

const state = {
  identityType: "pan",
  checks: [],
  language: "en",
  recognition: null,
};

const el = {
  languageSelect: document.querySelector("#languageSelect"),
  form: document.querySelector("#identityCheckForm"),
  identityInputLabel: document.querySelector("#identityInputLabel"),
  result: document.querySelector("#identityCheckResult"),
  statusBadge: document.querySelector("#consumerStatusBadge"),
  nextSteps: document.querySelector("#nextSteps"),
  flagReasons: document.querySelector("#flagReasons"),
  resultSection: document.querySelector("#resultSection"),
  voiceStatus: document.querySelector("#voiceStatus"),
  startVoice: document.querySelector("#startVoice"),
  readHelp: document.querySelector("#readHelp"),
};

async function api(path, options = {}) {
  const response = await fetch(`${API}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

function t(key) {
  return LANG[state.language]?.[key] || LANG.en[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  el.identityInputLabel.textContent = state.identityType === "phone" ? t("phoneLabel") : t("panLabel");
  setStatus(el.statusBadge.dataset.status || "ready");
}

function statusLabel(status) {
  if (status === "urgent") return t("urgent");
  if (status === "review") return t("review");
  if (status === "invalid") return t("invalid");
  if (status === "checking") return t("checking");
  if (status === "ready") return t("ready");
  return t("noMisuse");
}

function setStatus(status) {
  el.statusBadge.dataset.status = status;
  el.statusBadge.textContent = statusLabel(status);
  el.statusBadge.className = `satark-inline-status ${status === "urgent" ? "danger" : status === "review" ? "watch" : ""}`;
}

function translatedRecommendation(status) {
  if (status === "urgent") return t("urgentSpeech");
  if (status === "review") return t("reviewSpeech");
  if (status === "invalid") return t("invalidSpeech");
  return t("clearSpeech");
}

function renderResult(result) {
  const status = result.status || "clear";
  setStatus(status);
  const riskScore = Number(result.riskScore || 0);
  const trustScore = Math.max(0, Math.min(100, 100 - riskScore));
  const badgeClass = status === "urgent" ? "danger" : status === "review" ? "watch" : "safe";
  const matches = (result.matches || []).map((match) => `
    <li>
      <strong>${match.institution}</strong>
      <span>${match.account} | ${match.opened} | ${match.city} | risk ${match.risk}</span>
    </li>
  `).join("");
  el.result.className = `satark-result-card ${badgeClass}`;
  el.result.innerHTML = `
    <div class="satark-score-ring ${badgeClass}" style="--score:${trustScore}">
      <strong>${trustScore}<small>/100</small></strong>
      <span>${t("trustScore")}</span>
    </div>
    <div class="satark-result-copy">
      <span class="satark-risk-badge ${badgeClass}">${riskBadgeText(status)}</span>
      <h2>${result.identifierMask || "Satark AI"}: ${statusLabel(status)}</h2>
      <p>${result.error || translatedRecommendation(status)}</p>
      ${matches ? `<ul class="satark-match-list">${matches}</ul>` : ""}
    </div>
  `;
  renderFlagReasons(status, result);
  el.nextSteps.className = `satark-recommendation ${status}`;
  el.nextSteps.innerHTML = nextStepContent(status);
  el.resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  speak(resultSpeech(result));
}

function riskBadgeText(status) {
  if (status === "urgent") return "HIGH RISK";
  if (status === "review") return "REVIEW";
  if (status === "invalid") return "CHECK INPUT";
  return "LOW RISK";
}

function renderFlagReasons(status, result) {
  const hasMatch = (result.matches || []).length > 0;
  const reasons = status === "clear"
    ? [t("reasonClean")]
    : [t("reasonSuspicious"), hasMatch ? t("reasonReported") : t("reasonUnusual"), t("reasonUnusual")];
  el.flagReasons.innerHTML = reasons.map((reason) => `<li>${reason}</li>`).join("");
}

function contactList(status) {
  if (status === "clear") {
    return `<ul class="report-contacts"><li><strong>${t("cyberPortal")}</strong><br>${t("cyberDetail")}</li></ul>`;
  }
  return `
    <ul class="report-contacts">
      <li><strong>${t("cyberPortal")}</strong><br>${t("cyberDetail")}</li>
      <li><strong>${t("bankContact")}</strong><br>${t("bankDetail")}</li>
    </ul>
  `;
}

function nextStepContent(status) {
  const recommendation = status === "urgent"
    ? t("urgentRecommendation")
    : status === "review"
      ? t("reviewRecommendation")
      : status === "invalid"
        ? t("invalidSpeech")
        : t("safeRecommendation");
  return `<strong>${t("recommendedAction")}</strong><span>${recommendation}</span>${contactList(status)}`;
}

function resultSpeech(result) {
  const status = result.status || "clear";
  return `${statusLabel(status)}. ${translatedRecommendation(status)}`;
}

async function loadState() {
  try {
    await api("/api/state");
  } catch (error) {
    return;
  }
}

async function runSelfCheck(identifier) {
  const payload = {
    identifierType: state.identityType,
    identifier,
    consent: el.form.elements.consent.checked,
  };
  setStatus("checking");
  try {
    const result = await api("/api/identity-checks", { method: "POST", body: JSON.stringify(payload) });
    renderResult(result);
  } catch (error) {
    renderResult({ status: "invalid", error: error.error || t("invalidSpeech") });
  }
}

function submitSelfCheck(event) {
  event.preventDefault();
  runSelfCheck(new FormData(event.currentTarget).get("identifier"));
}

function normalizeSpeech(text) {
  const digitWords = {
    zero: "0", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9",
    oh: "0", o: "0",
  };
  return text
    .toLowerCase()
    .split(/\s+/)
    .map((part) => digitWords[part] || part)
    .join("")
    .replace(/[^a-z0-9]/gi, "")
    .toUpperCase();
}

function recognitionSupported() {
  return window.SpeechRecognition || window.webkitSpeechRecognition;
}

function startVoiceInput() {
  const SpeechRecognition = recognitionSupported();
  if (!SpeechRecognition) {
    el.voiceStatus.textContent = t("voiceUnsupported");
    speak(t("voiceUnsupported"));
    return;
  }
  const recognition = new SpeechRecognition();
  state.recognition = recognition;
  recognition.lang = LANG[state.language].speech;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  el.startVoice.classList.add("listening");
  el.voiceStatus.textContent = t("listening");
  speak(t("listening"));
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const identifier = normalizeSpeech(transcript);
    el.form.elements.identifier.value = identifier;
    el.voiceStatus.textContent = `${t("heard")}: ${identifier}`;
    runSelfCheck(identifier);
  };
  recognition.onerror = () => {
    el.voiceStatus.textContent = t("voiceUnsupported");
  };
  recognition.onend = () => {
    el.startVoice.classList.remove("listening");
  };
  recognition.start();
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = LANG[state.language].speech;
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

document.querySelectorAll("[data-identity-type]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-identity-type]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.identityType = button.dataset.identityType;
    const input = el.form.elements.identifier;
    input.value = state.identityType === "phone" ? "9876543210" : "ABCDE1234F";
    input.inputMode = state.identityType === "phone" ? "tel" : "text";
    el.identityInputLabel.textContent = state.identityType === "phone" ? t("phoneLabel") : t("panLabel");
  });
});

el.languageSelect.addEventListener("change", () => {
  state.language = el.languageSelect.value;
  applyLanguage();
});

el.form.addEventListener("submit", submitSelfCheck);
el.startVoice.addEventListener("click", startVoiceInput);
el.readHelp.addEventListener("click", () => speak(t("helpSpeech")));

applyLanguage();
loadState();
