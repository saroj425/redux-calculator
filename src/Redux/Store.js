import {legacy_createStore as createStore,combineReducers} from 'redux'

import calculatorReducers from './Reducer'

const rootReducer = combineReducers({
    calculator:calculatorReducers
})

const store =createStore(rootReducer);

export default store;