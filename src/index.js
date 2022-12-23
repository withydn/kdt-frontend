import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import rootStore from './store';
import { Provider } from 'react-redux';

// const reduxDevTool =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = configureStore({ reducer: rootReducer }, reduxDevTool);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
