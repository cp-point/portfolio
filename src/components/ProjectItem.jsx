import { motion, useTransform, useSpring } from 'framer-motion'
import images from '@/data/projectImages'

export default function ProjectItem({ project, index, scrollYProgress, onClick }) {
  const imageKey = Object.keys(images).find(path => path.includes(project.image))
  const imageSrc = images[imageKey]?.default
  const start = index * 0.2
  const end = start + 0.35

  const rawY = useTransform(
    scrollYProgress,
    [start, end],
    [400, 0]
  )

  const y = useSpring(rawY, {
    stiffness: 120,
    damping: 24,
  })

  return (
    <motion.article
      className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}
      style={{ y }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      <div className="project-image">
        <img src={imageSrc} alt={project.title} />
      </div>
      <h3 className="project-title">{project.title}</h3>
    </motion.article>
  )
}