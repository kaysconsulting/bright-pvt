export interface SubService {
  title: string;
  points: string[];
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
