import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.contact.heading}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            {t.contact.subheading}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-glow"
              asChild
            >
              <a href="mailto:studio@cristianbessone.com">
                <Mail className="w-5 h-5 mr-2" />
                studio@cristianbessone.com
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary/50 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <a
                href="https://linkedin.com/in/cristianbessone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                {t.contact.connectLinkedIn}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <motion.a
              href="mailto:studio@cristianbessone.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-dark-100 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">{t.contact.email}</div>
                <div className="text-white font-medium">studio@cristianbessone.com</div>
              </div>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/cristianbessone"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-dark-100 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">{t.contact.linkedin}</div>
                <div className="text-white font-medium">linkedin.com/in/cristianbessone</div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
