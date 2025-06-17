export default function Card({
  imagePath,
  title,
  description,
  link,
  linkText,
}) {
  return (
    <div className="card h-100">
      <div style={{ height: "400px", overflow: "hidden" }}>
        <img
          src={imagePath}
          className="card-img-top w-100"
          alt={title}
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a href={link} className="btn btn-primary mt-auto">
          {linkText}
        </a>
      </div>
    </div>
  );
}
