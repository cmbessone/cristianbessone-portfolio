import { motion } from 'framer-motion';
import { Layers, Bot, Server, Shield } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Decision-Critical AI Systems',
    description: 'AI that operates in environments where decisions have regulatory, financial, or operational consequences. Architectures that separate prediction from action and maintain clear responsibility boundaries.',
  },
  {
    icon: Layers,
    title: 'Hybrid Systems',
    description: 'Production AI that combines machine learning with business logic, regulatory constraints, and human judgment—integrated through architecture, not duct tape.',
  },
  {
    icon: Bot,
    title: 'Agentic Architectures',
    description: 'Autonomous systems that understand their own limits. Explicit boundary definitions, fallback mechanisms, and human-in-the-loop integration that preserves decision authority.',
  },
  {
    icon: Server,
    title: 'AI Platforms',
    description: 'Systems designed to operate under scale, audit requirements, version control, rollback capability, and the organizational realities of regulated industries.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function WhatIWorkOn() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What I Work On
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My work focuses on several interconnected domains where architecture and responsibility intersect.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-dark-100 border border-border transition-all duration-500 hover:border-primary/30 hover:shadow-glow-sm overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
