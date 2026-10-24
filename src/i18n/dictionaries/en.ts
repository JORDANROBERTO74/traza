/**
 * English dictionary. It defines the shape every other locale must implement:
 * `Dictionary` is derived from this object, so a missing key in another locale
 * is a type error rather than a blank space in production.
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: number;
  summary: string;
  image: { src: string; alt: string };
};

export type Service = {
  title: string;
  text: string;
};

export type Step = {
  title: string;
  text: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Person = {
  name: string;
  role: string;
  text: string;
};

const projects: Project[] = [
  {
    slug: "lago-house",
    title: "Lago House",
    category: "Custom home",
    location: "Austin, Texas",
    year: 2025,
    summary:
      "A two-storey family home on a quiet cul-de-sac, organised around a central courtyard and a shaded porch.",
    image: {
      src: "/images/project-lago.webp",
      alt: "A modern two-storey house with warm brick and large windows in Austin, Texas.",
    },
  },
  {
    slug: "vela-mercantile",
    title: "Vela Mercantile",
    category: "Commercial",
    location: "Austin, Texas",
    year: 2024,
    summary:
      "A 12,000 sq ft adaptive reuse of a mid-century warehouse into bright, flexible office space.",
    image: {
      src: "/images/project-vela.webp",
      alt: "An open office interior with exposed timber trusses and polished concrete floors.",
    },
  },
  {
    slug: "oak-and-ember",
    title: "Oak & Ember",
    category: "Restaurant",
    location: "Austin, Texas",
    year: 2024,
    summary:
      "A wood-fired kitchen fit-out with a twelve-foot service counter and a dining room that opens to the street.",
    image: {
      src: "/images/project-oak.webp",
      alt: "A restaurant interior with a long wooden counter and pendant lighting.",
    },
  },
  {
    slug: "cedar-court",
    title: "Cedar Court",
    category: "Multi-family",
    location: "Georgetown, Texas",
    year: 2023,
    summary:
      "Eight townhomes renovated to modern efficiency without losing their cedar bones or front porches.",
    image: {
      src: "/images/project-cedar.webp",
      alt: "A row of cedar-clad townhomes with porches under a clear Texas sky.",
    },
  },
];

const services: Service[] = [
  {
    title: "Custom homes",
    text: "Ground-up houses designed around the way you live, from foundation to final paint.",
  },
  {
    title: "Renovations & remodels",
    text: "Structural and interior work that opens up existing homes without erasing their character.",
  },
  {
    title: "Commercial build-outs",
    text: "Offices, retail and restaurants fitted out on time and on budget.",
  },
  {
    title: "Design-build",
    text: "One team, one contract, one accountable point from first sketch to occupancy.",
  },
  {
    title: "Construction management",
    text: "Scheduling, procurement and site supervision for owners and architects.",
  },
  {
    title: "Site work & foundations",
    text: "Excavation, utilities, slabs and retaining walls done to engineered spec.",
  },
];

const steps: Step[] = [
  {
    title: "Consult",
    text: "We walk the site, listen to the brief and scope the work in plain language.",
  },
  {
    title: "Plan",
    text: "Drawings, permits, materials and a transparent line-item budget.",
  },
  {
    title: "Build",
    text: "A dedicated superintendent, weekly reports and a clean, safe site.",
  },
  {
    title: "Close out",
    text: "Final walkthrough, a short punch list and a warranty that holds.",
  },
];

const stats: Stat[] = [
  { value: "140+", label: "Projects completed" },
  { value: "14", label: "Years in business" },
  { value: "78%", label: "Repeat clients" },
  { value: "96%", label: "On-time delivery" },
];

const values: Service[] = [
  {
    title: "Honest materials",
    text: "We specify what we would put in our own homes, and we never substitute without asking.",
  },
  {
    title: "Disciplined schedule",
    text: "Weekly updates and realistic dates. We finish when we say we will.",
  },
  {
    title: "Clear communication",
    text: "One point of contact, a written scope, and no surprises on the invoice.",
  },
  {
    title: "Built for decades",
    text: "Detailing and workmanship measured in generations, not in photographs.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Traza finished ahead of schedule and under budget, and the weekly reports meant we always knew exactly where things stood.",
    name: "Daniel Reyes",
    role: "Lago House",
  },
  {
    quote:
      "The crew treated the site like their own. Clean, punctual, and the workmanship shows in every joint.",
    name: "Priya Nair",
    role: "Vela Mercantile",
  },
  {
    quote:
      "They walked us through the permit process and held the budget line. I would not build with anyone else.",
    name: "Marcus Lee",
    role: "Oak & Ember",
  },
];

const people: Person[] = [
  {
    name: "Elena Vásquez",
    role: "Founder & principal",
    text: "Two decades of framing before founding Traza, to build the way good crews actually work.",
  },
  {
    name: "Marcus Whitfield",
    role: "Superintendent",
    text: "Runs every site like it is his own block, and has not missed a completion date in nine years.",
  },
  {
    name: "Sofia Ramos",
    role: "Project manager",
    text: "Owns the schedule and the budget, and keeps every client in the loop weekly.",
  },
];

export const en = {
  meta: {
    title: "Traza — General contractor in Austin, Texas",
    description:
      "Traza is a general contractor in Austin, Texas, building custom homes, commercial spaces and renovations with honest materials and disciplined execution.",
  },
  common: {
    brand: "Traza",
    discipline: "General contractor",
    skip: "Skip to content",
    close: "Close",
    menu: "Menu",
    language: "Language",
    backToTop: "Back to top",
  },
  nav: {
    label: "Main navigation",
    home: "Home",
    about: "About",
    services: "Services",
    start: "Get a quote",
  },
  footer: {
    tagline: "General contractor · Austin, Texas",
    rights: "© 2026 Traza Build. All rights reserved.",
    navLabel: "Site",
    address: "1204 East Cesar Chavez St, Austin, TX 78702",
    phoneLabel: "Call",
    emailLabel: "Email",
  },
  cta: {
    title: {
      lead: "Let's build something",
      accent: "that lasts.",
    },
    text: "Tell us about your site, your scope and your timeline. We reply within one business day.",
    primary: "Get a quote",
    secondary: "Call us",
  },
  home: {
    hero: {
      eyebrow: "General contractor · Austin, Texas",
      title: {
        lead: "Built to",
        accent: "endure.",
      },
      intro:
        "Traza is a full-service general contractor in Austin, building homes, workplaces and restaurants with honest materials and disciplined execution.",
      primary: "Start a project",
      secondary: "Explore services",
      imageAlt:
        "A modern two-storey house under construction in Austin, with scaffolding and a clear sky.",
      imageCaption: "Lago House, Austin — 2025",
      facts: [
        { term: "Established", detail: "2012" },
        { term: "Base", detail: "Austin, Texas" },
        { term: "License", detail: "Fully insured" },
      ],
    },
    metrics: {
      label: "01 — At a glance",
      title: "Numbers we stand behind.",
    },
    services: {
      label: "02 — Services",
      title: "What we build.",
      intro:
        "From ground-up homes to fast commercial fit-outs, one accountable team from start to finish.",
      link: "See all services",
    },
    process: {
      label: "03 — Process",
      title: "Four steps, no surprises.",
      intro:
        "A clear sequence, and no surprises about cost or timing.",
    },
    values: {
      label: "04 — Values",
      title: "How we work.",
    },
    projects: {
      label: "05 — Selected work",
      title: "Built in Texas.",
      intro: "Recent projects across Austin and the Hill Country.",
    },
    testimonials: {
      label: "Kind words",
      title: "What clients say.",
    },
    contact: {
      label: "06 — Contact",
      title: {
        lead: "Let's talk about",
        accent: "the build.",
      },
      intro:
        "Tell us about the site, the scope and the timeline. We answer every enquiry within one business day.",
      copy: "Copy email",
      copied: "Copied",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Studio",
      availability: "Booking projects for spring 2027.",
      fees: "Quotes are in US dollars, excluding permit fees and taxes.",
    },
  },
  about: {
    hero: {
      eyebrow: "About Traza",
      title: "A builder's word is the blueprint.",
      intro:
        "Traza was founded in 2012 on a simple idea: build the way a good crew actually works — honestly, on time, and without drama.",
      imageAlt: "The Traza crew reviewing plans on an active construction site in Austin.",
    },
    story: {
      label: "Our story",
      title: "From the ground up.",
      paragraphs: [
        "Traza started as a three-person framing crew with a truck and a reputation to protect. Elena Vásquez spent twenty years on other people's sites before she decided the only way to guarantee quality was to run her own.",
        "Today we are still small on purpose. A principal, a superintendent and a project manager are on every job, and the same hands carry it from first sketch to final walkthrough. We do not subcontract the parts that matter.",
        "Our clients come back because the work holds up, the numbers hold up, and the process is calm. That is the whole pitch.",
      ],
      imageAlt: "A material library of brick, timber and steel samples in the Traza studio.",
      imageCaption: "Materials we trust, chosen to age well.",
    },
    approach: {
      label: "How we build",
      title: "Three promises, every project.",
      items: [
        {
          title: "Written scope",
          text: "Every line item priced and agreed before the first delivery.",
        },
        {
          title: "Weekly rhythm",
          text: "A fixed reporting day so you always know the schedule and spend.",
        },
        {
          title: "No substitutions",
          text: "If a material changes, you approve it first. Always.",
        },
      ],
    },
    expertise: {
      label: "Expertise",
      title: "Where we are strongest.",
    },
    team: {
      label: "The team",
      title: "The people on your site.",
      intro:
        "Small by design. Every project gets a principal, a superintendent and a project manager.",
    },
  },
  servicesPage: {
    hero: {
      eyebrow: "Services",
      title: "One team, end to end.",
      intro:
        "Whatever the scope, we carry it from first sketch to final walkthrough with a single accountable point.",
      imageAlt: "A construction site with steel framing and a concrete pour in progress.",
    },
    list: {
      label: "01 — What we do",
      title: "Capabilities.",
      intro: "Six disciplines, one crew, no handoffs to strangers.",
    },
    process: {
      label: "02 — How it works",
      title: "The same four steps.",
      intro: "A clear sequence, no surprises about cost or timing.",
    },
  },
  projects,
  services,
  steps,
  stats,
  values,
  testimonials,
  people,
};

export type Dictionary = typeof en;
