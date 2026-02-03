import { useState } from "react";
import products from "./data";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import SearchBar from "./SearchBar";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [orderMsg, setOrderMsg] = useState("");

  // Total value of all products
  const allProductsTotal = products.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const placeOrder = (method) => {
    setOrderMsg(`✅ Order Successfully Completed (${method})`);
    setCart([]);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        padding: "30px"
      }}
    >
      {/* ✅ NAME CHANGED HERE */}
      <h1 style={{ textAlign: "center", color: "#4caf50" }}>
        🛍️ Online Store
      </h1>

      <h3 style={{ textAlign: "center", color: "#ffffff" }}>
        Total Value of All Products: ₹{allProductsTotal}
      </h3>

      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Cart
        cart={cart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
        placeOrder={placeOrder}
      />

      {orderMsg && (
        <h2 style={{ textAlign: "center", color: "#4caf50" }}>
          {orderMsg}
        </h2>
      )}
    </div>
  );
}

export default App;
