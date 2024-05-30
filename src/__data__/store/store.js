import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    });
};
