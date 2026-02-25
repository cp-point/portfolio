import DetailBlock from './DetailBlock'

export default function ProjectDetail({ detail }) {
  if(!detail) return null

  return (
    <section className="project-detail">
      <h3 className="project-detail-title">Project Detail</h3>

      <DetailBlock title="프로젝트 배경">
        {detail.background}
      </DetailBlock>

      <DetailBlock title="담당 역할">
        {detail.role}
      </DetailBlock>

      <DetailBlock title="기술적 구현">
        {detail.techDetail}
      </DetailBlock>

      <DetailBlock title="문제 해결 경험">
        {detail.experience}
      </DetailBlock>

      <DetailBlock title="성과">
        {detail.result}
      </DetailBlock>

      {detail.improvement && (
        <DetailBlock title="개선점">
          {detail.improvement}
        </DetailBlock>
      )}
    </section>
  )
}