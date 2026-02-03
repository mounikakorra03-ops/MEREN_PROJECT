import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import { products } from "./data";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const allProductsTotal = products.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const confirmOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    setOrderConfirmed(true); // Mark order as confirmed
    setCart([]); // Clear cart after confirmation
  };

  return (
    <div className="app">
      <h1>🛒 Online Store</h1>

      {/* Search */}
      <SearchBar setSearchTerm={setSearchTerm} />

      {/* Products */}
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* All Products Total */}
      <h3>All Products Total Amount: ₹{allProductsTotal}</h3>

      {/* Cart */}
      <Cart cartItems={cart} removeFromCart={removeFromCart} />

      {/* Payment and Confirm */}
      {cart.length > 0 && !orderConfirmed && (
        <div className="payment">
          <h3>Payment Method</h3>
          <label>
            <input
              type="radio"
              name="payment"
              value="Pay Online"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Pay Online
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Cash on Delivery
          </label>
          <br />
          <button onClick={confirmOrder}>Confirm Order</button>
        </div>
      )}

      {/* Order Confirmation Success */}
      {orderConfirmed && (
        <div className="order-success">
          <h3>✅ Order Confirmed Successfully!</h3>
          <p>Payment Method: {paymentMethod}</p>
        </div>
      )}
    </div>
  );
}

export default App;
