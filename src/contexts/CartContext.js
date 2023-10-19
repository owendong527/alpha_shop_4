import { createContext, useState } from "react";

export const productData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

export const CartContext = createContext(0);

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const totalPrice = products
    .map((product) => product.price * product.quantity)
    .reduce((acc, cur) => acc + cur);

  return (
    <CartContext.Provider value={{products, setProducts, totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};
