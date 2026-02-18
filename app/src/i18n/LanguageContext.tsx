import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'en' | 'es';

const translations = {
  en: {
    // Navigation
    nav: {
      work: 'Work',
      about: 'About',
      writing: 'Writing',
      contact: 'Contact',
    },

    // Hero
    hero: {
      title: 'Cristian Bessone',
      subtitle: 'AI Architect',
      tagline: 'AI Architecture for Decision-Critical Systems',
      description:
        'I work on AI systems where decisions matter—in banking, fintech, and regulated environments where failures have consequences.',
      cta: 'Get in Touch',
      viewWork: 'View My Work',
    },

    // What I Work On
    work: {
      heading: 'What I Work On',
      subheading:
        'My work focuses on several interconnected domains where architecture and responsibility intersect.',
      services: [
        {
          title: 'Decision-Critical AI Systems',
          description:
            'AI that operates in environments where decisions have regulatory, financial, or operational consequences. Architectures that separate prediction from action and maintain clear responsibility boundaries.',
        },
        {
          title: 'Hybrid Systems',
          description:
            'Production AI that combines machine learning with business logic, regulatory constraints, and human judgment—integrated through architecture, not duct tape.',
        },
        {
          title: 'Agentic Architectures',
          description:
            'Autonomous systems that understand their own limits. Explicit boundary definitions, fallback mechanisms, and human-in-the-loop integration that preserves decision authority.',
        },
        {
          title: 'AI Platforms',
          description:
            'Systems designed to operate under scale, audit requirements, version control, rollback capability, and the organizational realities of regulated industries.',
        },
      ],
    },

    // Philosophy
    philosophy: {
      quote1: 'Models can ',
      quote2: 'suggest.',
      quote3: 'Architecture decides.',
      heading: 'Why Most AI Systems Fail in Production',
      p1prefix: 'The core problem is not accuracy. ',
      p1bold: 'It is ownership.',
      p2: 'Most AI systems are built around the assumption that better models solve production problems. They do not. Production problems are architectural—questions of responsibility, boundary enforcement, escalation paths, and decision authority.',
      p3: 'When an AI system makes a decision that affects money, compliance, or user safety, someone must own that decision. The system must know when to act, when to escalate, and how to maintain an auditable chain of responsibility.',
      highlightTitle: 'Failure in production stems from treating AI as a prediction problem',
      highlightDesc: 'when it is fundamentally a ',
      highlightBold: 'decision problem',
      highlightSuffix:
        '. Systems that survive scale, risk, and regulation are built on clear ownership, not better loss functions.',
    },

    // About
    about: {
      heading: 'About',
      p1prefix: 'I am a ',
      p1bold: 'Senior Software Engineer and AI Architect',
      p1suffix:
        ' with over 13 years of experience building systems in banking, fintech, and other regulated enterprise environments.',
      p2prefix:
        'My background is in production systems, not research. I have spent my career working on software where ',
      p2bold: 'reliability, auditability, and clear decision boundaries',
      p2suffix: ' are not optional.',
      p3: 'I approach AI from a systems perspective. The question is not what models can do in isolation, but how to integrate them into architectures that can survive operational complexity, regulatory scrutiny, and the eventual failure modes that all software encounters.',
      industries: {
        banking: 'Banking',
        fintech: 'Fintech',
        regulated: 'Regulated Enterprise',
      },
      quote: '"Architecture outlasts models. Responsibility outlasts accuracy."',
      stats: {
        experience: 'Years Experience',
        projects: 'Enterprise Projects',
        industries: 'Industries',
        production: 'Production Focus',
      },
      productionFirst: 'Production-First Approach',
      productionFirstSub: 'Real-world constraints, not demos',
      productionFirstDesc:
        'Every architecture decision is made with the understanding that systems must operate under scale, audit requirements, and the organizational realities of regulated industries.',
    },

    // Writing
    writing: {
      heading: 'Writing & Thinking',
      subheading:
        'I document patterns of AI failure in production—not as cautionary tales, but as design constraints.',
      bookBadge: 'In Progress',
      bookTitle: 'Responsibility-Driven AI Architecture',
      bookCover1: 'Responsibility-Driven',
      bookCover2: 'AI Architecture',
      bookDesc:
        'A book focused on decision ownership, boundary enforcement, and the gap between demonstration and deployment. This work is not about positioning or marketing—it is about establishing a clearer understanding of what production AI actually requires.',
      bookTags: ['Decision Ownership', 'Boundary Enforcement', 'Production Constraints'],
      articles: [
        {
          title: 'The Ownership Gap in AI Systems',
          description:
            'Why most production failures stem from unclear decision boundaries rather than model accuracy.',
          date: 'Coming Soon',
        },
        {
          title: 'Architecting for Escalation',
          description:
            'Designing AI systems that know when to defer to human judgment.',
          date: 'Coming Soon',
        },
        {
          title: 'Hybrid Intelligence: Rules, Models, and Humans',
          description:
            'Building resilient systems that combine multiple decision-making approaches.',
          date: 'Coming Soon',
        },
      ],
    },

    // Contact
    contact: {
      heading: "Let's Build Something That Lasts",
      subheading:
        "Open to consulting engagements on decision-critical AI architecture. If you're building systems where decisions matter, let's talk.",
      connectLinkedIn: 'Connect on LinkedIn',
      email: 'Email',
      linkedin: 'LinkedIn',
    },

    // Footer
    footer: {
      tagline: 'Architecture outlasts models. Responsibility outlasts accuracy.',
      rights: 'All rights reserved.',
    },
  },

  es: {
    // Navigation
    nav: {
      work: 'Trabajo',
      about: 'Sobre Mí',
      writing: 'Escritos',
      contact: 'Contacto',
    },

    // Hero
    hero: {
      title: 'Cristian Bessone',
      subtitle: 'Arquitecto de IA',
      tagline: 'Arquitectura de IA para Sistemas de Decisión Crítica',
      description:
        'Trabajo en sistemas de IA donde las decisiones importan—en banca, fintech y entornos regulados donde los errores tienen consecuencias.',
      cta: 'Contactar',
      viewWork: 'Ver Mi Trabajo',
    },

    // What I Work On
    work: {
      heading: 'En Qué Trabajo',
      subheading:
        'Mi trabajo se enfoca en varios dominios interconectados donde la arquitectura y la responsabilidad se intersectan.',
      services: [
        {
          title: 'Sistemas de IA de Decisión Crítica',
          description:
            'IA que opera en entornos donde las decisiones tienen consecuencias regulatorias, financieras u operativas. Arquitecturas que separan la predicción de la acción y mantienen límites claros de responsabilidad.',
        },
        {
          title: 'Sistemas Híbridos',
          description:
            'IA productiva que combina aprendizaje automático con lógica de negocio, restricciones regulatorias y juicio humano—integrados a través de la arquitectura, no con parches.',
        },
        {
          title: 'Arquitecturas Agénticas',
          description:
            'Sistemas autónomos que comprenden sus propios límites. Definiciones explícitas de fronteras, mecanismos de respaldo e integración humana que preserva la autoridad de decisión.',
        },
        {
          title: 'Plataformas de IA',
          description:
            'Sistemas diseñados para operar bajo escala, requisitos de auditoría, control de versiones, capacidad de reversión y las realidades organizacionales de industrias reguladas.',
        },
      ],
    },

    // Philosophy
    philosophy: {
      quote1: 'Los modelos pueden ',
      quote2: 'sugerir.',
      quote3: 'La arquitectura decide.',
      heading: 'Por Qué la Mayoría de los Sistemas de IA Fallan en Producción',
      p1prefix: 'El problema central no es la precisión. ',
      p1bold: 'Es la responsabilidad.',
      p2: 'La mayoría de los sistemas de IA se construyen asumiendo que mejores modelos resuelven los problemas de producción. No lo hacen. Los problemas de producción son arquitectónicos—preguntas de responsabilidad, cumplimiento de límites, rutas de escalamiento y autoridad de decisión.',
      p3: 'Cuando un sistema de IA toma una decisión que afecta dinero, cumplimiento normativo o seguridad del usuario, alguien debe asumir esa decisión. El sistema debe saber cuándo actuar, cuándo escalar y cómo mantener una cadena de responsabilidad auditable.',
      highlightTitle:
        'El fracaso en producción surge de tratar la IA como un problema de predicción',
      highlightDesc: 'cuando es fundamentalmente un ',
      highlightBold: 'problema de decisión',
      highlightSuffix:
        '. Los sistemas que sobreviven a la escala, el riesgo y la regulación se construyen sobre responsabilidad clara, no sobre mejores funciones de pérdida.',
    },

    // About
    about: {
      heading: 'Sobre Mí',
      p1prefix: 'Soy un ',
      p1bold: 'Ingeniero de Software Senior y Arquitecto de IA',
      p1suffix:
        ' con más de 13 años de experiencia construyendo sistemas en banca, fintech y otros entornos empresariales regulados.',
      p2prefix:
        'Mi formación es en sistemas de producción, no en investigación. He dedicado mi carrera a trabajar en software donde ',
      p2bold: 'la fiabilidad, la auditabilidad y los límites claros de decisión',
      p2suffix: ' no son opcionales.',
      p3: 'Abordo la IA desde una perspectiva de sistemas. La pregunta no es qué pueden hacer los modelos de forma aislada, sino cómo integrarlos en arquitecturas que puedan sobrevivir a la complejidad operativa, el escrutinio regulatorio y los modos de fallo eventuales que todo software encuentra.',
      industries: {
        banking: 'Banca',
        fintech: 'Fintech',
        regulated: 'Empresa Regulada',
      },
      quote: '"La arquitectura perdura más que los modelos. La responsabilidad perdura más que la precisión."',
      stats: {
        experience: 'Años de Experiencia',
        projects: 'Proyectos Empresariales',
        industries: 'Industrias',
        production: 'Enfoque Productivo',
      },
      productionFirst: 'Enfoque Production-First',
      productionFirstSub: 'Restricciones reales, no demos',
      productionFirstDesc:
        'Cada decisión arquitectónica se toma con la comprensión de que los sistemas deben operar bajo escala, requisitos de auditoría y las realidades organizacionales de industrias reguladas.',
    },

    // Writing
    writing: {
      heading: 'Escritos & Pensamiento',
      subheading:
        'Documento patrones de fallo de IA en producción—no como advertencias, sino como restricciones de diseño.',
      bookBadge: 'En Progreso',
      bookTitle: 'Arquitectura de IA Orientada a la Responsabilidad',
      bookCover1: 'Orientada a la',
      bookCover2: 'Responsabilidad',
      bookDesc:
        'Un libro enfocado en la propiedad de las decisiones, el cumplimiento de límites y la brecha entre demostración y despliegue. Este trabajo no es sobre posicionamiento o marketing—se trata de establecer una comprensión más clara de lo que la IA en producción realmente requiere.',
      bookTags: ['Propiedad de Decisiones', 'Cumplimiento de Límites', 'Restricciones de Producción'],
      articles: [
        {
          title: 'La Brecha de Responsabilidad en Sistemas de IA',
          description:
            'Por qué la mayoría de los fallos en producción surgen de límites de decisión poco claros en lugar de la precisión del modelo.',
          date: 'Próximamente',
        },
        {
          title: 'Arquitectura para el Escalamiento',
          description:
            'Diseñando sistemas de IA que saben cuándo delegar al juicio humano.',
          date: 'Próximamente',
        },
        {
          title: 'Inteligencia Híbrida: Reglas, Modelos y Humanos',
          description:
            'Construyendo sistemas resilientes que combinan múltiples enfoques de toma de decisiones.',
          date: 'Próximamente',
        },
      ],
    },

    // Contact
    contact: {
      heading: 'Construyamos Algo Que Perdure',
      subheading:
        'Abierto a consultorías en arquitectura de IA de decisión crítica. Si estás construyendo sistemas donde las decisiones importan, hablemos.',
      connectLinkedIn: 'Conectar en LinkedIn',
      email: 'Correo',
      linkedin: 'LinkedIn',
    },

    // Footer
    footer: {
      tagline: 'La arquitectura perdura más que los modelos. La responsabilidad perdura más que la precisión.',
      rights: 'Todos los derechos reservados.',
    },
  },
} as const;

export type Translations = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-lang');
      if (saved === 'en' || saved === 'es') return saved;
    }
    return 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-lang', lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
