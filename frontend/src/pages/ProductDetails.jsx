import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Rice",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
      description:
        "Premium quality rice directly sourced from farmers."
    },
    {
      id: 2,
      name: "Sugar",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=500",
      description:
        "Pure white sugar for daily household use."
    },
    {
      id: 3,
      name: "Milk",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500",
      description:
        "Fresh dairy milk rich in calcium and protein."
    }
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <img
          src={product.image}
          alt={product.name}
          className="details-image"
        />

        <div className="details-info">
          <h1>{product.name}</h1>

          <h2>₹{product.price}</h2>

          <p>{product.description}</p>

          <button
            className="add-btn"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;