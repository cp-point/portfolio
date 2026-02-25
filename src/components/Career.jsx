import { useRef } from "react";
import { motion } from 'framer-motion'
import careerData from '@/data/career'

const companyVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const yearVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const yearContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const projectVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export default function Career() {
  const projectRef = useRef(null)

  return (
    <section id="career" className="career" ref={projectRef}>
      <motion.h2
        className="career__title"
        initial={{
          x: 0,
          y: 0,
          scale: 0.5,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          y: -30,
          scale: 1.8,
          opacity: 1,
        }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        CAREER
        <motion.span
          className="title-bg"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            duration: 0.65,
            delay: 1.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.h2>

      {careerData.map((company, idx) => (
        <motion.div
          key={company.company}
          className="career-company"
          variants={companyVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* 회사 헤더 */}
          <div className="company-header">
            <div className="company-icon" />
            <div className="company-info">
              <strong>{company.company}</strong>
              <span>{company.period}</span>
            </div>
          </div>

          {/* 타임라인 */}
          <div className="company-timeline">
            {company.items.map(item => (
              <motion.div
                key={item.years}
                className="timeline-item"
                variants={yearVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="timeline-year">{item.years}</h3>

                <motion.ul
                  className="company-project-list"
                  variants={yearContainerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {item.projects.map(project => (
                    <motion.li
                      key={project}
                      variants={projectVariant}
                    >
                      {project}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  )
}