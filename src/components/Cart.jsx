import React from 'react';

function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  };

  const increaseQuantity = (id) => {
    const newCart = cart.map(item => {
        if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
        }
        return item;
    });
    setCart(newCart);
  };

  const decreaseQuantity = (id) => {
    const newCart = cart.map(item => {
        if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
    });
    setCart(newCart);
  };

  const checkout = () => {
    let message = "Thank you for your purchase!\n\nItems Purchased:\n";
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        message += `${item.title} - Quantity: ${item.quantity}\n`;
    });

    message += `\nTotal Price: $${totalPrice.toFixed(2)}`;

    console.log("Checking out", cart);
    setCart([]); // Clear the cart
    alert(message);
  };

  if (!cart.length) return <div>Your cart is empty</div>;

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default Cart;
