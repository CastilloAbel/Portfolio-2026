import {
  Server,
  Container,
  Network,
  Terminal,
  Github,
  Database,
  Monitor,
  HardDrive,
  Code,
  Braces,
  AppWindow,
  UserKey,
  Atom
} from 'lucide-react';

export const techStack = {
  infrastructure: [
    { name: 'Linux', icon: AppWindow, color: '#FCC624' },
    { name: 'Proxmox', icon: Server, color: '#E57000' },
    { name: 'Ceph', icon: HardDrive, color: '#EF3F36' },
    { name: 'Docker', icon: Container, color: '#2496ED' },
    { name: 'MikroTik', icon: Network, color: '#293239' },
    { name: 'Windows Server', icon: Monitor, color: '#0078D6' },
    { name: 'Active Directory', icon: UserKey, color: '#0078D6' },
    { name: 'MariaDB', icon: Database, color: '#003545' },
    { name: 'PostgreSQL', icon: Database, color: '#4169E1' },
    { name: 'GitHub', icon: Github, color: '#181717' },
  ],
  development: [
    { name: 'Python', icon: Code, color: '#3776AB' },
    { name: 'JavaScript', icon: Braces, color: '#F7DF1E' },
    { name: 'React', icon: Atom, color: '#61DAFB' },
    { name: 'Bash', icon: Terminal, color: '#4EAA25' },
  ],
};

