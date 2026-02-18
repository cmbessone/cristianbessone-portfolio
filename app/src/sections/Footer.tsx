import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:studio@cristianbessone.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/cristianbessone',
    icon: Linkedin,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-left"
          >
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
              <span className="text-white font-bold">Cristian Bessone</span>
              <span className="text-muted-foreground">—</span>
              <span className="text-primary font-medium">AI Architect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </motion.div>
          
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-lg bg-dark-100 border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/30 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Cristian Bessone. {t.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
