import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';

import store from './redux/store.js';
//import { saveState } from './LocalStorage.js';


//Subscribe to store updates and save state to local storage
// store.subscribe(() => {
//   saveState({
//     cart: store.getState().cart,
//     total: store.getState().total,
//     amount: store.getState().amount,
//   });
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
