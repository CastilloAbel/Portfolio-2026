import {
  AppWindow,
  Atom,
  Blocks,
  Braces,
  Cloud,
  Code,
  Container,
  Database,
  GitBranch,
  Github,
  HardDrive,
  Monitor,
  Network,
  Server,
  Smartphone,
  Terminal,
  UserKey,
  Workflow,
} from 'lucide-react';

export const techStack = {
  development: [
    { name: 'Python', icon: Code, color: '#3776AB' },
    { name: 'JavaScript', icon: Braces, color: '#F7DF1E' },
    { name: 'React', icon: Atom, color: '#61DAFB' },
    { name: 'Node.js', icon: Server, color: '#5FA04E' },
    { name: 'Swift', icon: Smartphone, color: '#F05138' },
    { name: 'SQL', icon: Database, color: '#4169E1' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: Database, color: '#4169E1' },
    { name: 'SQL Server', icon: Database, color: '#CC2927' },
  ],
  infrastructure: [
    { name: 'Linux', icon: AppWindow, color: '#FCC624' },
    { name: 'Proxmox', icon: Server, color: '#E57000' },
    { name: 'Ceph', icon: HardDrive, color: '#EF3F36' },
    { name: 'Networking', icon: Network, color: '#2563EB' },
    { name: 'Windows Server', icon: Monitor, color: '#0078D6' },
    { name: 'Active Directory', icon: UserKey, color: '#0078D6' },
  ],
  devops: [
    { name: 'Docker / Compose', icon: Container, color: '#2496ED' },
    { name: 'Terraform', icon: Blocks, color: '#7B42BC' },
    { name: 'AWS', icon: Cloud, color: '#FF9900' },
    { name: 'GitLab CI/CD', icon: Workflow, color: '#FC6D26' },
    { name: 'Git / GitLab', icon: GitBranch, color: '#F05032' },
    { name: 'GitHub', icon: Github, color: '#181717' },
    { name: 'Bash', icon: Terminal, color: '#4EAA25' },
  ],
};

