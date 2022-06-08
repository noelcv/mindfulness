import { configureStore } from 'redux';
import { reducers } from '../reducer';
// import counterReducer from '../features/counter/counterSlice';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = configureStore(reducers);







// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
