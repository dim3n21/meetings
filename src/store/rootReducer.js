import { combineReducers } from 'redux';
import eventReducer from '../features/events/eventReducer';
import testReducer from '../sandbox/testReducer';
import modalReducer from '../app/common/modals/modalReducer';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer,
    modals: modalReducer,
})

export default rootReducer;