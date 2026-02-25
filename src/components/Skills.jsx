import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SkillCard from '@/components/skillCard'
import skillData from '@/data/skill'

export default function Skills({ profileRef }) {
  const sectionRef = useRef(null)
  const ITEM_HEIGHT = 120
  const GAP = 20
  const VIEWPORT = 690
  const totalHeight =
    skillData.length * ITEM_HEIGHT +
    (skillData.length - 1) * GAP

  const { scrollYProgress } = useScroll({
    target: profileRef,
    offset: ['start start', 'end end'],
  })

  const y = useTransform(
    scrollYProgress,
    [0.15, 0.85],
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

      <motion.ul className="skill-list" style={{ y }}>
        {skillData.map(skill => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.ul>
    </div>
  )
}
