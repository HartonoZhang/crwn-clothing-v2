import { withRouter } from 'react-router-dom';

import { CollectionPreviewContainer, TitlePreviewContainer, PreviewContainer } from "./collection-preview.style";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitlePreviewContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitlePreviewContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
