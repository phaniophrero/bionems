export const selectedProductsCategoryReducer = (
  state = { myCategory: "nem", myCategoryValue: 0 },
  action
) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        myCategory: action.payload,
        myCategoryValue: action.value,
      };

    default:
      return state;
  }
};
