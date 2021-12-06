import { CollectionPreviewContainer, TitlePreviewContainer, PreviewContainer } from "./collection-preview.style";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitlePreviewContainer>{title.toUpperCase()}</TitlePreviewContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
