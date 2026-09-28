export default function Card({ title, description, children }) {
  return <article className="card"><h3>{title}</h3><p>{description}</p>{children}</article>;
}
