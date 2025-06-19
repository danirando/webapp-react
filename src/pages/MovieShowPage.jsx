import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";

export default function MovieShowPage() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // stato aggiuntivo

  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        setMovies(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel caricamento dei film:", err);
        setLoading(false);
      });
  };

  const [reviews, setReviews] = useState([]);

  const fetchReviews = () => {
    axios
      .get(`http://localhost:3000/movies/${id}/reviews`)
      .then((res) => setReviews(res.data.data))
      .catch((err) =>
        console.error("Errore nel caricamento delle recensioni:", err)
      );
  };

  useEffect(fetchMovies, []);

  useEffect(() => {
    fetchMovies();
    fetchReviews();
  }, []);

  const movie = movies.find((m) => m.id === Number(id));

  if (loading) return <p>Caricamento in corso...</p>;
  if (!movie) return <p>Film non trovato.</p>;

  return (
    <div className="container my-3 d-flex flex-column gap-3">
      <img
        src={`http://localhost:3000${movie.image}`}
        alt={movie.title}
        style={{
          height: "400px",
          objectFit: "contain",
        }}
        className="img-fluid"
      />
      <div className="card h-100 d-flex flex-column" style={{ width: "100%" }}>
        <div className="text-center"></div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text flex-grow-1">{movie.abstract}</p>
          <p className="text-muted">Regista: {movie.director}</p>
          <p className="text-muted">Genere: {movie.genre}</p>
          <p className="text-muted">Anno: {movie.release_year}</p>
        </div>
      </div>
      <h2>Lista recensioni</h2>
      <ReviewsList movieId={Number(id)} reviews={reviews} />

      <ReviewForm onReviewAdded={fetchReviews} />
    </div>
  );
}
