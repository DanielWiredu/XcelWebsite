/**
 * Central content source for the Xcel iSolutions marketing site.
 * Sourced from the company profile, proposal, and Statement of Work.
 * Copy is intentionally short: one idea per block, imagery does the rest.
 */
import {
  Globe,
  Smartphone,
  Server,
  ShieldCheck,
  BarChart3,
  Plug,
  HeartPulse,
  Landmark,
  Banknote,
  Building2,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import type { PhotoKey } from "./images";

export const company = {
  name: "Xcel iSolutions",
  legalName: "Xcel iSolutions Company Limited",
  tagline: "Driven by Care. Powered by Innovation.",
  mission: "Robust technology solutions at the best possible value.",
  vision: "To empower organizations with secure, bespoke technology built on trust, innovation and care.",
  hashtag: "#TechForGrowth",
  email: "info@xcelisolutions.com",
  website: "www.xcelisolutions.com",
  location: "P. O. Box AD961, Adabraka, Accra, Ghana",
  city: "Accra, Ghana",
  phones: ["+233 (0) 24 343 4870", "+233 (0) 20 466 1111"],
};

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 10, suffix: "+", label: "Years building regulated software" },
  { value: 12, suffix: "+", label: "Institutions served across Ghana" },
  { value: 24, suffix: "/7", label: "SLA-backed technical support" },
  { value: 3, suffix: "", label: "Platforms per build: web, mobile and API" },
];

/* ------------------------------------------------------------------ */
/* Home: story + "paper to platform" chapters                          */
/* ------------------------------------------------------------------ */

export const story = {
  eyebrow: "Our story",
  title: "We started on the inside.",
  body: "Our leaders spent decades inside Ghana's insurers, banks and healthcare businesses. We know the paper trails, delays and disconnected systems first-hand, so we build the software we always wished we had.",
};

export type Chapter = {
  id: "capture" | "automate" | "decide" | "protect";
  label: string;
  title: string;
  body: string;
};

export const chapters: Chapter[] = [
  {
    id: "capture",
    label: "Capture",
    title: "Every claim, member and payment, captured once.",
    body: "Portals and mobile apps that let staff, providers and members serve themselves.",
  },
  {
    id: "automate",
    label: "Automate",
    title: "The busywork, handled.",
    body: "Claims engines, approvals and finance workflows that run on rules, not reminders.",
  },
  {
    id: "decide",
    label: "Decide",
    title: "See everything, as it happens.",
    body: "Live dashboards and board-ready reports, with every number traceable to its source.",
  },
  {
    id: "protect",
    label: "Protect",
    title: "Secure by design, not by patch.",
    body: "Encryption, role-based access and full audit trails, aligned with Ghana's Data Protection Act.",
  },
];

/* ------------------------------------------------------------------ */
/* Services & industries                                               */
/* ------------------------------------------------------------------ */

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Staff and provider portals, self-service platforms and dashboards, built to scale.",
    features: ["Custom portals", "Role-based access", "Real-time dashboards"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Android and iOS apps for attendance, provider search and claims on the go.",
    features: ["Android & iOS", "Offline-ready", "Push & OTP flows"],
  },
  {
    icon: Server,
    title: "Enterprise Software",
    description: "General ledger, payroll, claims engines and IFRS 17 compliance, end to end.",
    features: ["Financial accounting", "Claims automation", "Workflow engines"],
  },
  {
    icon: Plug,
    title: "Integration & APIs",
    description: "REST and HL7/FHIR integrations that connect new platforms to what you already run.",
    features: ["REST APIs", "HL7 / FHIR", "Legacy migration"],
  },
  {
    icon: BarChart3,
    title: "Data & Intelligence",
    description: "Executive dashboards and board reporting that turn operations into decisions.",
    features: ["BI dashboards", "Fraud detection", "Exportable reports"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description: "Encryption, audit trails and access control, designed in from day one.",
    features: ["Encryption", "Audit trails", "2FA & RBAC"],
  },
];

export type Industry = {
  icon: LucideIcon;
  name: string;
  blurb: string;
};

