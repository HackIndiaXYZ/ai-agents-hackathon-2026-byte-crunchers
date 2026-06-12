const API = window.API_BASE_URL || "";

const LANGUAGE_LABELS = {
  en: "English",
  hi: "हिन्दी",
  mr: "मराठी",
  te: "తెలుగు",
  ta: "தமிழ்",
  bn: "বাংলা",
  or: "ଓଡ଼ିଆ",
  as: "অসমীয়া",
  bho: "भोजपुरी",
  mai: "मैथिली",
};

const LANG = {
  en: {
    speech: "en-IN",
    recognitionSpeech: "en-IN",
    brandName: "Satark AI",
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
    review: "Review needed",
    urgent: "Misuse likely",
    invalid: "Invalid",
    whyFlagged: "Why flagged?",
    noFlagYet: "No check has been run yet.",
    reasonClean: "No suspicious mule-account signal found",
    reasonSuspicious: "Linked to suspicious activity",
    reasonReported: "Reported in partner records",
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
    processingSpeech: "Processing regional dialect transcription...",
    voiceNoInput: "I could not hear enough audio. Please try again and speak slowly.",
    highRiskBadge: "HIGH RISK",
    reviewBadge: "REVIEW",
    inputBadge: "CHECK INPUT",
    lowRiskBadge: "LOW RISK",
    speechFallbackNotice: "This browser may use a fallback voice for this language.",
  },
  hi: {
    speech: "hi-IN",
    recognitionSpeech: "hi-IN",
    brandName: "सतर्क AI",
    language: "भाषा",
    misuseVerification: "खाता दुरुपयोग सत्यापन",
    heroTitle: "जांचें कि आपके PAN या फोन नंबर से कोई संदिग्ध खाता खुला है या नहीं",
    heroBody: "सतर्क AI पहचान दुरुपयोग संकेतों की जांच करता है और सुरक्षित, मास्क किया हुआ परिणाम दिखाता है।",
    consentText: "मैं इस पहचान संख्या को खाता दुरुपयोग संकेतों के लिए जांचने की सहमति देता/देती हूं",
    runSelfCheck: "सुरक्षित जांच करें",
    panLabel: "PAN नंबर",
    phoneLabel: "फोन नंबर",
    ready: "तैयार",
    checking: "जांच हो रही है",
    readyToCheck: "जांच के लिए तैयार",
    readyBody: "PAN या फोन नंबर डालें, सहमति दें और सतर्क AI चलाएं।",
    privacyCopy: "आपका डेटा सुरक्षित रूप से विश्लेषित होता है और स्थायी रूप से संग्रहीत नहीं किया जाता।",
    voiceTitle: "बोलकर सहायता चाहिए?",
    voiceReady: "माइक्रोफोन दबाएं और अपना PAN या फोन नंबर धीरे बोलें।",
    speakNow: "बोलें",
    readHelp: "मदद सुनें",
    trustScore: "विश्वास स्कोर",
    noMisuse: "दुरुपयोग नहीं मिला",
    review: "समीक्षा जरूरी",
    urgent: "दुरुपयोग संभावित",
    invalid: "अमान्य",
    whyFlagged: "क्यों चिन्हित हुआ?",
    noFlagYet: "अभी कोई जांच नहीं हुई है।",
    reasonClean: "कोई संदिग्ध म्यूल-खाता संकेत नहीं मिला",
    reasonSuspicious: "संदिग्ध गतिविधि से जुड़ा संकेत मिला",
    reasonReported: "उपयोगकर्ता या साझेदार रिकॉर्ड से रिपोर्ट मिली",
    reasonUnusual: "असामान्य लेन-देन व्यवहार",
    recommendedAction: "अनुशंसित कार्रवाई",
    readyRecommendation: "संवेदनशील दस्तावेज साझा करने या बड़े ट्रांसफर से पहले जांच चलाएं।",
    safeRecommendation: "कोई संदिग्ध खाता नहीं मिला। फिर भी केवल आधिकारिक सहायता पर भरोसा करें।",
    reviewRecommendation: "बड़े ट्रांसफर से बचें और दस्तावेज या पैसा देने से पहले आधिकारिक सहायता से सत्यापन करें।",
    urgentRecommendation: "पैसा ट्रांसफर न करें। अपने बैंक से संपर्क करें, cybercrime.gov.in पर रिपोर्ट करें या 1930 पर कॉल करें।",
    contactHeading: "कहां रिपोर्ट करें",
    cyberPortal: "राष्ट्रीय साइबर अपराध पोर्टल",
    cyberDetail: "cybercrime.gov.in पर रिपोर्ट करें या साइबर धोखाधड़ी सहायता के लिए 1930 पर कॉल करें।",
    bankContact: "आपका बैंक या वॉलेट प्रदाता",
    bankDetail: "KYC विवाद समीक्षा और अनधिकृत खातों पर अस्थायी रोक लगाने के लिए कहें।",
    clearSpeech: "इस पहचान से वर्तमान रिकॉर्ड में कोई म्यूल खाता या संदिग्ध खाता नहीं मिला।",
    reviewSpeech: "एक संभावित संदिग्ध खाता मिला है। कृपया स्वामित्व सत्यापित करें और अपने बैंक या राष्ट्रीय साइबर अपराध पोर्टल से संपर्क करें।",
    urgentSpeech: "संभावित म्यूल या संदिग्ध खाता मिला है। तुरंत बैंक से संपर्क करें, cybercrime.gov.in पर रिपोर्ट करें या 1930 पर कॉल करें।",
    invalidSpeech: "कृपया नंबर का प्रारूप और सहमति बॉक्स जांचें, फिर कोशिश करें।",
    helpSpeech: "PAN या फोन चुनें। बोलें बटन दबाएं। नंबर धीरे बोलें। मैं परिणाम पढ़ दूंगा।",
    voiceUnsupported: "इस ब्राउजर में आवाज इनपुट समर्थित नहीं है। आप नंबर टाइप कर सकते हैं।",
    listening: "सुन रहा हूं। कृपया अब बोलें।",
    heard: "मैंने सुना",
    processingSpeech: "क्षेत्रीय भाषा का ट्रांसक्रिप्शन प्रोसेस हो रहा है...",
    voiceNoInput: "पर्याप्त आवाज सुनाई नहीं दी। कृपया धीरे बोलकर फिर कोशिश करें।",
    highRiskBadge: "उच्च जोखिम",
    reviewBadge: "समीक्षा",
    inputBadge: "इनपुट जांचें",
    lowRiskBadge: "कम जोखिम",
    speechFallbackNotice: "इस ब्राउजर में इस भाषा के लिए वैकल्पिक आवाज का उपयोग हो सकता है।",
  },
  mr: {
    speech: "mr-IN",
    recognitionSpeech: "mr-IN",
    brandName: "सतर्क AI",
    language: "भाषा",
    misuseVerification: "खाते गैरवापर पडताळणी",
    heroTitle: "तुमच्या PAN किंवा फोन नंबरवर संशयास्पद खाते उघडले आहे का ते तपासा",
    heroBody: "सतर्क AI ओळख गैरवापर संकेत तपासते आणि सुरक्षित, मास्क केलेला निकाल दाखवते.",
    consentText: "या ओळख क्रमांकाची खाते गैरवापर संकेतांसाठी तपासणी करण्यास मी संमती देतो/देते",
    runSelfCheck: "सुरक्षित तपासणी करा",
    panLabel: "PAN नंबर",
    phoneLabel: "फोन नंबर",
    ready: "तयार",
    checking: "तपासणी सुरू",
    readyToCheck: "तपासणीस तयार",
    readyBody: "PAN किंवा फोन नंबर भरा, संमती द्या आणि सतर्क AI चालवा.",
    privacyCopy: "तुमचा डेटा सुरक्षितपणे विश्लेषित केला जातो आणि कायमचा साठवला जात नाही.",
    voiceTitle: "बोलून मदत हवी आहे?",
    voiceReady: "माइक्रोफोन दाबा आणि PAN किंवा फोन नंबर हळू बोला.",
    speakNow: "बोला",
    readHelp: "मदत ऐका",
    trustScore: "विश्वास स्कोर",
    noMisuse: "गैरवापर आढळला नाही",
    review: "समीक्षा जरूरी",
    urgent: "गैरवापर संभव",
    invalid: "अवैध",
    whyFlagged: "का चिन्हांकित झाले?",
    noFlagYet: "अजून तपासणी झालेली नाही.",
    reasonClean: "संशयास्पद म्यूल-खाते संकेत आढळला नाही",
    reasonSuspicious: "संशयास्पद हालचालीशी जोडलेला संकेत आढळला",
    reasonReported: "वापरकर्ता किंवा भागीदार नोंदीतून रिपोर्ट मिळाला",
    reasonUnusual: "असामान्य व्यवहार पॅटर्न",
    recommendedAction: "शिफारस केलेली कृती",
    readyRecommendation: "संवेदनशील कागदपत्रे शेअर करण्यापूर्वी किंवा मोठ्या ट्रान्सफरपूर्वी तपासणी करा.",
    safeRecommendation: "संशयास्पद खाते आढळले नाही. तरीही अधिकृत मदतीवरच भरोसा ठेवा.",
    reviewRecommendation: "मोठे ट्रान्सफर टाळा आणि दस्तावेज किंवा पैसे देण्यापूर्वी अधिकृत मदतीने पडताळणी करा.",
    urgentRecommendation: "पैसे ट्रान्सफर करू नका. बँकेशी संपर्क करा, cybercrime.gov.in वर रिपोर्ट करा किंवा 1930 वर कॉल करा.",
    contactHeading: "कुठे रिपोर्ट कराल",
    cyberPortal: "राष्ट्रीय सायबर गुन्हे पोर्टल",
    cyberDetail: "cybercrime.gov.in वर रिपोर्ट करा किंवा सायबर फसवणूक मदतीसाठी 1930 वर कॉल करा.",
    bankContact: "तुमची बँक किंवा वॉलेट प्रदाता",
    bankDetail: "KYC विवाद पुनरावलोकन आणि अनधिकृत खात्यांवर तात्पुरती मर्यादा मागा.",
    clearSpeech: "या ओळखीशी संबंधित वर्तमान नोंदींमध्ये कोणतेही म्यूल खाते किंवा संशयास्पद खाते आढळले नाही.",
    reviewSpeech: "एक संभाव्य संशयास्पद खाते आढळले आहे. कृपया मालकी पडताळा आणि आपल्या बँक किंवा सायबर अपराध पोर्टलशी संपर्क साधा.",
    urgentSpeech: "संभाव्य म्यूल किंवा संशयास्पद खाते आढळले आहे. त्वरित बँकेशी संपर्क साधा, cybercrime.gov.in वर रिपोर्ट करा किंवा 1930 वर कॉल करा.",
    invalidSpeech: "कृपया नंबरचे स्वरूप आणि संमती बॉक्स तपासा, मग पुन्हा प्रयत्न करा.",
    helpSpeech: "PAN किंवा फोन निवडा. बोला बटन दाबा. नंबर हळू बोला. मी निकाल वाचून दाखवेन.",
    voiceUnsupported: "या ब्राउजरमध्ये आवाज इनपुट समर्थित नाही. तुम्ही नंबर टाइप करू शकता.",
    listening: "ऐकत आहे. कृपया बोला.",
    heard: "मी ऐकले",
    processingSpeech: "प्रादेशिक भाषेचे ट्रान्सक्रिप्शन प्रोसेस होत आहे...",
    voiceNoInput: "पुरेसा आवाज ऐकू आला नाही. कृपया पुन्हा हळू बोलून प्रयत्न करा.",
    highRiskBadge: "उच्च धोका",
    reviewBadge: "समीक्षा",
    inputBadge: "इनपुट तपासा",
    lowRiskBadge: "कमी धोका",
    speechFallbackNotice: "हा ब्राउजर या भाषेसाठी पर्यायी आवाज वापरू शकतो.",
  },
  te: {
    speech: "te-IN",
    recognitionSpeech: "te-IN",
    brandName: "సతర్క్ AI",
    language: "భాష",
    misuseVerification: "ఖాతా దుర్వినియోగ ధృవీకరణ",
    heroTitle: "మీ PAN లేదా ఫోన్ నంబర్‌తో అనుమానాస్పద ఖాతా తెరవబడిందో లేదో తనిఖీ చేయండి",
    heroBody: "సతర్క్ AI గుర్తింపు దుర్వినియోగ సంకేతాలను తనిఖీ చేసి సురక్షితమైన, మాస్క్ చేసిన ఫలితాన్ని చూపిస్తుంది.",
    consentText: "ఈ గుర్తింపు సంఖ్యను ఖాతా దుర్వినియోగ సంకేతాల కోసం తనిఖీ చేయడానికి నేను సమ్మతిస్తున్నాను",
    runSelfCheck: "సురక్షితంగా తనిఖీ చేయండి",
    panLabel: "PAN నంబర్",
    phoneLabel: "ఫోన్ నంబర్",
    ready: "సిద్ధం",
    checking: "తనిఖీ జరుగుతోంది",
    readyToCheck: "తనిఖీకి సిద్ధం",
    readyBody: "PAN లేదా ఫోన్ నంబర్ నమోదు చేసి, సమ్మతి ఇచ్చి సతర్క్ AI నడపండి.",
    privacyCopy: "మీ డేటా సురక్షితంగా విశ్లేషించబడుతుంది మరియు శాశ్వతంగా నిల్వ చేయబడదు.",
    voiceTitle: "మాట్లాడి సహాయం కావాలా?",
    voiceReady: "మైక్రోఫోన్ నొక్కి మీ PAN లేదా ఫోన్ నంబర్‌ను నెమ్మదిగా చెప్పండి.",
    speakNow: "మాట్లాడండి",
    readHelp: "సహాయం వినండి",
    trustScore: "నమ్మక స్కోర్",
    noMisuse: "దుర్వినియోగం కనబడలేదు",
    review: "సమీక్ష అవసరం",
    urgent: "దుర్వినియోగం సంభవం",
    invalid: "చెల్లదు",
    whyFlagged: "ఎందుకు గుర్తించబడింది?",
    noFlagYet: "ఇంకా తనిఖీ జరగలేదు.",
    reasonClean: "అనుమానాస్పద మ్యూల్-ఖాతా సంకేతం లేదు",
    reasonSuspicious: "అనుమానాస్పద కార్యకలాపాలకు సంబంధించిన సంకేతం లభించింది",
    reasonReported: "వినియోగదారు లేదా భాగస్వామి రికార్డుల నుంచి రిపోర్ట్ వచ్చింది",
    reasonUnusual: "అసాధారణ లావాదేవీ ప్రవర్తన",
    recommendedAction: "సిఫార్సు చేసిన చర్య",
    readyRecommendation: "సున్నితమైన పత్రాలు లేదా పెద్ద ట్రాన్స్ఫర్ ముందు తనిఖీ చేయండి.",
    safeRecommendation: "అనుమానాస్పద ఖాతా కనబడలేదు. అయినా అధికారిక సహాయాన్నే నమ్మండి.",
    reviewRecommendation: "పెద్ద ట్రాన్స్ఫర్‌లను నివారించండి మరియు పత్రాలు లేదా డబ్బు ఇచ్చే ముందు అధికారికంగా ధృవీకరించండి.",
    urgentRecommendation: "డబ్బు పంపవద్దు. మీ బ్యాంకును సంప్రదించండి, cybercrime.gov.in లో రిపోర్ట్ చేయండి లేదా 1930కి కాల్ చేయండి.",
    contactHeading: "ఎక్కడ రిపోర్ట్ చేయాలి",
    cyberPortal: "జాతీయ సైబర్ క్రైమ్ పోర్టల్",
    cyberDetail: "cybercrime.gov.in లో రిపోర్ట్ చేయండి లేదా సైబర్ మోసం సహాయానికి 1930కి కాల్ చేయండి.",
    bankContact: "మీ బ్యాంక్ లేదా వాలెట్ ప్రొవైడర్",
    bankDetail: "KYC వివాద సమీక్ష మరియు అనధికార ఖాతాలపై తాత్కాలిక పరిమితులను అడగండి.",
    clearSpeech: "ఈ గుర్తింపుకు ప్రస్తుత రికార్డుల్లో మ్యూల్ ఖాతా లేదా అనుమానాస్పద ఖాతా కనబడలేదు.",
    reviewSpeech: "ఒక అనుమానాస్పద ఖాతా మ్యాచ్ కనబడింది. దయచేసి యాజమాన్యాన్ని ధృవీకరించి మీ బ్యాంక్ లేదా జాతీయ సైబర్ క్రైమ్ పోర్టల్‌ను సంప్రదించండి.",
    urgentSpeech: "సంభావ్య మ్యూల్ లేదా అనుమానాస్పద ఖాతా కనబడింది. వెంటనే బ్యాంకును సంప్రదించండి, cybercrime.gov.in లో రిపోర్ట్ చేయండి లేదా 1930కి కాల్ చేయండి.",
    invalidSpeech: "దయచేసి నంబర్ ఫార్మాట్ మరియు సమ్మతి బాక్స్ తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.",
    helpSpeech: "PAN లేదా ఫోన్ ఎంచుకోండి. మాట్లాడండి బటన్ నొక్కండి. నంబర్‌ను నెమ్మదిగా చెప్పండి. నేను ఫలితాన్ని చదువుతాను.",
    voiceUnsupported: "ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్‌కు మద్దతు లేదు. మీరు నంబర్ టైప్ చేయవచ్చు.",
    listening: "వింటోంది. దయచేసి మాట్లాడండి.",
    heard: "నేను విన్నది",
    processingSpeech: "ప్రాంతీయ భాష ట్రాన్స్క్రిప్షన్ ప్రాసెస్ అవుతోంది...",
    voiceNoInput: "సరిపడా ఆడియో వినబడలేదు. దయచేసి మళ్లీ నెమ్మదిగా మాట్లాడండి.",
    highRiskBadge: "అధిక ప్రమాదం",
    reviewBadge: "సమీక్ష",
    inputBadge: "ఇన్‌పుట్ తనిఖీ",
    lowRiskBadge: "తక్కువ ప్రమాదం",
    speechFallbackNotice: "ఈ బ్రౌజర్ ఈ భాషకు ప్రత్యామ్నాయ స్వరాన్ని ఉపయోగించవచ్చు.",
  },
  ta: {
    speech: "ta-IN",
    recognitionSpeech: "ta-IN",
    brandName: "சதர்க் AI",
    language: "மொழி",
    misuseVerification: "கணக்கு தவறான பயன்பாட்டு சரிபார்ப்பு",
    heroTitle: "உங்கள் PAN அல்லது தொலைபேசி எண்ணால் சந்தேகமான கணக்கு திறக்கப்பட்டதா என சரிபார்க்கவும்",
    heroBody: "சதர்க் AI அடையாள தவறான பயன்பாட்டு சிக்னல்களை சரிபார்த்து பாதுகாப்பான, மறைக்கப்பட்ட முடிவைக் காட்டும்.",
    consentText: "இந்த அடையாள எண்ணை கணக்கு தவறான பயன்பாட்டு சிக்னல்களுக்காக சரிபார்க்க நான் சம்மதிக்கிறேன்",
    runSelfCheck: "பாதுகாப்பாக சரிபார்க்கவும்",
    panLabel: "PAN எண்",
    phoneLabel: "தொலைபேசி எண்",
    ready: "தயார்",
    checking: "சரிபார்க்கிறது",
    readyToCheck: "சரிபார்க்க தயார்",
    readyBody: "PAN அல்லது தொலைபேசி எண்ணை உள்ளிட்டு, சம்மதித்து சதர்க் AI இயக்கவும்.",
    privacyCopy: "உங்கள் தரவு பாதுகாப்பாக பகுப்பாய்வு செய்யப்படுகிறது; நிரந்தரமாக சேமிக்கப்படாது.",
    voiceTitle: "பேசி உதவி வேண்டுமா?",
    voiceReady: "மைக்ரோஃபோனை அழுத்தி PAN அல்லது தொலைபேசி எண்ணை மெதுவாக சொல்லுங்கள்.",
    speakNow: "பேசவும்",
    readHelp: "உதவி கேளுங்கள்",
    trustScore: "நம்பிக்கை மதிப்பெண்",
    noMisuse: "தவறான பயன்பாடு இல்லை",
    review: "மதிப்பாய்வு தேவை",
    urgent: "தவறான பயன்பாடு சாத்தியம்",
    invalid: "தவறான உள்ளீடு",
    whyFlagged: "ஏன் குறிக்கப்பட்டது?",
    noFlagYet: "இன்னும் சரிபார்ப்பு நடத்தப்படவில்லை.",
    reasonClean: "சந்தேகமான மியூல்-கணக்கு சிக்னல் இல்லை",
    reasonSuspicious: "சந்தேகமான செயல்பாட்டுடன் இணைந்த சிக்னல் கிடைத்தது",
    reasonReported: "பயனர் அல்லது கூட்டாளர் பதிவிலிருந்து அறிக்கை கிடைத்தது",
    reasonUnusual: "அசாதாரண பரிவர்த்தனை நடத்தை",
    recommendedAction: "பரிந்துரைக்கப்பட்ட செயல்",
    readyRecommendation: "முக்கிய ஆவணங்களை பகிர்வதற்கு அல்லது பெரிய பரிமாற்றத்திற்கு முன் சரிபார்க்கவும்.",
    safeRecommendation: "சந்தேகமான கணக்கு எதுவும் கிடைக்கவில்லை. இருந்தாலும் அதிகாரப்பூர்வ உதவியையே நம்புங்கள்.",
    reviewRecommendation: "பெரிய பரிமாற்றங்களை தவிர்த்து, ஆவணங்கள் அல்லது பணத்தை பகிர்வதற்கு முன் அதிகாரப்பூர்வமாக சரிபார்க்கவும்.",
    urgentRecommendation: "பணம் அனுப்ப வேண்டாம். உங்கள் வங்கியை தொடர்பு கொள்ளுங்கள், cybercrime.gov.in இல் புகார் செய்யுங்கள் அல்லது 1930 அழைக்கவும்.",
    contactHeading: "எங்கு புகார் செய்யலாம்",
    cyberPortal: "தேசிய சைபர் குற்ற தளம்",
    cyberDetail: "cybercrime.gov.in இல் புகார் செய்யவும் அல்லது சைபர் மோசடி உதவிக்கு 1930 அழைக்கவும்.",
    bankContact: "உங்கள் வங்கி அல்லது வாலெட் வழங்குநர்",
    bankDetail: "KYC விவாத மதிப்பாய்வு மற்றும் அனுமதியற்ற கணக்குகளுக்கு தற்காலிக கட்டுப்பாடு கேட்கவும்.",
    clearSpeech: "இந்த அடையாளத்திற்கு தற்போதைய பதிவுகளில் மியூல் கணக்கு அல்லது சந்தேகமான கணக்கு எதுவும் கிடைக்கவில்லை.",
    reviewSpeech: "ஒரு சாத்தியமான சந்தேகமான கணக்கு கிடைத்துள்ளது. உரிமையை சரிபார்த்து உங்கள் வங்கி அல்லது தேசிய சைபர் குற்ற தளத்தை தொடர்பு கொள்ளுங்கள்.",
    urgentSpeech: "சாத்தியமான மியூல் அல்லது சந்தேகமான கணக்கு கிடைத்துள்ளது. உடனே வங்கியை தொடர்பு கொள்ளுங்கள், cybercrime.gov.in இல் புகார் செய்யுங்கள் அல்லது 1930 அழைக்கவும்.",
    invalidSpeech: "எண் வடிவத்தையும் சம்மதி பெட்டியையும் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
    helpSpeech: "PAN அல்லது தொலைபேசியை தேர்வு செய்யுங்கள். பேசவும் பொத்தானை அழுத்துங்கள். எண்ணை மெதுவாக சொல்லுங்கள். நான் முடிவை வாசிப்பேன்.",
    voiceUnsupported: "இந்த உலாவியில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை. எண்ணை தட்டச்சு செய்யலாம்.",
    listening: "கேட்கிறது. தயவுசெய்து பேசுங்கள்.",
    heard: "நான் கேட்டது",
    processingSpeech: "பிராந்திய மொழி உரைமாற்றம் செயலாக்கப்படுகிறது...",
    voiceNoInput: "போதுமான குரல் கேட்கவில்லை. மெதுவாக மீண்டும் பேசுங்கள்.",
    highRiskBadge: "அதிக ஆபத்து",
    reviewBadge: "மதிப்பாய்வு",
    inputBadge: "உள்ளீடு சரிபார்க்கவும்",
    lowRiskBadge: "குறைந்த ஆபத்து",
    speechFallbackNotice: "இந்த உலாவி இந்த மொழிக்காக மாற்று குரலை பயன்படுத்தலாம்.",
  },
  bn: {
    speech: "bn-IN",
    recognitionSpeech: "bn-IN",
    brandName: "সতর্ক AI",
    language: "ভাষা",
    misuseVerification: "অ্যাকাউন্ট অপব্যবহার যাচাই",
    heroTitle: "আপনার PAN বা ফোন নম্বর দিয়ে সন্দেহজনক অ্যাকাউন্ট খোলা হয়েছে কি না দেখুন",
    heroBody: "সতর্ক AI পরিচয় অপব্যবহারের সংকেত পরীক্ষা করে নিরাপদ, মাস্ক করা ফলাফল দেখায়।",
    consentText: "এই পরিচয় নম্বরটি অ্যাকাউন্ট অপব্যবহারের সংকেতের জন্য পরীক্ষা করতে আমি সম্মতি দিচ্ছি",
    runSelfCheck: "নিরাপদে পরীক্ষা করুন",
    panLabel: "PAN নম্বর",
    phoneLabel: "ফোন নম্বর",
    ready: "প্রস্তুত",
    checking: "পরীক্ষা চলছে",
    readyToCheck: "পরীক্ষার জন্য প্রস্তুত",
    readyBody: "PAN বা ফোন নম্বর দিন, সম্মতি দিন এবং সতর্ক AI চালান।",
    privacyCopy: "আপনার ডেটা নিরাপদে বিশ্লেষণ করা হয় এবং স্থায়ীভাবে সংরক্ষণ করা হয় না।",
    voiceTitle: "বলে সাহায্য চান?",
    voiceReady: "মাইক্রোফোন চাপুন এবং আপনার PAN বা ফোন নম্বর ধীরে বলুন।",
    speakNow: "বলুন",
    readHelp: "সাহায্য শুনুন",
    trustScore: "বিশ্বাস স্কোর",
    noMisuse: "অপব্যবহার পাওয়া যায়নি",
    review: "পর্যালোচনা প্রয়োজন",
    urgent: "অপব্যবহার সম্ভাব্য",
    invalid: "অবৈধ",
    whyFlagged: "কেন চিহ্নিত?",
    noFlagYet: "এখনও কোনো পরীক্ষা চালানো হয়নি।",
    reasonClean: "কোনো সন্দেহজনক মিউল-অ্যাকাউন্ট সংকেত পাওয়া যায়নি",
    reasonSuspicious: "সন্দেহজনক কার্যকলাপের সঙ্গে যুক্ত সংকেত পাওয়া গেছে",
    reasonReported: "ব্যবহারকারী বা অংশীদার রেকর্ড থেকে রিপোর্ট পাওয়া গেছে",
    reasonUnusual: "অস্বাভাবিক লেনদেন আচরণ",
    recommendedAction: "প্রস্তাবিত পদক্ষেপ",
    readyRecommendation: "সংবেদনশীল নথি শেয়ার বা বড় ট্রান্সফারের আগে পরীক্ষা করুন।",
    safeRecommendation: "কোনো সন্দেহজনক অ্যাকাউন্ট পাওয়া যায়নি। তবুও শুধু অফিসিয়াল সহায়তায় বিশ্বাস করুন।",
    reviewRecommendation: "বড় ট্রান্সফার এড়িয়ে চলুন এবং নথি বা টাকা দেওয়ার আগে অফিসিয়াল সহায়তার সঙ্গে যাচাই করুন।",
    urgentRecommendation: "টাকা ট্রান্সফার করবেন না। আপনার ব্যাংকের সঙ্গে যোগাযোগ করুন, cybercrime.gov.in-এ রিপোর্ট করুন বা 1930-এ কল করুন।",
    contactHeading: "কোথায় রিপোর্ট করবেন",
    cyberPortal: "জাতীয় সাইবার অপরাধ পোর্টাল",
    cyberDetail: "cybercrime.gov.in-এ রিপোর্ট করুন বা সাইবার প্রতারণা সহায়তার জন্য 1930-এ কল করুন।",
    bankContact: "আপনার ব্যাংক বা ওয়ালেট প্রদানকারী",
    bankDetail: "KYC বিতর্ক পর্যালোচনা এবং অননুমোদিত অ্যাকাউন্টে অস্থায়ী সীমাবদ্ধতা চাইুন।",
    clearSpeech: "এই পরিচয়ের সঙ্গে বর্তমান রেকর্ডে কোনো মিউল অ্যাকাউন্ট বা সন্দেহজনক অ্যাকাউন্ট পাওয়া যায়নি।",
    reviewSpeech: "একটি সম্ভাব্য সন্দেহজনক অ্যাকাউন্ট পাওয়া গেছে। অনুগ্রহ করে মালিকানা যাচাই করুন এবং আপনার ব্যাংক বা জাতীয় সাইবার অপরাধ পোর্টালের সঙ্গে যোগাযোগ করুন।",
    urgentSpeech: "সম্ভাব্য মিউল বা সন্দেহজনক অ্যাকাউন্ট পাওয়া গেছে। অবিলম্বে ব্যাংকের সঙ্গে যোগাযোগ করুন, cybercrime.gov.in-এ রিপোর্ট করুন বা 1930-এ কল করুন।",
    invalidSpeech: "অনুগ্রহ করে নম্বরের ফরম্যাট এবং সম্মতি বাক্স পরীক্ষা করে আবার চেষ্টা করুন।",
    helpSpeech: "PAN বা ফোন নির্বাচন করুন। বলুন বোতাম চাপুন। নম্বরটি ধীরে বলুন। আমি ফলাফল পড়ে শোনাব।",
    voiceUnsupported: "এই ব্রাউজারে ভয়েস ইনপুট সমর্থিত নয়। আপনি নম্বর টাইপ করতে পারেন।",
    listening: "শুনছি। অনুগ্রহ করে বলুন।",
    heard: "আমি শুনেছি",
    processingSpeech: "আঞ্চলিক ভাষার ট্রান্সক্রিপশন প্রক্রিয়াকরণ হচ্ছে...",
    voiceNoInput: "পর্যাপ্ত অডিও শুনতে পাইনি। অনুগ্রহ করে ধীরে আবার বলুন।",
    highRiskBadge: "উচ্চ ঝুঁকি",
    reviewBadge: "পর্যালোচনা",
    inputBadge: "ইনপুট পরীক্ষা",
    lowRiskBadge: "কম ঝুঁকি",
    speechFallbackNotice: "এই ব্রাউজার এই ভাষার জন্য বিকল্প ভয়েস ব্যবহার করতে পারে।",
  },
  or: {
    speech: "or-IN",
    recognitionSpeech: "hi-IN",
    brandName: "ସତର୍କ AI",
    language: "ଭାଷା",
    misuseVerification: "ଖାତା ଦୁରୁପଯୋଗ ଯାଞ୍ଚ",
    heroTitle: "ଆପଣଙ୍କ PAN କିମ୍ବା ଫୋନ୍ ନମ୍ବରରେ ସନ୍ଦେହଜନକ ଖାତା ଖୋଲାଯାଇଛି କି ଯାଞ୍ଚ କରନ୍ତୁ",
    heroBody: "ସତର୍କ AI ପରିଚୟ ଦୁରୁପଯୋଗ ସଙ୍କେତ ଯାଞ୍ଚ କରି ସୁରକ୍ଷିତ, ମାସ୍କ୍ କରାଯାଇଥିବା ଫଳାଫଳ ଦେଖାଏ।",
    consentText: "ମୁଁ ଏହି ପରିଚୟ ସଂଖ୍ୟାକୁ ଖାତା ଦୁରୁପଯୋଗ ସଙ୍କେତ ପାଇଁ ଯାଞ୍ଚ କରିବାକୁ ସମ୍ମତି ଦେଉଛି",
    runSelfCheck: "ସୁରକ୍ଷିତ ଯାଞ୍ଚ କରନ୍ତୁ",
    panLabel: "PAN ନମ୍ବର",
    phoneLabel: "ଫୋନ୍ ନମ୍ବର",
    ready: "ପ୍ରସ୍ତୁତ",
    checking: "ଯାଞ୍ଚ ଚାଲିଛି",
    readyToCheck: "ଯାଞ୍ଚ ପାଇଁ ପ୍ରସ୍ତୁତ",
    readyBody: "PAN କିମ୍ବା ଫୋନ୍ ନମ୍ବର ଦିଅନ୍ତୁ, ସମ୍ମତି ଦିଅନ୍ତୁ ଏବଂ ସତର୍କ AI ଚଲାନ୍ତୁ।",
    privacyCopy: "ଆପଣଙ୍କ ତଥ୍ୟ ସୁରକ୍ଷିତ ଭାବରେ ବିଶ୍ଳେଷଣ ହୁଏ ଏବଂ ସ୍ଥାୟୀ ଭାବେ ସଂରକ୍ଷିତ ହୁଏ ନାହିଁ।",
    voiceTitle: "କହି ସହାୟତା ଚାହୁଁଛନ୍ତି କି?",
    voiceReady: "ମାଇକ୍ରୋଫୋନ୍ ଦବାନ୍ତୁ ଏବଂ PAN କିମ୍ବା ଫୋନ୍ ନମ୍ବର ଧୀରେ କହନ୍ତୁ।",
    speakNow: "କହନ୍ତୁ",
    readHelp: "ସହାୟତା ଶୁଣନ୍ତୁ",
    trustScore: "ଭରସା ସ୍କୋର",
    noMisuse: "ଦୁରୁପଯୋଗ ମିଳିଲା ନାହିଁ",
    review: "ସମୀକ୍ଷା ଆବଶ୍ୟକ",
    urgent: "ଦୁରୁପଯୋଗ ସମ୍ଭାବନା",
    invalid: "ଅବୈଧ",
    whyFlagged: "କାହିଁକି ଚିହ୍ନଟ ହେଲା?",
    noFlagYet: "ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଯାଞ୍ଚ ହୋଇନାହିଁ।",
    reasonClean: "କୌଣସି ସନ୍ଦେହଜନକ ମ୍ୟୁଲ୍-ଖାତା ସଙ୍କେତ ମିଳିଲା ନାହିଁ",
    reasonSuspicious: "ସନ୍ଦେହଜନକ କାର୍ଯ୍ୟକଳାପ ସହିତ ଜଡିତ ସଙ୍କେତ ମିଳିଲା",
    reasonReported: "ବ୍ୟବହାରକାରୀ କିମ୍ବା ସହଭାଗୀ ରେକର୍ଡରୁ ରିପୋର୍ଟ ମିଳିଲା",
    reasonUnusual: "ଅସାମାନ୍ୟ ଲେନଦେନ ବ୍ୟବହାର",
    recommendedAction: "ସୁପାରିଶିତ କାର୍ଯ୍ୟ",
    readyRecommendation: "ସମ୍ବେଦନଶୀଳ ଡକ୍ୟୁମେଣ୍ଟ ଶେୟାର କରିବା କିମ୍ବା ବଡ଼ ଟ୍ରାନ୍ସଫର୍ ପୂର୍ବରୁ ଯାଞ୍ଚ କରନ୍ତୁ।",
    safeRecommendation: "କୌଣସି ସନ୍ଦେହଜନକ ଖାତା ମିଳିଲା ନାହିଁ। ତଥାପି କେବଳ ଆଧିକାରିକ ସହାୟତାକୁ ଭରସା କରନ୍ତୁ।",
    reviewRecommendation: "ବଡ଼ ଟ୍ରାନ୍ସଫର୍ ରୋକନ୍ତୁ ଏବଂ ଟଙ୍କା କିମ୍ବା ଡକ୍ୟୁମେଣ୍ଟ ଦେବା ପୂର୍ବରୁ ଆଧିକାରିକ ସହାୟତାରେ ଯାଞ୍ଚ କରନ୍ତୁ।",
    urgentRecommendation: "ଟଙ୍କା ଟ୍ରାନ୍ସଫର୍ କରନ୍ତୁ ନାହିଁ। ଆପଣଙ୍କ ବ୍ୟାଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ, cybercrime.gov.in ରେ ରିପୋର୍ଟ କରନ୍ତୁ କିମ୍ବା 1930 କୁ କଲ୍ କରନ୍ତୁ।",
    contactHeading: "କେଉଁଠି ରିପୋର୍ଟ କରିବେ",
    cyberPortal: "ଜାତୀୟ ସାଇବର ଅପରାଧ ପୋର୍ଟାଲ",
    cyberDetail: "cybercrime.gov.in ରେ ରିପୋର୍ଟ କରନ୍ତୁ କିମ୍ବା 1930 କୁ କଲ୍ କରନ୍ତୁ।",
    bankContact: "ଆପଣଙ୍କ ବ୍ୟାଙ୍କ କିମ୍ବା ୱାଲେଟ୍ ପ୍ରଦାତା",
    bankDetail: "KYC ବିବାଦ ସମୀକ୍ଷା ଏବଂ ଅନଧିକୃତ ଖାତାରେ ଅସ୍ଥାୟୀ ରୋକ ମାଗନ୍ତୁ।",
    clearSpeech: "ଏହି ପରିଚୟ ସହିତ ବର୍ତ୍ତମାନ ରେକର୍ଡରେ କୌଣସି ମ୍ୟୁଲ୍ ଖାତା କିମ୍ବା ସନ୍ଦେହଜନକ ଖାତା ମିଳିଲା ନାହିଁ।",
    reviewSpeech: "ଏକ ସମ୍ଭାବ୍ୟ ସନ୍ଦେହଜନକ ଖାତା ମିଳିଛି। ଦୟାକରି ମାଲିକାନା ଯାଞ୍ଚ କରନ୍ତୁ ଏବଂ ଆପଣଙ୍କ ବ୍ୟାଙ୍କ କିମ୍ବା ସାଇବର ଅପରାଧ ପୋର୍ଟାଲ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
    urgentSpeech: "ସମ୍ଭାବ୍ୟ ମ୍ୟୁଲ୍ କିମ୍ବା ସନ୍ଦେହଜନକ ଖାତା ମିଳିଛି। ତୁରନ୍ତ ବ୍ୟାଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ, cybercrime.gov.in ରେ ରିପୋର୍ଟ କରନ୍ତୁ କିମ୍ବା 1930 କୁ କଲ୍ କରନ୍ତୁ।",
    invalidSpeech: "ଦୟାକରି ନମ୍ବର ଫର୍ମାଟ୍ ଏବଂ ସମ୍ମତି ବକ୍ସ ଯାଞ୍ଚ କରି ପୁନଃଚେଷ୍ଟା କରନ୍ତୁ।",
    helpSpeech: "PAN କିମ୍ବା ଫୋନ୍ ବାଛନ୍ତୁ। କହନ୍ତୁ ବଟନ୍ ଦବାନ୍ତୁ। ନମ୍ବର ଧୀରେ କହନ୍ତୁ। ମୁଁ ଫଳାଫଳ ପଢ଼ିଦେବି।",
    voiceUnsupported: "ଏହି ବ୍ରାଉଜରରେ ଭୋଇସ୍ ଇନପୁଟ୍ ସୀମିତ। ଆପଣ ନମ୍ବର ଟାଇପ୍ କରିପାରିବେ।",
    listening: "ଶୁଣୁଛି। ଦୟାକରି ଏବେ କହନ୍ତୁ।",
    heard: "ମୁଁ ଶୁଣିଲି",
    processingSpeech: "ଅଞ୍ଚଳୀୟ ଭାଷା ଟ୍ରାନ୍ସକ୍ରିପ୍ସନ୍ ପ୍ରୋସେସ୍ ହେଉଛି...",
    voiceNoInput: "ପର୍ଯ୍ୟାପ୍ତ ଧ୍ୱନି ଶୁଣିଲା ନାହିଁ। ଦୟାକରି ଧୀରେ କହି ପୁନଃଚେଷ୍ଟା କରନ୍ତୁ।",
    highRiskBadge: "ଉଚ୍ଚ ଝୁମ୍ପ",
    reviewBadge: "ସମୀକ୍ଷା",
    inputBadge: "ଇନପୁଟ୍ ଯାଞ୍ଚ",
    lowRiskBadge: "କମ୍ ଝୁମ୍ପ",
    speechFallbackNotice: "ଏହି ବ୍ରାଉଜର ଏହି ଭାଷା ପାଇଁ ବିକଳ୍ପ ଧ୍ୱନି ବ୍ୟବହାର କରିପାରେ।",
  },
  as: {
    speech: "as-IN",
    recognitionSpeech: "hi-IN",
    brandName: "সতৰ্ক AI",
    language: "ভাষা",
    misuseVerification: "একাউন্ট অপব্যৱহাৰ পৰীক্ষা",
    heroTitle: "আপোনাৰ PAN বা ফোন নম্বৰে সন্দেহজনক একাউন্ট খোলা হৈছে নেকি পৰীক্ষা কৰক",
    heroBody: "সতৰ্ক AI-এ পৰিচয় অপব্যৱহাৰৰ সংকেত পৰীক্ষা কৰি সুৰক্ষিত, মাস্ক কৰা ফলাফল দেখুৱায়।",
    consentText: "মই এই পৰিচয় নম্বৰটো একাউন্ট অপব্যৱহাৰৰ সংকেতৰ বাবে পৰীক্ষা কৰিবলৈ সম্মতি দিছোঁ",
    runSelfCheck: "সুৰক্ষিতভাৱে পৰীক্ষা কৰক",
    panLabel: "PAN নম্বৰ",
    phoneLabel: "ফোন নম্বৰ",
    ready: "প্ৰস্তুত",
    checking: "পৰীক্ষা চলিছে",
    readyToCheck: "পৰীক্ষাৰ বাবে প্ৰস্তুত",
    readyBody: "PAN বা ফোন নম্বৰ দিয়ক, সম্মতি দিয়ক আৰু সতর্ক AI চলাওক।",
    privacyCopy: "আপোনাৰ তথ্য সুৰক্ষিতভাৱে বিশ্লেষণ কৰা হয় আৰু স্থায়ীভাৱে সংৰক্ষণ কৰা নহয়।",
    voiceTitle: "কথা কৈ সহায় বিচাৰে নেকি?",
    voiceReady: "মাইক্রোফোন টিপক আৰু PAN বা ফোন নম্বৰ ধীরে কওক।",
    speakNow: "কওক",
    readHelp: "সহায় শুনক",
    trustScore: "বিশ্বাস স্কোৰ",
    noMisuse: "অপব্যৱহাৰ পোৱা নগ'ল",
    review: "সমীক্ষা প্ৰয়োজন",
    urgent: "অপব্যৱহাৰৰ সম্ভাৱনা",
    invalid: "অবৈধ ইনপুট",
    whyFlagged: "কিয় চিহ্নিত?",
    noFlagYet: "এতিয়ালৈকে কোনো পৰীক্ষা হোৱা নাই।",
    reasonClean: "কোনো সন্দেহজনক মিউল-একাউন্ট সংকেত পোৱা নগ'ল",
    reasonSuspicious: "সন্দেহজনক কাৰ্যকলাপৰ সৈতে জড়িত সংকেত পোৱা গৈছে",
    reasonReported: "ব্যৱহাৰকাৰী বা অংশীদাৰ ৰেকৰ্ডৰ পৰা ৰিপোৰ্ট পোৱা গৈছে",
    reasonUnusual: "অস্বাভাৱিক লেনদেন আচৰণ",
    recommendedAction: "প্ৰস্তাৱিত পদক্ষেপ",
    readyRecommendation: "সংবেদনশীল নথি শেয়াৰ বা ডাঙৰ ট্ৰান্সফাৰৰ আগতে পৰীক্ষা কৰক।",
    safeRecommendation: "কোনো সন্দেহজনক একাউন্ট পোৱা নগ'ল। তথাপিও কেৱল অফিচিয়েল সহায়ত বিশ্বাস কৰক।",
    reviewRecommendation: "ডাঙৰ ট্ৰান্সফাৰ এৰাই চলক আৰু নথি বা ধন দিয়াৰ আগতে অফিচিয়েল সহায়ৰ সৈতে পৰীক্ষা কৰক।",
    urgentRecommendation: "ধন ট্ৰান্সফাৰ নকৰিব। আপোনাৰ বেংকৰ সৈতে যোগাযোগ কৰক, cybercrime.gov.in ত ৰিপোৰ্ট কৰক বা 1930 ত ফোন কৰক।",
    contactHeading: "ক'ত ৰিপোৰ্ট কৰিব",
    cyberPortal: "ৰাষ্ট্ৰীয় চাইবাৰ অপৰাধ পোৰ্টেল",
    cyberDetail: "cybercrime.gov.in ত ৰিপোৰ্ট কৰক বা সাইবাৰ জালিয়াতি সহায়ৰ বাবে 1930 ত ফোন কৰক।",
    bankContact: "আপোনাৰ বেংক বা ৱালেট প্ৰদানকাৰী",
    bankDetail: "KYC বিতৰ্ক পুনৰীক্ষণ আৰু অননুমোদিত একাউন্টত অস্থায়ী সীমা বিচাৰক।",
    clearSpeech: "এই পৰিচয়ৰ সৈতে বৰ্তমান ৰেকৰ্ডত কোনো মিউল একাউন্ট বা সন্দেহজনক একাউন্ট পোৱা নগ'ল।",
    reviewSpeech: "এটা সম্ভাব্য সন্দেহজনক একাউন্ট পোৱা গৈছে। অনুগ্ৰহ কৰি মালিকী স্বত্ব পৰীক্ষা কৰক আৰু আপোনাৰ বেংক বা ৰাষ্ট্ৰীয় চাইবাৰ অপৰাধ পোৰ্টেলৰ সৈতে যোগাযোগ কৰক।",
    urgentSpeech: "সম্ভাব্য মিউল বা সন্দেহজনক একাউন্ট পোৱা গৈছে। তৎক্ষণাৎ বেংকৰ সৈতে যোগাযোগ কৰক, cybercrime.gov.in ত ৰিপোৰ্ট কৰক বা 1930 ত ফোন কৰক।",
    invalidSpeech: "অনুগ্ৰহ কৰি নম্বৰৰ ফৰ্মেট আৰু সম্মতি বাকচ পৰীক্ষা কৰি পুনৰ চেষ্টা কৰক।",
    helpSpeech: "PAN বা ফোন বাছক। কওক বুটাম টিপক। নম্বৰ ধীৰে কওক। মই ফলাফল পঢ়ি শুনাম।",
    voiceUnsupported: "এই ব্ৰাউজাৰত এই ভাষাৰ ভইচ ইনপুট সীমিত। আপুনি নম্বৰ টাইপ কৰিব পাৰে।",
    listening: "শুনি আছোঁ। অনুগ্ৰহ কৰি এতিয়া কওক।",
    heard: "মই শুনিলোঁ",
    processingSpeech: "আঞ্চলিক ভাষাৰ ট্রান্সক্রিপশন প্ৰক্ৰিয়া চলিছে...",
    voiceNoInput: "পৰ্যাপ্ত অডিও শুনা নগ'ল। অনুগ্ৰহ কৰি ধীৰে পুনৰ কওক।",
    highRiskBadge: "উচ্চ বিপদ",
    reviewBadge: "সমীক্ষা",
    inputBadge: "ইনপুট পৰীক্ষা",
    lowRiskBadge: "কম বিপদ",
    speechFallbackNotice: "এই ব্ৰাউজাৰে এই ভাষাৰ বাবে বিকল্প ধ্বনি ব্যৱহাৰ কৰিব পাৰে।",
  },
  bho: {
    speech: "hi-IN",
    recognitionSpeech: "hi-IN",
    brandName: "सतर्क AI",
    language: "भाषा",
    misuseVerification: "खाता दुरुपयोग जांच",
    heroTitle: "देखीं कि रउआ PAN या फोन नंबर से संदिग्ध खाता खुलल बा कि ना",
    heroBody: "सतर्क AI पहचान के गलत इस्तेमाल के संकेत जांचेला आ सुरक्षित, छुपावल नतीजा देखावेला।",
    consentText: "हम एह पहचान नंबर के खाता दुरुपयोग संकेत खातिर जांचे के सहमति देत बानी",
    runSelfCheck: "सुरक्षित जांच करीं",
    panLabel: "PAN नंबर",
    phoneLabel: "फोन नंबर",
    ready: "तैयार",
    checking: "जांच होत बा",
    readyToCheck: "जांच खातिर तैयार",
    readyBody: "PAN या फोन नंबर डालीं, सहमति दीं आ सतर्क AI चलाईं।",
    privacyCopy: "रउआ डेटा सुरक्षित तरीका से जांचल जाला आ हमेशा खातिर सेव ना कइल जाला।",
    voiceTitle: "बोल के मदद चाहीं?",
    voiceReady: "माइक दबाईं आ PAN या फोन नंबर धीरे-धीरे बोलीं।",
    speakNow: "बोलीं",
    readHelp: "मदद सुनीं",
    trustScore: "भरोसा स्कोर",
    noMisuse: "गलत इस्तेमाल ना मिलल",
    review: "जांच जरूरी",
    urgent: "गलत इस्तेमाल के संभावना",
    invalid: "गलत इनपुट",
    whyFlagged: "काहे चिन्हित भइल?",
    noFlagYet: "अभी ले कवनो जांच ना भइल बा।",
    reasonClean: "कवनो संदिग्ध म्यूल-खाता के संकेत ना मिलल",
    reasonSuspicious: "संदिग्ध गतिविधि से जुड़ल संकेत मिलल",
    reasonReported: "यूजर या पार्टनर रिकॉर्ड से रिपोर्ट मिलल",
    reasonUnusual: "असामान्य लेन-देन व्यवहार",
    recommendedAction: "सलाह दिहल कार्रवाई",
    readyRecommendation: "संवेदनशील कागज साझा करे या बड़का ट्रांसफर से पहिले जांच करीं।",
    safeRecommendation: "कवनो संदिग्ध खाता ना मिलल। फिर भी सिर्फ आधिकारिक सहायता पर भरोसा करीं।",
    reviewRecommendation: "बड़का ट्रांसफर से बचीं आ दस्तावेज या पैसा देवे से पहिले आधिकारिक सहायता से जांच करीं।",
    urgentRecommendation: "पैसा ट्रांसफर मत करीं। अपना बैंक से संपर्क करीं, cybercrime.gov.in पर रिपोर्ट करीं या 1930 पर कॉल करीं।",
    contactHeading: "कहां रिपोर्ट करीं",
    cyberPortal: "राष्ट्रीय साइबर अपराध पोर्टल",
    cyberDetail: "cybercrime.gov.in पर रिपोर्ट करीं या साइबर धोखाधड़ी सहायता खातिर 1930 पर कॉल करीं।",
    bankContact: "रउआ बैंक या वॉलेट प्रदाता",
    bankDetail: "KYC विवाद समीक्षा आ अनधिकृत खाता पर अस्थायी रोक मांगीं।",
    clearSpeech: "एह पहचान से वर्तमान रिकॉर्ड में कवनो म्यूल खाता या संदिग्ध खाता ना मिलल।",
    reviewSpeech: "एक संभावित संदिग्ध खाता मिलल बा। कृपया मालिकाना जांचीं आ अपना बैंक या साइबर अपराध पोर्टल से संपर्क करीं।",
    urgentSpeech: "संभावित म्यूल या संदिग्ध खाता मिलल बा। तुरंत बैंक से संपर्क करीं, cybercrime.gov.in पर रिपोर्ट करीं या 1930 पर कॉल करीं।",
    invalidSpeech: "कृपया नंबर के फॉर्मेट आ सहमति बॉक्स जांच के फेर कोशिश करीं।",
    helpSpeech: "PAN या फोन चुनीं। बोलीं बटन दबाईं। नंबर धीरे-धीरे बोलीं। हम परिणाम पढ़ के सुनाइब।",
    voiceUnsupported: "ई ब्राउजर में आवाज इनपुट सीमित बा। रउआ नंबर टाइप कर सकत बानी।",
    listening: "सुनत बानी। कृपया अब बोलीं।",
    heard: "हम सुननी",
    processingSpeech: "क्षेत्रीय भाषा के ट्रांसक्रिप्शन प्रोसेस होत बा...",
    voiceNoInput: "पर्याप्त आवाज ना सुनाइल। कृपया धीरे बोल के फेर कोशिश करीं।",
    highRiskBadge: "ऊंच जोखिम",
    reviewBadge: "समीक्षा",
    inputBadge: "इनपुट जांचीं",
    lowRiskBadge: "कम जोखिम",
    speechFallbackNotice: "ई ब्राउजर एह भाषा खातिर वैकल्पिक आवाज इस्तेमाल कर सकेला।",
  },
  mai: {
    speech: "hi-IN",
    recognitionSpeech: "hi-IN",
    brandName: "सतर्क AI",
    language: "भाषा",
    misuseVerification: "खाता दुरुपयोग जाँच",
    heroTitle: "देखू जे अहां के PAN वा फोन नंबर सँ संदिग्ध खाता खुलल अछि कि नहि",
    heroBody: "सतर्क AI पहचान दुरुपयोग संकेत जाँचैत अछि आ सुरक्षित, मास्क कएल परिणाम देखबैत अछि।",
    consentText: "हम एहि पहचान नंबर केँ खाता दुरुपयोग संकेत लेल जाँच करबाक सहमति दैत छी",
    runSelfCheck: "सुरक्षित जाँच करू",
    panLabel: "PAN नंबर",
    phoneLabel: "फोन नंबर",
    ready: "तैयार",
    checking: "जाँच भऽ रहल अछि",
    readyToCheck: "जाँच लेल तैयार",
    readyBody: "PAN वा फोन नंबर भरू, सहमति दिअ आ सतर्क AI चलाउ।",
    privacyCopy: "अहां के डेटा सुरक्षित रूप सँ विश्लेषित होइत अछि आ स्थायी रूप सँ सहेजल नहि जाइत अछि।",
    voiceTitle: "बजि कऽ सहायता चाही?",
    voiceReady: "माइक दबाउ आ PAN वा फोन नंबर धीरे-धीरे कहू।",
    speakNow: "बाजू",
    readHelp: "सहायता सुनू",
    trustScore: "भरोसाक स्कोर",
    noMisuse: "गलत उपयोग नहि भेटल",
    review: "समीक्षा जरूरी",
    urgent: "गलत उपयोगक संभावना",
    invalid: "अमान्य इनपुट",
    whyFlagged: "किएक चिन्हित भेल?",
    noFlagYet: "एखन धरि कोनो जाँच नहि भेल अछि।",
    reasonClean: "कोनो संदिग्ध म्यूल-खाताक संकेत नहि भेटल",
    reasonSuspicious: "संदिग्ध गतिविधिसँ जुड़ल संकेत भेटल",
    reasonReported: "उपयोगकर्ता वा साझेदार रिकॉर्ड सँ रिपोर्ट भेटल",
    reasonUnusual: "असामान्य लेन-देन व्यवहार",
    recommendedAction: "सुझाओल कार्रवाई",
    readyRecommendation: "संवेदनशील कागज साझा करबाक वा पैघ ट्रांसफर सँ पहिने जाँच करू।",
    safeRecommendation: "कोनो संदिग्ध खाता नहि भेटल। तैयो केवल आधिकारिक सहायता पर भरोसा करू।",
    reviewRecommendation: "पैघ ट्रांसफर सँ बचू आ दस्तावेज वा पैसा देबा सँ पहिने आधिकारिक सहायता सँ सत्यापन करू।",
    urgentRecommendation: "पैसा ट्रांसफर नहि करू। अपन बैंक सँ संपर्क करू, cybercrime.gov.in पर रिपोर्ट करू वा 1930 पर कॉल करू।",
    contactHeading: "कतय रिपोर्ट करू",
    cyberPortal: "राष्ट्रीय साइबर अपराध पोर्टल",
    cyberDetail: "cybercrime.gov.in पर रिपोर्ट करू वा साइबर धोखाधड़ी सहायता लेल 1930 पर कॉल करू।",
    bankContact: "अहां के बैंक वा वॉलेट प्रदाता",
    bankDetail: "KYC विवाद समीक्षा आ अनधिकृत खातापर अस्थायी रोक लेल कहू।",
    clearSpeech: "एहि पहचान सँ वर्तमान रिकॉर्ड में कोनो म्यूल खाता वा संदिग्ध खाता नहि भेटल।",
    reviewSpeech: "एकटा संभावित संदिग्ध खाता भेटल अछि। कृपया मालिकाना सत्यापित करू आ अपन बैंक वा साइबर अपराध पोर्टल सँ संपर्क करू।",
    urgentSpeech: "संभावित म्यूल वा संदिग्ध खाता भेटल अछि। तुरंत बैंक सँ संपर्क करू, cybercrime.gov.in पर रिपोर्ट करू वा 1930 पर कॉल करू।",
    invalidSpeech: "कृपया नंबरक फॉर्मेट आ सहमति बॉक्स जाँचि फेर कोशिश करू।",
    helpSpeech: "PAN वा फोन चुनू। बाजू बटन दबाउ। नंबर धीरे-धीरे कहू। हम परिणाम पढ़ि सुनाएब।",
    voiceUnsupported: "ई ब्राउजर में आवाज इनपुट सीमित अछि। अहां नंबर टाइप कऽ सकैत छी।",
    listening: "सुनि रहल छी। कृपया आब बाजू।",
    heard: "हम सुनलहुँ",
    processingSpeech: "क्षेत्रीय भाषाक ट्रांसक्रिप्शन प्रोसेस भऽ रहल अछि...",
    voiceNoInput: "पर्याप्त आवाज नहि सुनल गेल। कृपया धीरे बजि फेर कोशिश करू।",
    highRiskBadge: "उच्च जोखिम",
    reviewBadge: "समीक्षा",
    inputBadge: "इनपुट जाँचू",
    lowRiskBadge: "कम जोखिम",
    speechFallbackNotice: "ई ब्राउजर एहि भाषा लेल वैकल्पिक आवाज इस्तेमाल कऽ सकैत अछि।",
  },
};

