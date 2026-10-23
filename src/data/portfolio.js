import { Code2, Layers, Cloud, Database, Workflow, Plug, Wrench } from "lucide-react";

export const profile = {
  name: "Mustafa Bakrolwala",
  firstName: "Mustafa",
  roles: [
    "Backend Developer",
    "Python / Django Engineer",
    "REST API Designer",
    "Azure Functions Developer",
  ],
  summary:
    "Backend Developer with 3+ years of experience designing scalable REST APIs, microservices, and enterprise applications using Python, Django, and Azure. Skilled in PostgreSQL optimization, Celery-based asynchronous processing, Azure Functions, Salesforce and Capillary CRM integrations, payment gateway integrations, and cloud deployments. Proven track record of improving system performance, automating business workflows, and delivering reliable backend solutions for large-scale enterprise applications.",
  email: "mustafabakrol@gmail.com",
  phone: "+91 9724142041",
  location: "Ahmedabad, Gujarat",
  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/MUSTUFA77",
    linkedin: "https://www.linkedin.com/in/mustufa-bakrolwala-940719283/",
  },
};

export const metrics = [
  { value: 3, prefix: "", suffix: "+", label: "Years of experience", note: "Backend development" },
  { value: 35, prefix: "−", suffix: "%", label: "API response latency", note: "Query optimization & efficient API design" },
  { value: 45, prefix: "+", suffix: "%", label: "Background job efficiency", note: "Celery distributed task processing" },
  { value: 60, prefix: "−", suffix: "%", label: "Avg. query execution time", note: "PostgreSQL indexing & tuning" },
];

export const skillGroups = [
  { id: "languages", title: "Languages", icon: Code2, items: ["Python", "SQL"] },
  { id: "frameworks", title: "Frameworks", icon: Layers, items: ["Django", "Django REST Framework (DRF)"] },
  {
    id: "cloud",
    title: "Cloud & Microservices",
    icon: Cloud,
    items: ["Azure Microservices", "Azure Functions", "Azure Time Trigger Functions", "Heroku"],
  },
  { id: "databases", title: "Databases", icon: Database, items: ["PostgreSQL", "MySQL", "SQLite"] },
  { id: "async", title: "Async Processing", icon: Workflow, items: ["Celery", "Redis"] },
  {
    id: "integrations",
    title: "Integrations",
    icon: Plug,
    items: ["REST API Design", "Salesforce APIs", "Capillary CRM APIs", "Paytm Payment Gateway", "Webhooks"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    items: ["Git", "Docker", "Linux", "New Relic", "Papertrail", "Power BI", "Heroku Connect"],
  },
];

export const experience = {
  role: "Software Developer",
  company: "Brainvire Infotech Pvt. Ltd.",
  location: "Ahmedabad, Gujarat",
  period: "Jan 2023 – Present",
  logs: [
    "Developed scalable backend applications using Python, Django, Django REST Framework (DRF), PostgreSQL, Azure Microservices, and Azure Functions.",
    "Designed and maintained RESTful APIs, authentication flows, business logic modules, and third-party integrations for enterprise web and mobile applications.",
    "Implemented Celery and Redis based asynchronous task processing, scheduled jobs, notifications, and automation workflows, improving system responsiveness.",
    "Built integrations with Salesforce APIs, Capillary CRM APIs, Paytm Payment Gateway, and WhatsApp Business APIs, implementing webhooks, retry mechanisms, audit logging, and error handling.",
    "Optimized PostgreSQL queries, indexing strategies, and API performance while utilizing New Relic, Papertrail, Git, Docker, Linux, and Heroku for monitoring and deployment.",
  ],
};

export const projects = [
  {
    featured: true,
    title: "PIDILITE",
    subtitle: "Enterprise Loyalty & Dealer Engagement Platform",
    award: "Spot Award Recipient · Jan 2025",
    tech: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "Azure Functions",
      "Azure Microservices",
      "Celery",
      "Salesforce",
      "Capillary CRM",
    ],
    bullets: [
      "Spot Award Recipient (Jan 2025) for delivering scalable backend solutions and driving technical improvements across critical business workflows.",
      "Developed enterprise-grade APIs and backend workflows for loyalty management, campaign automation, and transaction processing using Django REST Framework, reducing response latency by 35% through query optimization and efficient API design.",
      "Implemented Azure Time Trigger Functions and Azure Microservices to automate scheduled business processes and transaction workflows.",
      "Integrated Celery for distributed task processing, improving background job execution efficiency by 45%.",
      "Built and maintained integrations with Capillary CRM, Salesforce, and Paytm Payment Gateway, including webhook handling, transaction reconciliation, and retry mechanisms.",
      "Optimized PostgreSQL queries and indexing strategies, reducing average query execution time by 60%.",
    ],
    bars: [
      { label: "Response latency", value: 35, sign: "−" },
      { label: "Background job efficiency", value: 45, sign: "+" },
      { label: "Avg. query execution time", value: 60, sign: "−" },
    ],
  },
  {
    featured: false,
    title: "Vendor Management System",
    subtitle: "Vendor onboarding & procurement workflows",
    github: "https://github.com/MUSTUFA77/Vendor-Management-System",
    tech: ["Python", "Django", "DRF", "PostgreSQL"],
    bullets: [
      "Developed a vendor management platform using Python, Django, Django REST Framework, and PostgreSQL for vendor onboarding and procurement workflows.",
      "Designed database schemas, CRUD operations, REST APIs, authentication, and vendor performance tracking modules.",
      "Implemented reporting dashboards and analytics features to monitor vendor performance and operational metrics.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering (Computer Science)",
  school: "Gujarat Technological University",
  period: "June 2023",
  cgpa: 8.7,
};

/** Keywords that get highlighted inside log / bullet text. */
export const keywords = [
  "Python",
  "Django REST Framework",
  "Django",
  "DRF",
  "PostgreSQL",
  "Azure Microservices",
  "Azure Time Trigger Functions",
  "Azure Functions",
  "Celery",
  "Redis",
  "Salesforce",
  "Capillary CRM",
  "Paytm Payment Gateway",
  "WhatsApp Business APIs",
  "New Relic",
  "Papertrail",
  "Docker",
  "Linux",
  "Heroku",
  "Git",
  "35%",
  "45%",
  "60%",
];
