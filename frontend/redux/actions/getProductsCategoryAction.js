export const getProductsCategoryAction = (name, value) => {
    return {
        type: "SET_CATEGORY",
        payload: name,
        value: value
    }
}