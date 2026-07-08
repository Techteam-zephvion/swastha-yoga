export const site = {
  name: "Swastha Yoga",
  tagline: "Therapy and Prenatal Center",
  quote: "Yoga is the journey of the self, through the self, to the self.",
  quoteSource: "The Bhagavad Gita",
};

export const contact = {
  phone: "7204888573",
  phoneDisplay: "72048 88573",
  whatsappNumber: "917204888573",
  whatsappMessage:
    "Hi Swastha Yoga, I'd like to know more about your classes",
  address: {
    line1: "#4328, Bhoomi, 1st Floor, 1st Main Road",
    line2: "4th Phase, Girinagar, Banashankari 3rd Stage",
    line3: "Bengaluru - 560085",
  },
};

export function waLink(message = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const master = {
  name: "Gandharva Natesh",
  designation:
    "PhD Scholar, MSc Yoga, YIC 500 hrs, TTC 300 hrs, Certified Prenatal Yoga Trainer, Certified Yoga Therapist, Certified Energy Healer",
  specialization:
    "Specialized in Sound Meditation, Music Meditation, Chakra Dhyana and Hatha Yoga Practices.",
  bio: "Founded Swastha Yoga to bring drugless, holistic yoga therapy to Bengaluru — blending twelve years of dedicated practice, formal academic study, and traditional teacher training into a personalized path back to health for every student who walks through the door.",
};

export const stats = [
  { value: "12+", label: "Years of Practice" },
  { value: "5", label: "Countries Reached" },
  { value: "1000+", label: "Students Trained" },
  { value: "2022", label: "Established" },
];

export type ClassGroup = {
  title: string;
  description: string;
  classes: string[];
};

export const classGroups: ClassGroup[] = [
  {
    title: "Foundational",
    description: "Build strength, flexibility, and a daily practice.",
    classes: [
      "Hatha Yoga",
      "Vinyasa Yoga",
      "Ashtanga Yoga",
      "Iyengar Yoga (with Props)",
      "Power Yoga",
      "Morning Flow",
    ],
  },
  {
    title: "Therapeutic",
    description: "Individually focused sessions for specific conditions.",
    classes: [
      "Yoga Therapy for Disease & Disorders",
      "Restorative Yoga (Rejuvenation)",
      "Mudra Therapy",
      "Pregnancy Yoga",
    ],
  },
  {
    title: "Meditative",
    description: "Stillness practices for the mind and nervous system.",
    classes: [
      "Dhyana & Pranayama",
      "Sound Meditation",
      "Music Meditation",
      "Chakra Dhyana (Activation of 7 Chakras with Crystals)",
    ],
  },
  {
    title: "Specialty",
    description: "For dedicated practitioners and deeper study.",
    classes: [
      "Bhakti Yoga",
      "Aerial Yoga",
      "Teachers Training Course (TTC)",
    ],
  },
];

export type Batch = { label: string; times: string[] };

export const timings: Batch[] = [
  { label: "Morning", times: ["5:00 – 6:00 AM", "6:00 – 7:00 AM", "7:00 – 8:00 AM", "8:15 – 9:15 AM"] },
  { label: "Ladies Batch", times: ["10:00 – 11:00 AM", "11:15 AM – 12:15 PM"] },
  { label: "Evening", times: ["4:00 – 5:00 PM", "5:00 – 6:00 PM", "6:00 – 7:00 PM", "7:00 – 8:00 PM"] },
];

export type Certificate = {
  file: string;
  title: string;
  issuer: string;
  detail: string;
};

export const certificates: Certificate[] = [
  {
    file: "vels-msc-yoga-degree",
    title: "M.Sc. in Yoga",
    issuer: "VELS Institute of Science, Technology & Advanced Studies (VISTAS)",
    detail: "First Class with Distinction, May 2023",
  },
  {
    file: "nithya-teacher-training-certificate",
    title: "Yoga Teacher Training Certificate",
    issuer: "NITHYA — Nrithya & Indian Therapeutically Holistic Yoga Association",
    detail: "Advanced Yogasana teacher training",
  },
  {
    file: "ksd-society-merit-certificate",
    title: "Yoga Merit Certificate",
    issuer: "Karnataka Social Development Society, Hubli",
    detail: "Advance II grade, 97%, 2019",
  },
  {
    file: "skill-india-yoga-trainer-certificate",
    title: "Certified Yoga Trainer",
    issuer: "Beauty & Wellness Sector Skill Council (Skill India)",
    detail: "National vocational certification",
  },
  {
    file: "nithya-award-of-excellence",
    title: "Award of Excellence",
    issuer: "NITHYA",
    detail: "Advanced Yogasana training, A-grade asana proficiency",
  },
  {
    file: "vishwa-samskruti-utsava-dubai-certificate",
    title: "Certificate of Appreciation",
    issuer: "Vishwa Samskruti Utsava, Dubai",
    detail: "Outstanding performance, Credence Auditorium, Al Quoz — 11 Oct 2019",
  },
  {
    file: "global-yoga-praveena-award-2017-18",
    title: "Global Yoga Praveena Award",
    issuer: "Sri Maruthi International Yoga Academy & S.V.V.P.Y. Foundation",
    detail: "2017-18, Global Title Yoga Championship, Doddaballapur",
  },
];

export const galleryImages = {
  groupPhotos: [
    { file: "group-photo-1", alt: "Indoor group yoga class at Swastha Yoga, students gathered together" },
    { file: "group-photo-2", alt: "Swastha Yoga award and plaque presentation ceremony" },
    { file: "group-photo-3", alt: "Swastha Yoga community event photo" },
  ],
  travelPoses: [
    { file: "travel-pose-1", alt: "Gandharva Natesh in a seated meditation pose beneath a trishul" },
    { file: "travel-pose-2", alt: "Gandharva Natesh performing a handstand at a mountain lake" },
    { file: "travel-pose-3", alt: "Gandharva Natesh in a backbend pose before the Adiyogi Shiva statue" },
    { file: "travel-pose-4", alt: "Gandharva Natesh performing a handstand before the Adiyogi Shiva statue" },
  ],
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/certificates", label: "Credentials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

// Testimonials intentionally omitted — no real reviews collected yet.
// Flip to true and populate testimonials.ts once the client sends quotes.
export const showTestimonials = false;
