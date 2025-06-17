import { useParams } from "react-router-dom";

export default function ReviewsList() {
  const { id } = useParams();
  const reviews = [
    {
      id: 1,
      movie_id: 1,
      name: "Alice",
      vote: 5,
      text: "A mind-bending masterpiece.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 2,
      movie_id: 1,
      name: "Bob",
      vote: 4,
      text: "Great visuals and a compelling story.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 3,
      movie_id: 1,
      name: "Charlie",
      vote: 3,
      text: "Confusing at times, but worth watching.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 4,
      movie_id: 2,
      name: "Diana",
      vote: 5,
      text: "The best crime movie ever made.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 5,
      movie_id: 2,
      name: "Eve",
      vote: 5,
      text: "A cinematic classic that never gets old.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 6,
      movie_id: 2,
      name: "Frank",
      vote: 4,
      text: "A bit slow-paced but very impactful.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 7,
      movie_id: 3,
      name: "Grace",
      vote: 5,
      text: "A heartbreaking love story.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 8,
      movie_id: 3,
      name: "Hank",
      vote: 4,
      text: "Beautiful visuals and a moving plot.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 9,
      movie_id: 3,
      name: "Ivy",
      vote: 3,
      text: "A bit too melodramatic for my taste.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 10,
      movie_id: 4,
      name: "Jack",
      vote: 5,
      text: "A revolutionary film in every sense.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 11,
      movie_id: 4,
      name: "Karen",
      vote: 4,
      text: "Great action and a thought-provoking plot.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 12,
      movie_id: 4,
      name: "Liam",
      vote: 4,
      text: "A unique take on reality and perception.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 13,
      movie_id: 5,
      name: "Mia",
      vote: 5,
      text: "Visually stunning and emotionally resonant.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 14,
      movie_id: 5,
      name: "Noah",
      vote: 3,
      text: "Interesting ideas but too long.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 15,
      movie_id: 5,
      name: "Olivia",
      vote: 4,
      text: "A beautiful story about love and survival.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
  ];
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
