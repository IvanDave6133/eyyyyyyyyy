import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#ffe0b2", minHeight: "100vh" }}>
      <div
        style={{
          background: "linear-gradient(to right, #ff0000, #ff8c00)",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontFamily: "Comic Sans MS, cursive", color: "#fff200", fontSize: "32px", margin: 0 }}>
          Contact Us
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

      <div style={{ padding: "20px", maxWidth: "500px" }}>
        {/* Intentionally misaligned labels */}
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              fontFamily: "Impact, sans-serif",
              fontSize: "16px",
              color: "#cc0000",
              display: "block",
              marginBottom: "2px",
              marginLeft: "20px",
            }}
          >
            Name
          </label>
          <input
            type="text"
            style={{
              width: "70%",
              padding: "6px",
              border: "1px solid #ccc",
              borderRadius: "3px",
              fontFamily: "Courier New",
              fontSize: "13px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "14px",
              color: "#ff6600",
              display: "block",
              marginBottom: "2px",
            }}
          >
            Message
          </label>
          <textarea
            rows={4}
            style={{
              width: "85%",
              padding: "6px",
              border: "1px solid #ccc",
              borderRadius: "3px",
              fontFamily: "Verdana",
              fontSize: "12px",
            }}
          />
        </div>

        {/* No validation, no feedback - intentional */}
        <button
          onClick={() => {
            // Does nothing - intentional
          }}
          style={{
            fontSize: "11px",
            padding: "5px 15px",
            backgroundColor: "#ccc",
            border: "1px solid #999",
            borderRadius: "3px",
            cursor: "pointer",
            color: "#666",
            marginLeft: "40px",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
