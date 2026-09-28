import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart } from './cartSlice';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();
  // Get the items from the cart state in the Redux store
  const items = useSelector((state) => state.cart.items);

  // Calculate the total price of items in the cart
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  // Products available for purchase
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 1799,
    },
    {
      id: 2,
      name: 'Videogame',
      price: 499,
    },
    {
      id: 3,
      name: 'Smartphone',
      price: 999,
    },
  ];

  return (
    <main>
      <router>
        <navbar />
        <routes>
          <Route path="/" element={<Home />} />
        </routes>
      </router>

      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ${product.price}
          </p>

          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>

          <button onClick={() => dispatch(removeItem(product.id))}>
            Remove One
          </button>
        </div>
      ))}

      <hr />

      <h2>Cart ({items.length})</h2>

      {/* Display the items in the cart, or a message if the cart is empty */}
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}

      <p>Total Price: ${totalPrice}</p>

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </main>
  );
}

export default App;