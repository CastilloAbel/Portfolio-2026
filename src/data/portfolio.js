import {
  Server,
  Container,
  Network,
  Terminal,
  Github,
  Database,
  Shield,
  Monitor,
  HardDrive,
  Cpu,
  Layers,
} from 'lucide-react';

export const techStack = [
  { name: 'Linux', icon: Terminal, color: '#FCC624' },
  { name: 'Proxmox', icon: Server, color: '#E57000' },
  { name: 'Ceph', icon: HardDrive, color: '#EF3F36' },
  { name: 'Docker', icon: Container, color: '#2496ED' },
  { name: 'MikroTik', icon: Network, color: '#293239' },
  { name: 'Bash', icon: Terminal, color: '#4EAA25' },
  { name: 'GitHub', icon: Github, color: '#181717' },
  { name: 'MariaDB', icon: Database, color: '#003545' },
  { name: 'PostgreSQL', icon: Database, color: '#4169E1' },
  { name: 'Windows Server', icon: Monitor, color: '#0078D6' },
  { name: 'Active Directory', icon: Shield, color: '#0078D6' },
];

export const projects = {
  es: [
    {
      title: 'Cluster Proxmox + Ceph HA',
      problem:
        'Infraestructura de virtualización sin redundancia, con riesgo de pérdida de datos y downtime ante fallos de hardware.',
      solution:
        'Implementación de clúster Proxmox VE de 3 nodos con almacenamiento distribuido Ceph (RBD + CephFS), migración en vivo y fencing automático.',
      result:
        'Alta disponibilidad real con cero downtime planificado. Recuperación automática ante fallo de nodo en menos de 60 segundos.',
      tech: ['Proxmox VE', 'Ceph', 'RBD', 'CephFS', 'Linux'],
    },
    {
      title: 'Infraestructura Docker Swarm',
      problem:
        'Servicios desplegados manualmente en servidores individuales, sin orquestación ni escalabilidad.',
      solution:
        'Diseño e implementación de clúster Docker Swarm con redes overlay, volúmenes persistentes y despliegue declarativo via docker-compose.',
      result:
        'Despliegue automatizado de servicios con balanceo de carga nativo y rolling updates sin interrupción.',
      tech: ['Docker', 'Docker Swarm', 'Linux', 'Bash'],
    },
    {
      title: 'Implementación UniFi Controller',
      problem:
        'Gestión descentralizada de puntos de acceso WiFi sin visibilidad ni control unificado de la red inalámbrica.',
      solution:
        'Despliegue de UniFi Controller contenerizado sobre Docker, con integración VLAN y portal cautivo para invitados.',
      result:
        'Control centralizado de toda la infraestructura WiFi con monitoreo en tiempo real y segmentación de tráfico.',
      tech: ['Docker', 'UniFi', 'VLAN', 'MikroTik'],
    },
    {
      title: 'Servidor OpenFire',
      problem:
        'Necesidad de comunicación interna instantánea sin depender de servicios cloud externos.',
      solution:
        'Implementación de servidor XMPP OpenFire con integración a Active Directory para autenticación centralizada.',
      result:
        'Sistema de mensajería corporativa on-premise con cifrado y auditoría de comunicaciones.',
      tech: ['OpenFire', 'Active Directory', 'Docker', 'Linux'],
    },
    {
      title: 'Sistema GLPI',
      problem:
        'Sin sistema formal de gestión de activos TI ni seguimiento de incidencias.',
      solution:
        'Despliegue de GLPI con inventario automatizado via agentes, gestión de tickets y base de conocimiento.',
      result:
        'Visibilidad completa del parque tecnológico con trazabilidad de incidencias y métricas de gestión.',
      tech: ['GLPI', 'Docker', 'MariaDB', 'Linux'],
    },
    {
      title: 'Automatización de Backups',
      problem:
        'Backups manuales inconsistentes con riesgo de pérdida de datos críticos.',
      solution:
        'Implementación de Proxmox Backup Server con políticas automatizadas, retención configurable y verificación de integridad.',
      result:
        'Backup automatizado diario con deduplicación, restauración verificada y alertas proactivas.',
      tech: ['Proxmox Backup Server', 'Bash', 'Linux', 'Ceph'],
    },
    {
      title: 'File-Gateway Samba',
      problem:
        'Almacenamiento de archivos compartidos sin rendimiento ni integración con dominio.',
      solution:
        'Implementación de file-gateway con iSCSI sobre Ceph como backend y Samba integrado a Active Directory.',
      result:
        'Almacenamiento empresarial de alto rendimiento con permisos granulares basados en grupos de AD.',
      tech: ['Samba', 'iSCSI', 'Ceph', 'Active Directory', 'Linux'],
    },
  ],
  en: [
    {
      title: 'Proxmox + Ceph HA Cluster',
      problem:
        'Virtualization infrastructure without redundancy, at risk of data loss and downtime from hardware failures.',
      solution:
        'Implementation of a 3-node Proxmox VE cluster with Ceph distributed storage (RBD + CephFS), live migration and automatic fencing.',
      result:
        'Real high availability with zero planned downtime. Automatic recovery from node failure in under 60 seconds.',
      tech: ['Proxmox VE', 'Ceph', 'RBD', 'CephFS', 'Linux'],
    },
    {
      title: 'Docker Swarm Infrastructure',
      problem:
        'Services deployed manually on individual servers, without orchestration or scalability.',
      solution:
        'Design and implementation of Docker Swarm cluster with overlay networks, persistent volumes and declarative deployment via docker-compose.',
      result:
        'Automated service deployment with native load balancing and rolling updates with zero downtime.',
      tech: ['Docker', 'Docker Swarm', 'Linux', 'Bash'],
    },
    {
      title: 'UniFi Controller Deployment',
      problem:
        'Decentralized access point management without visibility or unified control of the wireless network.',
      solution:
        'Containerized UniFi Controller deployment on Docker with VLAN integration and captive portal for guests.',
      result:
        'Centralized control of all WiFi infrastructure with real-time monitoring and traffic segmentation.',
      tech: ['Docker', 'UniFi', 'VLAN', 'MikroTik'],
    },
    {
      title: 'OpenFire Server',
      problem:
        'Need for internal instant communication without relying on external cloud services.',
      solution:
        'XMPP OpenFire server implementation with Active Directory integration for centralized authentication.',
      result:
        'On-premise corporate messaging system with encryption and communication auditing.',
      tech: ['OpenFire', 'Active Directory', 'Docker', 'Linux'],
    },
    {
      title: 'GLPI System',
      problem:
        'No formal IT asset management system or incident tracking in place.',
      solution:
        'GLPI deployment with automated inventory via agents, ticket management and knowledge base.',
      result:
        'Complete visibility of technology assets with incident traceability and management metrics.',
      tech: ['GLPI', 'Docker', 'MariaDB', 'Linux'],
    },
    {
      title: 'Backup Automation',
      problem:
        'Inconsistent manual backups with risk of critical data loss.',
      solution:
        'Proxmox Backup Server implementation with automated policies, configurable retention and integrity verification.',
      result:
        'Automated daily backup with deduplication, verified restoration and proactive alerts.',
      tech: ['Proxmox Backup Server', 'Bash', 'Linux', 'Ceph'],
    },
    {
      title: 'Samba File-Gateway',
      problem:
        'Shared file storage without performance or domain integration.',
      solution:
        'File-gateway implementation with iSCSI over Ceph as backend and Samba integrated with Active Directory.',
      result:
        'High-performance enterprise storage with granular permissions based on AD groups.',
      tech: ['Samba', 'iSCSI', 'Ceph', 'Active Directory', 'Linux'],
    },
  ],
};

