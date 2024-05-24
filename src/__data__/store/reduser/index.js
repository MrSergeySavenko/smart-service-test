import { combineReducers } from '@reduxjs/toolkit';

import smartService from './smartService.js'
import { smartServiceSlice } from './smartService'; 

const rootReducer = combineReducers({ smartService });

export { rootReducer, smartServiceSlice };