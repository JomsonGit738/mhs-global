import irelandImg from "../assets/countries/Ireland.webp";
import ukImg from "../assets/countries/uk.webp";
import usaImg from "../assets/countries/usa.webp";
import canadaImg from "../assets/countries/canada.webp";
import australiaImg from "../assets/countries/australia.webp";
import uaeImg from "../assets/countries/UAE.webp";
import franceImg from "../assets/countries/france.webp";
import germanyImg from "../assets/countries/germany.webp";
import spainImg from "../assets/countries/spain.webp";
import maltaImg from "../assets/countries/malta.webp";

export type DestinationFact = {
  label: string;
  value: string;
};

export type DestinationSection = {
  id: string;
  title: string;
  intro?: string;
  bullets: string[];
};

export type AdmissionStatus = "Open" | "Opening soon" | "Closed";

export type StudyDestination = {
  id: string;
  slug: string;
  country: string;
  flag?: string;
  href: string;
  intakeLabel?: string;
  admissionStatus?: AdmissionStatus;
  featuredInHeader?: boolean;
  name: string;
  image: string;
  imageAlt: string;
  cardEyebrow: string;
  cardSummary: string;
  cardFacts: DestinationFact[];
  overview: string;
  keyFacts: DestinationFact[];
  sections: DestinationSection[];
};

