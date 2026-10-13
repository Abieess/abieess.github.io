// GS "Where to Study" data (read from the PDF by OCR). Keep the order of topics the same once you start tracking.
const GS_UNITS = [
 {
  "id": 1,
  "unit": "அலகு I",
  "title": "பொது அறிவியல் / General Science",
  "questions": 5,
  "info": "General Science (5 questions). Text was read from the PDF by OCR, so check the original PDF if a word looks wrong.",
  "topics": [
   {
    "n": 1,
    "page": 1,
    "section": "Physics",
    "topic": "அறிவியல் அறிவு மற்றும் அறிவியல் உணர்வு - பகுத்தறிதல் - பொருள் உணராமல் கற்றலும் கருத்துணர்ந்து கற்றலும் - கடந்த காலம், நிகழ்காலம், எதிர்காலம் பற்றி புரிந்து கொள்வதற்கான ஒரு கருவி அறிவியல்",
    "en": "Scientific Knowledge and Scientific Temper - Power of Reasoning - Rote Learning vs Conceptual Learning Science as a tool to understand the past, present and future",
    "tam": [
     "இந்த தலைப்புகள் தொடர்பான பொதுவான தகவல்களையும் மற்றும் முந்தைய வருட வினாக்களையும் படித்துக் கொள்ளவும்"
    ],
    "eng": [
     "Read the General information above the given topics and also read the previous years question papers for the given topics"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 2,
    "page": 1,
    "section": "Physics",
    "topic": "இயற்பியல் அளவுகளின் அளவீடுகள்",
    "en": "Measurement of Physical Quantities",
    "tam": [
     "அளவீடுகள் (€-ம் வகுப்பு)",
     "அளவீடுகள் (7-ம் வகுப்பு)",
     "அளவீடுகள் (8-ம் வகுப்பு)",
     "அளவீடுகள் (9-ம் வகுப்பு)",
     "அளவீடுகள் (11-ம் வகுப்பு)"
    ],
    "eng": [
     "Measurements (6th std)",
     "Measurements (7th std)",
     "Measurements (8th std)",
     "Measurements (9th std)",
     "Measurements (11th std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 3,
    "page": 1,
    "section": "Physics",
    "topic": "பேரண்டத்தின் இயல்பு",
    "en": "Nature of Universe",
    "tam": [
     "அண்டம் மற்றும் விண்வெளி (7-ம் வகுப்பு)",
     "அண்டம் மற்றும் அறிவியல் (8-ம் வகுப்பு)",
     "அண்டம் (9-ம் வகுப்பு)",
     "அண்டம் மற்றும் சூரியக்குடும்பம் (6-ம் வகுப்பு சமூக அறிவியல்)"
    ],
    "eng": [
     "Universe and space (7thstd)",
     "Universe and science (8thstd)",
     "Universe (9thstd)",
     "Universe and Solar system (6th Std — Social Science)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 4,
    "page": 1,
    "section": "Physics",
    "topic": "பொது அறிவியல் விதிகள்",
    "en": "General Scientific Laws",
    "tam": [
     "6 முதல் 12-ம் வகுப்பு வரை உள்ள அறிவியல் விதிகளை படித்துக் கொள்ளவும்."
    ],
    "eng": [
     "Read all the laws from 6th to 12th standard school books"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 5,
    "page": 1,
    "section": "Physics",
    "topic": "இயக்கவியல், விசை, அழுத்தம், இயக்கம் மற்றும் ஆற்றல், அன்றாட வாழ்வில் இயக்கவியல்",
    "en": "Mechanics, Force, Pressure, Motion and Energy Everyday application of the basic principles of Mechanics",
    "tam": [
     "விசை மற்றும் இயக்கம் (6-ம் வகுப்பு)",
     "விசை மற்றும் இயக்கம் (7-ம் வகுப்பு)",
     "விசை மற்றும் அழுத்தம் (8-ம் வகுப்பு)",
     "இயக்கம் (9-ம் வகுப்பு)",
     "இயக்க விதிகள் (10-ம் வகுப்பு)",
     "இயக்கவியல் (11-ம் வகுப்பு)",
     "இயக்க விதிகள் (11-ம் வகுப்பு)"
    ],
    "eng": [
     "Force and motion (6th Std)",
     "Force and motion (7th Std)",
     "Force and pressure (8th Std)",
     "Motion (9th Std)",
     "Laws of motion (10th Std)",
     "Motion (11th Std)",
     "Laws of motion (11% Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 6,
    "page": 1,
    "section": "Physics",
    "topic": "பருப்பொருள்களின் பண்புகள்",
    "en": "Properties of Matter",
    "tam": [
     "பருப்பொருள்களின் பண்புகள் (11-ம் வகுப்பு)"
    ],
    "eng": [
     "Properties of Matter (11% Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 7,
    "page": 1,
    "section": "Physics",
    "topic": "மின்னியல்",
    "en": "Electricity",
    "tam": [
     "மின்னியல் (6-ம் வகுப்பு)",
     "மின்னியல் (7-ம் வகுப்பு)",
     "மின்னியல் (8-ம் வகுப்பு)",
     "மின்னோட்டம் மற்றும் மின்னியல் (9-ம் வகுப்பு)",
     "மின்னியல் (10-ம் வகுப்பு)"
    ],
    "eng": [
     "Electricity (6th Std)",
     "Electricity (7th Std)",
     "Electric charge and Electric current (9th Std)",
     "Electricity (8th Std)",
     "Electricity (10th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 8,
    "page": 1,
    "section": "Physics",
    "topic": "காந்தவியல்",
    "en": "Magnetism",
    "tam": [
     "காந்தவியல் (6-ம் வகுப்பு)",
     "காந்தவியல் (8-ம் வகுப்பு)",
     "காந்தவியல் (9-ம் வகுப்பு)"
    ],
    "eng": [
     "Magnetism (6th Std)",
     "Magnetism (8th Std)",
     "Magnetism (9th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 9,
    "page": 1,
    "section": "Physics",
    "topic": "ஒளி",
    "en": "Light",
    "tam": [
     "ஒளி (7-ம் வகுப்பு)",
     "ஒளி (8-ம் வகுப்பு)",
     "ஒளி (9-ம் வகுப்பு)",
     "ஒளியியல் (10-ம் வகுப்பு)"
    ],
    "eng": [
     "Light (7th Std)",
     "Light (8th Std)",
     "Light (9th Std)",
     "Optics (10th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 10,
    "page": 1,
    "section": "Physics",
    "topic": "ஒன் >",
    "en": "Ki Sound",
    "tam": [
     "ஒலி (8-ம் வகுப்பு)",
     "ஒலி (9-ம் வகுப்பு)",
     "ஒலியியல் (10-ம் வகுப்பு)"
    ],
    "eng": [
     "Sound (8th Std)",
     "Sound (9th Std)",
     "Acoustics (10th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 11,
    "page": 1,
    "section": "Physics",
    "topic": "வெப்பம் க று ட... ன",
    "en": "Heat",
    "tam": [
     "வெப்பம் (€-ம் வகுப்பு)",
     "வெப்பம் மற்றும் வெப்பநிலை (7-ம் வகுப்பு)",
     "வெப்பம் (8-ம் வகுப்பு)",
     "வெப்பம் (9-ம் வகுப்பு)",
     "வெப்ப இயற்பியல் (10-ம் வகுப்பு)"
    ],
    "eng": [
     "Heat (6th Std)",
     "Heat & Temperature (7 Std)",
     "Heat (8th Std)",
     "Heat (9th Std)",
     "Thermal Physics (10th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 12,
    "page": 2,
    "section": "Physics",
    "topic": "அணுக்கரு இயற்பியல்",
    "en": "Nuclear Physics",
    "tam": [
     "அணுக்கரு இயற்பியல் (10-ம் வகுப்பு)",
     "அணு மற்றும் அணுக்கரு இயற்பியல் (12-ம் வகுப்பு)"
    ],
    "eng": [
     ". Nuclear Physics (10th Std)",
     ". Atomic and Nuclear Physics (19% Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 13,
    "page": 2,
    "section": "Physics",
    "topic": "லேசர், மின்னணுவியல் & தகவல் தொடர்புகள் அடிப்படைகோட்பாடுகளும் அதன் பயன்பாடுகளும்",
    "en": "Laser, Electronics and Communication and basic principles and its applications",
    "tam": [
     "எலக்ட்ரானியல் மற்றும் தகவல் தொடர்பு அமைப்புகள் (12-ம் வகுப்பு)"
    ],
    "eng": [
     ". Electronics and Communication System (12th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 14,
    "page": 2,
    "section": "Chemistry",
    "topic": "தனிமங்களும் சேர்மங்களும், உலோகவியல்",
    "en": "Elements and Compounds, Metallurgy",
    "tam": [
     "தனிமங்களின் ஆவர்த்தன அட்டவணைகள் (9-ம் வகுப்பு)",
     "தனிமங்களின் ஆவர்த்தன அட்டவணைகள் (10-ம் வகுப்பு)",
     "கார்பனும் அதன் சேர்மங்களும் (9-ம் வகுப்பு)",
     "கார்பனும் அதன் சேர்மங்களும் (10-ம் வகுப்பு)",
     "நம்மைச் சுற்றியுள்ள பருப்பொருள்கள் (8-ம் வகுப்பு)"
    ],
    "eng": [
     "Periodic Classification of Elements (9th Std)",
     "Periodic Classification of Elements (10th Std)",
     "Carbon and its compounds (9th Std)",
     "4, Carbon and its compounds (10th Std)",
     "Matter around us (8 Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 15,
    "page": 2,
    "section": "Chemistry",
    "topic": "அமிலங்கள், காரங்கள், உப்புகள்",
    "en": "Acids, Bases, Salts",
    "tam": [
     "அமிலங்கள், காரங்கள் மற்றும் உப்புகள் (8-ம் வகுப்பு)",
     "அமிலங்கள், காரங்கள் மற்றும் உப்புகள் (9-ம் வகுப்பு)",
     "வேதிவினைகளின் வகைகள் (10-ம் வகுப்பு) (10.5 - 10.8 மட்டும்)"
    ],
    "eng": [
     "Acid, Bases and Salts (8thStd)",
     "Acid, Bases and Salts (9thStd)",
     "Types of Chemical reactions (10% Std) (10.5 - 10.8 Only)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 16,
    "page": 2,
    "section": "Chemistry",
    "topic": "பெட்ரோலிய பொருட்கள்",
    "en": "Petroleum Products",
    "tam": [
     "அன்றாட வாழ்வில் வேதியியல் (8-ம் வகுப்பு)"
    ],
    "eng": [
     "Chemistry in Everyday life (8th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 17,
    "page": 2,
    "section": "Chemistry",
    "topic": "உரங்கள், பூச்சிக்கொல்லிகள்",
    "en": "Fertilisers, Pesticides",
    "tam": [
     "பொருளாதார உயிரியல் (9-ம் வகுப்பு)",
     "பயிர்ப்பெருக்கம் மற்றும் மேலாண்மை (8-ம் வகுப்பு)"
    ],
    "eng": [
     "Economic Biology (9th Std)",
     "Crop production and Management (8th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 18,
    "page": 2,
    "section": "Chemistry",
    "topic": "உணவில் கலப்படம்",
    "en": "Food Adulteration",
    "tam": [
     "ஊட்டச்சத்து மற்றும் உடல்நலம் (8-ம் வகுப்பு - 21.3 - 21.6 மட்டும்)"
    ],
    "eng": [
     "Nutrition and Health (9th Std - 21.3 - 21.6)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 19,
    "page": 2,
    "section": "Chemistry",
    "topic": "உயிரியலின் முக்கியக் கோட்பாடுகள்",
    "en": "Main concepts of Life Science",
    "tam": [
     "அன்றாட வாழ்வில் தாவரங்கள் (6-ம் வகுப்பு)",
     "அன்றாட வாழ்வில் விலங்குகள் (7-ம் வகுப்பு)",
     "தாவரங்கள் வாழும் உலகம் (6-ம் வகுப்பு)",
     "விலங்குகள் வாழும் உலகம் (6-ம் வகுப்பு)",
     "செல் (7-ம் வகுப்பு)"
    ],
    "eng": [
     "Plants in Daily life (6th Std)",
     "Animals in Daily life (7th Std)",
     "The living world of Plants (6th Std)",
     "The living world of Animals (6th Std)",
     "Cell (7th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 20,
    "page": 2,
    "section": "Chemistry",
    "topic": "உயிரினங்களின் வகைப்பாடு",
    "en": "Classification of Living Organisms",
    "tam": [
     "வகைப்பாட்டியலின் அடிப்படை (7-ம் வகுப்பு)",
     "தாவர உலகம் (8-ம் வகுப்பு)",
     "விலங்குலகம் (9-ம் வகுப்பு)",
     "தாவர உள்ளமைப்பியல் (9-ம் வகுப்பு)"
    ],
    "eng": [
     "Basis of classification (7th Std)",
     "Plant kingdom (8th Std)",
     "Animal Kingdom (9th Std)",
     "Plant Physiology (9th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 21,
    "page": 2,
    "section": "Chemistry",
    "topic": "பறிணாமம் ந ண்",
    "en": "Evolution © > 7] a",
    "tam": [
     "உயிரின் தோற்றமும், பரிணாமமும் (10-ம் வகுப்பு)",
     "பறிணாமம் (12-ம் வகுப்பு - உயிர் விலங்கியல்)"
    ],
    "eng": [
     "Origin and Evolution of life (10th Std)",
     "Evolution (12th Std Bio Zoology)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 22,
    "page": 2,
    "section": "Chemistry",
    "topic": "மரபியல் “9%",
    "en": "Genetics pa",
    "tam": [
     "மரபியல் (10-ம் வகுப்பு)",
     "மரபுக் கடத்தல் கொள்கைகள் மற்றும் மாறுபாடுகள் (12-ம் வகுப்பு - உயிர் விலங்கியல்)",
     "மூலக்கூறு மரபியல் (12-ம் வகுப்பு - உயிர் விலங்கியல்)"
    ],
    "eng": [
     "Hereditary (10th Std)",
     "Principles of inheritance and variation (19% Std Bio Zoology)",
     "Molecular Genetics (12th Std Bio Zoology)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 23,
    "page": 3,
    "section": "Chemistry",
    "topic": "உடலியல்",
    "en": "Physiology",
    "tam": [
     "தாவர மற்றும் விலங்கு ஹார்மோன்கள் (10-ம் வகுப்பு)",
     "தாவர உடலியல் (9-ம் வகுப்பு)",
     "தாவர உள்ளமைப்பியல் மற்றும் தாவர செயலியல் (10-ம் வகுப்பு)",
     "தாவரங்களின் கடத்துதல் மற்றும் விலங்குகளின் சுற்றோட்டம் (10-ம் வகுப்பு)",
     "தாவரங்களின் இனப்பெருக்கம் மற்றும் மாற்றுருக்கள் (7-ம் வகுப்பு)",
     "விலங்குகள் மற்றும் தாவரங்களின் இனப்பெருக்கம் (10-ம் வகுப்பு)"
    ],
    "eng": [
     "Plants and animal hormones (10th Std)",
     "Plants physiology (9th Std)",
     "Plants anatomy & physiology (10th)",
     "Transportation in plants circulation in Animals (10% std)",
     "Reproduction and modification in Plants (7th Std)",
     "Reproduction in plants and animals (10th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 24,
    "page": 3,
    "section": "Chemistry",
    "topic": "உணவியல், ஊட்டச்சத்து, உடல் நலம் மற்றும் சுகாதாரம், மனிதநோய்கள்",
    "en": "Food, Nutrition, Health and Hygiene, Human Diseases",
    "tam": [
     "உடல்நலம் மற்றும் சுகாதாரம் (6-ம் வகுப்பு)",
     "உடல்நலம் மற்றும் சுகாதாரம் (7-ம் வகுப்பு)",
     "ஊட்டச்சத்து மற்றும் சுகாதாரம் (8-ம் வகுப்பு - 21.1 - 21.2 மட்டும்)",
     "உடல்நலம் மற்றும்நோய்கள் (10-ம் வகுப்பு)",
     "நுண்ணுயிரிகளின் உலகம் (8-ம் வகுப்பு)",
     "மனித நலன் மற்றும் நோய்கள் (12-ம் வகுப்பு - உயிர் விலங்கியல்)",
     "வளரிளம் பருவமடைதல் (8-ம் வகுப்பு)"
    ],
    "eng": [
     "Health and Hygiene (6th Std)",
     "Health and Hygiene (7th Std)",
     "Nutrition and Health (9th Std - 21.1 — 21.2)",
     "Disease and Health (10th Std)",
     "World of Microbes (9th Std)",
     "Human health and diseases (19% Std Bio Zoology)",
     "Reaching the age of adolescence (8tk Science)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 25,
    "page": 3,
    "section": "Chemistry",
    "topic": "சுற்றுப்புறச்சூழல் மற்றும் சூழலியல்",
    "en": "Environmental Science and Ecology",
    "tam": [
     "நமது சுற்றுச்சூழல் (6-ம் வகுப்பு)",
     "தாவரங்கள் மற்றும் விலங்குகளைப் பாதுகாத்தல் (8-ம் வகுப்பு)",
     "சுற்றுச்சூழல் அறிவியல் (9-ம் வகுப்பு)",
     "சுற்றுச்சூழல் மேலாண்மை (10-ம் வகுப்பு)"
    ],
    "eng": [
     "Our Environment (6th Std)",
     "Conservation of Plants and Animals (8th Std)",
     "Environmental Science (9th Std)",
     "Environmental Management (10th Std"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   }
  ]
 },
 {
  "id": 2,
  "unit": "அலகு II",
  "title": "இந்தியாவின் புவியியல் / Geography of India",
  "questions": 5,
  "info": "Geography of India (5 questions). Text was read from the PDF by OCR, so check the original PDF if a word looks wrong.",
  "topics": [
   {
    "n": 26,
    "page": 3,
    "section": "",
    "topic": "புவி அமைவிடம்",
    "en": "Earth Location",
    "tam": [
     "இந்தியா - அமைவிடம், இயற்கை அமைப்புகள் (10-ம் வகுப்பு)"
    ],
    "eng": [
     "India - Location, Physical Features and relief"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 27,
    "page": 3,
    "section": "",
    "topic": "இயற்கை அமைவுகள், ஆறுகள்",
    "en": "Physical features, Rivers",
    "tam": [
     "&. பயியான அமைப்பு ரம் வகுப்பு)",
     "புவி மாதிரி (€-ம் வகுப்பு)"
    ],
    "eng": [
     "பப்ப பபர்",
     "The Globe (6th Std)",
     "The Structure of the Earth (7th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 28,
    "page": 3,
    "section": "",
    "topic": "பருவமழை, மழைப்பொழிவு, வானிலை மற்றும் காலநிலை, நீர் வளங்கள்",
    "en": "Monsoon, Rainfall, Weather and Climate Water Resources",
    "tam": [
     "வானிலை மற்றும் காலநிலை (8-ம் வகுப்பு)",
     "நீரியல் சுழற்சி (9-ம் வகுப்பு)",
     "வளிமண்டலம் (9-ம் வகுப்பு)",
     "இந்தியா - காலநிலை மற்றும் இயற்கைத் தாவரங்கள் (10-ம் வகுப்பு)",
     "வளிமண்டலம் (11-ம் வகுப்பு)"
    ],
    "eng": [
     "Weather and Climate (8th Std)",
     "Hydrological cycle (9th Std)",
     "Atmosphere (9th Std)",
     "India - Climate and Natural Vegetation (10th Std)",
     "Atmosphere (11th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 29,
    "page": 3,
    "section": "",
    "topic": "மண், வேளாண் முறைகள்",
    "en": "Soil, Agricultural pattern",
    "tam": [
     "பாறை மற்றும் மண் (8-ம் வகுப்பு)",
     "இந்தியா - மண் மற்றும் வேளாண்மை (10-ம் வகுப்பு)"
    ],
    "eng": [
     "Rocks and Soils (8th Std)",
     "India - Soil and agriculture (10th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 30,
    "page": 3,
    "section": "",
    "topic": "கனிம வளங்கள் மற்றும் இயற்கை வளங்கள், காடு மற்றும் வன உயிரினங்கள்",
    "en": "Minerals and Natural Resources Forest and Wildlife",
    "tam": [
     "இந்தியா - காலநிலை மற்றும் இயற்கைத் தாவரங்கள் (10-ம் வகுப்பு)",
     "இந்தியா - கனிம மற்றும் இயற்கை வளங்கள் (10-ம் வகுப்பு)",
     "வளங்கள் (7-ம் வகுப்பு)",
     "வளங்கள் (12-ம் வகுப்பு)"
    ],
    "eng": [
     "India - Climate and Natural Vegetation (10th Std)",
     "India - Mineral and Natural Resources (10th Std)",
     "Resources (7th Std)",
     "Resources ( 12th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 31,
    "page": 3,
    "section": "",
    "topic": "போக்குவரத்து, தகவல் தொடர்பு",
    "en": "Transport, Communication",
    "tam": [
     "இந்தியா - மக்கள்தொகை, போக்குவரத்து, வணிகம் மற்றும் தொலைத்தொடர்பு (10-ம் வகுப்பு)",
     "புவி தகவலியல் (12-ம் வகுப்பு)"
    ],
    "eng": [
     "India - Population, Transport, Trade and Communication (10th Std)",
     "Geoinformatics (12th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 32,
    "page": 4,
    "section": "",
    "topic": "சமூகப் புவியியல் - இனம், மொழிக் குழுக்கள் மற்றும் முக்கியப் பழங்குடிகள்",
    "en": "Social Geography - Race, Linguistic Groups and Major tribes",
    "tam": [
     "கலாச்சாரம் மற்றும் அரசியல் புவியியல் (12-ம் வகுப்பு - புவியியல்)",
     "மக்கள்தொகை மற்றும் குடியிருப்பு (7-ம் வகுப்பு)"
    ],
    "eng": [
     "Cultural and Political Geography (12th Std - Geography)",
     "Population and Settlement (7th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 33,
    "page": 4,
    "section": "",
    "topic": "இந்தியாவில் மக்கள்தொகை அடர்த்தி மற்றும் பரவல்",
    "en": "Population density and distribution in India",
    "tam": [
     "இந்தியா - மக்கள்தொகை, போக்குவரத்து, வணிகம் மற்றும் தொலைத்தொடர்பு (10-ம் வகுப்பு)",
     "(மக்கள்தொகை தொடர்பான தகவல்கள் மட்டும்)"
    ],
    "eng": [
     "India - Population, Transport, Trade and Communication (10th Std)",
     "(Population related information’s only)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 34,
    "page": 4,
    "section": "",
    "topic": "இயற்கைப் பேரிடர், பேரிடர் மேலாண்மை",
    "en": "Natural Disaster, Disaster Management",
    "tam": [
     "பேரிடர் மேலாண்மை (7 மற்றும் 9-ம் வகுப்பு)",
     "இடர்கள் (8-ம் வகுப்பு)",
     "மனிதனால் ஏற்படும் இடர்கள் (9-ம் வகுப்பு)",
     "பேரிடரைப் புரிந்து கொள்ளுதல் (6-ம் வகுப்பு)",
     "இயற்கைப் பேரிடர் - பேரிடர் குறைப்பு, நடவடிக்கை தொடர்பான சமூக விழிப்புணர்வு (11-ம் வகுப்பு)",
     "மனிதனால் ஏற்படும் இடர்கள் - பேரிடர் குறைப்பு, நடவடிக்கை தொடர்பான சமூக விழிப்புணர்வு (12-ம் வகுப்பு)"
    ],
    "eng": [
     "Disaster Management (7th, 9th Std)",
     "Hazards (8th Std)",
     "Manmade Disaster (9th Std)",
     "Understanding Disaster (6th Std)",
     "Natural Disaster — Public awareness for Disaster Risk reduction (11th Std)",
     "Manmade disaster, Public awareness for Disaster Risk Reduction (12th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 35,
    "page": 4,
    "section": "",
    "topic": "சுற்றுச்சூழல் மாசுபடுதல்: காரணங்களும் தடுப்பு முறைகளும் - பருவநிலை மாற்றம் - பசுமை ஆற்றல்",
    "en": "Environmental pollution: Reasons and preventive measures - Climatic change - Green energy.",
    "tam": [
     "மனிதனும் சுற்றுச்சூழலும் (8-ம் வகுப்பு)",
     "பேணத்தகுந்த மேம்பாடு (12-ம் வகுப்பு - புவியியல்)",
     "வளிமண்டலம் (11-ம் வகுப்பு)",
     "3 & 6.4 மட்டும்)"
    ],
    "eng": [
     "Man and Environment (9th Std)",
     "Sustainable Development (19% Std - Geography)",
     "Atmosphere (11% Std)",
     "3 — 6.4 Only)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   }
  ]
 },
 {
  "id": 3,
  "unit": "அலகு III",
  "title": "இந்தியாவின் வரலாறு, பண்பாடு மற்றும் இந்திய தேசிய இயக்கம் / History, Culture and Indian National Movement",
  "questions": 10,
  "info": "History, Culture and Indian National Movement (10 questions). Text was read from the PDF by OCR, so check the original PDF if a word looks wrong.",
  "topics": [
   {
    "n": 36,
    "page": 4,
    "section": "",
    "topic": "சிந்து சமவெளி நாகரிகம்",
    "en": "Indus Valley Civilization",
    "tam": [
     "சிந்துவெளி நாகறிகம் (6-ம் வகுப்பு)",
     "சிந்துவெளி நாகரிகம் (8-ம் வகுப்பு - 2.5 மட்டும்)",
     "சிந்துவெளி நாகரிகம் (11-ம் வகுப்பு வரலாறு - 1.4 மட்டும்)",
     "சிந்துவெளி நாகரிகம் (11-ம் வகுப்பு அறவியல்)"
    ],
    "eng": [
     "Indus valley civilization (6th std)",
     "Indus valley civilization (9th std - 2.5 only)",
     "Indus valley civilization (11th std History- 1.4 only)",
     "சிந்துவெளி நாகரிகம் (11-ம் வகுப்பு அறவியல்)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 37,
    "page": 4,
    "section": "",
    "topic": "குப்தர்கள்",
    "en": "Guptas ©] > Mi",
    "tam": [
     "பேரரசுகளின் காலம் - குப்தர்கள் (ம) வர்த்தமானர்கள் (6-ம் வகுப்பு)",
     "குப்தர்கள் (11-ம் வகுப்பு)"
    ],
    "eng": [
     "Age of empires - Guptas and Vardamanas (6th Std)",
     "Guptas (11th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 38,
    "page": 4,
    "section": "",
    "topic": "தில்லி சுல்தான்கள்",
    "en": "Delhi Sultans",
    "tam": [
     "டெல்லி சுல்தான்கள் (7-ம் வகுப்பு)",
     "அரேபியர்கள் மற்றும் துருக்கியர்கள் வருகை (11-ம் வகுப்பு - வரலாறு)"
    ],
    "eng": [
     "Delhi Sultanate (7th Std)",
     "Advent of Arabs and Turks (11th Std - History)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 39,
    "page": 4,
    "section": "",
    "topic": "இன ண முசனாயாகள் வனை லவை",
    "en": "Mughals",
    "tam": [
     "முகலாயப் பேரரசு (7-ம் வகுப்பு)",
     "முகலாயர்கள் (11-ம் வகுப்பு - வரலாறு)"
    ],
    "eng": [
     "Mughal Empire (7th Std)",
     "The Mughals (11th Std - History)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 40,
    "page": 4,
    "section": "",
    "topic": "மராத்தியர்கள்",
    "en": "Marathas",
    "tam": [
     "மராத்தியர்கள் மற்றும் பேஷ்வாக்களின் எழுச்சி (7-ம் வகுப்பு)",
     "மராத்தியர்கள் (11-ம் வகுப்பு - வரலாறு)"
    ],
    "eng": [
     "Rise of Marathas and Peshwas (7th Std)",
     "Marathas (11th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 41,
    "page": 4,
    "section": "",
    "topic": "விஜயநகர மற்றும் பாமினி அரசுகள்",
    "en": "Vijayanagar and Bahmini empire",
    "tam": [
     "விஜயநகர மற்றும் பாமினி அரசுகள் (7-ம் வகுப்பு)",
     "விஜயநகர மற்றும் பாமினி அரசுகள் (11-ம் - வரலாறு)"
    ],
    "eng": [
     "Vijayanagar and Bahmini empire (7th Std)",
     "Age of Vijayanagar and Bahmini Kingdom (11th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 42,
    "page": 4,
    "section": "",
    "topic": "தென் இந்திய வரலாறு",
    "en": "South Indian History",
    "tam": [
     "தென்னிந்திய அரசுகள் (6-ம் வகுப்பு)",
     "பிற்காலச் சோழர்கள் மற்றும் பாண்டியர்கள் (7-ம் வகுப்பு)",
     "பிற்காலச் சோழர்கள் மற்றும் பாண்டியர்கள் (11-ம் வகுப்பு)"
    ],
    "eng": [
     "South Indian Kingdoms (6th Std)",
     "Later Cholas & Pandyas (7thstd)",
     "Later Cholas Pandyas (11௩ Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 43,
    "page": 5,
    "section": "",
    "topic": "இந்திய சமூகப் பண்பாட்டு வரலாற்றில் மாற்றங்களும் தொடர்ச்சியும்",
    "en": "Change and Continuity in the Socio-Cultural History of India",
    "tam": [
     "12-ம் வகுப்பு அறவியல்",
     "இந்தியப் பண்பாடும் சமயங்களும்",
     "இந்திய பண்பாட்டிற்குப் பேரரசுகளில்",
     "பக்தி இயக்கம்",
     "இந்தியப் பண்பாடும் சுற்றுச்சூமலும்"
    ],
    "eng": [
     "கொடை"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 44,
    "page": 5,
    "section": "",
    "topic": "இந்திய பண்பாட்டின் இயல்புகள்",
    "en": "Characteristics of Indian Culture",
    "tam": [
     "இந்திய பண்பாட்டின் இயல்புகள் 12-ம் வகுப்பு (அறவியல்)",
     "தென்னிந்தியாவில் பண்பாட்டு வளர்ச்சி (11-ம் வகுப்பு வரலாறு)",
     "பண்பாட்டு ஒருமைப்பாடு : இந்தியாவில் பக்தி இயக்கம் (11-ம் வகுப்பு வரலாறு)",
     "மாபெரும் சிந்தனையாளர்களும், புதிய நம்பிக்கைகளும் (6-ம் வகுப்பு)"
    ],
    "eng": [
     "இந்திய பண்பாட்டின் இயல்புகள் 12-ம் வகுப்பு (அறவியல்)",
     "Cultural Development in South India (11% Std - History)",
     "Cultural Syncretism : Bhakti Movement in India (11 Std — History)",
     "Great thinkers & New thoughts (6th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 45,
    "page": 5,
    "section": "",
    "topic": "வேற்றுமையில் ஒற்றுமை, இனம், மொழி, வழக்காறு",
    "en": "Unity in Diversity, Race, Language, Custom",
    "tam": [
     "வேற்றுமையில் ஒற்றுமை (12-ம் வகுப்பு அறவியல்)",
     "பன்முகத் தன்மையினை அறிவோம் (6-ம் வகுப்பு)"
    ],
    "eng": [
     "வேற்றுமையில் ஒற்றுமை (12-ம் வகுப்பு அறவியல்)",
     "Understanding diversity (6th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 46,
    "page": 5,
    "section": "",
    "topic": "இந்தியா ஒரு மதச்சார்பற்ற நாடு, சமூக நல்லிணக்கம்",
    "en": "India as a Secular State, Social Harmony",
    "tam": [
     "சமயசார்பின்மையை புரிந்து கொள்ளுதல் (8-ம் வகுப்பு)"
    ],
    "eng": [
     "Understanding secularism (8th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 47,
    "page": 5,
    "section": "",
    "topic": "தேசிய மறுமலர்ச்சி",
    "en": "National Renaissance",
    "tam": [
     "19-ம் நூற்றாண்டில் சமூக மற்றும் சமய சீர்த்திருத்த இயக்கங்கள் (10-ம் வகுப்பு)",
     "நவீனத்தை நோக்கி (11-ம் வகுப்பு - வரலாறு)"
    ],
    "eng": [
     "Social and Religious Reform Movements in the 19th Century (10th Std)",
     "Towards Modernity (11th Std - History)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 48,
    "page": 5,
    "section": "",
    "topic": "ஆங்கிலேயர் ஆட்சிக்கு எதிரான தொடக்க கால எழுச்சிகள்",
    "en": "Early uprising against British Rule",
    "tam": [
     "ஆங்கிலேய ஆட்சிக்கு எதிரான தொடக்ககால கிளர்ச்சிகள் (10-ம் வகுப்பு)",
     "ஆங்கிலேய ஆட்சிக்கு தொடக்ககால எதிர்ப்புகள் (11-ம் வகுப்பு - வரலாறு)",
     "ஆங்கிலேய ஆட்சியின் விளைவுகள் (11-ம் வகுப்பு - வரலாறு)",
     "காலணியத்துக்கு எதிரான இயக்கங்களும் மற்றும் தேசியத்தின் தோற்றமும் (10-ம் வகுப்பு - வரலாறு -",
     "1 முதல் 7.3 வரை மட்டும்)"
    ],
    "eng": [
     "Early uprising against British Rule in Tamil Nadu (10th Std)",
     "Early agitation against British Rule (11th Std)",
     "Early Resistance to British Rule (11th Std)",
     "Anti colonial movement and birth of nationalism (10th Std - 7.1 - 7.3)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 49,
    "page": 5,
    "section": "",
    "topic": "இந்திய தேசிய காங்கிரஸ்",
    "en": "Indian National Congress Kf",
    "tam": [
     "தேசியம், காந்திய காலகட்டம் (10-ம் வகுப்பு - வரலாறு)",
     "இந்திய தேசியத்தின் எழுச்சி தீவிர தேசியவாதத்தின் எழுச்சியும், சுதேசி இயக்கமும் (12-ம் வகுப்பு - வரலாறு)",
     "இந்திய விடுதலைப் போரில் முதல் உலகப் போரின் தாக்கம் (12-ம் வகுப்பு - வரலாறு)",
     "காந்தியடிகள் தேசிய தலைவராக உருவெடுத்து மக்களை ஒன்றிணைத்தல் (12-ம் வகுப்பு - வரலாறு)",
     "ஏகாதிபத்தியத்திற்கு எதிரான போராட்டங்களில் புரட்சிகர தேசியவாதிகளின் காலம் (12-ம் வகுப்பு - வரலாறு)",
     "இந்திய தேசிய காங்கிரஸ் மாநாடுகள் மற்றும் அதன் தலைவர்கள் தொடர்பாக படித்துக்கொள்ளவும்."
    ],
    "eng": [
     "Nationalism, Gandhian Phase (10t Std - History)",
     "Rise of Nationalism in India Rise of Extremists and Swadeshi Movement (12% Std - History)",
     "Impact of World war-1 in Indian Freedom Movement (12th Std - History)",
     "Advent of Gandhi & Mass Mobilization (19% Std - History)",
     "Period of Radicalism and Anti-Imperialist Struggles (19% Std - History)",
     "Read the information about Indian National Congress Sessions and its President."
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 50,
    "page": 6,
    "section": "",
    "topic": "தலைவர்கள் உருவாதல் - பி.ஆர். அம்பேத்கர் - பகத்சிங் - பாரதியார் - வ.உ. சிதம்பரனார் - தந்தை பெரியார் - ஜவஹர்லால் நேரு - ரவீந்திரநாத் தாகூர் - ௪. காமராசர் - மகாத்மா காந்தி - மெளலானா அபுல் கலாம் ஆசாத் இராஜாஜி - சுபாஷ் சந்திர போஸ் - முத்துலெட்சுமி அம்மையார் மூவலூர் இராமாமிர்தம் மற்றும் பல தேசத் தலைவர்கள்",
    "en": "Emergence of leaders B.R. Ambedkar Bhagat Singh Bharathiar V.0. Chidambaranar Thanthai Periyar Jawaharlal Nehru Rabindranath Tagore Kamarajar Mahatma Gandhi Maulana Abul Kalam Azad Rajaji Subhash Chandra Bose Muthulaksmi Ammaiyar Muvalur Ramamirtham and other National Leaders",
    "tam": [
     "6-12ம் வகுப்பு வரை உள்ள தமிழ், சமூக அறிவியல், வரலாறு (ம)",
     "அரசியல் அறிவியல் புத்தகத்தில் உள்ள தலைவர்களின் தகவல்களை பமுத்துக் கொளள்வும். மேலும், தலைவர்கள் தொடர்பான கூடுதல் தகவல்களையும் படுத்துக் கொள்ளவும்."
    ],
    "eng": [
     "Read all the leaders’ information’s in the text book from 6th to 12th standard in various subjects namely, Tamil, Social Science, History & Political Science & also Read the additional information’s about the leaders."
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 51,
    "page": 6,
    "section": "",
    "topic": "விடுதலைப் போராட்டத்தின் பல்வேறு நிலைகள் : அகிம்சை முறையின் வளர்ச்சி மற்றும் புரட்சிகர இயக்கங்கள்",
    "en": "Different modes of Agitation: Growth of satyagraha and Militant Movements",
    "tam": [
     "ஆங்கிலேய ஆட்சியின் தொடக்க கால எதிர்ப்புகள் (11-ம் வகுப்பு வரலாறு)",
     "தீவிர தேசியவாதத்தின் எழுச்சியும், சுதேசி இயக்கமும் (12-ம் வகுப்பு வரலாறு)",
     "ஏகாதிபத்தியத்திற்கு எதிரான போராட்டங்களில் புரட்சிகர தேசியவாதிகளின் காலம் (12-ம் வகுப்பு - வரலாறு)"
    ],
    "eng": [
     "Early uprising against British Rule (11th Std - History)",
     "Rise of extremists & Nationalists, Swadeshi movement (12th Std - History)",
     "Period of Radicalism and Anti-Imperialist Struggles (19% Std - History)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 52,
    "page": 6,
    "section": "",
    "topic": "வகுப்புவாதம் மற்றும் பிரிவினை",
    "en": "Communalism and Partition",
    "tam": [
     "தேசியவாத அரசியலில் வகுப்புவாதம் (12-ம் வகுப்பு - வரலாறு)"
    ],
    "eng": [
     "Communalism in National Politics (12+ Std History)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   }
  ]
 },
 {
  "id": 4,
  "unit": "அலகு IV",
  "title": "இந்திய ஆட்சியியல் / Indian Polity",
  "questions": 15,
  "info": "Indian Polity (15 questions). Text was read from the PDF by OCR, so check the original PDF if a word looks wrong.",
  "topics": [
   {
    "n": 53,
    "page": 6,
    "section": "",
    "topic": "இந்திய அரசியலமைப்பு - அரசியலமைப்பின் முகவுரை அரசியலமைப்பின் முக்கிய கூறுகள் - அடிப்படை உரிமைகள் - அடிப்படைக் கடமைகள் - அரசின் நெறிமுறைக் கோட்பாடுகள் ௮9௭",
    "en": "Constitution of India - Preamble to the Constitution - Salient features of the Constitution - Fundamental Rights - Fundamental Duties - Directive Principles of State Policy",
    "tam": [
     "இந்திய அரசியலமைப்பு 6ம் வகுப்பு",
     "தேசிய சின்னங்கள் (6-ம் வகுப்பு)",
     "இந்திய அரசியலமைப்பு (10-ம் வகுப்பு)",
     "இந்திய அரசியலமைப்பு (12-ம் வகுப்பு)",
     "பன்முகத் தன்மையினை அறிவோம் (6-ம் வகுப்பு)",
     "சமத்துவம் பெறுதல் (6-ம் வகுப்பு)",
     "சமத்துவம் (7-ம் வகுப்பு)",
     "(அரசியலமைப்பில் உள்ள அட்டவணை மற்றும் பகுதிகள் பற்றி படித்துக் கொள்ளவும்)",
     "(அடிப்படைக் கடமைகள் மற்றும் அரசின் நெறிமுறைக் கோட்பாடுகள் தொடர்பான கூடுதல் தகவல்களைப் படித்துக் கொள்ளவும்)"
    ],
    "eng": [
     "Indian Constitution (6th Std)",
     "National Symbols (6th Std)",
     "Indian Constitution (10th Std)",
     "Indian Constitution (12th Std)",
     "Understanding diversity (6th Std)",
     "Achieving equality (6th Std)",
     "Equality (7th Std)",
     "(Read the summary of Schedules and parts in the Constitution)",
     "(Read the Additional information about DPSP and Fundamental Duties)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 54,
    "page": 7,
    "section": "",
    "topic": "ஒன்றியம், மாநிலம் மற்றும் யூனியன் பிரதேசங்கள் - குடியுரிமை",
    "en": "Union, State and Union Territory - Citizenship",
    "tam": [
     "இந்திய அரசியலமைப்பு (10-ம் வகுப்பு)",
     "இந்திய அரசியலமைப்பு (12-ம் வகுப்பு)",
     "குடிமகன் மற்றும் குடியுரிமை (8-ம் வகுப்பு)",
     "தேசக் கட்டமைப்பின் சவால்கள் (12-ம் வகுப்பு - அரசியல் அறிவியல் - பாடம் 7)"
    ],
    "eng": [
     "Indian Constitution (10th Std)",
     "Indian Constitution (12th Std)",
     "Citizens and Citizenship (8th Std)",
     "Challenges of Nation building (12th Std —Political Science - Lesson-7)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 55,
    "page": 7,
    "section": "",
    "topic": "ஒன்றிய நிர்வாகம் - ஒன்றிய நாடாளுமன்றம்",
    "en": "Union Executive - Union Legislature",
    "tam": [
     "மத்திய அரசு (10-ம் வகுப்பு)",
     "சட்டமன்றம் (12-ம் வகுப்பு - 2.1 - 2.5 மட்டும்)",
     "ஆட்சித்துறை (12-ம் வகுப்பு - 3.1 - 3.4 மட்டும்)"
    ],
    "eng": [
     "Union Government (10th Std)",
     "Legislature (12th Std - 2.1 - 2.5)",
     "Executive (12th Std 3.1 - 3.4)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 56,
    "page": 7,
    "section": "",
    "topic": "மாநில நிர்வாகம் - மாநில சட்டமன்றம்",
    "en": "State Executive - State Legislature",
    "tam": [
     "மாறில அரசு எவ்வாறு செயல்படுகிறது (6-ம் வகுப்பு)",
     "மாநில அரசு (7-ம் வகுப்பு)",
     "மாநில அரசு (10-ம் வகுப்பு 3.1 - 3.4 மட்டும்)",
     "ஆட்சித்துறை (12ம் வகுப்பு 3.5 பகுதி மட்டும்)",
     "சட்டமன்றம் (12ம் வகுப்பு 2.6 - 2.7 மட்டும்)"
    ],
    "eng": [
     "How the State Govt. Works. (8th Std)",
     "State Government (7th Std)",
     "State Government (10th Std - 3.1 - 3.4)",
     "Executive (12th Std - 3.5 only)",
     "Legislative (12th Std 2.6 & 2.7)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 57,
    "page": 7,
    "section": "",
    "topic": "உள்ளாட்சி அமைப்புகள் - பஞ்சாயத்து ராஜ்",
    "en": "Local Governments - Panchayat Raj",
    "tam": [
     "உள்ளாட்சி அரசாங்கம் (6, 9 மற்றும் 11-ம் வகுப்பு)"
    ],
    "eng": [
     "Local Government (6th Std, 9th Std, 11th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 58,
    "page": 7,
    "section": "",
    "topic": "கூட்டாட்சியின் அடிப்படைத் தன்மைகள், மத்திய - மாநில உறவுகள்",
    "en": "Spirit of Federalism - Centre - State Relationships",
    "tam": [
     "இந்தியாவில் கூட்டாட்சி (12-ம் வகுப்பு)"
    ],
    "eng": [
     "Federalism in India (12th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 59,
    "page": 7,
    "section": "",
    "topic": "தேர்தல்",
    "en": "Election",
    "tam": [
     "தேர்தல் மற்றும் அதன் பிரதிநிதித்துவம் (11-ம் வகுப்பு)",
     "தேர்தல், அரசியல் கட்சிகள் மற்றும் அழுத்தக் குழுக்கள் (9-ம் வகுப்பு)",
     "அரசியல் கட்சிகள் (7-ம் வகுப்பு)"
    ],
    "eng": [
     "Elections and its representatives (11th Std)",
     "Election, political parties, Pressure groups (9th Std)",
     "Political parties (7th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 60,
    "page": 7,
    "section": "",
    "topic": "இந்திய நீதி அமைப்புகள், சட்டத்தின் ஆட்சி",
    "en": "Judiciary in India, Rule of Law",
    "tam": [
     "நீதித்துறை (8-ம் வகுப்பு)",
     "மத்திய அரசு (2.6) மற்றும் மாநில அரசு (3.5) (10-ம் வகுப்பு)",
     "இந்திய நீதித்துறை (12-ம் வகுப்பு)"
    ],
    "eng": [
     "Judiciary (8th Std)",
     "Union Government (2.6)",
     "& State Government (3.5)",
     "(10th Std)",
     "Indian Judiciary (12th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 61,
    "page": 7,
    "section": "",
    "topic": "பொதுவாழ்வில் ஊழல், ஊழல் தடுப்பு நடவடிக்கைகள், லோக்பால் மற்றும் லோக் ஆயுக்தா, தகவல் அறியும் உரிமை",
    "en": "Corruption in Public Life, Anti-corruption measures Lokpal and Lok Ayukta, Right to Information",
    "tam": [
     "லோக்பால், லோக் ஆயுக்தா, தகவல் உரிமை தொடர்பான தலைப்புகளுக்கு கூடுதல் தகவல்களை பமுத்து வரவும்."
    ],
    "eng": [
     "Read the additional information’s about Lokpal, Lok Ayukta, Lok Adalat and RTI."
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 62,
    "page": 7,
    "section": "",
    "topic": "பெண்களுக்கு அதிகாரமளித்தல்",
    "en": "Empowerment of Women",
    "tam": [
     "பெண்கள் மேம்பாடு (7-ம் வகுப்பு)"
    ],
    "eng": [
     "Women empowerment (7th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 63,
    "page": 7,
    "section": "",
    "topic": "நுகர்வோர் பாதுகாப்பு அமைப்புகள் 9-௭",
    "en": "Consumer Protection Forums",
    "tam": [
     "சந்தை மற்றும் நுகர்வோர் பாதுகாப்பு (7-ம் வகுப்பு)",
     "நுகர்வோரியல் (12-ம் வகுப்பு - வணிகவியல்)",
     "நுகர்வோரின் உரிமைகள், கடமைகள் மற்றும் பொறுப்புகள் (12-ம் வகுப்பு - வணிகவியல்)"
    ],
    "eng": [
     "Market and Consumer productions (7th Std)",
     "Consumerism (12th Std — Commerce)",
     "Consumer Rights, Duties and Responsibilities (12th Std —- Commerce)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 64,
    "page": 7,
    "section": "",
    "topic": "மனித உரிமைகள் சாசனம்",
    "en": "Human Rights Charter ENN",
    "tam": [
     "மனித உரிமைகள் மற்றும் ஐ.நா. சபை (8-ம் வகுப்பு)",
     "மனித உரிமைகள் மற்றும் ஐ.நா. சபை (9-ம் வகுப்பு)"
    ],
    "eng": [
     "Human Rights & UNO (8th Std)",
     "Human Rights & UNO (9th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   }
  ]
 },
 {
  "id": 5,
  "unit": "அலகு V",
  "title": "இந்தியப் பொருளாதாரம் மற்றும் தமிழ்நாட்டில் வளர்ச்சி நிர்வாகம் / Indian Economy and Development Administration in Tamil Nadu",
  "questions": 20,
  "info": "Indian Economy and Development Administration in Tamil Nadu (20 questions). Text was read from the PDF by OCR, so check the original PDF if a word looks wrong.",
  "topics": [
   {
    "n": 65,
    "page": 8,
    "section": "",
    "topic": "இந்திய பொருளாதாரத்தின் இயல்புகள்",
    "en": "Nature of Indian Economy",
    "tam": [
     "இந்தியப் பொருளாதாரம் (11-ம் வகுப்பு)",
     "இந்தியப் பொருளாதாரம் - சுதந்திரத்திற்கு முன்னரும், பின்னரும் (11-ம் வகுப்பு- 8.1 - 8.14)",
     "மொத்த உள்நாட்டு உற்பத்தி - அதன் வளர்ச்சி மற்றும்அறிமுகம் (10-ம் வகுப்பு)"
    ],
    "eng": [
     "Indian Economy (11th Std)",
     "Indian Economy Before and After Independence (11th Std 8.13 - 8.15)",
     "GDP Growth and its Introduction (10th Std — HDI, GNHI Topic only)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 66,
    "page": 8,
    "section": "",
    "topic": "ஐந்தாண்டு திட்ட மாதிரிகள் - ஒரு மதிப்பீடு, திட்டக்குழு மற்றும் நிதி ஆயோக்",
    "en": "Five year plan models - An assessment, Planning Commission and Niti Ayog",
    "tam": [
     "இந்தியப் பொருளாதாரம் - சுதந்திரத்திற்கு முன்னரும், பின்னரும் (11ம் வகுப்பு- 8.13- 8.15)",
     "(திட்டக்குழு (ம) நிதி ஆயோக் தொடர்பான கூடுதல் தகவல்களை படித்துக் கொள்ளவும்)"
    ],
    "eng": [
     "Indian Economy Before and After Independence (11th Std 8.13 - 8.15)",
     "(Read the additional information about Planning commission and NITI Aayog)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 67,
    "page": 8,
    "section": "",
    "topic": "வருவாய் ஆதாரங்கள்",
    "en": "Sources of revenue",
    "tam": [
     "தேசிய வருவாய் (12-ம் வகுப்பு - பொருளியல்)"
    ],
    "eng": [
     "National Income (12th Std - Economy)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 68,
    "page": 8,
    "section": "",
    "topic": "இந்திய ரிசர்வ் வங்கி",
    "en": "Reserve Bank of India",
    "tam": [
     "வங்கியியல் (12-ம் வகுப்பு - பொருளியல்)"
    ],
    "eng": [
     "Banking (12th Std - Economy)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 69,
    "page": 8,
    "section": "",
    "topic": "நிதிக் கொள்கை, நிதி ஆணையம், மத்திய மாநில அரசுகளுக்கிடையேயான நிதிப் பகிர்வு",
    "en": "Fiscal Policy, Finance Commission, Resource sharing between Union and State Governments",
    "tam": [
     "நிதிப் பொருளியல் (12-ம் வகுப்பு - பொருளியல்)"
    ],
    "eng": [
     "Fiscal Economics (12th Std - Economy)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 70,
    "page": 8,
    "section": "",
    "topic": "பணவியல் கொள்கை",
    "en": "Monetary Policy",
    "tam": [
     "பணவியல் பொருளியல் (12-ம் வகுப்பு - பொருளியல்)"
    ],
    "eng": [
     "Monetary Economics (12th Std - Economy)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 71,
    "page": 8,
    "section": "",
    "topic": "சரக்கு மற்றும் சேவை வரி",
    "en": "Goods and Services Tax",
    "tam": [
     "வரி மற்றும் அதன் முக்கியத்துவம் (7-ம் வகுப்பு)",
     "அரசு மற்றும் வரிகள் (10-ம் வகுப்பு)",
     "பொருளாதார மேம்பாட்டு அனுபவங்கள் (11-ம் வகுப்பு)",
     "9 & 9.10)"
    ],
    "eng": [
     "Taxes and its importance (7th Std)",
     "Government and Taxes (10th Std)",
     "Development Experiences in Economy (11th Std)",
     "9 & 9.10)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 72,
    "page": 8,
    "section": "",
    "topic": "இந்திய பொருளாதார அமைப்புகள், வேலைவாய்ப்பு உருவாக்கம்",
    "en": "Indian Economic Trends, Employment Generation",
    "tam": [
     "தமிழ்நாட்டின் வேலைவாய்ப்பு (9-ம் வகுப்பு)",
     "வேலைவாய்ப்பு மற்றும் வருமான கோட்பாடுகள் (12-ம் வகுப்பு - பொருளியல்)"
    ],
    "eng": [
     "Employment in Tamil Nadu (9th Std)",
     "Theories of Employment and Income (12th Std - Economics)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 73,
    "page": 8,
    "section": "",
    "topic": "நிலச் சீர்த்திருத்தங்கள் மற்றும் வேளாண்மை, வேளாண்மையில் அறிவியல் தொழில்நுட்பத்தின் பயன்பாடு",
    "en": "Land Reforms and Agriculture, Application of Science and Technology in Agriculture",
    "tam": [
     "பொருளாதார மேம்பாட்டு அனுபவங்கள் (11-ம் வகுப்பு)",
     "உணவு பாதுகாப்பு மற்றும் ஊட்டச்சத்து (10-ம் வகுப்பு)",
     "ஓர் புதிய சமூக - பொருளாதார ஒழுங்கமைவை எதிர் நோக்குதல் (12-ம் வகுப்பு - வரலாறு)",
     "திட்டமிடலும் வளர்ச்சி அரசியலும் (12-ம் வகுப்பு - அரசியல் அறிவியல்)",
     "தமிழ்நாட்டில் வேளாண்மை (9-ம் வகுப்பு)"
    ],
    "eng": [
     "Development Experiences in Economy (11th Std)",
     "Food Security and Nutrition (10th Std)",
     "Envisioning a new socio- economic order (12% Std - History)",
     "Planning and Development Politics (12th Std — Political Science)",
     "Agriculture in Tamil Nadu (9th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 74,
    "page": 8,
    "section": "",
    "topic": "தொழில் வளர்ச்சி",
    "en": "Industrial growth",
    "tam": [
     "தமிழ்நாடு தொழில்துறை அமைப்புகள் (10-ம் வகுப்பு)",
     "பொது மற்றும் தனியார்துறை (6-ம் வகுப்பு)"
    ],
    "eng": [
     "Industrial clusters in Tamil Nadu (10th Std)",
     "Public and Private Sectors (8th Std)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 75,
    "page": 8,
    "section": "",
    "topic": "ஊரக நலன்சார் திட்டங்கள், சமூகப் பிரச்சனைகள், மக்கள் தொகை, கல்வி, நலவாழ்வு, வறுமை",
    "en": "Rural Welfare Oriented Programmes, Social Problems Population, Education, Health, Poverty",
    "tam": [
     "ஊரக பொருளாதாரம் (11-ம் வகுப்பு பொருளியல்)",
     "(சமூகப் பிரச்சனைகள், மக்கள் தொகை, கல்வி, நலவாழ்வு, வறுமை தொடர்பான கூடுதல் தகவல்களுக்கு 2015-ம் ஆண்டு 11-ம் வகுப்பு பொருளியல் புத்தகத்தைப் படித்துக் கொள்ளவும்)"
    ],
    "eng": [
     "Rural Economy (11th Std Economics)",
     "(Read the addition information about the topic Social Problems Population, Education, Health, Poverty in 110 Std Economics Book 2015 Edition)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 76,
    "page": 9,
    "section": "",
    "topic": "தமிழ்நாட்டின் மனிதவள மேம்பாட்டுக் குறியீடுகளும் அவற்றை தேசிய மற்றும் பிற மாநிலங்களுக்கான குறியீடுகளுடன் ஒப்பாய்வும்",
    "en": "Human Development Indicators in Tamil Nadu and a comparative assessment across the Country",
    "tam": [
     "மொத்த உள்நாட்டு உற்பத்தி வளர்ச்சி (1.5 மனித வள மேம்பாடு)",
     "(10-ம் வகுப்பு சமூக அறிவியல்)",
     "இந்திய பொருளாதாரம் சுதந்திரத்திற்கு முன் & பின்",
     "14) (11-ம் வகுப்பு பொருளாதாரம்)",
     "மேம்பாட்டை அறிவோம்! தொலைநோக்கு அளவீடு (ம)",
     "நிலைத்தன்மை (9-ம் வகுப்பு சமூக அறிவியல்)",
     "சமீபத்திய HDI மற்றும் அதுசார்ந்த அனைத்து குறியீட்டுத் தகவல்களையும் படுத்துக் கொள்ளவும்."
    ],
    "eng": [
     "Gross Domestic Product and its growth (10th Std Social science)",
     "Indian economy before and after Independence (11% Std Economics)",
     "Understanding Development: Perspectives, Measurement and Sustainability (9th Std Social science)",
     "Read the recent information about HDI and its related index."
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 77,
    "page": 9,
    "section": "",
    "topic": "தமிழகத்தின் சமூக பொருளாதார வளர்ச்சிக்கு சமூக மறுமலர்ச்சி இயக்கங்களின் பங்களிப்பு",
    "en": "Impact of Social Reform Movements in the Socio - Economic Development of Tamil Nadu",
    "tam": [
     "19-ம் நூற்றாண்டில சமூக சமய மறுமலர்ச்சி இயக்கம் (தமிழக தகவல் மட்டும்)",
     "(10-ம் வகுப்பு - சமூக அறிவியல்)",
     "தமிழகத்தில் சமூக மாற்றம் (10-ம் வகுப்பு - சமூக அறிவியல்)"
    ],
    "eng": [
     "Social religious reform movements in 19th Century (Tamilnadu information only)",
     "10th Std Social science)",
     "Social transformation in Tamilnadu (10th Std Social science)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 78,
    "page": 9,
    "section": "",
    "topic": "அரசியல் கட்சிகளும் பலதரப்பு மக்களுக்கான நலத்திட்டங்களும் - இடஒதுக்கீட்டுக் கொள்கைக்கான நியாயங்களும் சமூக வளங்களைப் பெறும் வாய்ப்புகளும் தமிழகத்தின் சமூக பொருளாதார வளர்ச்சியில் சமூகநலத் திட்டங்களின் தாக்கமும் பங்களிப்பும்",
    "en": "Political parties and Welfare schemes - Rationale behind Reservation Policy and access to Social Resources - Role and impact of social welfare schemes in the Socio - Economic Development of Tamil Nadu",
    "tam": [
     "சமூக நீதி (11ம் வகுப்பு - அரசியல் அறிவியல்)",
     "தமிழகத்தின் அரசியல் வளர்ச்சி (11ம் வகுப்பு - அரசியல் அறிவியல்)",
     "தமிழகத்தின் அரசியல் சிந்தனைகள் (11ம் வகுப்பு - அரசியல் அறிவியல்)",
     "நீதிக்கட்சியின் ஆட்சி (12-ம் வகுப்பு வரலாறு பழைய புத்தகம்) (2005-ம் பதிப்பு)",
     "(அரசியல் கட்சிகளின் நலத்திட்டங்கள் மற்றும் இடஒதுக்கீட்டுக் கொள்கைள் தொடர்பான கூடுதல் தகவல்களைப் படித்துக் கொள்ளவும்)"
    ],
    "eng": [
     "Social justice (11th Std - Political science)",
     "Political Development in TamilNadu (11th Std - Political science)",
     "TamilNadu political thoughts (11th Std - Political science)",
     "Rule of Justice party (12th Std History Old Book)",
     "(2005 - Edition)",
     "(Read the additional information about the welfare schemes of political parties and their reservations policies)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 79,
    "page": 9,
    "section": "",
    "topic": "தமிழகத்தின் பொருளாதார போக்குகள்",
    "en": "Economic trends in Tamil Nadu",
    "tam": [
     "தமிழ்நாட்டின் தொழில்துறை தொகுப்புகள் (10-ம் வகுப்பு சமூக அறிவியல்)",
     "தமிழ்நாட்டுப் பொருளாதாரம் (11-ம் வகுப்பு பொருளியல்)"
    ],
    "eng": [
     "Industrial clusters in Tamilnadu (10% Std Social Science)",
     "Tamilnadu Economy (11th Std — Economics)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 80,
    "page": 9,
    "section": "",
    "topic": "சமூக நீதியும் சமூக நல்லிணக்கமும் சமூகப் பொருளாதார மேம்பாட்டின் மூலாதாரங்கள் ௯",
    "en": "Social Justice and Social Harmony as the Cornerstones of Socio - Economic Development YY",
    "tam": [
     "சமூக நீதி (11ம் வகுப்பு - அரசியல் அறிவியல்)",
     "நீதிக்கட்சியின் ஆட்சி (12-ம் வகுப்பு வரலாறு பழைய புத்தகம்) (2005-ம் பதிப்பு)",
     "(சமூக நீதி மற்றும் சமூக நல்லிணக்கம் தொடர்பான கூடுதல் தகவல்களைப் படித்துக் கொள்ளவும்)"
    ],
    "eng": [
     "Social justice (11th Std - Political science)",
     "Rule of Justice party (12th Std History Old Book)",
     "(2005 - Edition)",
     "(Read the additional information about Social Justice and Social Harmony)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 81,
    "page": 9,
    "section": "",
    "topic": "தமிழகத்தின் கல்வி மற்றும் நலவாழ்வு முறைமைகள்",
    "en": "aw \"Vv Education and Health Systems in Tamil Nadu",
    "tam": [
     "இந்தியாவில் கல்வி வளர்ச்சி (8-ம் வகுப்பு)",
     "உணவு, ஊட்டச்சத்து, பாதுகாப்பு (10-ம் வகுப்பு - பொருளியல்)",
     "விடுதலைக்கு முன் தமிழகத்தின் கல்வி நிலை (2005-ம் பதிப்பு)",
     "(8-ம் வகுப்பு சமூக அறிவியல்)",
     "(பாடம் - 4)",
     "விடுதலைக்கு பின் தமிழகத்தின் கல்வி நிலை (2008-ம் பதிப்பு)",
     "(8-ம் வகுப்பு சமூக அறிவியல்)",
     "(hr 1A = 7)",
     "தமிழக அரசின் சமூகநலத் திட்டங்கள் (2005-ம் பதிப்பு)",
     "(8-ம் வகுப்பு சமூக அறிவியல்)",
     "(பாடம் - 9)"
    ],
    "eng": [
     "Education Development in India (8th Std)",
     "Food, Nutrition and Security (10th Std - Economics)",
     "Status of Education in Tamilnadu Before Independence (2005 - Edition)",
     "(8th Std - Social - Lesson-4)",
     "Status of Education in Tamilnadu After",
     "inaepenaence (2005 - Edition)",
     "(8th Std - Social - Lesson-7)",
     "Social welfare schemes in TamilNadu Govennment (8th Std - Social - Lesson-9)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 82,
    "page": 10,
    "section": "",
    "topic": "தமிழகப் புவியியல் கூறுகளும் பொருளாதார வளர்ச்சியில் அவற்றின் தாக்கமும்",
    "en": "Geography of Tamil Nadu and its impact on Economic growth",
    "tam": [
     "தமிழ்நாடு இயற்கை பிரிவுகள் (10-ம் வகுப்பு - புவியியல்)",
     "தமிழ்நாடு மானுட புவியியல் (10-ம் வகுப்பு - புவியியல்)",
     "தமிழ்நாடு பொருளாதாரம் (11-ம் வகுப்பு - பொருளியல்)"
    ],
    "eng": [
     "Physiographic divisions of Tamil Nadu (10% Std)",
     "Human geography of Tamil Nadu (10th Std)",
     "Tamil Nadu economy (11th Std - Economics)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 83,
    "page": 10,
    "section": "",
    "topic": "பல்வேறு துறைகளில் தமிழகம் நிகழ்த்தியுள்ள சாதனைகள் - தமிழகத்தில் மின்னாளுகை",
    "en": "Achievements of Tamil Nadu in various fields - E-Governance in Tamil Nadu",
    "tam": [
     "இந்த தலைப்புகள் தொடர்பான பொதுவான தகவல்களையும் மற்றும் முந்தைய வருட வினாக்களைப் படித்துக் கொள்ளவம்"
    ],
    "eng": [
     "Read the General information above the given topics and also read the previous years question papers for the given topics"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   }
  ]
 },
 {
  "id": 6,
  "unit": "அலகு VI",
  "title": "தமிழ்நாட்டின் வரலாறு, பண்பாடு, மரபு மற்றும் சமூக இயக்கங்கள் / History, Culture, Heritage and Socio-Political Movements of Tamil Nadu",
  "questions": 20,
  "info": "History, Culture, Heritage and Socio-Political Movements of Tamil Nadu (20 questions). Text was read from the PDF by OCR, so check the original PDF if a word looks wrong.",
  "topics": [
   {
    "n": 84,
    "page": 10,
    "section": "",
    "topic": "தமிழ் சமுதாய வரலாறு, அது தொடர்பான தொல்லியல் கண்டுபிடிப்புகள்",
    "en": "History of Tamil Society, related Archaeological discoveries",
    "tam": [
     "கிராம சமூகமும், வாழ்க்கை முறையும் (8-ம் வகுப்பு - சமூக அறிவியல்)",
     "தொடக்ககால தமிழ்ச் சமூகமும், பண்பாடும் (8-ம் வகுப்பு - சமூக அறிவியல்)",
     "தென்னிந்தியாவில் சமுதாய உருவாக்கம் (11ம் வகுப்பு- வரலாறு)",
     "(தொல்லியல் கண்டுப்பிடிப்புகள் தொடர்பான கூடுதல் தகவல்களை பமக்க வாவம்)"
    ],
    "eng": [
     "Rural life and society 8th Standard (Social Science)",
     "Early Tamil Society and Culture 9th Standard (Social Science)",
     "Cultural Development in South India 11th Standard (History)",
     "(Read the addition information about Archaeological discoveries)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 85,
    "page": 10,
    "section": "",
    "topic": "சங்க காலம் முதல் இக்காலம் வரையிலான தமிழ் இலக்கிய வரலாறு",
    "en": "Tamil Literature from Sangam Age till contemporary times",
    "tam": [
     "6 முதல் 12-ம் வகுப்பு வரையுள்ள இலக்கியம் தொடர்பான தகவல்களை பமுத்துக் கொள்ளவும்."
    ],
    "eng": [
     "Read the literature information from 6th to 12th Standard School Books"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 86,
    "page": 10,
    "section": "",
    "topic": "திருக்குறள் - மதச் சார்பற்ற தனித்தன்மையுள்ள இலக்கியம் ௪. அன்றாட வாழ்வியலோடு தொடர்புத் தன்மை மானுடத்தின் மீதான திறக்குறளின் தாக்கம் திருக்குறளும் மாறாத விழுமியங்களும் - சமத்துவம், மனிதநேயம் முதலானவை சமூக அரசியலில் பொருளாதார நிகழ்வுகளில் திறக்குறளின் பொருத்தப்பாடு திருக்குறளின் தத்துவக் கோட்பாடுகள்",
    "en": "Thirukkural Significance as a Secular Literature Relevance to Everyday Life Impact of Thirukkural on Humanity Thirukkural and Universal Values -Equality, Humanism, etc Relevance to Socio-Politico-Economic affairs Philosophical content in Thirukkural",
    "tam": [
     "6 முதல் 12-ம் வகுப்பு வரை உள்ள திருக்குறள் தொடர்பான தகவல்களை பமத்துக் கொள்ளவும்."
    ],
    "eng": [
     "Read the thirukkural from 6th to 12th Standard School Books"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 87,
    "page": 10,
    "section": "",
    "topic": "விடுதலைப் போராட்டத்தில் தமிழ்நாட்டின் பங்கு இ",
    "en": "Role of Tamil Nadu in freedom struggle",
    "tam": [
     "தமிழ்நாட்டில் விடுதலைப் போராட்டம் (2019-ம் பதிப்பு)",
     "10-ம் வகுப்பு - வரலாறு)",
     "விடுதலைப் போராட்டத்தில் 1 தமிழ்நாட்டின் பங்கு (2015-ம் பதிப்பு)",
     "(10-ம் வகுப்பு - வரலாறு)",
     "தமிழ்நாட்டில் சமூக மாற்றங்கள் (2015-ம் பதிப்பு)",
     "(10-ம் வகுப்பு - வரலாறு)"
    ],
    "eng": [
     "Freedom Struggle in TamilNadu (2019 - Edition)",
     "(10th Std - History)",
     "Contribution of TamilNadu in Freedom Struggle (2015 - Edition) (10th Std - History)",
     "Social transformation in TamilNadu (2015 - Edition)",
     "(10th Std - History)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 88,
    "page": 11,
    "section": "",
    "topic": "ஆங்கிலேயருக்கு எதிரான தொடக்க கால கிளர்ச்சிகள்",
    "en": "Early agitations against British Rule",
    "tam": [
     "மக்கள் புரட்சி (8-ம் வகுப்பு)",
     "ஆங்கிலேய ஆட்சிக்கு எதிராக நிகழ்ந்த தொடக்ககாலகிளர்ச்சிகள் (10-ம் வகுப்பு வரலாறு)",
     "ஆங்கிலேய ஆட்சிக்கு தொடக்ககால எதிர்ப்புகள் (11-ம் வகுப்பு வரலாறு)"
    ],
    "eng": [
     "People Revolt (8th Standard)",
     "Early Revolt against British Rule (10th Std - History)",
     "Early uprising against British Rule (11th Std - History)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 89,
    "page": 11,
    "section": "",
    "topic": "விடுதலைப் போராட்டத்தில் பெண்களின் பங்கு",
    "en": "Role of women in freedom struggle",
    "tam": [
     "வேலுநாச்சியார் (6-ம் வகுப்பு - தமிழ்)",
     "விடுதலைப் போராட்டத்தில் பெண்கள் (7-ம் வகுப்பு - தமிழ்)",
     "இந்திய விடுதலைப் போரில் தமிழகப் பெண்களின் பங்கு (8-ம் வகுப்பு தமிழ் புத்தகம்)",
     "(2015 பதிப்பு)",
     "தில்லையாடி வள்ளியம்மை இராணி மங்கம்மாள் (9-ம் வகுப்பு தமிழ் புத்தகம்)",
     "(2015 பதிப்பு)",
     "தமிழ்நாட்டில் சமூக மாற்றங்கள் (2015-ம் பதிப்பு)",
     "(10-ம் வகுப்பு - வரலாறு)"
    ],
    "eng": [
     "வேலுநாச்சியார் (6-ம் வகுப்பு - தமிழ்)",
     "விடுதலைப் போராட்டத்தில் பெண்கள் (7-ம் வகுப்பு - தமிழ்)",
     "இந்திய விடுதலைப் போரில் தமிழகப் பெண்களின் பங்கு (8-ம் வகுப்பு தமிழ் புத்தகம்)",
     "(2015 பதிப்பு)",
     "தில்லையாடி வள்ளியம்மை இராணி மங்கம்மாள் (8-ம் வகுப்பு தமிழ் புத்தகம்)",
     "(2015 பதிப்பு)",
     "Social transformation in Tamilnadu (10t Std History)",
     "(2015 Edition)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 90,
    "page": 11,
    "section": "",
    "topic": "20-ம் நூற்றாண்டுகளில் தமிழ்நாட்டின் சமூக - அரசியல் இயக்கங்களின் பரிணாம வளர்ச்சி - நீதிக்கட்சி, பகுத்தறிவு வாதத்தின் வளர்ச்சி - சுயமரியாதை இயக்கம், திராவிட இயக்கம் மற்றும் இவ்வியக்கங்களுக்கான அடிப்படை கொள்கைகள்",
    "en": "Evolution of 19th and 20th Century Socio-Political Movements in Tamil Nadu - Justice Party, Growth of Rationalism - Self Respect Movement, Dravidian Movement and Principles underlying both these Movements",
    "tam": [
     "தமிழ்நாட்டில் அரசியல் வளர்ச்சி (11-ம் வகுப்பு அரசியல் அறிவியல்)",
     "தமிழ்நாட்டில் அரசியல் சிந்தனைகள் (11-ம் வகுப்பு அரசியல் அறிவியல்)",
     "தமிழ்நாட்டில் சமூக மாற்றங்கள் (10-ம் வகுப்பு - வரலாறு)"
    ],
    "eng": [
     "Political Developments in Tamilnadu (11th Std Political Science)",
     "Tamilnadu Political Thoughts (11th Std Political Science)",
     "Social transformation in Tamilnadu (10% Std History)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 91,
    "page": 11,
    "section": "",
    "topic": "தந்தை பெரியார் மற்றும் பேரறிஞர் அண்ணாவின் பங்களிப்புகள்",
    "en": "Contribution of Thanthai Periyar and Perarignar Anna",
    "tam": [
     "6 முதல் 12-ம் வகுப்பு வரை உள்ள இத்தலைப்பு தொடர்பான தகவல்களை பமத்துக் கொள்ளவும். மேலும் பொதுவான கூடுதல் தகவல்களையும் பமுத்துக் கொள்ளவம்."
    ],
    "eng": [
     "Read the information about this topics from 6th to 12th Standard School Books. Read additional general information about this topics"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   },
   {
    "n": 92,
    "page": 11,
    "section": "",
    "topic": "தமிழ்நாட்டின் பல்வேறு சீர்திருத்தவாதிகள் சீர்திருத்த இயக்கங்கள் மற்றும் மாற்றங்கள்",
    "en": "Various Social reformers, Social reform movements and Social transformation of Tamil Nadu",
    "tam": [
     "நவீனத்தை நோக்கி (தமிழக தகவல்கள் மட்டும்)",
     "(11-ம் வகுப்பு - வரலாறு)",
     "(2019 பதிப்பு)",
     "19-ம் நூற்றாண்டில் சமூக சமய சீர்திருத்த இயக்கங்கள் (தமிழக தகவல்கள் மட்டும்)",
     "(10-ம் வகுப்பு - தொகுதி - 1)",
     "(2019-ம் பதிப்பு)",
     "தமிழ்நாட்டில் சமூக மாற்றங்கள் (10-ம் வகுப்பு - வரலாறு)"
    ],
    "eng": [
     "Toward Modernity (TamilNadu Information only)",
     "(11th Std - History)",
     "(2019 Edition)",
     "Social Religious Reform Movements in 19th Century (TamilNadu Information only)",
     "(10th Std - Social Vol. 1)",
     "(2019 Edition)",
     "Social transformation in TamilNadu (10th Std - History)"
    ],
    "status": "Not Started",
    "date": "",
    "score": "",
    "notes": ""
   }
  ]
 }
];
