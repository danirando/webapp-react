import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import { useLoader } from "../contexts/LoaderContext";

export default function MovieShowPage() {
  const { setIsLoading } = useLoader();
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        setMovies(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel caricamento dei film:", err);
        setIsLoading(false);
      });
  };

  const [reviews, setReviews] = useState([]);

  const fetchReviews = () => {
    axios
      .get(`http://localhost:3000/movies/${id}/reviews`)
      .then((res) => {
        setReviews(res.data.data);
      })
      .catch((err) => {
        console.error("Errore nel caricamento delle recensioni:", err);
      });
  };

  useEffect(() => {
    fetchMovies();
    fetchReviews();
  }, []);

  const movie = movies.find((m) => m.id === Number(id));

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
