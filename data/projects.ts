export interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  preview: string | null;
  github: string | null;
  category?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    num: "01",
    title: "FashionLabs Modewebsite",
    desc: "Online platform voor een modebedrijf met productoverzicht en winkelflow.",
    tags: ["React", "Next.js", "Tailwind CSS", "PHP"],
    preview: "https://www.fashionlabs-yonder.nl/",
    github: "https://github.com/Wavezy11/Fashionlabs_modewebsite",
    category: "School · Web",
    image: "/fashionshow.png",
  },
  {
    num: "02",
    title: "BarakahBoost",
    desc: "Marketing platform met een energieke, moderne uitstraling. Ontworpen om conversies te stimuleren via een heldere propositie en sterke visual hierarchy. Van concept tot deployment.",
    tags: ["HTML", "CSS", "JavaScript"],
    preview: "https://wavezy11-github-io-barakahboost.vercel.app",
    github: "https://github.com/Wavezy11/wavezy11.github.io-Barakahboost",
    category: "Personal · Web",
    image: "/project-barakah.jpg",
  },
  {
    num: "03",
    title: "ZIP Kompas",
    desc: "Tool die financieel inzicht geeft binnen 2 minuten aan ondernemers en freelancers.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    preview: "https://zzp-kompasso.vercel.app/",
    github: "https://github.com/Wavezy11/zzp-kompasso",
    category: "Personal · Tool",
    image: "/zzpkompas.png",
  },
  {
    num: "04",
    title: "Open Source Vectorizer",
    desc: "Bijdragen aan open-source vector extensies voor PostgreSQL (pgvector), gericht op efficiënte data-indexering en vector similarity search.",
    tags: ["PostgreSQL", "C", "SQL", "Git"],
    preview: null,
    github: "https://github.com/vectordotdev/vector/pull/25065",
    category: "Open Source · DB",
  },
  {
    num: "05",
    title: "LIV Zorg",
    desc: "Een volledige website voor een zorgorganisatie in beschermd wonen, ambulante hulpverlening en dagbesteding. De uitdaging: een professionele, toegankelijke site bouwen die vertrouwen uitstraalt naar een kwetsbare doelgroep — zonder af te leiden van de boodschap.",
    tags: ["HTML", "CSS", "JavaScript"],
    preview: "https://livzorg.nl",
    github: null,
    category: "Freelance · Web",
    image: "/project-livzorg.jpg",
  },
  {
    num: "06",
    title: "Van Hogendorp Carwash & Detailing",
    desc: "Premium carwash- en detailingwebsite voor een lokaal bedrijf in Vlaardingen. Gebouwd in Next.js met afspraakformulier, diensten en tarieven. Het doel: een luxe uitstraling die past bij het premium karakter van het merk.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    preview: "https://vanhogendorpautos-carwash.vercel.app",
    github: null,
    category: "Freelance · Web",
    image: "/project-carwash.jpg",
  },
  {
    num: "07",
    title: "Rijschool Flawless",
    desc: "Conversiegerichte rijschoolwebsite met proefles-formulier, werkwijze, tarieven en reviews. Gebouwd op leadgeneratie.",
    tags: ["HTML", "CSS", "JavaScript"],
    preview: "https://wavezy11.github.io/wavezy11.github.io-rijschoolflawless/",
    github: "https://github.com/Wavezy11/rijschoolflawless",
    category: "Freelance · Web",
    image: "/project-rijschool.jpg",
  },
  {
    num: "08",
    title: "Loven Official",
    desc: "Professionele merkwebsite met eigen domein en geïntegreerde branding voor een modern bedrijf.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    preview: "https://lovenofficial.nl",
    github: null,
    category: "Freelance · Web",
    image: "/project-loven.jpg",
  },
  {
    num: "09",
    title: "Woonwinkel Project",
    desc: "Interactieve webomgeving voor een woonwinkel met productcatalogus en slimme functies.",
    tags: ["PHP", "Laravel", "MySQL", "EJS"],
    preview: null,
    github: null,
    category: "School · Web",
    image: "/woonwinkel.png",
  },
  {
    num: "10",
    title: "Gezamenlijke Bioscoop App",
    desc: "App die filmkeuze voor groepen makkelijker maakt via een gezamenlijke stemronde.",
    tags: ["HTML", "CSS", "JavaScript"],
    preview: null,
    github: "https://github.com/Wavezy11/films",
    category: "Personal · Web",
    image: "/bioscoop.png",
  },
  {
    num: "11",
    title: "Pacman Game",
    desc: "Klassiek Pacman-spel gebouwd in vanilla JavaScript met HTML Canvas.",
    tags: ["JavaScript", "HTML Canvas"],
    preview: null,
    github: "https://github.com/Wavezy11/pacman-",
    category: "Personal · Game",
    image: "/pacman.png",
  },
];
