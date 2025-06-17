import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
export default function HomePage() {
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

  useEffect(fetchMovies, []);

  const movie = movies.find((m) => m.id === Number(id));
  return (
    <div>
      <div className="container my-3">
        <h1>Lista dei Film</h1>
        <div className="row g-3">
          {movies.map((movie) => (
            <div key={movie.id} className="col-12 col-sm-6 col-lg-4 d-flex">
              <Card
                imagePath={`http://localhost:3000${movie.image}`}
                title={movie.title}
                description={movie.abstract}
                link={`/movie/${movie.id}`}
                linkText="Vedi dettagli"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
