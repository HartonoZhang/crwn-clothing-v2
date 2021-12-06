import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import { CollectionPageContainer, CollectionTitle, CollectionItemContainer } from "./collection.style";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemContainer>
      {
        items.map(item => (<CollectionItem key={item.id} item={item} />))
      }
      </CollectionItemContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
