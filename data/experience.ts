export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  badges?: string[];
  tasks: string[];
}

export const sideJobs: ExperienceItem[] = [
  {
    role: "Logistiek Medewerker",
    company: "DP World",
    date: "Feb 2026 – Mei 2026",
    tasks: [
      "Sorteren, inpakken en verzendklaar maken van elektronische apparaten van het merk DELL",
      "Verwerken en verzenden van DELL laptops en monitors",
      "Kwaliteitscontrole op uitgaande elektronische goederenstromen",
    ],
  },
  {
    role: "Overige Werkervaring",
    company: "Wholeshare · STICHD · Coolblue · Domino's · Jumbo",
    date: "Jan 2021 – Jul 2024",
    tasks: [
      "Magazijnmedewerker & Orderpicker (Wholeshare, STICHD, Coolblue): verwerken en verzendklaar maken van bestellingen via EPT en scansystemen.",
      "Bezorger & Insider (Domino's): klantenservice, kassabeheer en bereiding van bestellingen.",
      "Vulploegmedewerker (Jumbo): winkelonderhoud, schapbeheer en kassa.",
    ],
  },
];

export const internships: ExperienceItem[] = [
  {
    role: "HBO Cybersecurity (deeltijd)",
    company: "Avans Hogeschool",
    date: "Sep 2026 – Heden",
    badges: ["HBO", "Cybersecurity", "Deeltijd"],
    tasks: [
      "Focus op netwerkbeveiliging, cryptografie, threat intelligence en risk management",
      "Combinatie van diepgaande theorie en praktijkgerichte cybersecurity-cases",
    ],
  },
  {
    role: "Intern — 1Optic",
    company: "Software Developer Intern",
    date: "Aug 2025 – Mei 2026",
    badges: ["KPN", "Upgrades", "Software Updates", "Teamwork", "Documentatie"],
    tasks: [
      "Werken met klantdata van KPN",
      "Upgrades en updates uitvoeren aan bestaande software",
      "Intensief samenwerken in een team en opstellen van uitgebreide documentaties",
    ],
  },
  {
    role: "Student Intern (Practoraat)",
    company: "Practoraat Interactieve Technologieën (Yonder)",
    date: "Aug 2024 – Jan 2025",
    badges: ["R&D", "SharePoint", "Full-Stack Dev", "Interactieve Tech"],
    tasks: [
      "Werken met docenten van Yonder, Fontys, Avans, Tilburg University en TU Eindhoven",
      "Projecten gemaakt om het werk van docenten en van studenten te vergemakkelijken",
      "Ontwikkelde een dashboard waarmee docenten SharePoint-linkjes van hun vakken kunnen uploaden voor studenten om mee te oefenen of informatie op te halen",
    ],
  },
  {
    role: "Opleiding Software Development (MBO 4)",
    company: "Yonder",
    date: "Aug 2022 – Jul 2026",
    badges: ["MBO 4", "Software Development", "Full-Stack"],
    tasks: [
      "Leren programmeren, databaseontwerp en software-architectuur basissen",
      "Ervaring met agile methodologieën en security essentials",
    ],
  },
];
