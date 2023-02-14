import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../../assets/crownGrey.svg";

import { UserContext } from "../../../contexts/UserContext";
import { CartContext } from "../../../contexts/CartContext";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import CartIcon from "../../cartIcon/CartIcon";
import CartDropDown from "../../cartDropDown/CartDropDown";

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from "./Navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
