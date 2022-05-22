import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducer/authReducer';
import appReducer from '../reducer/appReducer'

export default configureStore({
    reducer: {
        auth: authReducer,
        app: appReducer
    }
});