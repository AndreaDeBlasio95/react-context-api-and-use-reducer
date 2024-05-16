import { createContext } from "react";

// context is a global state that can be accessed by any component
export const CartContext = createContext({
  items: [],
  //totalAmount: 0,
  //addItem: (item) => {},
  //removeItem: (id) => {},
  //clearCart: () => {},
});
