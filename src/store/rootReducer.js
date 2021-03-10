import { combineReducers } from 'redux';
import eventReducer from '../features/events/eventReducer';
import testReducer from '../sandbox/testReducer';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer,
})

export default rootReducer;