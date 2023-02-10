import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../../assets/crownGrey.svg";

import { UserContext } from "../../../contexts/UserContext";
import { CartContext } from "../../../contexts/cart.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import CartIcon from "../../cartIcon/CartIcon";
import CartDropDown from "../../cartDropDown/CartDropDown";

import "./Navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
