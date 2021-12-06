import { createStructuredSelector } from "reselect";

import { CartIconContainer, ShoppingIconImg, CartItemCount } from "./cart-icon.style";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconImg />
    <CartItemCount>{itemCount}</CartItemCount>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
