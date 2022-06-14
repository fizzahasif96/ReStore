import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import './app/layout/styles.css';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from './app/store/ConfigureStore';
import { fetchProductsAsync } from './features/catalog/CatalogSlice';


export const history = createBrowserHistory();



ReactDOM.render(
  <React.StrictMode>
     <Router history={history}>
       {/* <StoreProvider> */}
        <Provider store={store}>
          <App />
        </Provider>
       {/* </StoreProvider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();
