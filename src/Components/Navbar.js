import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-left">
        <img
          src="https://media.output.com/app/uploads/2020/10/output-logo-222.svg"
          alt="logo"
        />
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/Company">Company</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
}