export const projects = {
  es: [
    {
      title: 'FinTech Nova',
      repository: 'https://github.com/CastilloAbel/FintechNova',
      problem:
        'Una aplicación de microservicios necesitaba un flujo repetible y seguro para construirla, analizarla y desplegarla.',
      solution:
        'Contenericé los servicios y preparé pipelines de GitLab CI/CD para automatizar build, análisis de seguridad y despliegue. Aprovisioné recursos en AWS EC2 con Terraform y configuré Traefik para el enrutamiento HTTPS.',
      result:
        'El proceso de despliegue pasó de aproximadamente 60 minutos a 22 minutos, una reducción del 63%.',
      tech: ['Docker', 'Terraform', 'AWS EC2', 'GitLab CI/CD', 'Traefik'],
      images: [
        {
          src: '/evidences/01-github.fn.png',
          type: 'screen',
          alt: 'Repositorio de GitHub de la aplicación FinTech Nova con el pipeline CI/CD.',
        },
        {
          src: '/evidences/02-gitlab-fn.png',
          type: 'screen',
          alt: 'Repositorio de GitLab de la aplicación FinTech Nova con pipelines de CI/CD y resultados de análisis de seguridad.',
        },
        {
          src: '/evidences/04-web-tarjetas.png',
          type: 'screen',
          alt: 'Interfaz web de la aplicación FinTech Nova mostrando tarjetas de crédito y débito.',
        },
        {
          src: '/evidences/05-web-facturas.png',
          type: 'screen',
          alt: 'Interfaz web de la aplicación FinTech Nova mostrando facturas y pagos pendientes.',
        },
        {
          src: '/evidences/06-web-pagos.png',
          type: 'screen',
          alt: 'Interfaz web de la aplicación FinTech Nova mostrando opciones de pago.',
        },
        {
          src: '/evidences/07-web-clientes.png',
          type: 'screen',
          alt: 'Interfaz web de la aplicación FinTech Nova mostrando la lista de clientes.',
        },
        {
          src: '/evidences/08-web-transacciones.png',
          type: 'screen',
          alt: 'Interfaz web de la aplicación FinTech Nova mostrando transacciones y movimientos.',
        },
      ],
    },
    {
      title: 'Sistema de versionado CNC',
      repository: 'https://github.com/CastilloAbel/Git-Handler',
      problem:
        'Los programas CNC se distribuían mediante carpetas compartidas sin un historial claro de cambios.',
      solution:
        'Desarrollé una aplicación web en React y una automatización en Python para integrar los archivos compartidos por SMB con el control de versiones Git.',
      result:
        'Los cambios quedan trazables y los técnicos pueden consultar las versiones desde una interfaz web.',
      tech: ['React', 'Python', 'SMB', 'Git'],
      images: [
        {
          src: '/evidences/CNC-2.png',
          type: 'screen',
          alt: 'Interfaz web del sistema de control de versiones CNC.',
        },
        {
          src: '/evidences/CNC-1.png',
          type: 'screen',
          alt: 'Vista de archivos y versiones del sistema CNC.',
        },
      ],
    },
    {
      title: 'Integración de Gmail con Atajos de iOS',
      repository: 'https://github.com/CastilloAbel/Google-Shortcuts',
      problem:
        'Quería integrar acciones habituales de Gmail y el historial del portapapeles con automatizaciones del iPhone.',
      solution:
        'Desarrollé una aplicación personal en Swift que conecta Gmail y Google Cloud con Apple Shortcuts mediante APIs REST.',
      result:
        'Las acciones de correo y utilidades del dispositivo se pueden reutilizar desde Atajos de Apple.',
      tech: ['Swift', 'Google Cloud', 'APIs REST', 'Apple Shortcuts'],
      images: [
        {
          src: '/evidences/GS-1.jpeg',
          type: 'phone',
          alt: 'Pantalla de Atajos con automatizaciones de batería, conectividad e información del dispositivo.',
        },
        {
          src: '/evidences/GS-2.jpeg',
          type: 'phone',
          alt: 'Atajos de iOS con acciones para consultar conectividad e información del dispositivo.',
        },
        {
          src: '/evidences/GS-3.jpeg',
          type: 'phone',
          alt: 'Configuración de Atajos con acciones personalizadas.',
        },
        {
          src: '/evidences/GS-4.jpeg',
          type: 'phone',
          alt: 'Vista de las automatizaciones de Atajos en acción.',
        },
        {
          src: '/evidences/GS-5.jpeg',
          type: 'phone',
          alt: 'Vista de las automatizaciones de Atajos en acción.',
        },
        {
          src: '/evidences/GS-6.jpeg',
          type: 'phone',
          alt: 'Vista de las automatizaciones de Atajos en acción.',
        },
        {
          src: '/evidences/GS-7.jpeg',
          type: 'phone',
          alt: 'Vista de las automatizaciones de Atajos en acción.',
        }
      ],
    },
    {
      title: 'Clúster de alta disponibilidad Proxmox + Ceph',
      problem:
        'La infraestructura requería mayor disponibilidad y almacenamiento distribuido para reducir el impacto ante fallos de nodos.',
      solution:
        'Diseñé e implementé un clúster Proxmox VE con Ceph, alta disponibilidad, migración en vivo, RBD para discos de máquinas virtuales y CephFS para datos compartidos.',
      result:
        'La plataforma obtuvo tolerancia a fallos de nodo y una base más resiliente para servicios y almacenamiento.',
      tech: ['Proxmox VE', 'Ceph', 'RBD', 'CephFS', 'Linux'],
      images: [
        {
          src: '/evidences/01-proxmox.png',
          type: 'screen',
          alt: 'Interfaz de Proxmox VE.',
        },
      ],
    },
    {
      title: 'Modernización de servicios e ingreso HTTPS',
      problem:
        'Varios servicios internos necesitaban un despliegue más consistente, alta disponibilidad y gestión centralizada del acceso.',
      solution:
        'Participé en la migración de servicios y bases de datos a entornos virtualizados, su integración con Active Directory y la configuración de Traefik como proxy inverso.',
      result:
        'Los servicios quedaron mejor organizados y con acceso HTTPS centralizado.',
      tech: ['Proxmox', 'LXC', 'Traefik', 'MariaDB', 'Active Directory'],
      images: [
        {
          src: '/evidences/11-traefik-dashboard.png',
          type: 'screen',
          alt: 'Panel de Traefik mostrando routers, servicios y middlewares activos.',
        },
      ],
    },
    {
      title: 'Automatización de backups y monitoreo',
      problem:
        'Las tareas de respaldo y supervisión requerían procesos operativos más regulares y visibilidad del estado de los servicios.',
      solution:
        'Automaticé tareas administrativas y de backup mediante scripts; también implementé monitoreo centralizado para servicios y dispositivos de infraestructura.',
      result:
        'Se redujeron tareas manuales y se mejoró la detección de incidencias operativas.',
      tech: ['Bash', 'Linux', 'Proxmox Backup Server', 'Uptime Kuma'],
      images: [

        {
          src: '/evidences/02-uptimekuma.png',
          type: 'screen',
          alt: 'Panel de Uptime Kuma mostrando el estado de servicios y dispositivos monitoreados.',
        },
        {
          src: '/evidences/01-pbs.png',
          type: 'screen',
          alt: 'Interfaz de Proxmox Backup Server.',
        },
      ],
    },
  ],
  en: [
    {
      title: 'FinTech Nova',
      repository: 'https://github.com/CastilloAbel/FintechNova',
      problem:
        'A microservices application needed a repeatable and secure workflow to build, analyze and deploy it.',
      solution:
        'Containerized the services and prepared GitLab CI/CD pipelines to automate builds, security analysis and deployment. Provisioned AWS EC2 resources with Terraform and configured Traefik for HTTPS routing.',
      result:
        'Deployment time went from about 60 minutes to 22 minutes, a 63% reduction.',
      tech: ['Docker', 'Terraform', 'AWS EC2', 'GitLab CI/CD', 'Traefik'],
      images: [
        {
          src: '/evidences/01-github.fn.png',
          type: 'screen',
          alt: 'GitHub repository of the FinTech Nova application with the CI/CD pipeline.',
        },
        {
          src: '/evidences/02-gitlab-fn.png',
          type: 'screen',
          alt: 'GitLab repository of the FinTech Nova application with CI/CD pipelines and security analysis results.',
        },
        {
          src: '/evidences/04-web-tarjetas.png',
          type: 'screen',
          alt: 'Web interface of the FinTech Nova application showing credit and debit cards.',
        },
        {
          src: '/evidences/05-web-facturas.png',
          type: 'screen',
          alt: 'Web interface of the FinTech Nova application showing invoices and pending payments.',
        },
        {
          src: '/evidences/06-web-pagos.png',
          type: 'screen',
          alt: 'Web interface of the FinTech Nova application showing payment options.',
        },
        {
          src: '/evidences/07-web-clientes.png',
          type: 'screen',
          alt: 'Web interface of the FinTech Nova application showing the list of customers.',
        },
        {
          src: '/evidences/08-web-transacciones.png',
          type: 'screen',
          alt: 'Web interface of the FinTech Nova application showing transactions and movements.',
        },
      ],
    },
    {
      title: 'CNC version control system',
      repository: 'https://github.com/CastilloAbel/Git-Handler',
      problem:
        'CNC programs were distributed through shared folders without a clear change history.',
      solution:
        'Built a React web application and Python automation to connect SMB shared files with Git version control.',
      result:
        'Changes are traceable, and technicians can review versions through a web interface.',
      tech: ['React', 'Python', 'SMB', 'Git'],
      images: [
        {
          src: '/evidences/CNC-2.png',
          type: 'screen',
          alt: 'Web interface for the CNC version control system.',
        },
        {
          src: '/evidences/CNC-1.png',
          type: 'screen',
          alt: 'Files and version history view in the CNC system.',
        },
      ],
    },
    {
      title: 'Gmail integration with iOS Shortcuts',
      repository: 'https://github.com/CastilloAbel/Google-Shortcuts',
      problem:
        'I wanted to connect common Gmail actions and clipboard history with iPhone automations.',
      solution:
        'Developed a personal Swift application that connects Gmail and Google Cloud with Apple Shortcuts through REST APIs.',
      result:
        'Email actions and device utilities can be reused through Apple Shortcuts.',
      tech: ['Swift', 'Google Cloud', 'REST APIs', 'Apple Shortcuts'],
      images: [
        {
          src: '/evidences/GS-1.jpeg',
          type: 'phone',
          alt: 'Shortcuts screen with battery, connectivity and device information automations.',
        },
        {
          src: '/evidences/GS-2.jpeg',
          type: 'phone',
          alt: 'iOS shortcuts with actions to check connectivity and device information.',
        },
        {
          src: '/evidences/GS-3.jpeg',
          type: 'phone',
          alt: 'Shortcuts configuration with custom actions.',
        },
        {
          src: '/evidences/GS-4.jpeg',
          type: 'phone',
          alt: 'Shortcuts screen showing active automations.',
        },
        {
          src: '/evidences/GS-5.jpeg',
          type: 'phone',
          alt: 'Shortcuts screen showing active automations.',
        },
        {
          src: '/evidences/GS-6.jpeg',
          type: 'phone',
          alt: 'Shortcuts screen showing active automations.',
        },
        {
          src: '/evidences/GS-7.jpeg',
          type: 'phone',
          alt: 'Shortcuts screen showing active automations.',
        },
      ],
    },
    {
      title: 'Proxmox + Ceph high-availability cluster',
      problem:
        'The infrastructure needed higher availability and distributed storage to reduce the impact of node failures.',
      solution:
        'Designed and implemented a Proxmox VE cluster with Ceph, high availability, live migration, RBD for virtual machine disks and CephFS for shared data.',
      result:
        'The platform gained node-failure tolerance and a more resilient foundation for services and storage.',
      tech: ['Proxmox VE', 'Ceph', 'RBD', 'CephFS', 'Linux'],
      images: [
        {
          src: '/evidences/01-proxmox.png',
          type: 'screen',
          alt: 'Proxmox VE cluster interface.',
        },
      ],
    },
    {
      title: 'Core services and HTTPS ingress modernization',
      problem:
        'Several internal services needed more consistent deployment, high availability and centralized access management.',
      solution:
        'Contributed to migrating services and databases to virtualized environments, integrating Active Directory and configuring Traefik as a reverse proxy.',
      result:
        'Services became better organized with centralized HTTPS access.',
      tech: ['Proxmox', 'LXC', 'Traefik', 'MariaDB', 'Active Directory'],
      images: [
        {
          src: '/evidences/11-traefik-dashboard.png',
          type: 'screen',
          alt: 'Traefik dashboard showing active routers, services and middlewares.',
        },
      ],
    },
    {
      title: 'Backup automation and monitoring',
      problem:
        'Backup and monitoring tasks needed more regular processes and better visibility into service health.',
      solution:
        'Automated administrative and backup tasks with scripts and implemented centralized monitoring for infrastructure services and devices.',
      result:
        'Manual work was reduced and operational issues became easier to detect.',
      tech: ['Bash', 'Linux', 'Proxmox Backup Server', 'Uptime Kuma'],
      images:[

        {
          src: '/evidences/02-uptimekuma.png',
          type: 'screen',
          alt: 'Uptime Kuma dashboard showing the status of monitored services and devices.',
        },
        {
          src: '/evidences/01-pbs.png',
          type: 'screen',
          alt: 'Proxmox Backup Server interface.',
        },
      ],
    },
  ],
};

