import { useState } from "react";
import projects from "@/data/project2";
import Project2Item from "@/components/Project2Item";
import ProjectModal from "@/components/ProjectModal";

export default function Project2() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <>
      <section className="project-section" id="project">
        {projects.map((project, index) => (
          <Project2Item
            key={project.id}
            project={project}
            index={index}
            onOpen={handleOpen}
          />
        ))}
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  );
}