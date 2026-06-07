import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } =
    useContext(CartContext);

  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="card-content">
        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <h4>₹{product.price}</h4>

        <button
          className="btn"
          onClick={() =>
            addToCart(product)
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;