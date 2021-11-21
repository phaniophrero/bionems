export const sectionsReducers = (state={
    productsSectionRef: { id: '', top: '' }
}, action) => {
    switch(action.type) {
        case 'DEFAULT':
            return {
                productsSectionRef: action.payload
            }
        default:
            return state
    }
}