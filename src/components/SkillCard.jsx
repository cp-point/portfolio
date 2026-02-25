import { motion } from 'framer-motion'

export default function SkillCard({ skill }) {
  return (
    <motion.li
      className="skill-card"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.img
        src={skill.icon}
        alt={skill.name}
        variants={{
          rest: { y: 0, scale: 1 },
          hover: { y: -6, scale: 1.1 },
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      />

      <div className="skill-text">
        <strong>{skill.name}</strong>
        <p>{skill.desc}</p>
      </div>

      <div className="skill-bar">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </motion.li>
  )
}