import { Link } from "react-router-dom";

export default function Card({
  imagePath,
  title,
  description,
  link,
  linkText,
}) {
  return (
    <div className="card h-100 d-flex flex-column" style={{ width: "100%" }}>
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={imagePath}
          className="card-img-top h-100 w-100 object-fit-cover"
          alt={title}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <Link to={link} className="btn btn-primary mt-auto">
          {linkText}
        </Link>
      </div>
    </div>
  );
}
