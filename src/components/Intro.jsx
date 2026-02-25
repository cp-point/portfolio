import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <motion.h1
        className="intro-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        PORTFOLIO
        <motion.span
          className="intro-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        />
        <motion.em
          className="intro-year"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 1.5 }}
        >
          2017 ~
        </motion.em>
      </motion.h1>
      <motion.p
        className="intro-name"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{
          duration: 0.7,
          delay: 0.6,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        LEE CHAN PYO
      </motion.p>
    </section>
  )
}
