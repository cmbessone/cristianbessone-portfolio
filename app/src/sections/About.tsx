import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Building2, Landmark, Cpu, Shield } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const statValues = [
  { value: 13, suffix: '+' },
  { value: 50, suffix: '+' },
  { value: 3, suffix: '' },
  { value: 100, suffix: '%' },
];

const industryIcons = [Landmark, Building2, Shield];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  
  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const { t } = useLanguage();

  const statLabels = [
    t.about.stats.experience,
    t.about.stats.projects,
    t.about.stats.industries,
    t.about.stats.production,
  ];
  const stats = statValues.map((s, i) => ({ ...s, label: statLabels[i] }));

  const industryNames = [
    t.about.industries.banking,
    t.about.industries.fintech,
    t.about.industries.regulated,
  ];
  const industries = industryIcons.map((icon, i) => ({ icon, name: industryNames[i] }));

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.about.heading}
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                {t.about.p1prefix}
                <span className="text-white font-medium">
                  {t.about.p1bold}
                </span>
                {t.about.p1suffix}
              </p>
              
              <p>
                {t.about.p2prefix}
                <span className="text-white font-medium">
                  {t.about.p2bold}
                </span>
                {t.about.p2suffix}
              </p>
              
              <p>
                {t.about.p3}
              </p>
            </div>
            
            {/* Industries */}
            <div className="flex flex-wrap gap-3 mb-8">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-200 border border-border"
                >
                  <industry.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-white">{industry.name}</span>
                </div>
              ))}
            </div>
            
            {/* Tagline */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-transparent border-l-2 border-primary">
              <p className="text-white font-medium italic">
                {t.about.quote}
              </p>
            </div>
          </motion.div>
          
          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-dark-100 border border-border text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Experience highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 p-6 rounded-2xl bg-dark-100 border border-border"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.about.productionFirst}</h4>
                  <p className="text-sm text-muted-foreground">{t.about.productionFirstSub}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.about.productionFirstDesc}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
