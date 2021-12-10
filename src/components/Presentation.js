import { toast } from "react-toastify";

export default function Presentation({ name }) {
  const publicar = () => {
    toast.info("Publicado", { theme: "colored" });
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://picsum.photos/200/100"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <a href="#" className="btn btn-success">
            Estadisticas
          </a>
          <a href="#" className="btn btn-warning">
            Editar
          </a>
          <button className="btn btn-primary" onClick={publicar}>
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}