export const industries: Industry[] = [
  { icon: HeartPulse, name: "Healthcare", blurb: "Claims, provider portals and pre-authorization." },
  { icon: ShieldCheck, name: "Health Insurance", blurb: "Membership, beneficiaries and premium reconciliation." },
  { icon: Banknote, name: "Banking & Finance", blurb: "IFRS 17, accounting and staff benefit platforms." },
  { icon: Landmark, name: "Public Sector", blurb: "Platforms for accountable, citizen-first service." },
  { icon: Building2, name: "Enterprise", blurb: "Bespoke systems that replace manual processes." },
  { icon: GraduationCap, name: "Education & Non-Profit", blurb: "Management tools for social-impact institutions." },
];

/* ------------------------------------------------------------------ */
/* Work / case studies                                                 */
/* ------------------------------------------------------------------ */

export type MockupKind = "claims" | "dashboard" | "ledger";

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  /** One-line hook used on cards. */
  hook: string;
  metric: string;
  image: PhotoKey;
  mockup: MockupKind;
  challenge: string;
  solution: string;
  outcome: string;
  highlights: string[];
  scope: string[];
};

export const projects: Project[] = [
  {
    slug: "corporate-health-claims",
    name: "Corporate Health Claims Management System",
    shortName: "Corporate Health Claims",
    category: "Banking · Healthcare",
    hook: "One claims ecosystem for staff, providers and the bank behind them.",
    metric: "Web + Mobile + API",
    image: "doctorPhone",
    mockup: "claims",
    challenge:
      "Staff medical claims moved between providers, HR and finance on paper and email: slow to adjudicate and hard to audit.",
    solution:
      "A web platform, mobile app and provider API working as one system, with automated adjudication and a rules-based fraud engine.",
    outcome:
      "Claims are adjudicated in real time, providers submit directly, and every decision carries a complete audit trail.",
    highlights: [
      "Automated, real-time claim adjudication",
      "HL7/FHIR provider integration",
      "Fraud detection with red-flag rules",
    ],
    scope: ["Web application", "Mobile app", "API integration", "Fraud engine"],
  },
  {
    slug: "gma-mhf-digital-platform",
    name: "GMA-MHF Digital Platform",
    shortName: "GMA-MHF Platform",
    category: "Health Fund · Public Sector",
    hook: "Membership, premiums and providers, digitized end to end.",
    metric: "3 systems, 10-week delivery",
    image: "boardroom",
    mockup: "dashboard",
    challenge:
      "Membership, premium collection and provider administration lived in separate spreadsheets and offices.",
    solution:
      "An integrated ecosystem covering operations, claims submission and financial management, with executive BI on top.",
    outcome:
      "A single source of truth for members and money, with board reporting available on demand.",
    highlights: [
      "Membership & beneficiary management",
      "Premium reconciliation engine",
      "Executive BI & board reporting",
    ],
    scope: ["Operations system", "Claims portal", "Finance module", "BI dashboards"],
  },
  {
    slug: "ifrs-17-financial-systems",
    name: "IFRS 17 Financial Systems",
    shortName: "IFRS 17 Systems",
    category: "Insurance · Finance",
    hook: "Proprietary IFRS 17 systems, now live at multiple insurers.",
    metric: "Multiple insurers live",
    image: "financeLaptop",
    mockup: "ledger",
    challenge:
      "IFRS 17 changed how insurers measure and report contracts, and generic tools didn't fit Ghana's private health insurers.",
    solution:
      "Purpose-built financial systems covering IFRS 17 measurement, general ledger and reconciliation.",
    outcome:
      "Adopted by several private health insurers to modernize compliance and reporting.",
    highlights: [
      "Regulatory-compliant reporting",
      "General ledger & reconciliation",
      "Adopted by multiple insurers",
    ],
    scope: ["IFRS 17 engine", "General ledger", "Reconciliation", "Regulatory reports"],
  },
];

/* ------------------------------------------------------------------ */
/* Process, tech, testimonials, clients, FAQ                           */
/* ------------------------------------------------------------------ */

