import { motion } from 'framer-motion';
import { BarChart3, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';

export default function SentinelAIDashboard() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="group relative max-w-3xl"
        >
          <div className="relative h-full p-8 md:p-10 rounded-2xl bg-dark-100 border border-border transition-all duration-500 hover:border-primary/30 hover:shadow-glow-sm overflow-hidden">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <BarChart3 className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {t.sentinel.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.sentinel.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {t.sentinel.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary/80 border border-primary/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 flex-wrap">
                <Button
                  variant="default"
                  onClick={() => window.open(t.sentinel.demoUrl, '_blank')}
                  className="group/btn"
                >
                  {t.sentinel.cta}
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                
                <a
                  href={t.sentinel.apiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  {t.sentinel.apiLink} →
                </a>
              </div>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
