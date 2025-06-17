import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ReviewsList() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // stato aggiuntivo

  const fetchReviews = () => {
    axios
      .get("http://localhost:3000/reviews")
      .then((res) => {
        setReviews(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel caricamento dei film:", err);
        setLoading(false);
      });
  };

  useEffect(fetchReviews, []);

  const review = reviews.find((m) => m.id === Number(id));
  const filteredReviews = reviews.filter(
    (review) => review.movie_id === Number(id)
  );
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Testo</th>
          <th scope="col">Voto</th>
        </tr>
      </thead>
      <tbody>
        {filteredReviews.map((review) => {
          return (
            <tr key={review.id}>
              <td scope="row">{review.name}</td>
              <td>{review.text}</td>
              <td>{review.vote}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