export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Discover", duration: "Weeks 1–2", description: "Interviews, process mapping and agreed scope." },
  { step: "02", title: "Design", duration: "Weeks 2–3", description: "Architecture, UX and security, signed off first." },
  { step: "03", title: "Build", duration: "Weeks 4–7", description: "Agile delivery with continuous QA." },
  { step: "04", title: "Test", duration: "Weeks 8–9", description: "Integration, security and user acceptance." },
  { step: "05", title: "Launch", duration: "Week 10", description: "Training, handover and supported go-live." },
  { step: "06", title: "Support", duration: "30 days +", description: "Hypercare, then 24/7 SLA-backed support." },
];

export type TechGroup = { category: string; items: string[] };

export const techStack: TechGroup[] = [
  { category: "Backend", items: ["C#", "ASP.NET", "Python", "REST APIs", "HL7 / FHIR"] },
  { category: "Frontend", items: ["Blazor", "React", "Next.js", "TypeScript"] },
  { category: "Data", items: ["SQL Server", "PostgreSQL", "SSIS", "Power BI"] },
  { category: "Cloud & DevOps", items: ["AWS", "Microsoft Azure", "Docker", "CI/CD"] },
];

export type Testimonial = { quote: string; author: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "They didn't hand us generic software. They built a claims engine around how we actually operate. Turnaround times dropped and our audit trail has never been cleaner.",
    author: "Operations Lead",
    role: "Private Health Insurer, Ghana",
  },
  {
    quote:
      "Their team understood both the regulatory and the technical side. The IFRS 17 rollout was smooth, and support has been genuinely responsive.",
    author: "Finance Director",
    role: "Medical Insurance Company",
  },
  {
    quote:
      "From web portal to mobile app, everything integrated with our existing systems. Security and compliance were there from day one.",
    author: "IT Manager",
    role: "Healthcare Provider Network",
  },
];

export const clients: string[] = [
  "Premier Health Insurance",
  "Equity Health Insurance",
  "Nationwide Medical Insurance",
  "GAB Health Insurance",
  "Ace Medical Insurance",
  "Fastcare Clinics",
  "Vitality Health",
  "Medcare Plus Clinics",
  "Prosperous Africa Foundation",
  "Reload Brands Ghana",
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "What kinds of software do you build?",
    answer:
      "Custom web applications, Android and iOS apps, and enterprise systems: financial accounting, claims engines, provider portals and BI dashboards. Everything is tailored, never off the shelf.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "Healthcare, health insurance, banking and finance, and the public sector: regulated industries where compliance, security and auditability are non-negotiable.",
  },
  {
    question: "How do you handle security and data protection?",
    answer:
      "Security is designed in from the start: encryption at rest and in transit, role-based access, two-factor authentication and full audit trails, aligned with Ghana's Data Protection Act and frameworks such as NHIA guidelines.",
  },
  {
    question: "Do you integrate with existing systems?",
    answer:
      "Yes. We integrate via REST APIs and healthcare standards like HL7/FHIR, and handle legacy migrations, so new platforms slot into your ecosystem instead of replacing everything at once.",
  },
  {
    question: "What support do you provide after launch?",
    answer:
      "A 30-day hypercare period, then a 24/7 support desk with SLA-driven response times (critical issues within 4 hours), plus upgrades, monitoring and on-demand training.",
  },
];

/* ------------------------------------------------------------------ */
/* About: values + team                                                */
/* ------------------------------------------------------------------ */

export const values: { title: string; description: string }[] = [
  { title: "Collaborate", description: "We partner for mutual growth." },
  { title: "Customize", description: "We build around your needs, not a template." },
  { title: "Innovate", description: "We hold ourselves to modern engineering standards." },
  { title: "Secure", description: "We put cybersecurity into everything we ship." },
];

