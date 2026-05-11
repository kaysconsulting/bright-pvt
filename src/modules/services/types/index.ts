export interface SubService {
  title: string;
  points: string[];
}

export interface QualificationRow {
  qualification: string;
  institution: string;
}

export interface CertificationItem {
  title: string;
  description: string;
}

export interface ExperienceGroup {
  heading: string;
  points: string[];
}

export interface SkillRow {
  domain: string;
  skills: string;
}

export interface ServiceQualifications {
  intro: string;
  academicQualifications: QualificationRow[];
  certifications: CertificationItem[];
  experienceIntro: string;
  experienceGroups: ExperienceGroup[];
  cpdStatement: string;
  skillsTable: SkillRow[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  blurb: string;
  commitment: string;
  subServicesTitle: string;
  subServices: SubService[];
  image: string;
  qualifications?: ServiceQualifications;
}

export const services: ServiceDetail[] = [
  {
    slug: "transport",
    title: "Transport",
    tagline: "Travel that's safe & supportive",
    blurb:
      "Comfortable transport to medical appointments, the shops, and social activities — courteous drivers, reliable scheduling, and more independence.",
    commitment:
      "To assist individuals in accessing transportation for various purposes. We strive to remove barriers to services designed to support participants in traveling to and from essential appointments, activities, and community engagements, promoting their independence and inclusion.",
    subServicesTitle: "Transport Services",
    image: "/transport.jpg",
    subServices: [
      {
        title: "Medical Appointments",
        points: [
          "Transportation to and from doctor\u2019s appointments.",
          "Assistance with hospital visits and outpatient procedures.",
          "Support for attending specialist consultations.",
        ],
      },
      {
        title: "Therapy Sessions",
        points: [
          "Reliable transport to physiotherapy, occupational therapy, and other therapy sessions.",
          "Support for attending mental health and counseling appointments.",
        ],
      },
      {
        title: "Community Access",
        points: [
          "Transportation to social and recreational activities.",
          "Support for attending community events and gatherings.",
          "Assistance with visiting friends and family.",
        ],
      },
      {
        title: "Educational and Vocational Activities",
        points: [
          "Transport to schools, universities, and training centers.",
          "Support for getting to and from work placements or employment.",
        ],
      },
      {
        title: "Shopping and Errands",
        points: [
          "Assistance with grocery shopping trips.",
          "Transport for running personal errands.",
          "Support for visiting shopping centers and markets.",
        ],
      },
      {
        title: "Day Programs and Activities",
        points: [
          "Reliable transportation to day programs and group activities.",
          "Assistance with accessing leisure and hobby activities.",
        ],
      },
      {
        title: "Religious and Cultural Events",
        points: [
          "Transport to places of worship and religious gatherings.",
          "Support for attending cultural and community festivals.",
        ],
      },
      {
        title: "Emergency Transportation",
        points: [
          "Provision for urgent and emergency transport needs.",
          "Assistance with unplanned trips requiring immediate attention.",
        ],
      },
    ],
  },
  {
    slug: "domestic-assistance",
    title: "Domestic Assistance",
    tagline: "Help with the everyday",
    blurb:
      "Friendly, reliable help with cleaning, laundry, grocery shopping, and meal preparation — a calm, organised home so you can focus on what matters most.",
    commitment:
      "To improve the quality of life for individuals with disabilities, enhance their daily living skills, and support them in maintaining a comfortable and well-functioning home environment.",
    subServicesTitle: "In-Home & Domestic Assistance Services",
    image: "/domestic-care.jpg",
    subServices: [
      {
        title: "Personal Care",
        points: [
          "Assistance with bathing, dressing, and grooming.",
          "Help with mobility and transferring.",
          "Support with toileting and continence management.",
        ],
      },
      {
        title: "Health and Wellbeing",
        points: [
          "Medication reminders and administration.",
          "Monitoring of health conditions.",
          "Support with exercise and physical activities.",
        ],
      },
      {
        title: "Meal Preparation",
        points: [
          "Planning and preparing nutritious meals.",
          "Assistance with feeding if required.",
          "Ensuring dietary requirements are met.",
        ],
      },
      {
        title: "Companionship",
        points: [
          "Providing social interaction and emotional support.",
          "Engaging in hobbies and recreational activities.",
          "Accompanying to appointments and outings.",
        ],
      },
      {
        title: "Household Chores",
        points: [
          "Cleaning and tidying living spaces.",
          "Laundry and ironing.",
          "Dishwashing and kitchen cleaning.",
        ],
      },
      {
        title: "Home Maintenance",
        points: [
          "Light gardening and outdoor maintenance.",
          "Minor home repairs and safety checks.",
        ],
      },
      {
        title: "Shopping and Errands",
        points: [
          "Grocery shopping.",
          "Picking up prescriptions.",
          "Running general errands.",
        ],
      },
      {
        title: "Home Management",
        points: [
          "Organizing and decluttering.",
          "Managing household budgets and bills.",
          "Coordinating home services and appointments.",
        ],
      },
    ],
  },
  {
    slug: "clinical-capability",
    title: "Clinical Capability",
    tagline: "Hospital-grade expertise, in your community",
    blurb:
      "Advanced clinical support delivered by qualified Registered Nurses — bringing the depth and precision of acute hospital care into homes, disability settings, and community environments.",
    commitment:
      "Our Clinical Capability service exists to ensure no participant ever has to choose between staying in their community and receiving high-quality clinical care. We deploy Registered Nurses with specialist skills across emergency response, chronic disease management, complex wound care, and palliative support — working collaboratively with participants, families, and multidisciplinary teams to create care plans that are evidence-based, person-centred, and built around individual goals. Every interaction is underpinned by our commitment to clinical excellence, compassion, and the highest standards of safety.",
    subServicesTitle: "Clinical Capability Services",
    image: "/clinicall.jpg",
    subServices: [
      {
        title: "Clinical Assessment & Care Planning",
        points: [
          "Comprehensive physical, psychosocial, and functional assessments by qualified Registered Nurses.",
          "Development and implementation of individualised care plans in partnership with participants, families, and multidisciplinary teams.",
          "Ongoing monitoring and evaluation to keep care plans aligned with participant goals and changing health needs.",
        ],
      },
      {
        title: "Medication Management & Administration",
        points: [
          "Safe administration of prescribed medications across oral, topical, subcutaneous, and intravenous routes.",
          "Insulin administration and blood glucose monitoring for participants managing diabetes.",
          "Medication side-effect monitoring, reporting, and participant education on medication regimes.",
        ],
      },
      {
        title: "IV Therapy & Infusion Management",
        points: [
          "IV setup, cannulation, and end-to-end management of intravenous therapy in community settings.",
          "Monitoring of infusion sites for complications and adverse reactions.",
          "Coordination with prescribing clinicians to ensure safe and effective infusion care.",
        ],
      },
      {
        title: "Wound Care & Management",
        points: [
          "Dressing changes, wound irrigation, and ongoing assessment of acute and chronic wounds.",
          "Removal of sutures and staples in line with current clinical guidelines.",
          "Infection control and preventive care to support optimal wound healing outcomes.",
        ],
      },
      {
        title: "Respiratory & Airway Support",
        points: [
          "Tracheostomy care and management to maintain airway patency and prevent complications.",
          "Continuous monitoring of oxygen saturation levels and overall respiratory status.",
          "Support with respiratory equipment and participant education on breathing techniques.",
        ],
      },
      {
        title: "Chronic Disease Management",
        points: [
          "Specialist support for participants living with diabetes, cardiac conditions, and other complex chronic illnesses.",
          "Structured education on disease self-management, nutrition, lifestyle modification, and prevention.",
          "Coordination with GPs and specialists for seamless, integrated long-term care.",
        ],
      },
      {
        title: "Emergency Care & Clinical Response",
        points: [
          "Rapid clinical assessment and triage in emergency or deteriorating situations.",
          "ACLS-certified nurses available for high-acuity support, including chest pain and seizure management.",
          "Clear emergency response protocols to ensure participant safety and swift escalation when needed.",
        ],
      },
      {
        title: "Palliative & End-of-Life Care",
        points: [
          "Compassionate end-of-life care focused on comfort, dignity, and quality of life.",
          "Pain and symptom management delivered within established palliative care frameworks.",
          "Emotional and psychological support for participants and their families throughout the care journey.",
        ],
      },
      {
        title: "Health Education & Discharge Planning",
        points: [
          "Tailored health education for participants and caregivers on self-care, prevention, and chronic condition management.",
          "Instruction on home management of clinical devices including catheters, stomas, and infusion equipment.",
          "Discharge planning and care transition support to ensure continuity and safety after hospital stays.",
        ],
      },
      {
        title: "Clinical Documentation & Team Coordination",
        points: [
          "Accurate, timely documentation of all clinical assessments, interventions, and outcomes.",
          "Interpretation of diagnostic results and laboratory values to support informed clinical decision-making.",
          "Active coordination with interdisciplinary teams — physicians, allied health, therapists, and social workers — for cohesive care delivery.",
        ],
      },
    ],
    qualifications: {
      intro:
        "Our Clinical Capability team is built on a foundation of rigorous formal training, specialist post-graduate study, and decades of hands-on experience across some of Canberra\u2019s most demanding clinical environments. Every nurse who delivers care under this service is AHPRA-registered, continuously upskilled, and deeply committed to person-centred practice.",
      academicQualifications: [
        {
          qualification: "Post Graduate Certificate \u2014 Neuroscience",
          institution: "University of Tasmania",
        },
        {
          qualification: "Diploma in Nursing",
          institution: "Muvonde School of Nursing",
        },
        {
          qualification: "Diploma in Nursing",
          institution: "Parirenyatwa School of Nursing",
        },
        {
          qualification: "Secondary Education (foundational clinical pathway)",
          institution: "Gutu Mission Hospital, Zimbabwe",
        },
      ],
      certifications: [
        {
          title: "Registered Nurse (RN) \u2014 AHPRA",
          description:
            "All clinical staff are fully licensed and registered with the Australian Health Practitioner Regulation Agency.",
        },
        {
          title: "Advanced Cardiac Life Support (ACLS)",
          description:
            "Certified in advanced cardiac life support protocols, equipping our team to manage high-acuity cardiac and emergency events with confidence.",
        },
        {
          title: "Aged Care Quality & Safety Commission Standards",
          description:
            "Our nurses practise in accordance with current Aged Care Quality and Safety Commission standards, including dignity of care and restrictive practices guidelines.",
        },
        {
          title: "Infection Control & Work Health and Safety",
          description:
            "Trained in up-to-date infection prevention protocols and workplace health and safety compliance across all care settings.",
        },
      ],
      experienceIntro:
        "Our team collectively holds more than 40 years of frontline nursing experience across tertiary hospitals, aged care, community, and specialist settings throughout Canberra and the ACT.",
      experienceGroups: [
        {
          heading: "Acute & Hospital-Based Care",
          points: [
            "Long-term service at Canberra Health Services and The Canberra Hospital across multiple clinical units.",
            "Endoscopy nursing \u2014 patient preparation, procedure assistance, consent documentation, and discharge education.",
            "Recovery room nursing \u2014 post-procedure patient assessment, airway management, pain management, oxygenation and suctioning, and vital signs monitoring.",
            "COVID-19 response roles including clinical swabbing, vaccination administration, and low-sensory clinic nursing.",
          ],
        },
        {
          heading: "Aged Care & Dementia Nursing",
          points: [
            "Dedicated Dementia Registered Nurse experience, including behavioural assessment and the application of restrictive practices guidelines for residents living with dementia.",
            "Aged care nursing encompassing delirium assessments, care plan updates, incident reporting, and liaison with guardians and GPs.",
            "Practice aligned with the Right of Dignity framework and aged care safety standards.",
          ],
        },
        {
          heading: "Community & Generalist Nursing",
          points: [
            "Over 15 years of community nursing across diverse patient populations, including NDIS participants, people with chronic illness, and those requiring post-acute care at home.",
            "Administration of PRN and scheduled medications, insulin, blood glucose monitoring, and wound dressings in home and community settings.",
            "Patient and family health education focused on self-management, prevention, and wellness.",
          ],
        },
        {
          heading: "Training, Preceptorship & Leadership",
          points: [
            "Formal preceptorship roles supporting the clinical development of new and graduate Registered Nurses.",
            "Design and delivery of staff training programs to advance clinical care goals and uphold best practice standards.",
            "Mentoring of nursing staff with a focus on medication safety, infection control, and person-centred care.",
          ],
        },
        {
          heading: "Emergency & Critical Response",
          points: [
            "Experienced in responding to emergency situations with speed and clinical expertise across hospital and community environments.",
            "ACLS-certified with demonstrated competency in chest pain assessment, seizure management, and rapid patient deterioration protocols.",
            "Skilled in prioritising critically ill patients based on assessment data and identified clinical need.",
          ],
        },
      ],
      cpdStatement:
        "Our nurses are committed to lifelong learning and maintaining currency with evidence-based practice. This includes regular participation in continuing education programs, clinical seminars, and professional development activities \u2014 ensuring our team remains at the forefront of nursing practice, aged care standards, disability support frameworks, and community health innovation.",
      skillsTable: [
        { domain: "Assessment", skills: "Physical assessment, psychosocial assessment, delirium assessment, patient monitoring, medical screening" },
        { domain: "Medications", skills: "Medication administration, insulin administration, PRN medications, IV therapy, blood glucose monitoring" },
        { domain: "Procedures", skills: "Wound dressings, catheter care, tracheostomy care, endoscopy assistance, specimen collection" },
        { domain: "Safety", skills: "Infection control, work health and safety, restrictive practices compliance, HIPAA/privacy protocols" },
        { domain: "Documentation", skills: "Care plan development, incident reports, progress notes, discharge documentation, chart updating" },
        { domain: "Education", skills: "Patient and family education, staff training, preceptorship, discharge planning" },
        { domain: "Leadership", skills: "Unit administration, team coordination, quality improvement, multidisciplinary collaboration" },
      ],
    },
  },
  {
    slug: "community-nursing",
    title: "Community Nursing",
    tagline: "Skilled clinical care, at home",
    blurb:
      "Personalised, professional healthcare in the comfort of your own home — wound care, medication management, chronic disease management, and post-operative recovery.",
    commitment:
      "To promote the health, well-being, and independence of individuals with disabilities, enabling them to live in their preferred environment while receiving the necessary medical care and support. We deliver nursing care in a holistic and person-centered manner — collaborating with the individual, their families, and other healthcare professionals to develop and implement care plans that align with their goals and preferences.",
    subServicesTitle: "Community Nursing Services",
    image: "/community-nursing.jpg",
    subServices: [
      {
        title: "Medication Administration",
        points: [
          "Assistance with medication administration, monitoring of medication effectiveness, and education about medication regimes.",
        ],
      },
      {
        title: "Wound Management",
        points: [
          "Dressing changes, wound assessment, and ongoing management of acute or chronic wounds.",
        ],
      },
      {
        title: "Catheter Care",
        points: [
          "We minimize the risk of urinary tract infections, skin irritation, and other complications associated with long-term catheter use.",
        ],
      },
      {
        title: "Bowel Care",
        points: ["Administering enemas to relieve constipation."],
      },
      {
        title: "Stoma Care",
        points: ["Assessment, cleaning, and changing of stoma appliances."],
      },
      {
        title: "Blood Sugar Checks",
        points: ["Checking blood glucose levels."],
      },
      {
        title: "Insulin Administration",
        points: ["Administering insulin."],
      },
      {
        title: "Tracheostomy Care",
        points: [
          "We provide tracheostomy care to prevent complications, maintain airway patency, and promote overall respiratory health.",
        ],
      },
    ],
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}
