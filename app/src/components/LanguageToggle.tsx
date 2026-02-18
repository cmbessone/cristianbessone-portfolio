import { motion } from 'framer-motion';
import { useLanguage, type Language } from '@/i18n/LanguageContext';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg bg-dark-200 border border-border p-1">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`relative px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${
            language === code
              ? 'text-white'
              : 'text-muted-foreground hover:text-white'
          }`}
        >
          {language === code && (
            <motion.span
              layoutId="lang-toggle"
              className="absolute inset-0 rounded-md bg-primary/20 border border-primary/30"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </button>
      ))}
    </div>
  );
}
