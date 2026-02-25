import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      {/* <span className="frame top" />
      <span className="frame right" />
      <span className="frame bottom" />
      <span className="frame left" /> */}

      <motion.h1
        className="footer-title"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{
          duration: 0.8,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        Thank You!
      </motion.h1>

      <motion.p
        className="footer-copy"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        © 2026 CP.
      </motion.p>
    </footer>
  )
}
