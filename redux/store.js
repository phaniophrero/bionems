import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import { sectionsReducers } from './reducers/refsReducers'
import { selectedProductsCategoryReducer } from './reducers/selectedProductsCategoryReducer'

const reducer = combineReducers({
    refs: sectionsReducers,
    selectedProductsCategory: selectedProductsCategoryReducer,
})

const initialState = {}

const middleware = [thunk]

const store = () => createStore(

    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store

export const wrapper = createWrapper(store)