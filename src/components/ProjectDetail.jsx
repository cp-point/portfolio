export default function ProjectDetail({ project }) {
  const gallery = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.thumbnail];

  const detail = project.detail || {};
  const visibility = project.visibility || 'public';

  return (
    <div className="project-detail">
      {visibility === "private" && (
        <section className="project-detail-section">
          <h3 className="project-detail-heading">프로젝트 상세 화면</h3>
          <div className="project-gallery">
            {gallery.map((image, index) => (
              <div className="project-gallery-item" key={`${project.id}-${index}`}>
                <img
                  src={`${import.meta.env.BASE_URL}${image}`}
                  alt={`${project.title} 화면 ${index + 1}`}
                  className="project-gallery-image"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="project-detail-section">
        <h3 className="project-detail-heading">프로젝트 개요</h3>
        <p className="project-detail-text">{detail.background}</p>
      </section>

      <section className="project-detail-section">
        <h3 className="project-detail-heading">담당 역할</h3>
        <p className="project-detail-text">{detail.role}</p>
      </section>

      {detail.techDetail && (
        <section className="project-detail-section">
          <h3 className="project-detail-heading">실무 환경 / 구현 방식</h3>
          <p className="project-detail-text">{detail.techDetail}</p>
        </section>
      )}

      {detail.experience && (
        <section className="project-detail-section">
          <h3 className="project-detail-heading">문제 해결 / 협업 경험</h3>
          <p className="project-detail-text">{detail.experience}</p>
        </section>
      )}

      {detail.result && (
        <section className="project-detail-section">
          <h3 className="project-detail-heading">결과</h3>
          <p className="project-detail-text">{detail.result}</p>
        </section>
      )}

      {detail.improvement && (
        <section className="project-detail-section">
          <h3 className="project-detail-heading">회고 / 개선 포인트</h3>
          <p className="project-detail-text">{detail.improvement}</p>
        </section>
      )}
    </div>
  );
}