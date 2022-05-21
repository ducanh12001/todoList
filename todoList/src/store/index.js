import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import jobReducer from './jobSlice'

export default configureStore({
    reducer: {
        jobs: jobReducer
    }
})