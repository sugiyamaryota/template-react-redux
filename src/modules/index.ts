import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userModules from './userModules'
export const reducers = {
    userModules: userModules.reducer,
}
export const store = configureStore({
    reducer: combineReducers(reducers),
})
