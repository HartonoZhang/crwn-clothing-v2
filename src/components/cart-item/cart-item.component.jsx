import { CartItemContainer, CartImageContainer, CartItemDetailContainer, CartItemDetailName } from "./cart-item.style"

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartImageContainer src={imageUrl} alt="item" />
    <CartItemDetailContainer>
      <CartItemDetailName>{name}</CartItemDetailName>
      <span>
        {quantity} x ${price}
      </span>
    </CartItemDetailContainer>
  </CartItemContainer>
);

export default CartItem;
