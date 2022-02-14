import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducer from './reducer'

const configureStore = () => {
    return createStore(Reducer, applyMiddleware(thunk));
}

export default configureStore