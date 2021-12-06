import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

import { CheckoutItemContainer, ItemImageContainer, RemoveButtonContainer, TextContainer, QuantityContaienr } from "./checkout-item.style";

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ItemImageContainer>
        <img src={imageUrl} alt="item" />
      </ItemImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContaienr>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span> {quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContaienr>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
