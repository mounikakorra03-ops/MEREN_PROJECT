function ProductCard({ product, addToCart }) {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{getIcon(product.name)}</div>

      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.price}>₹{product.price}</p>

      <button style={styles.button} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

// Product icons (no images needed)
function getIcon(name) {
  switch (name.toLowerCase()) {
    case "laptop":
      return "💻";
    case "mobile":
      return "📱";
    case "mouse":
      return "🖱️";
    case "headphones":
      return "🎧";
    case "keyboard":
      return "⌨️";
    default:
      return "🛒";
  }
}

const styles = {
  card: {
    background: "#1e1e2f",
    color: "#fff",
    borderRadius: "16px",
    padding: "22px",
    width: "190px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
  },
  icon: {
    fontSize: "42px",
    marginBottom: "10px"
  },
  name: {
    margin: "10px 0",
    letterSpacing: "1px"
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#4caf50"
  },
  button: {
    marginTop: "15px",
    padding: "10px",
    width: "100%",
    background: "linear-gradient(135deg, #4caf50, #2e7d32)",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer"
  }
};

export default ProductCard;
