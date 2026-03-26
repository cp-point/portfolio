import { motion } from "framer-motion";

export default function Project2Item({ project, index, onOpen }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.article
      className={`project-row ${isLeft ? "is-left" : "is-right"}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {isLeft ? (
        <>
          <ProjectImage project={project} />
          <ProjectInfo project={project} onOpen={onOpen} />
        </>
      ) : (
        <>
          <ProjectInfo project={project} onOpen={onOpen} />
          <ProjectImage project={project} />
        </>
      )}
    </motion.article>
  );
}

function ProjectInfo({ project, onOpen }) {
  const isPublic = project.visibility === "public" && !!project.siteUrl;

  return (
    <div className="project-info-box">
      <div className="project-top-tags">
        <span className="project-badge">{project.type}</span>
        <span className="project-badge year">{project.year}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-one-liner">{project.oneLiner}</p>

      <ul className="project-meta-list">
        <li>
          <strong>기간</strong>
          <span>{project.date}</span>
        </li>
        <li>
          <strong>역할</strong>
          <span>{project.roleSummary}</span>
        </li>
        <li>
          <strong>기술</strong>
          <span>{project.tech.join(" · ")}</span>
        </li>
        <li>
          <strong>기여도</strong>
          <span>{project.contribution}</span>
        </li>
      </ul>

      <div className="project-actions">
        <button type="button" className="btn-primary" onClick={() => onOpen(project)}>
          상세 보기
        </button>

        {isPublic ? (
          <a
            href={project.siteUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            서비스 보기
          </a>
        ) : (
          <span className="project-private-text">실서비스 비공개</span>
        )}
      </div>
    </div>
  );
}

function ProjectImage({ project }) {
  const imgSrc = `${import.meta.env.BASE_URL}${project.thumbnail}`;

  return (
    <div className="project-image-box">
      <div className="project-image-frame">
        <img src={imgSrc} alt={project.title} className="project-image" />
      </div>
    </div>
  );
}