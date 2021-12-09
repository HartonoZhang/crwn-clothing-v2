import { ShopActionTypes } from "./shop.types";

export const udpateCollections = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap,
});
