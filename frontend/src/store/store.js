import articleReducer from './reducers/DataSlice'
import { configureStore, combineReducers } from '@reduxjs/toolkit'


const RootReducer = combineReducers({
    articleReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: RootReducer
    })
}