const state = {
  identityType: "pan",
  checks: [],
  language: "en",
  recognition: null,
  lastResult: null,
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
  languagePills: document.querySelector("#languagePills"),
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

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function applyLanguage({ announce = false } = {}) {
  document.documentElement.lang = state.language;
  if (el.languageSelect) {
    [...el.languageSelect.options].forEach((option) => {
      option.textContent = LANGUAGE_LABELS[option.value] || option.textContent;
    });
    el.languageSelect.value = state.language;
  }
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  el.identityInputLabel.textContent = state.identityType === "phone" ? t("phoneLabel") : t("panLabel");
  setStatus(el.statusBadge.dataset.status || "ready");
  syncLanguagePills();
  if (state.lastResult) {
    renderResult(state.lastResult, { scroll: false, announce });
  }
}

function syncLanguagePills() {
  if (!el.languagePills) return;
  el.languagePills.querySelectorAll("[data-language-pill]").forEach((button) => {
    const code = button.dataset.languagePill;
    button.textContent = LANGUAGE_LABELS[code] || code;
    button.classList.toggle("active", code === state.language);
  });
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

function riskBadgeText(status) {
  if (status === "urgent") return t("highRiskBadge");
  if (status === "review") return t("reviewBadge");
  if (status === "invalid") return t("inputBadge");
  return t("lowRiskBadge");
}

function renderFlagReasons(status, result) {
  const hasMatch = (result.matches || []).length > 0;
  const reasons = status === "clear"
    ? [t("reasonClean")]
    : [t("reasonSuspicious"), hasMatch ? t("reasonReported") : t("reasonUnusual"), t("reasonUnusual")];
  el.flagReasons.innerHTML = reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("");
}

function contactList(status) {
  const cyber = `<li><strong>${escapeHtml(t("cyberPortal"))}</strong><br>${escapeHtml(t("cyberDetail"))}</li>`;
  if (status === "clear") return `<ul class="report-contacts">${cyber}</ul>`;
  return `
    <ul class="report-contacts">
      ${cyber}
      <li><strong>${escapeHtml(t("bankContact"))}</strong><br>${escapeHtml(t("bankDetail"))}</li>
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
  return `<strong>${escapeHtml(t("recommendedAction"))}</strong><span>${escapeHtml(recommendation)}</span>${contactList(status)}`;
}

function resultSpeech(result) {
  const status = result.status || "clear";
  return `${statusLabel(status)}. ${translatedRecommendation(status)}`;
}

function renderResult(result, options = {}) {
  const { scroll = true, announce = true } = options;
  state.lastResult = result;
  const status = result.status || "clear";
  setStatus(status);
  const riskScore = Number(result.riskScore || 0);
  const trustScore = Math.max(0, Math.min(100, 100 - riskScore));
  const badgeClass = status === "urgent" ? "danger" : status === "review" ? "watch" : "safe";
  const matches = (result.matches || []).map((match) => `
    <li>
      <strong>${escapeHtml(match.institution)}</strong>
      <span>${escapeHtml(match.account)} | ${escapeHtml(match.opened)} | ${escapeHtml(match.city)} | risk ${escapeHtml(match.risk)}</span>
    </li>
  `).join("");
  el.result.className = `satark-result-card ${badgeClass}`;
  el.result.innerHTML = `
    <div class="satark-score-ring ${badgeClass}" style="--score:${trustScore}">
      <strong>${trustScore}<small>/100</small></strong>
      <span>${escapeHtml(t("trustScore"))}</span>
    </div>
    <div class="satark-result-copy">
      <span class="satark-risk-badge ${badgeClass}">${escapeHtml(riskBadgeText(status))}</span>
      <h2>${escapeHtml(result.identifierMask || "Satark AI")}: ${escapeHtml(statusLabel(status))}</h2>
      <p>${escapeHtml(result.error || translatedRecommendation(status))}</p>
      ${matches ? `<ul class="satark-match-list">${matches}</ul>` : ""}
    </div>
  `;
  renderFlagReasons(status, result);
  el.nextSteps.className = `satark-recommendation ${status}`;
  el.nextSteps.innerHTML = nextStepContent(status);
  if (scroll) el.resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  if (announce) speak(resultSpeech(result));
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
    zero: "0", one: "1", two: "2", three: "3", four: "4", five: "5",
    six: "6", seven: "7", eight: "8", nine: "9", oh: "0", o: "0",
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

function speechLocale() {
  return LANG[state.language]?.speech || "en-IN";
}

function recognitionLocale() {
  return LANG[state.language]?.recognitionSpeech || speechLocale();
}

let cachedVoices = [];

function refreshVoices() {
  if (!("speechSynthesis" in window)) return [];
  cachedVoices = window.speechSynthesis.getVoices();
  return cachedVoices;
}

function availableVoices() {
  return cachedVoices.length ? cachedVoices : refreshVoices();
}

function pickVoice(locale) {
  const voices = availableVoices();
  if (!voices.length) return null;
  const requested = locale.toLowerCase();
  const requestedRoot = requested.split("-")[0];
  return voices.find((voice) => voice.lang.toLowerCase() === requested)
    || voices.find((voice) => voice.lang.toLowerCase().startsWith(requestedRoot))
    || voices.find((voice) => voice.lang.toLowerCase().startsWith("hi"))
    || voices.find((voice) => voice.lang.toLowerCase().startsWith("en"))
    || voices[0];
}

function speak(text, trigger = null, retry = false) {
  if (!("speechSynthesis" in window)) return;
  const voices = refreshVoices();
  trigger?.classList.add("speaking");
  if (!voices.length && !retry) {
    window.setTimeout(() => speak(text, trigger, true), 450);
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const locale = speechLocale();
  const voice = pickVoice(locale);
  utterance.lang = locale;
  if (voice) utterance.voice = voice;
  utterance.rate = 0.9;
  utterance.onend = () => trigger?.classList.remove("speaking");
  utterance.onerror = () => trigger?.classList.remove("speaking");
  window.speechSynthesis.resume();
  window.speechSynthesis.speak(utterance);
}

function warmSpeechVoices() {
  if (!("speechSynthesis" in window)) return;
  refreshVoices();
  window.setTimeout(refreshVoices, 180);
  window.setTimeout(refreshVoices, 800);
}

function startVoiceInput() {
  const SpeechRecognition = recognitionSupported();
  if (!SpeechRecognition) {
    el.voiceStatus.textContent = t("voiceUnsupported");
    speak(t("voiceUnsupported"));
    return;
  }
  if (state.recognition) {
    try {
      state.recognition.stop();
    } catch {
      // Recognition may already be closed.
    }
  }
  const recognition = new SpeechRecognition();
  state.recognition = recognition;
  recognition.lang = recognitionLocale();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  let finalTranscript = "";
  let lastInterim = "";
  let silenceTimer = null;
  let hardStopTimer = null;

  const beginProcessing = () => {
    el.startVoice.classList.remove("listening");
    el.startVoice.classList.add("processing");
    el.voiceStatus.classList.add("processing");
    el.voiceStatus.textContent = t("processingSpeech");
  };

  const finishProcessing = () => {
    window.clearTimeout(silenceTimer);
    window.clearTimeout(hardStopTimer);
    beginProcessing();
    window.setTimeout(() => {
      const transcript = (finalTranscript || lastInterim).trim();
      el.startVoice.classList.remove("processing");
      el.voiceStatus.classList.remove("processing");
      if (!transcript) {
        el.voiceStatus.textContent = t("voiceNoInput");
        speak(t("voiceNoInput"));
        return;
      }
      const identifier = normalizeSpeech(transcript);
      el.form.elements.identifier.value = identifier;
      el.voiceStatus.textContent = `${t("heard")}: ${identifier}`;
      runSelfCheck(identifier);
    }, 850);
  };

  el.startVoice.classList.add("listening");
  const fallbackNotice = recognition.lang !== speechLocale() ? ` ${t("speechFallbackNotice")}` : "";
  el.voiceStatus.textContent = `${t("listening")}${fallbackNotice}`;
  speak(t("listening"));

  recognition.onstart = () => {
    hardStopTimer = window.setTimeout(() => {
      try {
        recognition.stop();
      } catch {
        finishProcessing();
      }
    }, 26000);
  };

  recognition.onresult = (event) => {
    let interim = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript;
      if (event.results[index].isFinal) {
        finalTranscript += `${transcript} `;
      } else {
        interim += transcript;
      }
    }
    lastInterim = interim || lastInterim;
    el.voiceStatus.textContent = `${t("heard")}: ${(finalTranscript || interim || lastInterim).trim()}`;
    window.clearTimeout(silenceTimer);
    silenceTimer = window.setTimeout(() => {
      try {
        recognition.stop();
      } catch {
        finishProcessing();
      }
    }, 5200);
  };

  recognition.onerror = (event) => {
    window.clearTimeout(silenceTimer);
    window.clearTimeout(hardStopTimer);
    el.startVoice.classList.remove("listening", "processing");
    el.voiceStatus.classList.remove("processing");
    el.voiceStatus.textContent = event.error === "not-allowed"
      ? t("voiceUnsupported")
      : `${t("voiceUnsupported")} ${t("speechFallbackNotice")}`;
    speak(el.voiceStatus.textContent);
  };

  recognition.onend = () => {
    if (el.startVoice.classList.contains("processing")) return;
    finishProcessing();
  };

  recognition.start();
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => refreshVoices();
  warmSpeechVoices();
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

if (el.languageSelect) {
  el.languageSelect.addEventListener("change", () => {
    state.language = el.languageSelect.value;
    applyLanguage({ announce: true });
  });
}

el.languagePills?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-language-pill]");
  if (!button) return;
  state.language = button.dataset.languagePill;
  applyLanguage({ announce: true });
});

el.form.addEventListener("submit", submitSelfCheck);
el.startVoice.addEventListener("click", startVoiceInput);
el.readHelp.addEventListener("click", () => speak(t("helpSpeech"), el.readHelp));

applyLanguage();
