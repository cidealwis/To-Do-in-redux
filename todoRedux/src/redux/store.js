import { createStore } from 'redux';
import todoReducer from './reducer';
//import { loadState } from '../LocalStorage';

// Load persisted state from local storage
//const persistedState = loadState();

const store = createStore(todoReducer);

export default store;
