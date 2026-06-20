import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <div className="p-10 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Login;