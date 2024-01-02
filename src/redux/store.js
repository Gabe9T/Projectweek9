import { createStore } from 'redux';
import coffeeReducer from './reducers';

const store = createStore(coffeeReducer);

export default store;