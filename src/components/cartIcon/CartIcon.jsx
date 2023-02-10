import { useContext } from "react";

import { ReactComponent as ShopingIcon } from "../../assets/shoppingBag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./CartIcon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
