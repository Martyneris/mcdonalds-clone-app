import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './App';
import {createStore,combineReducers,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import menuReducer from './reducers/menuReducer';
import ordersReducer from './reducers/ordersReducer';
import categoriesReducer from './reducers/categoriesReducer';
import errorsReducer from './reducers/errorsReducer';
import authReducer from './reducers/authReducer';
import activeOrdersReducer from './reducers/activeOrderReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  menu:menuReducer,
  orders:ordersReducer,
  categories:categoriesReducer,
  auth:authReducer,
  errors:errorsReducer,
  activeOrders:activeOrdersReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
