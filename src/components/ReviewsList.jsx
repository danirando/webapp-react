export default function ReviewsList({ reviews }) {
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
        {reviews.map((review) => (
          <tr key={review.id}>
            <td>{review.name}</td>
            <td>{review.text}</td>
            <td>{review.vote}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
