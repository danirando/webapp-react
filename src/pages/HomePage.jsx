import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
export default function HomePage() {
  // const movies = [
  //   {
  //     id: 1,
  //     title: "Inception",
  //     director: "Christopher Nolan",
  //     genre: "Science Fiction",
  //     release_year: 2010,
  //     abstract:
  //       "A skilled thief is given a chance at redemption if he can successfully perform inception.",
  //     image: "/movies_cover/inception.jpg",
  //     created_at: "2024-11-29T10:40:13.000Z",
  //     updated_at: "2025-06-16T12:39:30.000Z",
  //   },
  //   {
  //     id: 2,
  //     title: "The Godfather",
  //     director: "Francis Ford Coppola",
  //     genre: "Crime",
  //     release_year: 1972,
  //     abstract:
  //       "The story of a powerful Italian-American crime family and their struggles.",
  //     image: "/movies_cover/interstellar.jpg",
  //     created_at: "2024-11-29T10:40:13.000Z",
  //     updated_at: "2025-06-16T12:39:30.000Z",
  //   },
  //   {
  //     id: 3,
  //     title: "Titanic",
  //     director: "James Cameron",
  //     genre: "Romance",
  //     release_year: 1997,
  //     abstract:
  //       "A romantic story set against the tragic sinking of the RMS Titanic.",
  //     image: "/movies_cover/matrix.jpg",
  //     created_at: "2024-11-29T10:40:13.000Z",
  //     updated_at: "2025-06-16T12:39:30.000Z",
  //   },
  //   {
  //     id: 4,
  //     title: "The Matrix",
  //     director: "The Wachowskis",
  //     genre: "Action",
  //     release_year: 1999,
  //     abstract:
  //       "A hacker discovers the truth about his reality and his role in the war against its controllers.",
  //     image: "/movies_cover/the_godfather.jpg",
  //     created_at: "2024-11-29T10:40:13.000Z",
  //     updated_at: "2025-06-16T12:39:30.000Z",
  //   },
  //   {
  //     id: 5,
  //     title: "Interstellar",
  //     director: "Christopher Nolan",
  //     genre: "Science Fiction",
  //     release_year: 2014,
  //     abstract:
  //       "A team of explorers travels through a wormhole in space to save humanity.",
  //     image: "/movies_cover/titanic.jpg",
  //     created_at: "2024-11-29T10:40:13.000Z",
  //     updated_at: "2025-06-16T12:40:49.000Z",
  //   },
  // ];

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
