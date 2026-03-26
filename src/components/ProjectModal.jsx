import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const isPublic = project.visibility === "public" && !!project.siteUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-modal-inner">
              <button
                type="button"
                className="project-modal-close"
                onClick={onClose}
                aria-label="모달 닫기"
              >
                ×
              </button>

              <div className="project-modal-header">
                <div className="project-modal-badges">
                  <span className="project-badge">{project.type}</span>
                  <span className="project-badge year">{project.year}</span>
                  {project.visibility === "private" && (
                    <span className="project-badge private">비공개 프로젝트</span>
                  )}
                </div>

                <h2 className="project-modal-title">
                  {project.title}
                  <div className="project-modal-actions">
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
                      <div className="project-private-box">
                        보안상 실제 서비스 URL은 비공개이며, 상세 화면으로 대체했습니다.
                      </div>
                    )}
                  </div>
                </h2>
                {/* <p className="project-modal-one-liner">{project.oneLiner}</p> */}

                <div className="project-modal-meta">
                  <div className="meta-item">
                    <strong>역할</strong>
                    <span>{project.roleSummary}</span>
                  </div>
                  <div className="meta-item">
                    <strong>기여도</strong>
                    <span>{project.contribution}</span>
                  </div>
                  <div className="meta-item">
                    <strong>기간</strong>
                    <span>{project.date}</span>
                  </div>
                  <div className="meta-item">
                    <strong>기술</strong>
                    <span>{project.tech.join(" · ")}</span>
                  </div>
                </div>
              </div>
              <ProjectDetail project={project} />
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}