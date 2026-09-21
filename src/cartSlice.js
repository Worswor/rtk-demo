import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the cart
const initialState = {
  items: [], // An array to hold the items in the cart
};

// Create a slice for the cart with actions and reducers
const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    // Remove an item from the cart by its ID
    // The item removed is the first occurrence of the item with the given ID
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;