import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';

const FloatingShape = ({ delay, className }: { delay: number; className: string }) => (
  <motion.div
    className={`absolute opacity-20 ${className}`}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 5, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <polygon
        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-blue-500"
      />
    </svg>
  </motion.div>
);

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-100" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Animated gradient orb */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating shapes */}
      <FloatingShape delay={0} className="top-20 left-10 w-24 h-24 text-blue-500" />
      <FloatingShape delay={2} className="top-40 right-20 w-32 h-32 text-purple-500" />
      <FloatingShape delay={4} className="bottom-40 left-20 w-20 h-20 text-blue-400" />
      <FloatingShape delay={1} className="bottom-20 right-10 w-28 h-28 text-indigo-500" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="text-white">Cristian Bessone</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8">
            <span className="gradient-text">{t.hero.subtitle}</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4">
            {t.hero.tagline}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base sm:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10">
            {t.hero.description}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-glow"
            asChild
          >
            <a href="#contact">
              <Mail className="w-5 h-5 mr-2" />
              {t.hero.cta}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:border-primary/50 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 group"
            asChild
          >
            <a href="#work">
              {t.hero.viewWork}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
