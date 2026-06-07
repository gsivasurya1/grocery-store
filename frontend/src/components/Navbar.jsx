import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>🛒 Grocery Store</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/orders">
  Orders
</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;