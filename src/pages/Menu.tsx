import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import friedChicken from "@/assets/fried-chicken.jpg";
import spicyChicken from "@/assets/spicy-chicken.jpg";
import chickenWings from "@/assets/chicken-wings.jpg";
import chickenCombo from "@/assets/chicken-combo.jpg";

const menuItems = [
  {
    id: 1,
    name: "Fried Chicken",
    price: 8.99,
    image: friedChicken,
    description:
      "Our classic fried chicken is made with a secret blend of 11 herbs and spices. Each piece is marinated for 24 hours, then hand-battered and deep-fried to golden perfection. Served with your choice of one side dish. Perfect for lunch or dinner. A customer favorite since 2005. Available in original or extra crispy.",
  },
  {
    id: 2,
    name: "Spicy Chicken",
    price: 9.99,
    image: spicyChicken,
    description:
      "For those who like it hot! Our spicy chicken is coated in our signature chili sauce made from imported peppers. Each piece packs a fiery punch that will leave you wanting more. Comes with a cooling ranch dip on the side. Not for the faint-hearted! Heat level: 🔥🔥🔥. Try it if you dare!",
  },
  {
    id: 3,
    name: "Chicken Wings",
    price: 7.49,
    image: chickenWings,
    description:
      "Crispy on the outside, juicy on the inside. Our wings come in a variety of flavors including BBQ, buffalo, garlic parmesan, honey mustard, teriyaki, and plain. Each order comes with 8 pieces and your choice of dipping sauce. Great for sharing or as a solo snack. Also available in boneless!",
  },
  {
    id: 4,
    name: "Chicken Meal Combo",
    price: 14.99,
    image: chickenCombo,
    description:
      "The ultimate value meal! Includes 3 pieces of fried chicken, a large serving of french fries, creamy coleslaw, a buttery biscuit, and a large drink of your choice. Upgrade to spicy chicken for just $1 more. Add an extra side for $2.49. Best deal on the menu! Perfect for a filling meal.",
  },
];

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <div style={{ backgroundColor: "#fff8e1", minHeight: "100vh" }}>
      {/* Banner */}
      <div
        style={{
          background: "linear-gradient(to right, #ff6600, #ffcc00)",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontFamily: "Impact, sans-serif", color: "white", fontSize: "32px", margin: 0 }}>
          OUR MENU
        </h1>
      </div>

      {/* Nav - small, no active state */}
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

      {/* Intentionally misaligned grid */}
      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                border: "2px solid #ff8c00",
                borderRadius: "8px",
                padding: "10px",
                backgroundColor: index % 2 === 0 ? "#fff3cd" : "#ffe0b2",
                width: index === 0 ? "320px" : index === 1 ? "280px" : index === 2 ? "350px" : "300px",
                fontFamily: index % 2 === 0 ? "Georgia, serif" : "Verdana, sans-serif",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width={index === 2 ? 200 : 150}
                height={index === 2 ? 200 : 150}
                loading="lazy"
                style={{ borderRadius: "4px", display: "block" }}
              />
              <h3
                style={{
                  fontFamily: "Comic Sans MS, cursive",
                  color: "#cc0000",
                  fontSize: index === 1 ? "22px" : "18px",
                  margin: "8px 0 4px",
                }}
              >
                {item.name}
              </h3>
              <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.3", margin: "0 0 8px" }}>
                {item.description}
              </p>
              <p
                style={{
                  fontFamily: "Courier New, monospace",
                  fontSize: "16px",
                  color: "#ff6600",
                  fontWeight: "bold",
                  margin: "4px 0",
                }}
              >
                ${item.price.toFixed(2)}
              </p>
              {/* Intentionally tiny, hard-to-notice button */}
              <button
                onClick={() => addToCart({ id: item.id, name: item.name, price: item.price })}
                style={{
                  fontSize: "10px",
                  padding: "3px 8px",
                  backgroundColor: "#ccc",
                  border: "1px solid #999",
                  borderRadius: "3px",
                  cursor: "pointer",
                  color: "#666",
                }}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
