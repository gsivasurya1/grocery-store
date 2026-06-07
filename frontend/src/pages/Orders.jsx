import { useEffect, useState } from "react";
import api from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orders-page">
      <h1>📦 My Orders</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          className="order-card"
        >
          <h3>
            Order ID:
            {order._id}
          </h3>

          <p>
            Total: ₹{order.totalPrice}
          </p>

          <p>
            Date:
            {new Date(
              order.createdAt
            ).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Orders;