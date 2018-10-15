import {SINGLEITEM_STATE} from "./action-types";

export const singleItemActions = (item) => {
  return {
    type: SINGLEITEM_STATE,
    item
  };
}