export const aboutStory: string[] = [
  "Xcel iSolutions is a Ghanaian-owned technology company. Our leadership team has spent decades in finance, IT operations and people management inside the industries we now build for.",
  "That inside view shapes everything we do. We start with how your teams actually work, then design secure, bespoke systems that fit, from the first workshop to years of support after launch.",
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  image: string;
  linkedin: string;
  /** Short teaser shown on the card. */
  bio: string;
  /** Full biography paragraphs shown in the profile popup. */
  fullBio: string[];
  credentials: string[];
};

export const team: TeamMember[] = [
  {
    name: "Samuel Adi Boafo",
    role: "Chief Executive Officer",
    initials: "SB",
    image: "/team/samuel-boafo.jpg",
    linkedin: "https://www.linkedin.com/in/samuel-kwaku-boafo-a90b48100/",
    bio: "Award-winning Chartered Accountant with 18+ years across Ghana's financial services and health insurance.",
    fullBio: [
      "Samuel is a visionary, award-winning Chartered Accountant and transformational business leader with over 18 years of progressive executive experience spanning Ghana's financial services and private health insurance industries.",
      "As Chief Executive Officer of Xcel iSolutions Company Limited, Samuel has led the company through a remarkable phase of exponential growth, leveraging innovation, operational excellence, and digital transformation to significantly improve financial performance and market positioning. He possesses deep expertise in finance, risk management, regulatory compliance, and strategic leadership.",
      "Samuel has successfully overseen landmark initiatives including the implementation of IFRS 17, the full digitalization of financial departments, and the development of proprietary financial systems now adopted by several private health insurance companies.",
      "Currently pursuing an LLB at MountCrest University College to broaden his legal and regulatory acumen, Samuel also holds an MBA in Finance from Wisconsin International University College and a Bachelor of Accounting from GIMPA. His career is defined by a commitment to governance, innovation, and delivering tailored, future-ready solutions — particularly for the financial and health sectors.",
    ],
    credentials: ["Chartered Accountant", "MBA Finance", "IFRS 17 Lead", "LLB"],
  },
  {
    name: "Daniel Gyasi-Nyarko",
    role: "Chief Operations Officer",
    initials: "DG",
    image: "/team/daniel-gyasi-nyarko.jpg",
    linkedin: "https://www.linkedin.com/in/daniel-gyasi-nyarko-8064937/",
    bio: "IT executive with 15+ years leading MIS operations. PhD research in ML-driven fraud detection.",
    fullBio: [
      "Daniel is a seasoned IT executive with over 15 years of experience, combining deep technical expertise with sharpened business acumen and a relentless pursuit of innovation. His proven track record speaks volumes: spearheading successful MIS operations, exceeding business objectives, optimizing processes, and empowering high-performing teams.",
      "His passion lies in leveraging technology to revolutionize IT landscapes and elevate organizational efficiency. As a forward-thinking and accomplished COO, he brings a holistic approach to integrating technology and business, poised to drive transformative impact through strategic leadership and innovation.",
      "Daniel is a PhD Candidate in Computer Science at Ghana Communication Technology University (GCTU), actively engaged in cutting-edge research at the intersection of machine learning and cybersecurity to detect and prevent fraud.",
      "His MBA in Project Management from the Ghana Institute of Management and Public Administration (GIMPA) has equipped him with advanced project management skills, seamlessly integrating business and technology strategies for optimal project execution. His BSc in Computer Science from Ashesi University provided a robust foundation in technology fundamentals.",
      "Daniel is passionate about leveraging technology to solve real-world problems and drive positive change — building innovative, efficient IT solutions that create competitive advantage while fostering a culture of continuous learning and growth within teams.",
    ],
    credentials: ["PhD Candidate, CS", "MBA Project Mgmt", "BSc Computer Science"],
  },
  {
    name: "Daniel Barimah Wiredu",
    role: "Chief Technology Officer",
    initials: "DW",
    image: "/team/daniel-wiredu.jpg",
    linkedin: "https://www.linkedin.com/in/danielwiredu/",
    bio: "Software developer and data specialist with 10+ years in backend systems, databases and integrations.",
    fullBio: [
      "Daniel Barimah Wiredu is an experienced Software Developer and Data Specialist with over 10 years of professional expertise in designing robust backend systems, optimizing databases, and building seamless API integrations.",
      "Throughout his career, he has consistently delivered high-quality, scalable solutions tailored to meet the evolving needs of businesses across healthcare, insurance, finance, and technology sectors.",
      "Daniel holds a Bachelor of Science in Computer Science (First Class Honours) from the University for Development Studies, Ghana, and is currently advancing his expertise with a Master of Science in Computer Science at Memorial University of Newfoundland, Canada. His strong academic foundation complements practical experience in technologies such as C#, ASP.NET, Blazor, SQL Server, PostgreSQL, and Python.",
      "He has successfully led projects ranging from legacy system migrations to modern web application development and backend data infrastructure enhancements — combining technical excellence with a focus on client outcomes: system efficiency, data integrity, and smooth user adoption.",
      "Daniel's skill set extends to cloud platforms (AWS, Microsoft Azure), data engineering (SSIS), and containerization technologies (Docker). Known for his problem-solving ability, attention to detail, and clear communication, he works effectively with cross-functional teams to bring ideas from concept to implementation.",
    ],
    credentials: ["BSc CS, First Class", "MSc CS (Canada)", "Cloud & Data Engineering"],
  },
  {
    name: "Felicia Nana Ama Kyei",
    role: "HR Consultant",
    initials: "FK",
    image: "/team/felicia-kyei.jpg",
    linkedin: "https://www.linkedin.com/in/felicia-nana-ama-kyei-82b555210/",
    bio: "Chartered HR practitioner with 14+ years in HR strategy across insurance, manufacturing and the public sector.",
    fullBio: [
      "Mrs. Felicia Nana Ama Kyei is a seasoned Human Resource professional with over 14 years of progressive experience in strategic human resource management, HR advisory, organizational development, and people leadership across the manufacturing, insurance, consultancy, and public sectors.",
      "Felicia previously served as Team Lead at Inprosol Consult, a human resource consultancy firm, where she provided strategic HR advisory services to organizations across various industries — leading HR consulting projects end-to-end, developing tailored HR policies and procedures, and mentoring junior consultants.",
      "She currently serves as Human Resource Manager at Kofi Ababio & Sons Ltd., where she leads the organization's human capital strategy and drives initiatives that enhance employee performance, strengthen organizational culture, and support business growth.",
      "Mrs. Kyei also spent over a decade at Nationwide Medical Insurance, rising through the ranks to become Head of Human Resource Management — leading key initiatives in HR policy development, performance management, employee relations, job evaluation, and HR systems improvement across a complex, regulated industry.",
      "Felicia holds a Master of Arts in Management and Administration from the University of Ghana Business School and a Bachelor of Science in Administration (Human Resource Management) from Pentecost University College. She is a Chartered Human Resource Practitioner (CHRP) and an emerging thought leader who writes on leadership, workplace culture, and employee engagement.",
    ],
    credentials: ["Chartered HR Practitioner", "MA Mgmt & Administration", "14+ Years HR Leadership"],
  },
  {
    name: "Emmanuel Ehun Mbir",
    role: "Frontend Engineer",
    initials: "EM",
    image: "/team/emmanuel-mbir.png",
    linkedin: "https://www.linkedin.com/in/emmanuel-ehun-mbir-b10816145/",
    bio: "Frontend engineer with 8+ years shipping web and mobile apps for healthcare, insurance and enterprise.",
    fullBio: [
      "Emmanuel is a Frontend Engineer with 8+ years of experience delivering scalable, high-performance web and mobile applications and intuitive user experiences for healthcare, insurance, and enterprise solutions.",
      "His expertise includes responsive design, reusable component architectures, API integrations, testing, and performance optimization — complemented by a strong track record of collaborating within Agile teams to deliver accessible, production-ready digital products.",
    ],
    credentials: [
      "BSc Information Technology",
      "MSc Computer Science",
      "Certified Data Analyst",
      "Google IT Support Specialist",
    ],
  },
];