export const experience = {
  es: [
    {
      role: 'Desarrollador de Software',
      company: 'Eclypsium',
      period: 'Junio 2026 — Septiembre 2026',
      description:
        'Me incorporé a un equipo ágil para contribuir al desarrollo y mejora de herramientas de software orientadas a la ciberseguridad.',
      highlights: [
        'Colaboré en el desarrollo de herramientas de seguridad.',
        'Trabajé en equipo en un entorno de desarrollo ágil.',
        'Apliqué mi experiencia previa en sistemas e infraestructura al desarrollo de software.',
      ],
    },
    {
      role: 'SysAdmin / Administrador de Infraestructura',
      company: 'Sohipren S.A.',
      period: 'Octubre 2024 — Marzo 2026',
      description:
        'Administré y modernicé infraestructura para sistemas en producción. En esta etapa profundicé en scripting, desarrollo de herramientas internas y despliegue de aplicaciones.',
      highlights: [
        'Implementé infraestructura de alta disponibilidad con Proxmox y Ceph.',
        'Automaticé procesos operativos, backups y tareas administrativas mediante scripts.',
        'Participé en el despliegue de servicios, configuración de HTTPS y mejoras de CI/CD.',
        'Desarrollé herramientas internas, incluido el sistema de versionado CNC.',
      ],
    },
    {
      role: 'Soporte Técnico de IT',
      company: 'Universidad Nacional de Córdoba',
      period: 'Abril 2023 — Octubre 2024',
      description:
        'Comencé mi recorrido profesional en soporte técnico, atendiendo a usuarios y colaborando en el mantenimiento de sistemas institucionales.',
      highlights: [
        'Resolví incidencias y brindé soporte a usuarios institucionales.',
        'Realicé mantenimiento de equipos y sistemas.',
        'Construí una base práctica en operación de servicios y resolución analítica de problemas.',
      ],
    },
  ],
  en: [
    {
      role: 'Software Developer',
      company: 'Eclypsium',
      period: 'June 2026 — September 2026',
      description:
        'Joined an agile team to contribute to the development and improvement of cybersecurity software tools.',
      highlights: [
        'Contributed to the development of security tools.',
        'Collaborated with a team in an agile development environment.',
        'Applied my prior systems and infrastructure experience to software development.',
      ],
    },
    {
      role: 'SysAdmin / Infrastructure Administrator',
      company: 'Sohipren S.A.',
      period: 'October 2024 — March 2026',
      description:
        'Administered and modernized infrastructure supporting production systems. During this role I deepened my scripting skills, built internal tools and deployed applications.',
      highlights: [
        'Implemented high-availability infrastructure with Proxmox and Ceph.',
        'Automated operational processes, backups and administrative tasks with scripts.',
        'Contributed to service deployments, HTTPS configuration and CI/CD improvements.',
        'Built internal tools, including the CNC version control system.',
      ],
    },
    {
      role: 'IT Support Technician',
      company: 'National University of Córdoba',
      period: 'April 2023 — October 2024',
      description:
        'Started my professional path in technical support, assisting users and helping maintain institutional systems.',
      highlights: [
        'Resolved incidents and provided support to institutional users.',
        'Maintained equipment and systems.',
        'Built a practical foundation in service operations and analytical problem-solving.',
      ],
    },
  ],
};

