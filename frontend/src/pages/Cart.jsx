import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Add some products to continue shopping.</p>
        </div>
      ) : (
        <>
          <div className="cart-container">
            <div className="cart-items">
              {cart.map((item, index) => (
                <div
                  className="cart-card"
                  key={index}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                    <h4>₹{item.price}</h4>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>₹40</span>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total + 40}</span>
              </div>

              <Link to="/checkout">
  <button className="checkout-btn">
    Proceed To Checkout
  </button>
</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;