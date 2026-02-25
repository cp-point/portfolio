export default function DetailBlock({ title, children }) {
  if(!children) return null

  return (
    <div className="detail-block">
      <h4 className="detail-title">{title}</h4>
      <p className="detail-text">{children}</p>
    </div>
  )
}