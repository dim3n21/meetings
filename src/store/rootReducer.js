import { combineReducers } from 'redux';
import eventReducer from '../features/events/eventReducer';
import testReducer from '../sandbox/testReducer';
import modalReducer from '../app/common/modals/modalReducer';
import authReducer from '../features/auth/authReducer';
import asyncReducer from '../app/async/asyncReducer';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
})

export default rootReducer;