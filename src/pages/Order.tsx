import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Order = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ backgroundColor: "#fff3cd", minHeight: "100vh" }}>
      <div
        style={{
          background: "linear-gradient(to right, #ffcc00, #ff6600)",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontFamily: "Impact", color: "white", fontSize: "32px", margin: 0 }}>
          YOUR ORDER
        </h1>
      </div>

      <nav
        style={{
          backgroundColor: "#cc0000",
          display: "flex",
          gap: "15px",
          padding: "8px 20px",
          fontSize: "11px",
          fontFamily: "Arial",
        }}
      >
        <Link to="/" style={{ color: "#ffcccc", textDecoration: "none" }}>Home</Link>
        <Link to="/menu" style={{ color: "#ffcccc", textDecoration: "none" }}>Menu</Link>
        <Link to="/order" style={{ color: "#ffcccc", textDecoration: "none" }}>Order</Link>
        <Link to="/contact" style={{ color: "#ffcccc", textDecoration: "none" }}>Contact</Link>
      </nav>

      <div style={{ padding: "20px", fontFamily: "Verdana, sans-serif" }}>
        {cart.length === 0 ? (
          <p style={{ fontSize: "14px", color: "#666" }}>No items yet. Go to Menu to add items.</p>
        ) : (
          <div>
            {/* No remove/edit option - intentional */}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "Courier New, monospace",
                fontSize: "13px",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#ffe0b2" }}>
                  <th style={{ textAlign: "left", padding: "8px", border: "1px solid #ff8c00" }}>Item</th>
                  <th style={{ padding: "8px", border: "1px solid #ff8c00" }}>Qty</th>
                  <th style={{ padding: "8px", border: "1px solid #ff8c00" }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>{item.name}</td>
                    <td style={{ padding: "8px", border: "1px solid #ddd", textAlign: "center" }}>
                      {item.quantity}
                    </td>
                    <td style={{ padding: "8px", border: "1px solid #ddd", textAlign: "center" }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "18px",
                color: "#cc0000",
                marginTop: "15px",
                fontWeight: "bold",
              }}
            >
              Total: ${total.toFixed(2)}
            </p>

            {/* Intentionally vague button, no confirmation */}
            <button
              onClick={() => {
                // No feedback at all - intentional UX flaw
              }}
              style={{
                fontSize: "11px",
                padding: "5px 12px",
                backgroundColor: "#ccc",
                border: "1px solid #999",
                borderRadius: "3px",
                cursor: "pointer",
                color: "#666",
                marginTop: "10px",
              }}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