export const studyDestinations: StudyDestination[] = [
  {
    id: "ireland",
    slug: "ireland",
    country: "Ireland",
    flag: "🇮🇪",
    href: "/study-destinations/ireland",
    intakeLabel: "Sep 2026",
    admissionStatus: "Open",
    featuredInHeader: true,
    name: "Study in Ireland",
    image: irelandImg,
    imageAlt: "Students gathered in a modern study environment",
    cardEyebrow: "Europe's fast-rising destination",
    cardSummary:
      "High-quality education, global industry access, and a welcoming English-speaking environment within the EU.",
    cardFacts: [
      { label: "Capital", value: "Dublin" },
      { label: "Language", value: "English" },
      { label: "Intakes", value: "January / September" },
    ],
    overview:
      "Ireland is one of Europe's fastest-growing study destinations for international students. Known for its high-quality education system, strong links with global industries, friendly culture, and safe environment, Ireland offers students excellent academic and career opportunities. It is also home to many multinational companies, making it an ideal location for students seeking global exposure and employment prospects.",
    keyFacts: [
      {
        label: "General",
        value:
          "Ireland is a parliamentary republic located in north-western Europe.",
      },
      { label: "Capital", value: "Dublin" },
      {
        label: "Number of Universities",
        value:
          "8 universities, 5 technological universities, and several institutes of technology and private colleges",
      },
      {
        label: "Climate",
        value: "Temperate maritime climate with mild winters and cool summers",
      },
      { label: "Official Languages", value: "Irish (Gaelic) and English" },
      { label: "Currency", value: "Euro (€)" },
    ],
    sections: [
      {
        id: "why-ireland",
        title: "Why Ireland?",
        bullets: [
          "Globally recognized qualifications with strong academic standards.",
          "English-speaking country within the European Union.",
          "Home to European headquarters of major global companies in technology, pharmaceuticals, and finance.",
          "Strong employment rate for graduates in IT, healthcare, business, engineering, and data analytics.",
          "International students can work 20 hours per week during term time and 40 hours during holidays.",
          "Post-study work visa options allow graduates to stay back for up to 2 years depending on qualification level.",
          "Safe, welcoming, and multicultural environment.",
        ],
      },
      {
        id: "irish-academic-system",
        title: "Irish Academic System",
        intro: "The Irish academic system consists of:",
        bullets: [
          "Universities",
          "Technological Universities",
          "Institutes of Technology",
          "Private Colleges",
          "Language Schools",
          "Secondary Schools",
        ],
      },
      {
        id: "available-qualifications",
        title: "Available Qualifications",
        bullets: [
          "Higher Certificate",
          "Ordinary Bachelor's Degree (Level 7)",
          "Honours Bachelor's Degree (Level 8)",
          "Postgraduate Diploma",
          "Master's Degree",
          "Doctoral Degree (PhD)",
        ],
      },
      {
        id: "entry-test-requirements",
        title: "Entry Test Requirements",
        bullets: [
          "Most Irish institutions require proof of English proficiency through IELTS, typically 6.0 to 6.5 overall depending on the course.",
          "TOEFL and PTE Academic are also widely accepted.",
          "For MBA programs, some universities may require GMAT depending on the applicant's academic and professional background.",
        ],
      },
      {
        id: "intake",
        title: "Intake",
        bullets: ["January", "September"],
      },
      {
        id: "scholarships",
        title: "Scholarships",
        bullets: [
          "Ireland offers a range of scholarships for international students.",
          "Government-funded programs such as the Government of Ireland International Education Scholarship support high-achieving students.",
          "Many universities offer merit-based scholarships ranging from €2,000 to €10,000+.",
          "Research-based scholarships are available for PhD candidates.",
        ],
      },
    ],
  },
  {
    id: "uk",
    slug: "uk",
    country: "UK",
    flag: "🇬🇧",
    href: "/study-destinations/uk",
    intakeLabel: "Sep 2026",
    admissionStatus: "Open",
    featuredInHeader: true,
    name: "Study in UK",
    image: ukImg,
    imageAlt: "Students working together with study materials in a bright learning space",
    cardEyebrow: "Globally respected universities",
    cardSummary:
      "Shorter degrees, strong graduate outcomes, and a multicultural academic environment with deep institutional history.",
    cardFacts: [
      { label: "Capital", value: "London" },
      { label: "Currency", value: "GBP" },
      { label: "Intakes", value: "January / May / September" },
    ],
    overview:
      "The United Kingdom is one of the world's most popular destinations for international students. With its globally respected universities, rich history, multicultural society, and strong career prospects, the UK offers an outstanding academic and cultural experience. Students benefit from high-quality education, shorter course durations, and access to a thriving job market.",
    keyFacts: [
      {
        label: "General",
        value:
          "The UK consists of four countries: England, Scotland, Wales, and Northern Ireland.",
      },
      { label: "Capital", value: "London" },
      {
        label: "Number of Universities",
        value: "160+ recognized universities and higher education institutions",
      },
      {
        label: "Climate",
        value: "Temperate maritime climate with mild summers and cool winters",
      },
      { label: "Official Language", value: "English" },
      { label: "Currency", value: "British Pound Sterling (£ / GBP)" },
    ],
    sections: [
      {
        id: "why-uk",
        title: "Why UK?",
        intro:
          "The UK is home to world-ranked universities with globally recognized qualifications.",
        bullets: [
          "Undergraduate degrees typically take 3 years, and master's degrees 1 year, reducing overall study costs.",
          "Strong academic reputation with centuries-old institutions like the University of Oxford and the University of Cambridge.",
          "Multicultural environment welcoming students from over 180 countries.",
          "Students can work up to 20 hours per week during term time.",
          "Access to the Graduate Route visa, allowing graduates to stay and work for 2 years and 3 years for PhD graduates.",
          "Strong industry links and career opportunities in finance, healthcare, engineering, business, and creative industries.",
        ],
      },
      {
        id: "uk-academic-system",
        title: "UK Academic System",
        intro: "The UK academic system consists of:",
        bullets: [
          "Public universities",
          "Private universities",
          "Further education colleges",
          "Sixth form colleges",
          "Language schools",
          "Foundation pathway providers",
        ],
      },
      {
        id: "available-qualifications",
        title: "Available Qualifications",
        bullets: [
          "Foundation Certificate",
          "Diploma",
          "Higher National Diploma (HND)",
          "Bachelor's Degree",
          "Postgraduate Certificate (PGCert)",
          "Postgraduate Diploma (PGDip)",
          "Master's Degree",
          "Doctoral Degree (PhD)",
        ],
      },
      {
        id: "entry-test-requirements",
        title: "Entry Test Requirements",
        bullets: [
          "Most UK universities require proof of English proficiency through IELTS, typically overall 6.0 to 7.0 bands depending on the course.",
          "Some universities also accept TOEFL or PTE Academic.",
          "For MBA programs, a good GMAT score may be required depending on the institution.",
        ],
      },
      {
        id: "intake",
        title: "Intake",
        bullets: ["January", "May", "September"],
      },
      {
        id: "scholarships",
        title: "Scholarships",
        bullets: [
          "The UK offers numerous scholarships for international students.",
          "Government-funded scholarships such as Chevening Scholarships support outstanding students worldwide.",
          "Many universities offer merit-based scholarships ranging from £2,000 to £15,000+.",
          "Commonwealth scholarships are available for students from eligible countries.",
        ],
      },
    ],
  },
  {
    id: "usa",
    slug: "usa",
    country: "USA",
    flag: "🇺🇸",
    href: "/study-destinations/usa",
    intakeLabel: "Jan 2027",
    admissionStatus: "Opening soon",
    featuredInHeader: false,
    name: "Study in USA",
    image: usaImg,
    imageAlt: "University students discussing their coursework together",
    cardEyebrow: "Research, innovation, and scale",
    cardSummary:
      "Prestigious institutions, broad program choice, strong research culture, and major global career pathways.",
    cardFacts: [
      { label: "Capital", value: "Washington, D.C." },
      { label: "Universities", value: "4000+" },
      { label: "Intakes", value: "January / May / Aug-Sep" },
    ],
    overview:
      "The United States is one of the most sought-after study destinations in the world. With its prestigious universities, diverse range of programs, cutting-edge research opportunities, and multicultural environment, the U.S. offers students an exceptional academic experience along with an enriching lifestyle and countless career opportunities.",
    keyFacts: [
      {
        label: "General",
        value:
          "The United States is a federal republic made up of 50 states and the District of Columbia.",
      },
      { label: "Capital", value: "Washington, D.C." },
      { label: "Number of Universities", value: "4000" },
      {
        label: "Climate",
        value:
          "Generally temperate, but varies widely from tropical and arid regions to arctic climates.",
      },
      { label: "Official Language", value: "English" },
      { label: "Currency", value: "United States Dollar (USD)" },
    ],
    sections: [
      {
        id: "why-usa",
        title: "Why USA?",
        intro:
          "The United States offers world-class education and globally recognized degrees in a dynamic, multicultural environment that fosters innovation and global career growth.",
        bullets: [
          "Home to many of the world's top-ranking universities known for academic excellence and research leadership.",
          "Programs emphasize practical learning, internships, and real-world experience across diverse fields.",
          "The U.S. economy provides vast career opportunities in sectors like technology, business, healthcare, and engineering.",
          "International students can typically work up to 20 hours per week on campus during studies and full-time during academic breaks.",
          "After graduation, students may qualify for Optional Practical Training (OPT) for up to 12 months, with an additional 24-month STEM extension for eligible fields.",
          "The H-1B work visa and other employment-based immigration options offer potential long-term career and residency pathways.",
          "Spouses of certain visa holders such as H-1B or L-1 may also be eligible to live and, in some cases, work in the United States.",
        ],
      },
      {
        id: "american-academic-system",
        title: "American Academic System",
        intro: "The American academic system consists of:",
        bullets: [
          "Public and private primary and secondary schools",
          "Community colleges offering associate degrees and certificate programs",
          "Universities providing undergraduate, graduate, and doctoral degrees",
          "Vocational and technical institutes focused on skill-based training",
          "English language schools and pathway programs for international students",
        ],
      },
      {
        id: "available-qualifications",
        title: "Available Qualifications",
        bullets: [
          "Certificate / Diploma / Associate degree",
          "Bachelor's degree",
          "Master's degree",
          "Doctoral degree (PhD / professional doctorate)",
        ],
      },
      {
        id: "entry-test-requirements",
        title: "Entry Test Requirements",
        bullets: [
          "IELTS or TOEFL scores are required for most undergraduate and graduate programs.",
          "Certain postgraduate programs may also require GRE or GMAT scores depending on the field of study.",
        ],
      },
      {
        id: "study-expenses",
        title: "Study Expenses in USA",
        bullets: [
          "Undergraduate programs: tuition varies by university and program.",
          "Postgraduate programs: tuition varies by institution and field of study.",
        ],
      },
      {
        id: "work-rights",
        title: "Work Rights & Post-Study Stay",
        bullets: [
          "International students can work up to 20 hours per week on-campus during term and full-time during academic breaks.",
          "After graduation, students may be eligible for Optional Practical Training (OPT) to gain work experience in their field of study.",
          "Post-study work duration is typically 12 months for most programs, with an additional 24-month STEM extension for eligible graduates.",
        ],
      },
      {
        id: "intake",
        title: "Intake",
        bullets: ["January", "May", "August / September"],
      },
      {
        id: "scholarships",
        title: "Scholarships",
        bullets: [
          "The United States offers thousands of scholarships and financial aid opportunities for international students each year, including partial and full tuition awards.",
          "Scholarships are provided by federal and state governments, universities, and private organizations, with eligibility criteria varying by program and institution.",
          "Award amounts vary widely, and some U.S. universities offer scholarships ranging from USD 5,000 to USD 50,000+ per year depending on merit, need, and program.",
        ],
      },
    ],
  },
  {
    id: "canada",
    slug: "canada",
    country: "Canada",
    flag: "🇨🇦",
    href: "/study-destinations/canada",
    intakeLabel: "Jan 2027",
    admissionStatus: "Opening soon",
    featuredInHeader: true,
    name: "Study in Canada",
    image: canadaImg,
    imageAlt: "Students studying together in a calm classroom setting",
    cardEyebrow: "High-quality education with migration pathways",
    cardSummary:
      "A safe environment, practical programs, strong work rights, and clear post-study opportunities.",
    cardFacts: [
      { label: "Capital", value: "Ottawa" },
      { label: "Currency", value: "CAD" },
      { label: "Intakes", value: "January / May / September" },
    ],
    overview:
      "Canada is an extremely popular destination for international students for many reasons. With its safe environment, world-class education system, plentiful opportunities, vibrant urban life, and stunning natural beauty, the country provides everything one could wish for in a place to live and study.",
    keyFacts: [
      {
        label: "General",
        value:
          "Canada is a federal nation made up of ten provinces and three territories.",
      },
      { label: "Capital", value: "Ottawa" },
      { label: "Number of Universities", value: "100" },
      {
        label: "Climate",
        value: "Subarctic in many southern regions and Arctic in the north",
      },
      { label: "Official Languages", value: "English and French" },
      { label: "Currency", value: "Canadian Dollar (CAD$)" },
    ],
    sections: [
      {
        id: "why-canada",
        title: "Why Canada?",
        intro:
          "Canada offers world-class education and globally recognized qualifications in an immigration-friendly environment.",
        bullets: [
          "The country has many prestigious universities with affordable tuition fees.",
          "Career-focused programs with co-op options help students gain practical experience.",
          "A strong economy and high job demand create excellent employment opportunities.",
          "International students can work up to 24 hours per week off-campus and full-time on-campus.",
          "Graduates may qualify for a post-graduation work permit of up to three years.",
          "There are clear pathways to permanent residency after completing studies.",
          "Spouses of postgraduate students may also be eligible for open work permits.",
        ],
      },
      {
        id: "canadian-academic-system",
        title: "Canadian Academic System",
        intro: "The Canadian academic system consists of:",
        bullets: [
          "Public and private schools",
          "Universities and colleges",
          "Community colleges and technical institutes",
          "Career colleges",
          "Language schools",
          "Secondary schools",
        ],
      },
      {
        id: "available-qualifications",
        title: "Available Qualifications",
        bullets: [
          "First professional degree",
          "Diploma",
          "Associate degree",
          "Applied degree",
          "Bachelor's degree",
          "Master's degree",
          "Doctoral degree",
        ],
      },
      {
        id: "entry-test-requirements",
        title: "Entry Test Requirements",
        bullets: [
          "Most Canadian universities require proof of English proficiency through TOEFL or IELTS, usually TOEFL 80 to 100 or IELTS 6.0 to 7.0 overall.",
          "For MBA programs, a good GMAT score is often needed, though some schools may waive it for strong applicants.",
        ],
      },
      {
        id: "work-rights",
        title: "Work Rights & Post-Study Stay",
        bullets: [
          "Full-time international students can work on-campus without a permit.",
          "Off-campus work is typically allowed up to 24 hours per week during study and full-time during breaks.",
          "After graduation, eligible students can get a post-graduation work permit of up to 3 years for programs 2 years or longer, or equal to program length if shorter.",
        ],
      },
      {
        id: "intake",
        title: "Intake",
        bullets: ["January", "May", "September"],
      },
      {
        id: "scholarships",
        title: "Scholarships",
        bullets: [
          "Canada actively supports international students seeking high-quality education abroad.",
          "Many scholarships are offered by universities and the government to students with outstanding academic records.",
          "Award amounts vary widely, and some university scholarships for international students range from CAD 10,000 to CAD 60,000+ over multiple years.",
        ],
      },
    ],
  },
  {
    id: "uae",
    slug: "uae",
    country: "UAE",
    flag: "🇦🇪",
    href: "/study-destinations/uae",
    intakeLabel: "Sep 2026",
    admissionStatus: "Open",
    featuredInHeader: false,
    name: "Study in UAE",
    image: uaeImg,
    imageAlt: "Students reviewing notes together in an international campus environment",
    cardEyebrow: "A fast-growing education hub in the Middle East",
    cardSummary:
      "Globally recognized degrees, modern campuses, strong industry links, and English-taught programs in a multicultural setting.",
    cardFacts: [
      { label: "Capital", value: "Abu Dhabi" },
      { label: "Currency", value: "AED" },
      { label: "Intakes", value: "January / September" },
    ],
    overview:
      "The UAE is a fast-growing education hub in the Middle East, offering globally recognized degrees, modern campuses, and strong industry connections. With a diverse international student population and English widely used in education, the UAE provides a dynamic environment for academic and professional growth.",
    keyFacts: [
      {
        label: "General",
        value:
          "The UAE is located in the Middle East and is known for its modern infrastructure and global connectivity.",
      },
      { label: "Capital", value: "Abu Dhabi" },
      {
        label: "Number of Universities",
        value: "70+ universities and international branch campuses",
      },
      {
        label: "Climate",
        value: "Desert climate with hot summers and mild winters",
      },
      { label: "Official Language", value: "Arabic" },
      { label: "Currency", value: "UAE Dirham (AED)" },
    ],
    sections: [
      {
        id: "why-uae",
        title: "Why UAE?",
        intro:
          "The UAE offers a globally oriented education system in a modern, multicultural setting.",
        bullets: [
          "Many programs delivered in English.",
          "Home to international branch campuses from UK, US, and Australian universities.",
          "Strong focus on business, engineering, IT, and hospitality.",
          "Excellent infrastructure and student facilities.",
          "Safe and multicultural environment.",
          "Opportunities for internships and industry exposure.",
          "Students can work part-time subject to visa rules.",
          "Strategic location with global career opportunities.",
        ],
      },
      {
        id: "uae-academic-system",
        title: "UAE Academic System",
        intro: "The UAE higher education system includes:",
        bullets: [
          "Public universities",
          "Private universities",
          "International branch campuses",
          "Vocational and technical institutions",
        ],
      },
      {
        id: "available-qualifications",
        title: "Available Qualifications",
        bullets: [
          "Foundation / Pathway Programs",
          "Diploma Programs",
          "Bachelor's Degree",
          "Master's Degree",
          "Doctoral Degree (PhD)",
          "MBA and specialized business programs",
        ],
      },
      {
        id: "entry-test-requirements",
        title: "Entry Test Requirements",
        bullets: [
          "IELTS typically 5.5 to 6.5 or TOEFL / PTE.",
          "Some universities may conduct internal assessments.",
          "GMAT or GRE for certain postgraduate programs.",
        ],
      },
      {
        id: "intake",
        title: "Intake",
        bullets: [
          "September (main intake)",
          "January (secondary intake)",
          "Some institutions offer rolling admissions",
        ],
      },
      {
        id: "scholarships",
        title: "Scholarships",
        bullets: [
          "University-specific merit-based scholarships.",
          "Government and institutional funding.",
          "Tuition fee discounts and grants.",
        ],
      },
    ],
  },
  {
    id: "france",
    slug: "france",
    country: "France",
    flag: "🇫🇷",
    href: "/study-destinations/france",
    intakeLabel: "Sep 2026",
    admissionStatus: "Opening soon",
    featuredInHeader: false,
    name: "Study in France",
    image: franceImg,
    imageAlt: "Students studying together in a European university setting",
    cardEyebrow: "Academic excellence with cultural depth",
    cardSummary:
      "Prestigious institutions, affordable public university tuition, growing English-taught programs, and access to the European job market.",
    cardFacts: [
      { label: "Capital", value: "Paris" },
      { label: "Currency", value: "EUR" },
      { label: "Intakes", value: "January / September" },
    ],
    overview:
      "France is one of the world's top destinations for higher education, known for its academic excellence, cultural richness, and strong research focus. With an increasing number of English-taught programs, France offers international students access to prestigious institutions and global career opportunities.",
    keyFacts: [
      {
        label: "General",
        value:
          "France is located in Western Europe and is a member of the European Union.",
      },
      { label: "Capital", value: "Paris" },
      {
        label: "Number of Universities",
        value:
          "3,500+ higher education institutions including universities and grandes ecoles",
      },
      {
        label: "Climate",
        value: "Temperate climate with mild winters and warm summers",
      },
      { label: "Official Language", value: "French" },
      { label: "Currency", value: "Euro (€ / EUR)" },
    ],
    sections: [
      {
        id: "why-france",
        title: "Why France?",
        intro:
          "France combines world-class education with rich cultural exposure.",
        bullets: [
          "Increasing number of English-taught programs.",
          "Affordable tuition at public universities.",
          "Prestigious institutions like Sorbonne University.",
          "Strong focus on business, fashion, culinary arts, and engineering.",
          "Access to the European job market.",
          "Opportunity to learn French.",
          "Students can work up to 20 hours per week.",
        ],
      },
      {
        id: "france-academic-system",
        title: "France Academic System",
        intro: "The French system includes:",
        bullets: [
          "Public universities",
          "Grandes ecoles (elite institutions)",
          "Private schools",
          "Specialized institutes",
          "France follows the Bologna Process",
        ],
      },
      {
        id: "available-qualifications",
        title: "Available Qualifications",
        bullets: [
          "Foundation / Pathway Programs",
          "Bachelor's Degree (Licence)",
          "Master's Degree",
          "Doctoral Degree (PhD)",
          "MBA and specialized programs",
        ],
      },
      {
        id: "entry-test-requirements",
        title: "Entry Test Requirements",
        bullets: [
          "IELTS 6.0 to 6.5 or equivalent.",
          "French proficiency such as DELF or DALF for French-taught programs.",
          "GMAT or GRE for business programs.",
        ],
      },
      {
        id: "intake",
        title: "Intake",
        bullets: [
          "September (main intake)",
          "January (limited programs)",
        ],
      },
      {
        id: "scholarships",
        title: "Scholarships",
        bullets: [
          "Eiffel Excellence Scholarship.",
          "Erasmus+ funding.",
          "Government and university scholarships.",
        ],
      },
    ],
  },
  {
    id: "germany",
    slug: "germany",
    country: "Germany",
    flag: "🇩🇪",
    href: "/study-destinations/germany",
    intakeLabel: "Oct 2026",
    admissionStatus: "Opening soon",
    featuredInHeader: false,
    name: "Study in Germany",
    image: germanyImg,
    imageAlt: "Students collaborating in a modern European academic environment",
    cardEyebrow: "Low tuition with strong research excellence",
    cardSummary:
      "High-quality education, minimal tuition costs at public universities, strong STEM pathways, and solid post-study career prospects.",
    cardFacts: [
      { label: "Capital", value: "Berlin" },
      { label: "Currency", value: "EUR" },
      { label: "Intakes", value: "April / October" },
    ],
    overview:
      "Germany is one of the most popular study destinations in Europe, offering high-quality education, low or no tuition fees at public universities, and strong career prospects. Known for its innovation and research excellence, Germany attracts students from around the world.",
    keyFacts: [
      {
        label: "General",
        value:
          "Germany is located in Central Europe and is part of the EU and Schengen Area.",
      },
      { label: "Capital", value: "Berlin" },
      {
        label: "Number of Universities",
        value: "400+ higher education institutions",
      },
      {
        label: "Climate",
        value: "Temperate seasonal climate",
      },
      { label: "Official Language", value: "German" },
      { label: "Currency", value: "Euro (€ / EUR)" },
    ],
    sections: [
      {
        id: "why-germany",
        title: "Why Germany?",
        intro:
          "Germany offers excellent education with minimal tuition costs.",
        bullets: [
          "Low or no tuition fees at public universities.",
          "Wide range of English-taught programs.",
          "Globally respected institutions like Technical University of Munich.",
          "Strong focus on engineering, IT, and sciences.",
          "Opportunity to work 20 hours per week.",
          "Post-study work opportunities through an 18-month job search visa.",
          "Strong economy and job market.",
        ],
      },
      {
        id: "germany-academic-system",
        title: "Germany Academic System",
        intro: "Includes:",
        bullets: [
          "Public universities",
          "Universities of applied sciences",
          "Private universities",
          "Research institutions",
          "Germany follows the Bologna Process",
        ],
      },
      {
        id: "available-qualifications",
        title: "Available Qualifications",
        bullets: [
          "Foundation (Studienkolleg)",
          "Bachelor's Degree",
          "Master's Degree",
          "Doctoral Degree (PhD)",
        ],
      },
      {
        id: "entry-test-requirements",
        title: "Entry Test Requirements",
        bullets: [
          "IELTS 6.0 to 6.5 or TOEFL.",
          "German proficiency such as TestDaF or DSH for German-taught programs.",
          "GRE or GMAT for some programs.",
        ],
      },
      {
        id: "intake",
        title: "Intake",
        bullets: [
          "October (main intake)",
          "April (secondary intake)",
        ],
      },
      {
        id: "scholarships",
        title: "Scholarships",
        bullets: [
          "DAAD scholarships.",
          "Erasmus+.",
          "University-specific funding.",
        ],
      },
    ],
  },
  {
    id: "spain",
    slug: "spain",
    country: "Spain",
    flag: "🇪🇸",
    href: "/study-destinations/spain",
    intakeLabel: "Sep 2026",
    admissionStatus: "Opening soon",
    featuredInHeader: false,
    name: "Study in Spain",
    image: spainImg,
    imageAlt: "Students discussing coursework in a bright European campus setting",
    cardEyebrow: "Affordable study with a vibrant lifestyle",
    cardSummary:
      "Globally recognized universities, lower tuition costs, strong cultural exposure, and access to the wider European job market.",
    cardFacts: [
      { label: "Capital", value: "Madrid" },
      { label: "Currency", value: "EUR" },
      { label: "Intakes", value: "Jan-Feb / September" },
    ],
    overview:
      "Spain is an increasingly popular destination for international students, known for its affordable education, vibrant lifestyle, and globally recognized universities. With a rich cultural heritage, warm climate, and growing number of English-taught programs, Spain offers a unique blend of academic quality and an enjoyable student experience. Students benefit from lower tuition fees compared to many Western countries and access to the wider European job market.",
    keyFacts: [
      {
        label: "General",
        value:
          "Spain is located in southwestern Europe and is part of the European Union and the Schengen Area.",
      },
      { label: "Capital", value: "Madrid" },
      {
        label: "Number of Universities",
        value: "90+ universities and higher education institutions",
      },
      {
        label: "Climate",
        value:
          "Mediterranean climate with hot summers and mild winters, varying by region",
      },
      { label: "Official Language", value: "Spanish" },
      { label: "Currency", value: "Euro (€ / EUR)" },
    ],
    sections: [
      {
        id: "why-spain",
        title: "Why Spain?",
        intro:
          "Spain combines high-quality education with an exceptional lifestyle.",
        bullets: [
          "Increasing number of English-taught programs, especially at postgraduate level.",
          "Affordable tuition fees and lower cost of living compared to countries like the UK or US.",
          "Home to respected institutions such as the University of Barcelona and the Autonomous University of Madrid.",
          "Rich cultural experience with world-famous cuisine, festivals, and historic cities.",
          "Opportunity to learn or improve Spanish, one of the most widely spoken languages globally.",
          "Students can work up to 20 hours per week during studies.",
          "Access to the European job market after graduation subject to visa regulations.",
          "Strong programs in business, tourism, architecture, arts, and engineering.",
        ],
      },
      {
        id: "spain-academic-system",
        title: "Spain Academic System",
        intro: "The Spanish higher education system includes:",
        bullets: [
          "Public universities",
          "Private universities",
          "Business schools",
          "Vocational and technical institutions",
          "Language schools",
          "International study centers",
          "Spain follows the Bologna Process, ensuring compatibility with degrees across Europe",
        ],
      },
      {
        id: "available-qualifications",
        title: "Available Qualifications",
        bullets: [
          "Foundation / Pathway Programs",
          "Diploma Programs",
          "Bachelor's Degree (Grado)",
          "Master's Degree (Master)",
          "Doctoral Degree (PhD)",
          "MBA and specialized business programs",
        ],
      },
      {
        id: "entry-test-requirements",
        title: "Entry Test Requirements",
        bullets: [
          "Proof of English proficiency through IELTS typically 6.0 to 6.5 or TOEFL / PTE for English-taught programs.",
          "For Spanish-taught programs, DELE or SIELE certification may be required.",
          "Some programs may require entrance exams or academic assessments.",
          "GMAT or GRE may be required for certain postgraduate business programs.",
        ],
      },
      {
        id: "intake",
        title: "Intake",
        bullets: [
          "September (main intake)",
          "January / February (limited programs)",
          "Some universities offer rolling admissions or additional intakes",
        ],
      },
      {
        id: "scholarships",
        title: "Scholarships",
        intro:
          "Spain offers various scholarship opportunities for international students:",
        bullets: [
          "Government-funded scholarships through the Spanish Ministry of Education.",
          "Erasmus+ funding for EU and partner-country students.",
          "University-specific merit-based scholarships.",
          "Scholarships from organizations like La Caixa Foundation.",
          "Tuition discounts and financial aid depending on the institution.",
        ],
      },
    ],
  },
  {
    id: "malta",
    slug: "malta",
    country: "Malta",
    flag: "🇲🇹",
    href: "/study-destinations/malta",
    intakeLabel: "Oct 2026",
    admissionStatus: "Open",
    featuredInHeader: false,
    name: "Study in Malta",
    image: maltaImg,
    imageAlt: "Students learning together in a Mediterranean campus environment",
    cardEyebrow: "English-taught study in a Mediterranean setting",
    cardSummary:
      "British-style education, affordable tuition, a safe student environment, and a smaller-scale academic experience within Europe.",
    cardFacts: [
      { label: "Capital", value: "Valletta" },
      { label: "Currency", value: "EUR" },
      { label: "Intakes", value: "February / October" },
    ],
    overview:
      "Malta is an emerging study destination offering British-style education, English-taught programs, and a Mediterranean lifestyle. Its safe environment and smaller student population provide a more personalized academic experience.",
    keyFacts: [
      {
        label: "General",
        value:
          "Malta is an island country in Southern Europe, part of the EU and Schengen Area.",
      },
      { label: "Capital", value: "Valletta" },
      {
        label: "Number of Universities",
        value: "10+ institutions",
      },
      {
        label: "Climate",
        value: "Mediterranean climate with hot summers and mild winters",
      },
      { label: "Official Language", value: "English and Maltese" },
      { label: "Currency", value: "Euro (€ / EUR)" },
    ],
    sections: [
      {
        id: "why-malta",
        title: "Why Malta?",
        intro:
          "Malta offers a relaxed, English-speaking environment with quality education.",
        bullets: [
          "English is widely spoken and used in education.",
          "Affordable tuition compared to the UK.",
          "Recognized institutions like the University of Malta.",
          "Safe and student-friendly environment.",
          "Strong tourism, business, and IT programs.",
          "Opportunity to work part-time.",
          "Gateway to Europe.",
        ],
      },
      {
        id: "malta-academic-system",
        title: "Malta Academic System",
        intro: "Includes:",
        bullets: [
          "Public universities",
          "Private institutions",
          "Vocational colleges",
          "Language schools",
        ],
      },
      {
        id: "available-qualifications",
        title: "Available Qualifications",
        bullets: [
          "Foundation Programs",
          "Diploma Programs",
          "Bachelor's Degree",
          "Master's Degree",
          "Doctoral Degree",
        ],
      },
      {
        id: "entry-test-requirements",
        title: "Entry Test Requirements",
        bullets: [
          "IELTS typically 5.5 to 6.5.",
          "Some institutions may conduct interviews.",
        ],
      },
      {
        id: "intake",
        title: "Intake",
        bullets: [
          "October (main intake)",
          "February (secondary intake)",
        ],
      },
      {
        id: "scholarships",
        title: "Scholarships",
        bullets: [
          "Government of Malta scholarships.",
          "Erasmus+.",
          "Institutional scholarships and fee discounts.",
        ],
      },
    ],
  },
  {
    id: "australia",
    slug: "australia",
    country: "Australia",
    flag: "🇦🇺",
    href: "/study-destinations/australia",
    intakeLabel: "Feb 2027",
    admissionStatus: "Open",
    featuredInHeader: true,
    name: "Study in Australia",
    image: australiaImg,
    imageAlt: "Students reviewing notes together in a collaborative campus environment",
    cardEyebrow: "Flexible study with strong work rights",
    cardSummary:
      "Career-oriented study, practical training, and clear post-study work options in a welcoming setting.",
    cardFacts: [
      { label: "Capital", value: "Canberra" },
      { label: "Currency", value: "AUD" },
      { label: "Intakes", value: "February / July / November" },
    ],
    overview:
      "Australia is an extremely popular international study destination for many reasons. With its safe and welcoming environment, world-class education system, wide range of course options, and vibrant lifestyle, Australia delivers everything you could want from your study and living experience.",
    keyFacts: [
      {
        label: "General",
        value:
          "Australia is the world's sixth-largest country by area, comprising six states and two major territories.",
      },
      { label: "Capital", value: "Canberra" },
      { label: "Number of Universities", value: "43" },
      {
        label: "Climate",
        value:
          "Varies widely by region, from tropical in the north to temperate in the south and arid inland",
      },
      { label: "Official Language", value: "English" },
      { label: "Currency", value: "Australian Dollar (AUD)" },
    ],
    sections: [
      {
        id: "why-australia",
        title: "Why Australia?",
        intro:
          "Australia provides world-class education and internationally recognized qualifications in a welcoming and multicultural environment, offering students excellent academic opportunities and strong pathways for global careers.",
        bullets: [
          "Australia is home to many prestigious universities offering high-quality education at competitive tuition fees.",
          "Courses are career-oriented, with practical training and internship opportunities integrated into study programs.",
          "The country's strong economy and skill shortages provide excellent job prospects for graduates.",
          "International students can work up to 48 hours per fortnight during study periods and full-time during scheduled breaks.",
          "Graduates may be eligible for a Temporary Graduate Visa (subclass 485), allowing post-study work for 2 to 6 years depending on qualification and location.",
          "Australia offers clear pathways to permanent residency for eligible graduates.",
          "Spouses of postgraduate students can usually accompany them and work full-time during the study period.",
        ],
      },
      {
        id: "australian-academic-system",
        title: "Australian Academic System",
        intro: "The Australian academic system consists of:",
        bullets: [
          "Primary and secondary schools (public and private)",
          "Vocational Education and Training (VET) institutes",
          "Universities offering diploma, bachelor's, master's, and doctoral degrees",
          "English language schools and pathway colleges",
          "Technical institutes and applied schools",
        ],
      },
      {
        id: "available-qualifications",
        title: "Available Qualifications",
        bullets: [
          "Diploma / Advanced Diploma / Associate degree",
          "Bachelor's degree",
          "Master's degree",
          "Doctoral degree",
        ],
      },
      {
        id: "entry-test-requirements",
        title: "Entry Test Requirements",
        bullets: [
          "IELTS or TOEFL is required for most programs.",
          "Some postgraduate courses may require GMAT or GRE.",
        ],
      },
      {
        id: "study-expenses",
        title: "Study Expenses in Australia",
        intro: "Tuition fees for international students in Australia vary widely:",
        bullets: [
          "Undergraduate programs: tuition varies by university and program.",
          "Postgraduate programs: tuition varies by institution and field of study.",
        ],
      },
      {
        id: "work-rights",
        title: "Work Rights & Post-Study Stay",
        bullets: [
          "Work up to 48 hours per fortnight during term and full-time during breaks.",
          "After graduation, eligible students may apply for the Temporary Graduate Visa (subclass 485).",
          "Post-study work duration is typically 2 to 6 years depending on qualification level and study location.",
        ],
      },
      {
        id: "intake",
        title: "Intake",
        bullets: ["February", "July", "November"],
      },
      {
        id: "scholarships",
        title: "Scholarships",
        bullets: [
          "Australia offers more than 1,000 scholarships annually to international students, including full tuition and living stipends in some cases.",
          "These scholarships are available from the Australian government, universities, and other awarding bodies, with amounts varying by program, institution, and eligibility criteria.",
          "Some Australian universities offer scholarships for international students ranging from AUD 5,000 to AUD 50,000 or more over the duration of their studies.",
        ],
      },
    ],
  },
];

export const headerStudyDestinations: StudyDestination[] = studyDestinations
  .filter((destination) => {
    if (!destination.intakeLabel || !destination.admissionStatus) {
      return false;
    }

    return (
      destination.admissionStatus === "Open" ||
      destination.admissionStatus === "Opening soon"
    );
  })
  .slice(0, 3);

export const getStudyDestination = (
  destinationId: string
): StudyDestination | undefined =>
  studyDestinations.find((destination) => destination.id === destinationId);
