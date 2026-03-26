import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import skills from '@/data/skill'

export default function Skills({ profileRef }) {
  const sectionRef = useRef(null)

  const ITEM_HEIGHT = 80
  const GROUP_TITLE_HEIGHT = 60
  const GAP = 16
  const VIEWPORT = 800

  const totalHeight = skills.reduce((acc, group) => {
    const groupHeight =
      GROUP_TITLE_HEIGHT +
      group.items.length * ITEM_HEIGHT +
      (group.items.length - 1) * GAP

    return acc + groupHeight + 20
  }, 0)

  const { scrollYProgress } = useScroll({
    target: profileRef,
    offset: ['start start', 'end end'],
  })

  const y = useTransform(
    scrollYProgress,
    [0.25, 0.85],
    [0, -(totalHeight - VIEWPORT)]
  )

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  )

  return (
    <div className="skill" ref={sectionRef}>
      <div className="skill-progress">
        <motion.span style={{ height: progressHeight }} />
      </div>

      <motion.div className="skill-list" style={{ y }}>
        {skills.map((group, i) => (
          <div className="skills-group" key={i}>
            <h4 className="skills-group-title">{group.category}</h4>

            <ul className="skills-list-inner">
              {group.items.map((item, idx) => (
                <li key={idx} className="skill-card">
                  <strong>{item.name}</strong>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  )
}