export const experience = {
  es: [
    {
      role: 'Administrador de Infraestructura',
      company: 'Empresa actual',
      period: '2022 — Presente',
      description:
        'Administración de clúster Proxmox VE con Ceph, orquestación Docker Swarm, gestión avanzada de redes MikroTik y automatización de procesos con Bash. Responsable de la arquitectura, resiliencia y continuidad operativa de toda la infraestructura.',
      highlights: [
        'Clúster Proxmox + Ceph con alta disponibilidad',
        'Orquestación de +20 servicios contenerizados',
        'Automatización de backups con PBS',
        'Redes MikroTik: VLAN, failover, firewall',
      ],
    },
    {
      role: 'Administrador de Sistemas',
      company: 'Empresa anterior',
      period: '2020 — 2022',
      description:
        'Gestión de servidores Linux y Windows Server, implementación de Active Directory, migraciones de bases de datos y despliegue de servicios empresariales.',
      highlights: [
        'Integración Linux + Active Directory',
        'Migración MariaDB y PostgreSQL',
        'Implementación GLPI y OpenFire',
        'File-gateway con Samba + iSCSI',
      ],
    },
  ],
  en: [
    {
      role: 'Infrastructure Administrator',
      company: 'Current Company',
      period: '2022 — Present',
      description:
        'Management of Proxmox VE cluster with Ceph, Docker Swarm orchestration, advanced MikroTik network management and process automation with Bash. Responsible for the architecture, resilience and operational continuity of the entire infrastructure.',
      highlights: [
        'Proxmox + Ceph cluster with high availability',
        'Orchestration of 20+ containerized services',
        'Backup automation with PBS',
        'MikroTik networking: VLAN, failover, firewall',
      ],
    },
    {
      role: 'Systems Administrator',
      company: 'Previous Company',
      period: '2020 — 2022',
      description:
        'Linux and Windows Server management, Active Directory implementation, database migrations and enterprise service deployment.',
      highlights: [
        'Linux + Active Directory integration',
        'MariaDB and PostgreSQL migration',
        'GLPI and OpenFire deployment',
        'File-gateway with Samba + iSCSI',
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
