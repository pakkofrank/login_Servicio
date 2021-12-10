import { useRef, useState } from "react";
import Layout from "../components/Layout";
import Presentation from "../components/Presentation";
import { toast } from "react-toastify";

const initialPresentations = [
  { id: 1, name: "Lepe" },
  { id: 2, name: "Pakko" },
];

export default function PanelPage() {
  const inputRef = useRef();
  const [presentations, setPresentations] = useState(initialPresentations);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPresentations([
      ...presentations,
      { id: Date.now(), name: inputRef.current.value },
    ]);
    inputRef.current.value = "";
    toast.success("Presentación completada", { theme: "colored" });
  };

  return (
    <Layout>
      <h1>Panel</h1>
      <h3>Mis presentaciones</h3>
      <form
        className="row row-cols-lg-auto g-3 align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            required
            ref={inputRef}
          />
        </div>
        <div className="col-12">
          <button className="btn btn-success">Crear</button>
        </div>
      </form>

      <hr />
      <div className="row row-cols-4">
        {presentations.map((p) => (
          <div className="col">
            <Presentation key={p.id} name={p.name} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
