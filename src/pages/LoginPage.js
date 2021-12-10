import Layout from "../components/Layout";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login("20206969", "pepePinga");
  };

  return (
    <Layout>
      <div style={{ width: 250 }} className="m-auto mt-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              No. Cuenta
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Acceder
          </button>
        </form>
      </div>
    </Layout>
  );
}
