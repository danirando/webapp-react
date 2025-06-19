import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const initialData = {
  name: "",
  vote: 0,
  text: "",
};

export default function ReviewForm({ onReviewAdded }) {
  const [formData, setFormData] = useState(initialData);
  const { id } = useParams(); // ID del film

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3000/movies/${id}/reviews`, {
        ...formData,
        vote: Number(formData.vote),
      })
      .then((res) => {
        setFormData(initialData);
        if (onReviewAdded) onReviewAdded(); // reset del form
      })
      .catch((err) => {
        console.error(
          "Errore nell'invio della recensione:",
          err.response?.data || err.message
        );
      });
  };

  return (
    <>
      <h3>La tua recensione</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            onChange={handleInputChange}
            value={formData.name}
            type="text"
            name="name"
            className="form-control"
            id="name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="vote" className="form-label">
            Voto (1-5)
          </label>
          <input
            onChange={handleInputChange}
            value={formData.vote}
            type="number"
            name="vote"
            className="form-control"
            id="vote"
            min={1}
            max={5}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Testo recensione
          </label>
          <textarea
            onChange={handleInputChange}
            value={formData.text}
            name="text"
            className="form-control"
            id="text"
            rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-success">
          Invia recensione
        </button>
      </form>
    </>
  );
}
