import React from "react";

function Cart({ cartItems, removeFromCart }) {
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>No items in cart</p>}

      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>
            {item.name} – ₹{item.price}
          </span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      {cartItems.length > 0 && <h3>Total Amount: ₹{cartTotal}</h3>}
    </div>
  );
}

export default Cart;
