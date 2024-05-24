import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reduser'; 

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    });
};