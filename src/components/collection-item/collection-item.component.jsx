import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionButton,
  BackgroundImage,
  CollectionFooterContainer,
  PriceContainer,
  NameContainer,
} from "./collection-item.style";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        imageUrl={imageUrl}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <CollectionButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CollectionButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
