import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import locApp from './reducer';



const store = createStore(
    locApp,
    composeWithDevTools(applyMiddleware())
);

export default store;