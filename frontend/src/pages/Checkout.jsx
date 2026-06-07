import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import api from "../services/api";

function Checkout() {
  const { cart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const deliveryCharge = 40;

  const finalTotal = total + deliveryCharge;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
  try {
    await api.post("/orders", {
      customer: formData,
      products: cart,
      totalPrice: finalTotal,
    });

    alert("🎉 Order Placed Successfully!");

  } catch (error) {
    console.error(error);

    alert("❌ Order Failed");
  }
};
  return (
    <div className="checkout-page">
      <h1 className="checkout-title">
        🛍 Checkout
      </h1>

      <div className="checkout-container">
        {/* Billing Form */}

        <div className="billing-section">
          <h2>Delivery Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Full Address"
            rows="4"
            onChange={handleChange}
          ></textarea>

          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
          />
        </div>

        {/* Order Summary */}

        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.length === 0 ? (
            <p>No products in cart.</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="summary-item"
              >
                <span>{item.name}</span>

                <span>₹{item.price}</span>
              </div>
            ))
          )}

          <hr />

          <div className="summary-item">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="summary-item">
            <span>Delivery</span>
            <span>₹{deliveryCharge}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>₹{finalTotal}</span>
          </div>

          <h3 className="payment-title">
            Payment Method
          </h3>

          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                defaultChecked
              />
              Cash On Delivery
            </label>

            <label>
              <input
                type="radio"
                name="payment"
              />
              UPI Payment
            </label>

            <label>
              <input
                type="radio"
                name="payment"
              />
              Credit / Debit Card
            </label>
          </div>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;