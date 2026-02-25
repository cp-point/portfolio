import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import ProjectDetail from '@/components/ProjectDetail'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKeyDown = e => {
      if(e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        className="modal-dim"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="modal"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <button className="modal-close" onClick={onClose}>x</button>

        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>x</button>

          <div className="modal-header">
            <div className="modal-info">
              <span className="modal-project-period">
                {project.date}
              </span>

              <h2 className="modal-project-title">
                {project.title}
              </h2>

              <ul className="modal-project-meta">
                <li>
                  <strong>작업 환경</strong>
                  <div className="tech-icons">
                    {project?.tech?.map(tech => (
                      <span key={tech} className={`icon-${tech}`} />
                    ))}
                  </div>
                </li>

                <li>
                  <strong>작업 기간</strong>
                  <span>{project.duration}</span>
                </li>

                <li>
                  <strong>기여도</strong>
                  <span>{project.contribution}</span>
                </li>
              </ul>
            </div>

            <div className="modal-visual">
              <img
                src={project.thumbnail}
                alt={project.title}
              />

              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-view-btn"
              >
                Site View
              </a>
            </div>
          </div>

          <div className="modal-divider" />

          <div className="modal-body">
            <ProjectDetail detail={project.detail} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}