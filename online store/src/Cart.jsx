function Cart({ cart, removeItem, placeOrder }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.cartBox}>
      <h2>🛒 Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} style={styles.row}>
          <span>{item.name}</span>
          <span>₹{item.price}</span>

          <button
            style={styles.removeBtn}
            onClick={() => removeItem(item.id)}
          >
            ❌ Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total Amount: ₹{total}</h3>

          <button
            style={styles.payOnline}
            onClick={() => placeOrder("Pay Online")}
          >
            💳 Pay Online
          </button>

          <button
            style={styles.cod}
            onClick={() => placeOrder("Cash on Delivery")}
          >
            💵 Cash on Delivery
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  cartBox: {
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "25px"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px"
  },
  removeBtn: {
    background: "#d32f2f",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  payOnline: {
    marginTop: "10px",
    background: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px"
  },
  cod: {
    background: "#2e7d32",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default Cart;
