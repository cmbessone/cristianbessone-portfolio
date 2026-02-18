import { motion } from 'framer-motion';
import { Quote, Zap } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Quote icon */}
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/30" />
              
              <blockquote className="relative pl-8 border-l-2 border-primary/50">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  {t.philosophy.quote1}
                  <span className="text-muted-foreground">{t.philosophy.quote2}</span>
                  <br />
                  <span className="gradient-text">{t.philosophy.quote3}</span>
                </p>
              </blockquote>
              
              {/* Decorative line */}
              <motion.div
                className="absolute -bottom-4 left-8 h-px bg-gradient-to-r from-primary to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
          
          {/* Right side - Explanation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {t.philosophy.heading}
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t.philosophy.p1prefix}
                <span className="text-white font-medium">{t.philosophy.p1bold}</span>
              </p>
              
              <p>
                {t.philosophy.p2}
              </p>
              
              <p>
                {t.philosophy.p3}
              </p>
            </div>
            
            {/* Highlight box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">
                    {t.philosophy.highlightTitle}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t.philosophy.highlightDesc}
                    <span className="text-primary font-medium">{t.philosophy.highlightBold}</span>{t.philosophy.highlightSuffix}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
