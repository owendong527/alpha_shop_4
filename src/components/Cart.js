import minus from "../icons/minus.svg";
import plus from "../icons/plus.svg";
// import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

//商品資訊
function ListItems({ products, onDecreaseClick, onIncreaseClick }) {
  return (
    <ul>
      {products.map((product) => (
        <div
          key={product.id}
          className="product-container col col-12"
          data-count="0"
          data-price={product.price}
        >
          <img
            className="img-container"
            src={product.img}
            alt={product.name}
          />
          <div className="product-info">
            <div className="product-name">{product.name}</div>
            <div className="product-control-container">
              <div className="product-control">
                {/* 商品數量減一 */}
                <span
                  onClick={() => {
                    onDecreaseClick(product.id);
                  }}
                >
                  <span className="product-action minus" >
                    <img src={minus} alt="minus icon" />
                  </span>
                </span>
                {/* 商品數量 */}
                <span className="product-count">{product.quantity}</span>
                {/* 商品數量加一 */}
                <span
                  onClick={() => {
                    onIncreaseClick(product.id);
                  }}
                >
                  <span className="product-action plus">
                    <img src={plus} alt="plus icon" />
                  </span>
                </span>
              </div>
            </div>
            <div className="price">
              {product.price * product.quantity}
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default function Cart() {
  const {products, setProducts, totalPrice} = useContext(CartContext);

  function handleDecreaseClick(productId) {
    let changeProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          // 數量最低為0
          quantity: product.quantity - 1 > 0 ? product.quantity - 1 : 0,
        };
      } else {
        return product;
      }
    });
    setProducts(changeProducts);
  }

  function handleIncreaseClick(productId) {
    const changeProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      } else {
        return product;
      }
    });
    setProducts(changeProducts);
  }

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section
        className="product-list col col-12"
        data-total-price="0"
      >
        <ListItems
          products={products}
          onDecreaseClick={handleDecreaseClick}
          onIncreaseClick={handleIncreaseClick}
        />
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">$ {totalPrice}</div>
      </section>
    </section>
  );
}