export const education = {
  es: [
    {
      degree: 'Ingeniería en Sistemas de Información',
      institution: 'Universidad Tecnológica Nacional',
      period: '2021 — 2027 (estimado)',
      status: 'current',
      year: 'En curso',
      description:
        'Formación en desarrollo de software, arquitectura de sistemas, redes, bases de datos y gestión de proyectos tecnológicos.',
      highlights: [
        'Desarrollo y diseño de software',
        'Redes y sistemas distribuidos',
        'Bases de datos',
        'Gestión de proyectos de TI',
      ],
    },
    {
      degree: 'Licenciatura en Matemática Aplicada',
      institution: 'Universidad Nacional de Córdoba — FAMAF',
      period: '2026 — 2030 (estimado)',
      status: 'current',
      year: 'En curso',
      description:
        'Comencé esta carrera por interés personal y pasión por las matematicas como un espacio de aprendizaje que disfruto.',
      highlights: [
        'Pensamiento matemático',
        'Análisis y resolución de problemas',
        'Interés académico personal',
      ],
    },
    {
      degree: 'Técnico Electrónico',
      institution: 'Escuela Técnica de Nivel Medio',
      period: '2013 — 2020',
      status: 'completed',
      year: 'Completado',
      description:
        'Formación técnica en electrónica, hardware y sistemas, una base útil para comprender la infraestructura desde el nivel físico.',
      highlights: [
        'Electrónica digital y analógica',
        'Hardware y diagnóstico',
        'Sistemas embebidos',
      ],
    },
  ],
  en: [
    {
      degree: 'Information Systems Engineering',
      institution: 'National Technological University (UTN)',
      period: '2021 — 2027 (expected)',
      status: 'current',
      year: 'In progress',
      description:
        'Studies in software development, systems architecture, networking, databases and technology project management.',
      highlights: [
        'Software development and design',
        'Networking and distributed systems',
        'Databases',
        'IT project management',
      ],
    },
    {
      degree: 'Applied Mathematics',
      institution: 'National University of Córdoba — FAMAF',
      period: '2026 — 2030 (expected)',
      status: 'current',
      year: 'In progress',
      description:
        'I started this degree out of personal interest and passion with mathematics, and as a field of study I genuinely enjoy.',
      highlights: [
        'Mathematical thinking',
        'Analysis and problem-solving',
        'Personal academic interest',
      ],
    },
    {
      degree: 'Electronics Technician',
      institution: 'Technical High School',
      period: '2013 — 2020',
      status: 'completed',
      year: 'Completed',
      description:
        'Technical education in electronics, hardware and systems, providing a useful foundation for understanding infrastructure at the physical level.',
      highlights: [
        'Digital and analog electronics',
        'Hardware and troubleshooting',
        'Embedded systems',
      ],
    },
  ],
};