export const projects = {
  es: [
    {
      title: 'Cluster Proxmox + Ceph HA',
      problem:
        'Infraestructura sin alta disponibilidad y almacenamiento centralizado, con riesgo de downtime y corrupción de datos.',
      solution:
        'Diseño e implementación de clúster Proxmox VE con almacenamiento distribuido Ceph (RBD para discos de VM/LXC, CephFS para datos de usuarios y bases de datos). Configuración de HA y migración en vivo.',
      result:
        'Alta disponibilidad real, tolerancia a fallos de nodo y mejora significativa en rendimiento y estabilidad del almacenamiento.',
      tech: ['Proxmox VE', 'Ceph', 'RBD', 'CephFS', 'Linux'],
    },
    {
      title: 'Modernización de Servicios Core (GLPI, OpenFire, UniFi, Traefik)',
      problem:
        'Servicios críticos desplegados en contenedores Docker aislados, sin integración con HA ni gestión centralizada de certificados.',
      solution:
        'Migración de servicios a contenedores LXC dentro de Proxmox con HA. Migración de bases de datos, integración con Active Directory, implementación de Traefik como proxy inverso con wildcard certificate y unificación de infraestructura.',
      result:
        'Mejora en tiempos de respuesta, mayor resiliencia ante fallos y centralización segura de accesos mediante proxy inverso.',
      tech: ['Proxmox', 'LXC', 'MariaDB', 'Active Directory', 'Traefik', 'Linux'],
    },
    {
      title: 'Sistema de Control de Versiones CNC',
      problem:
        'Falta de control centralizado de versiones para programas CNC, generando múltiples copias manuales sin trazabilidad.',
      solution:
        'Desarrollo de sistema automatizado con script en Python que detecta cambios en carpeta Samba y realiza commit automático a repositorio GitHub. Interfaz web en React + Tailwind para visualizar estructura y versiones.',
      result:
        'Trazabilidad completa de versiones CNC, eliminación de duplicados y mejora en control de cambios por parte de técnicos no desarrolladores.',
      tech: ['Python', 'GitHub API', 'React', 'Tailwind', 'Samba', 'Linux'],
    },
    {
      title: 'Automatización Integral de Backups',
      problem:
        'Backups manuales e inconsistentes con riesgo de pérdida de información crítica.',
      solution:
        'Implementación de Proxmox Backup Server con políticas automatizadas para VMs, LXC, hosts Proxmox y PCs críticas (incluyendo imágenes de disco). Configuración de retención y verificación de integridad.',
      result:
        'Backups automáticos diarios con deduplicación, restauración verificada y reducción significativa del riesgo operativo.',
      tech: ['Proxmox Backup Server', 'Bash', 'Linux', 'Ceph'],
    },
    {
      title: 'Servidor de Archivos Empresarial con CephFS + Samba',
      problem:
        'Servidor de archivos Windows con problemas de rendimiento, corrupción de archivos y alto consumo de recursos.',
      solution:
        'Migración a servidor Debian con Samba utilizando CephFS como backend distribuido. Integración con Active Directory para control de permisos.',
      result:
        'Mejora en rendimiento, reducción de consumo de recursos y eliminación de costos de licencias Windows Server.',
      tech: ['Debian', 'Samba', 'CephFS', 'Active Directory', 'Linux'],
    },
    {
      title: 'Monitoreo Centralizado con Uptime Kuma',
      problem:
        'Falta de visibilidad en tiempo real del estado de servicios, red y dispositivos críticos.',
      solution:
        'Implementación de Uptime Kuma en contenedor LXC para monitorear servidores, routers, APs, enlaces WAN y cámaras. Integración de alertas vía Discord y correo electrónico.',
      result:
        'Supervisión proactiva de infraestructura con notificaciones automáticas ante fallos.',
      tech: ['Uptime Kuma', 'Proxmox', 'Linux'],
    }
  ],
  en: [
    {
      title: 'Proxmox + Ceph HA Cluster',
      problem:
        'Infrastructure without high availability or centralized storage, exposing the environment to downtime and data corruption risks.',
      solution:
        'Design and implementation of a Proxmox VE cluster with distributed Ceph storage (RBD for VM/LXC disks and CephFS for user data and databases). HA configuration and live migration setup.',
      result:
        'True high availability, node failure tolerance and significant improvement in storage performance and stability.',
      tech: ['Proxmox VE', 'Ceph', 'RBD', 'CephFS', 'Linux'],
    },
    {
      title: 'Core Services Modernization (GLPI, OpenFire, UniFi, Traefik)',
      problem:
        'Critical services deployed in isolated Docker containers without HA integration or centralized certificate management.',
      solution:
        'Migration of services to LXC containers within Proxmox HA cluster. Database migration, Active Directory integration, Traefik reverse proxy implementation with wildcard certificate and infrastructure unification.',
      result:
        'Improved response times, enhanced resilience and secure centralized access management through reverse proxy.',
      tech: ['Proxmox', 'LXC', 'MariaDB', 'Active Directory', 'Traefik', 'Linux'],
    },
    {
      title: 'CNC Version Control System',
      problem:
        'Lack of centralized version control for CNC programs, resulting in duplicated files and no traceability.',
      solution:
        'Development of automated Python-based system detecting file changes in Samba share and committing them to GitHub repository. React + Tailwind web interface for repository structure and version visualization.',
      result:
        'Full version traceability, elimination of duplicate files and improved change control for non-developer technicians.',
      tech: ['Python', 'GitHub API', 'React', 'Tailwind', 'Samba', 'Linux'],
    },
    {
      title: 'Enterprise Backup Automation',
      problem:
        'Inconsistent manual backups with high risk of critical data loss.',
      solution:
        'Implementation of Proxmox Backup Server with automated policies for VMs, LXC containers, Proxmox hosts and critical workstations (including disk images). Retention and integrity verification configured.',
      result:
        'Automated daily backups with deduplication, verified restore capability and significant reduction of operational risk.',
      tech: ['Proxmox Backup Server', 'Bash', 'Linux', 'Ceph'],
    },
    {
      title: 'Enterprise File Server with CephFS + Samba',
      problem:
        'Windows file server with performance issues, file corruption and high resource consumption.',
      solution:
        'Migration to Debian server using Samba with CephFS distributed backend. Active Directory integration for granular permissions.',
      result:
        'Improved performance, reduced resource usage and elimination of Windows Server licensing costs.',
      tech: ['Debian', 'Samba', 'CephFS', 'Active Directory', 'Linux'],
    },
    {
      title: 'Centralized Monitoring with Uptime Kuma',
      problem:
        'Lack of real-time visibility into infrastructure services and network devices.',
      solution:
        'Deployment of Uptime Kuma in LXC container to monitor servers, routers, APs, WAN links and cameras. Alerting integration via Discord and email.',
      result:
        'Proactive infrastructure monitoring with automated failure notifications.',
      tech: ['Uptime Kuma', 'Proxmox', 'Linux'],
    }
  ]
};

