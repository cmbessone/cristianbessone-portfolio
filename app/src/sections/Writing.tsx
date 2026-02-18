import { motion } from 'framer-motion';
import { BookOpen, FileText, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Writing() {
  const { t } = useLanguage();
  const articles = t.writing.articles;

  return (
    <section id="writing" className="relative py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.writing.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.writing.subheading}
          </p>
        </motion.div>
        
        {/* Book feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-dark-100 to-dark border border-border overflow-hidden group">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Book cover placeholder */}
              <div className="lg:col-span-1">
                <div className="relative w-full max-w-[240px] mx-auto aspect-[3/4] rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center p-6">
                    <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-white font-bold text-lg">{t.writing.bookCover1}</div>
                    <div className="gradient-text font-bold text-xl">{t.writing.bookCover2}</div>
                  </div>
                  
                  {/* Spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary/30 to-purple-500/30 rounded-l-xl" />
                </div>
              </div>
              
              {/* Book info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {t.writing.bookBadge}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {t.writing.bookTitle}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t.writing.bookDesc}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {t.writing.bookTags.map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-lg bg-dark-200 text-sm text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Articles grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-dark-100 border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h4 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h4>
              
              <p className="text-sm text-muted-foreground mb-4">
                {article.description}
              </p>
              
              <span className="text-xs text-muted-foreground/60">{article.date}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
