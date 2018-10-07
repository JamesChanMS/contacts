import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const {createStore} =  require('redux');
import {addContact} from './actions'
import reducer from './reducer'



const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store)

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

// const thunk = store => next => action => {
//     if (typeof action === 'function') {
//         action(store.dispatch())
//     } else {
//         next(action)
//     }
// }

// store.dispatch(updateUser({foo: 'foo'}));
// store.dispatch(updateUser({bar: 'bar'}));
// store.dispatch(updateUser({bar: 'baz'}));
//

// store.dispatch(addContact({'name': 'john', 'password': 'code'}));
// store.dispatch(addContact({'name': 'john', 'password': 'code'}));
// store.dispatch(addContact({'name': 'james', 'phone': '18758263492'}));

//
// console.log(store.getState());

// export default store