export const experience = {
  es: [
    {
      role: 'Infrastructure & Systems Engineer',
      company: 'Empresa Metalúrgica',
      period: '2024 — Actualidad',
      description:
        'Responsable de la modernización y administración de la infraestructura tecnológica, incluyendo virtualización, almacenamiento distribuido, backups, servicios internos y automatización.',
      highlights: [
        'Diseño e implementación de clúster Proxmox + Ceph con alta disponibilidad.',
        'Migración de servicios críticos a entorno HA con integración Active Directory.',
        'Automatización integral de backups y monitoreo centralizado.',
        'Desarrollo de sistema interno de control de versiones CNC.',
      ]
    },

    {
      role: 'IT Systems Intern',
      company: 'Universidad Nacional de Cordoba',
      period: '2023 — 2024',
      description:
        'Rol formativo orientado al soporte operativo y la administración básica de infraestructura tecnológica en un entorno educativo. Participé en tareas de red, mantenimiento de sistemas y concientización en seguridad informática, desarrollando una base sólida en operación de entornos IT institucionales.',
      highlights: [
        'Soporte y configuración básica de infraestructura de red en entorno educativo.',
        'Implementación de buenas prácticas de seguridad informática mediante capacitaciones a usuarios.',
        'Participación en mantenimiento operativo de entornos tecnológicos institucionales.',
      ],
    },
  ],
  en: [
    {
      role: 'Infrastructure & Systems Engineer',
      company: 'Metallurgical Company',
      period: '2024 — Present',
      description:
        'Responsible for modernization and administration of core infrastructure, including virtualization, distributed storage, backups, internal services and automation.',
      highlights: [
        'Designed and implemented Proxmox + Ceph HA cluster.',
        'Migrated critical services to HA environment with Active Directory integration.',
        'Implemented full backup automation and centralized monitoring.',
        'Developed internal CNC version control system.',
      ]
    },

    {
      role: 'IT Systems Intern',
      company: 'National University of Córdoba',
      period: '2023 — 2024',
      description:
        'Entry-level role focused on operational IT support and foundational infrastructure administration within an educational institution. Gained hands-on experience in network tasks, system maintenance, and cybersecurity awareness initiatives, building a strong technical foundation in institutional IT environments.',
      highlights: [
        'Assisted in basic network infrastructure configuration within an educational environment.',
        'Delivered security awareness training and promoted cybersecurity best practices among users.',
        'Contributed to the operational maintenance of institutional IT systems.',
      ],
    },
  ],
};

export const education = {
  es: [
    {
      degree: 'Ingeniería en Sistemas de Información',
      institution: 'Universidad Tecnológica Nacional',
      period: '2021 — Actualidad',
      status: 'current',
      year: '5° Año (último año)',
      description:
        'Formación integral en desarrollo de software, arquitectura de sistemas, redes, bases de datos y gestión de proyectos tecnológicos. Enfoque en infraestructura y sistemas distribuidos.',
      highlights: [
        'Arquitectura de sistemas y diseño de software',
        'Redes de datos y telecomunicaciones',
        'Bases de datos relacionales y no relacionales',
        'Gestión de proyectos de TI',
      ],
    },
    {
      degree: 'Técnico Electrónico',
      institution: 'Escuela Técnica de Nivel Medio',
      period: '2013 — 2020',
      status: 'completed',
      year: 'Título de nivel medio',
      description:
        'Formación técnica en electrónica que proporcionó conocimientos sólidos de hardware, circuitos y sistemas embebidos. Esta base técnica fue clave para implementar soluciones con Raspberry Pi, entender la infraestructura a nivel físico y diagnosticar problemas de hardware en entornos de producción.',
      highlights: [
        'Implementación de servicios sobre Raspberry Pi',
        'Conocimientos avanzados de hardware',
        'Electrónica digital y analógica',
        'Diagnóstico y resolución a nivel físico',
      ],
    },
  ],
  en: [
    {
      degree: 'Information Systems Engineering',
      institution: 'National Technological University',
      period: '2021 — Present',
      status: 'current',
      year: '5th Year (final year)',
      description:
        'Comprehensive training in software development, systems architecture, networking, databases and technology project management. Focus on infrastructure and distributed systems.',
      highlights: [
        'Systems architecture and software design',
        'Data networks and telecommunications',
        'Relational and non-relational databases',
        'IT project management',
      ],
    },
    {
      degree: 'Electronics Technician',
      institution: 'Technical High School',
      period: '2013 — 2020',
      status: 'completed',
      year: 'High school diploma',
      description:
        'Technical training in electronics that provided solid knowledge of hardware, circuits and embedded systems. This technical foundation was key to implementing solutions with Raspberry Pi, understanding infrastructure at the physical level and diagnosing hardware issues in production environments.',
      highlights: [
        'Service deployment on Raspberry Pi',
        'Advanced hardware knowledge',
        'Digital and analog electronics',
        'Physical-level diagnosis and troubleshooting',
      ],
    },
  ],
};
