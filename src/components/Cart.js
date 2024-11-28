import { Link } from "react-router-dom";
import './Cart.css';

function Cart({ cart , removeFromCart}) {
  return (
    <div className="cart my-5">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="removebutton" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="cart-contents">
            <Link to="/payment">
              <button>Proceed to Payment</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
