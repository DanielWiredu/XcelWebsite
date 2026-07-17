/**
 * Central content source for the Xcel iSolutions marketing site.
 * Sourced from the company profile, proposal, and Statement of Work.
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
  Utensils,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Xcel iSolutions",
  legalName: "Xcel iSolutions Company Limited",
  tagline: "Driven by Care. Powered by Innovation.",
  mission: "We strive to offer robust technological solutions at the best possible value.",
  vision:
    "To empower organizations with secure, bespoke technologies — built on trust, innovation, and care.",
  hashtag: "#TechForGrowth",
  email: "info@xcelisolutions.com",
  website: "www.xcelisolutions.com",
  location: "P. O. Box AD961, Adabraka — Accra, Ghana",
  phones: ["+233 (0) 24 343 4870", "+233 (0) 20 466 1111"],
};

export const stats: { value: string; label: string }[] = [
  { value: "10+", label: "Years delivering regulated software" },
  { value: "12+", label: "Institutions served across Ghana" },
  { value: "24/7", label: "SLA-backed technical support" },
  { value: "3", label: "Integrated platforms per deployment" },
];

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
    description:
      "Role-based staff and provider portals, self-service platforms, and executive dashboards engineered for scale and security.",
    features: ["Custom web portals", "Role-based access", "Real-time dashboards"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native-quality Android and iOS apps — from OTP attendance and provider search to claims tracking on the go.",
    features: ["Android & iOS", "Offline-ready UX", "Push & OTP flows"],
  },
  {
    icon: Server,
    title: "Enterprise Software",
    description:
      "End-to-end financial and operational systems: general ledger, payroll, claims engines, and IFRS 17 compliance.",
    features: ["Financial accounting", "Claims automation", "Workflow engines"],
  },
  {
    icon: Plug,
    title: "API & Systems Integration",
    description:
      "Seamless integration with existing systems via RESTful APIs and HL7/FHIR, unifying data across your ecosystem.",
    features: ["RESTful APIs", "HL7 / FHIR", "Legacy migration"],
  },
  {
    icon: BarChart3,
    title: "Data & Business Intelligence",
    description:
      "Executive dashboards, board reporting, and analytics that turn raw operations into real-time decision support.",
    features: ["BI dashboards", "Fraud detection", "Exportable reports"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Security-first architecture with encryption, audit trails, and alignment to Ghana's Data Protection Act.",
    features: ["Encryption at rest & transit", "Full audit trails", "2FA & RBAC"],
  },
];

export type Industry = {
  icon: LucideIcon;
  name: string;
  blurb: string;
};

export const industries: Industry[] = [
  {
    icon: HeartPulse,
    name: "Healthcare",
    blurb: "Claims engines, provider portals, and pre-authorization workflows for insurers and clinics.",
  },
  {
    icon: ShieldCheck,
    name: "Health Insurance",
    blurb: "Membership, beneficiary, and premium reconciliation systems built for regulated insurers.",
  },
  {
    icon: Banknote,
    name: "Banking & Finance",
    blurb: "IFRS 17 systems, financial accounting, and staff benefit platforms for banks.",
  },
  {
    icon: Landmark,
    name: "Public Sector",
    blurb: "Digital platforms that improve governance, accountability, and citizen service delivery.",
  },
  {
    icon: Building2,
    name: "Enterprise",
    blurb: "Bespoke operational systems that automate manual processes and unlock efficiency.",
  },
  {
    icon: GraduationCap,
    name: "Education & Non-Profit",
    blurb: "Custom management tools for foundations and institutions driving social impact.",
  },
];

export type Project = {
  name: string;
  category: string;
  summary: string;
  highlights: string[];
  metric: string;
};

export const projects: Project[] = [
  {
    name: "Corporate Health Claims Management System",
    category: "Banking · Healthcare",
    summary:
      "A fully integrated healthcare claims ecosystem — web platform, mobile app, and API integration — automating adjudication and fraud detection for corporate staff and providers.",
    highlights: [
      "Automated & real-time claim adjudication",
      "HL7/FHIR provider integration",
      "Fraud detection engine with red-flag rules",
    ],
    metric: "Web + Mobile + API",
  },
  {
    name: "GMA-MHF Digital Platform",
    category: "Health Fund · Public Sector",
    summary:
      "An integrated digital ecosystem spanning operations, claims submission, and financial management — digitizing membership, premiums, and provider administration end to end.",
    highlights: [
      "Membership & beneficiary management",
      "Premium reconciliation engine",
      "Executive BI & board reporting",
    ],
    metric: "3 systems, 10-week delivery",
  },
  {
    name: "IFRS 17 Financial Systems",
    category: "Insurance · Finance",
    summary:
      "Proprietary financial systems implementing IFRS 17, now adopted by several private health insurance companies to modernize compliance and reporting.",
    highlights: [
      "Regulatory-compliant reporting",
      "General ledger & reconciliation",
      "Adopted by multiple insurers",
    ],
    metric: "Multiple insurers live",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Requirements & Discovery",
    duration: "Week 1–2",
    description:
      "Stakeholder interviews, process mapping, and gap analysis to validate requirements and align on scope.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    duration: "Week 2–3",
    description:
      "System and database design, UI/UX mockups, and a security architecture signed off before a line of code.",
  },
  {
    step: "03",
    title: "Development & Configuration",
    duration: "Week 4–7",
    description:
      "Agile build of all modules, workflows, dashboards, and APIs with continuous internal quality assurance.",
  },
  {
    step: "04",
    title: "Integration & UAT",
    duration: "Week 8–9",
    description:
      "System integration, security, and performance testing, then user acceptance testing to a 95% pass threshold.",
  },
  {
    step: "05",
    title: "Training & Go-Live",
    duration: "Week 10",
    description:
      "Administrator and end-user training, documentation handover, and a supported production deployment.",
  },
  {
    step: "06",
    title: "Hypercare & Support",
    duration: "30 days+",
    description:
      "Post-launch hypercare with SLA-backed response times, monitoring, and 24/7 ongoing technical support.",
  },
];

export type TechGroup = {
  category: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  { category: "Backend", items: ["C#", "ASP.NET", "Python", "REST APIs", "HL7 / FHIR"] },
  { category: "Frontend", items: ["Blazor", "React", "Next.js", "TypeScript"] },
  { category: "Data", items: ["SQL Server", "PostgreSQL", "SSIS", "Power BI"] },
  { category: "Cloud & DevOps", items: ["AWS", "Microsoft Azure", "Docker", "CI/CD"] },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Xcel iSolutions didn't hand us generic software — they built a claims engine around how we actually operate. Turnaround times dropped and our audit trail has never been cleaner.",
    author: "Operations Lead",
    role: "Private Health Insurer, Ghana",
  },
  {
    quote:
      "Their team understood both the regulatory and the technical side. The IFRS 17 rollout was smooth, and support has been genuinely responsive whenever we needed them.",
    author: "Finance Director",
    role: "Medical Insurance Company",
  },
  {
    quote:
      "From web portal to mobile app, everything integrated seamlessly with our existing systems. Security and compliance were baked in from day one.",
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
      "We build custom web applications, native Android and iOS mobile apps, and enterprise software — including financial accounting systems, healthcare claims engines, provider portals, and business intelligence dashboards. Every system is tailored to the client rather than sold off the shelf.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "We have deep domain experience in healthcare, health insurance, banking and finance, and the public sector — regulated industries where compliance, security, and auditability are non-negotiable.",
  },
  {
    question: "How do you handle security and data protection?",
    answer:
      "Security is designed in from the start: encryption at rest and in transit, role-based access controls, two-factor authentication, full audit trails, and alignment with Ghana's Data Protection Act and industry-specific frameworks such as NHIA guidelines.",
  },
  {
    question: "What does your delivery process look like?",
    answer:
      "We follow a phased approach — discovery and requirements, design and architecture, development, integration and UAT, then training and go-live — with clear milestones and acceptance criteria at each stage, followed by a 30-day hypercare period.",
  },
  {
    question: "Do you integrate with existing systems?",
    answer:
      "Yes. We integrate via RESTful APIs and healthcare standards like HL7/FHIR, and we handle legacy system migrations, so new platforms slot into your existing ecosystem rather than replacing everything at once.",
  },
  {
    question: "What support do you provide after launch?",
    answer:
      "We offer a 24/7 technical support desk with SLA-driven response times — critical issues within 4 hours — plus regular upgrades, monitoring, and on-demand training modules to ensure long-term success beyond go-live.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  image: string;
  bio: string;
  credentials: string[];
};

export const team: TeamMember[] = [
  {
    name: "Samuel Adi Boafo",
    role: "Chief Executive Officer",
    initials: "SB",
    image: "/team/samuel-boafo.jpg",
    bio: "An award-winning Chartered Accountant and transformational leader with 18+ years across Ghana's financial services and private health insurance industries, driving innovation and digital transformation.",
    credentials: ["Chartered Accountant", "MBA Finance", "IFRS 17 Lead", "LLB"],
  },
  {
    name: "Daniel Gyasi-Nyarko",
    role: "Chief Operations Officer",
    initials: "DG",
    image: "/team/daniel-gyasi-nyarko.jpg",
    bio: "A seasoned IT executive with 15+ years spearheading MIS operations and high-performing teams. His PhD research combines machine learning and cybersecurity to detect and prevent fraud.",
    credentials: ["PhD Candidate, CS", "MBA Project Mgmt", "BSc Computer Science"],
  },
  {
    name: "Daniel Barimah Wiredu",
    role: "Chief Technology Officer",
    initials: "DW",
    image: "/team/daniel-wiredu.jpg",
    bio: "A software developer and data specialist with 10+ years designing robust backend systems, databases, and API integrations across healthcare, insurance, and finance.",
    credentials: ["BSc CS, First Class", "MSc CS (Canada)", "Cloud & Data Engineering"],
  },
];

export const values: { title: string; description: string }[] = [
  { title: "Collaborate", description: "We partner for mutual growth." },
  { title: "Customize", description: "We deliver solutions tailored to client needs." },
  { title: "Innovate", description: "We uphold modern standards in system development." },
  { title: "Secured", description: "We prioritize cybersecurity in all our solutions." },
];

export const clientIcons: LucideIcon[] = [
  HeartPulse,
  ShieldCheck,
  Banknote,
  Building2,
  GraduationCap,
  Utensils,
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];
