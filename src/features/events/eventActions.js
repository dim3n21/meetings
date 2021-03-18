import { fetchSampleData } from "../../app/api/mockApi"
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../../app/async/asyncReducer"
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENT } from "./eventConstants"

const createEvent = (event) => {
    return {
        type: CREATE_EVENT,
        payload: event,
    }
}

const updateEvent = (event) => {
    return {
        type: UPDATE_EVENT,
        payload: event,
    }
}

const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        payload: eventId,
    }
}

const loadEvents = (events) => {
    return async function (dispatch) {
        dispatch(asyncActionStart())
        try {
            const events = await fetchSampleData();
            dispatch({type: FETCH_EVENT, payload: events});
            dispatch(asyncActionFinish());
        } catch(err) {
            dispatch(asyncActionError(err));
        }
    }
}

export {
    createEvent,
    updateEvent,
    deleteEvent,
    loadEvents,
}