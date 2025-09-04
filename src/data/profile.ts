export type Link = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
};

export type Project = {
  name: string;
  technologies: string[];
  impact: string;
};

export type Education = {
  degree: string;
  institution: string;
  year?: string;
};

export type Certification = {
  name: string;
  issuer: string;
};

export type LanguageProficiency = {
  language: string;
  level: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  links: Link[];
  summary: string;
  skills: {
    languagesAndFrameworks: string[];
    databases: string[];
    cloudAndDevOps: string[];
    architectureAndMethodologies: string[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  languages: LanguageProficiency[];
};

export const profile: Profile = {
  name: 'Ricardo Alonso Chávez Jiménez',
  title: 'Full Stack Developer',
  location: 'Nuevo Laredo, Tamaulipas, Mexico',
  email: 'ricardoachavezjimenez@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rachavezmia/' },
    { label: 'Email', href: 'mailto:ricardoachavezjimenez@gmail.com' },
  ],
  summary:
    'Full Stack Developer specialized in optimizing mission-critical business processes through scalable web and cloud solutions that reduce costs, errors, and operational time. Proficient in .NET 8, Angular 17, React 19, Python, Azure AD (MSAL), Microsoft Graph API, CouchDB, AS400 integrations, and process automation with Selenium. Proven ability to lead projects from analysis to deployment, ensuring security, scalability, and regulatory compliance.',
  skills: {
    languagesAndFrameworks: [
      'C# (.NET 6–8)',
      'Python (Selenium, Flask, Pandas, NumPy)',
      'TypeScript',
      'Angular 17',
      'React 19',
      'Tailwind CSS',
    ],
    databases: ['SQL Server', 'CouchDB', 'DB2 (AS400)'],
    cloudAndDevOps: [
      'Azure AD (MSAL)',
      'Microsoft Graph API',
      'Azure AI Foundry',
      'Azure Document Intelligence (Form Recognizer)',
      'Azure Storage Blobs',
      'Power Automate',
      'Git/GitHub',
      'Logstash',
      'Kafka',
    ],
    architectureAndMethodologies: [
      'Microservices',
      'REST APIs',
      'CI/CD',
      'Agile/Scrum',
      'ITIL 4',
    ],
    tools: [
      'Visual Studio',
      'VS Code',
      'AutoCAD (with LISP)',
      'SolidWorks',
      'Fusion 360',
      '3D Mechanical Design',
      '3D Modeling',
      '3D Printing (FDM & Resin)',
      'jqGrid',
    ],
  },
  experience: [
    {
      company: 'TransMex Inc',
      location: 'Nuevo Laredo, Tamaulipas, Mexico',
      role: 'IT Analyst / Full Stack Developer',
      startDate: 'Feb 2024',
      endDate: 'Present',
      bullets: [
        'Developed internal portals using .NET 8, Angular 17, React 19, integrated with Azure AD authentication and Microsoft Graph API.',
        'Built Python/Selenium automations reducing data processing time by 90%.',
        'Created systems with role control, dashboards, and activity logs improving efficiency by 70%.',
        'Developed and maintained APIs for DB2 (AS400) queries.',
        'Designed and implemented Logstash-to-Kafka data pipelines.',
      ],
    },
    {
      company: 'TransMex Inc',
      location: 'Nuevo Laredo, Tamaulipas, Mexico',
      role: 'Document Specialist',
      startDate: 'Aug 2023',
      endDate: 'Feb 2024',
      bullets: [
        'Managed and validated documentation for Carta Porte and border-crossing processes.',
      ],
    },
    {
      company: 'TransMex Inc',
      location: 'Nuevo Laredo, Tamaulipas, Mexico',
      role: 'IT Support Assistant',
      startDate: 'Sept 2022',
      endDate: 'Aug 2023',
      bullets: [
        'Provided support for hardware, software, and network issues.',
      ],
    },
  ],
  projects: [
    {
      name: 'TransmexSentinel · AI Email & Document Processing',
      technologies: [
        '.NET 8',
        'Microsoft Graph API',
        'Azure AI Foundry',
        'Azure Document Intelligence',
        'Azure Storage Blobs',
        'Swagger/OpenAPI',
      ],
      impact:
        'POC y servicios productivos para ingesta de correos con Graph, extracción de adjuntos PDF, análisis con Document Intelligence y Content Understanding (Azure AI Foundry), y orquestación para clasificación/movimiento de correos y extracción estructurada. Base para iniciativas AI de automatización documental.',
    },
    {
      name: 'Carta Porte Integration Portal',
      technologies: ['React 19', '.NET 8', 'MSAL', 'AS400', 'Microsoft Graph API'],
      impact: 'Reduced validation errors by 85%, processing 1,000+ layouts/month with full traceability.',
    },
    {
      name: 'TransmexSigna',
      technologies: ['Angular 17', '.NET 8', 'MSAL', 'CouchDB', 'Microsoft Graph API'],
      impact: 'Cut document approval times by 60% through digital signatures and role-based access control.',
    },
    {
      name: 'Driver Ranking Bot',
      technologies: ['Python', 'Selenium'],
      impact: 'Processes 500+ records/day, reducing report generation time by 90%.',
    },
    {
      name: 'Stellantis Report',
      technologies: ['.NET', 'Angular 17'],
      impact: 'Reduced manual document matching by 95% with automated cross-reference of XML and acknowledgment receipts.',
    },
    {
      name: 'Stamping Report',
      technologies: ['.NET', 'Angular 17'],
      impact: 'Decreased recurring stamping errors by 70% with dashboards and error tracking tables.',
    },
    {
      name: 'Employee Report Web App',
      technologies: ['.NET 8', 'Angular 17'],
      impact: 'Eliminated manual report generation, reducing time by 80%.',
    },
    {
      name: 'GPS Data Automation',
      technologies: ['Python'],
      impact: 'Monitors 200+ devices, reducing troubleshooting time by 50% with real-time data from Moko and Oyster GPS antennas.',
    },
    {
      name: 'GeoRutasGoogle',
      technologies: ['Flask (Python)', 'Google Maps API'],
      impact: 'Cut route planning time by 65% with automated geofence and route generation.',
    },
    {
      name: 'Yard Management System Geofences',
      technologies: ['AutoCAD', 'LISP', 'SQL'],
      impact: 'Reduced geofence configuration time by 70% by automating layout-to-SQL conversion.',
    },
    {
      name: 'Carta Porte Process Automation',
      technologies: ['Python'],
      impact: 'Reduced document verification time by 60%.',
    },
  ],
  education: [
    { degree: 'Master’s in Data Science Engineering (Ongoing)', institution: 'Universidad del Valle de México (UVM)' },
    { degree: 'Master’s in Artificial Intelligence', institution: 'CEUPE' },
    { degree: 'Bachelor’s in Mechatronics Engineering', institution: 'Universidad Tecnológica de Nuevo Laredo' },
  ],
  certifications: [
    { name: 'ITIL 4 Foundation', issuer: 'PeopleCert' },
    { name: 'CouchDB Essentials', issuer: 'Udemy' },
  ],
  languages: [
    { language: 'Spanish', level: 'Native' },
    { language: 'English', level: 'Advanced (technical)' },
  ],
};


