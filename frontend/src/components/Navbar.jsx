import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-xl font-bold">ReviewAI</h1>

        <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;