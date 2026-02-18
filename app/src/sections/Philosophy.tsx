import { motion } from 'framer-motion';
import { Quote, Zap } from 'lucide-react';

export default function Philosophy() {
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
                  Models can{' '}
                  <span className="text-muted-foreground">suggest.</span>
                  <br />
                  <span className="gradient-text">Architecture decides.</span>
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
              Why Most AI Systems Fail in Production
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The core problem is not accuracy.{' '}
                <span className="text-white font-medium">It is ownership.</span>
              </p>
              
              <p>
                Most AI systems are built around the assumption that better models solve production problems. They do not. Production problems are architectural—questions of responsibility, boundary enforcement, escalation paths, and decision authority.
              </p>
              
              <p>
                When an AI system makes a decision that affects money, compliance, or user safety, someone must own that decision. The system must know when to act, when to escalate, and how to maintain an auditable chain of responsibility.
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
                    Failure in production stems from treating AI as a prediction problem
                  </p>
                  <p className="text-muted-foreground text-sm">
                    when it is fundamentally a{' '}
                    <span className="text-primary font-medium">decision problem</span>.
                    Systems that survive scale, risk, and regulation are built on clear ownership, not better loss functions.
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
