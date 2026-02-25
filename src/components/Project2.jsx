import { useState, useRef } from "react";
import { motion } from 'framer-motion'
import Project2Item from "@/components/Project2Item";
import ProjectModal from "@/components/ProjectModal";
import projects from '@/data/project2'

export default function Project2Section() {
  const projectRef = useRef(null)
  const STEP = 3

  const [visibleCount, setVisibleCount] = useState(STEP)
  const visibleProject = projects.slice(0, visibleCount)
  const [selectProject, setSelectProject] = useState(null);

  const moreProject = () => {
    setVisibleCount(prev => Math.min(prev + STEP, projects.length))
  }

  return (
    <section id="project" className="project-type2-section" ref={projectRef}>
      <motion.h2
        className="project__title"
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
        PROJECT
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

      {visibleProject.map((project, idx) => (
        <Project2Item
          key={project.id}
          project={project}
          index={idx}
          onOpen={() => setSelectProject(project)}
        />
      ))}

      {visibleCount < projects.length && (
        <button
          className="project-more-btn"
          onClick={moreProject}
        >
          더보기
        </button>
      )}

      {selectProject && (
        <ProjectModal
          project={selectProject}
          onClose={() => setSelectProject(null)}
        />
      )}
    </section>
  );
}
