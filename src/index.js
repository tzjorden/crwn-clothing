import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import { Provider } from 'react-redux';   /* provider is a component that will be wrapped around entire application */
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';

import App from './App';

ReactDOM.render(
  <Provider store = {store}>              {/* provider is the parent of everything in the app. store imports the store funtion from store.js */}
    <BrowserRouter>            {/*Browser is a component that wraps around the app.It allows the App all the functinality of routing */}
      <PersistGate persistor = {persistor}>         {/* declared persistor in store.js */}
       <App />
      </PersistGate> 
    </BrowserRouter>
  </Provider>,

 document.getElementById('root'));