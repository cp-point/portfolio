import { useRef, useState } from 'react'
import { useScroll } from 'framer-motion'
import projects from '@/data/project'
import ProjectItem from '@/components/ProjectItem'
import ProjectModal from '@/components/ProjectModal'

export default function Project() {
  const sectionRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  })

  return (
    <>
      <section id="project" className="project" ref={sectionRef}>
        <h2 className="project__title">PROJECT</h2>

        <div className="project-list">
          {projects.map((project, idx) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={idx}
              scrollYProgress={scrollYProgress}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
