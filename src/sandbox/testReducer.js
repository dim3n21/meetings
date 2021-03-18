import { toast } from "react-toastify";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../app/async/asyncReducer";
import { delay } from "../app/common/util/util";

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = (amount) => {
    return async function(dispatch) {
      dispatch(asyncActionStart());
      try {
        await delay(2000);
        dispatch({type: INCREMENT_COUNTER, payload: amount});
        dispatch(asyncActionFinish())
      } catch(err) {
        dispatch(asyncActionError(err))
      }
    }
}

export const decrement = (amount) => {
  return async function(dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(2000);
      throw 'oops';
      dispatch({type: DECREMENT_COUNTER, payload: amount});
      dispatch(asyncActionFinish())
    } catch(err) {
      dispatch(asyncActionError(err))
      toast.error(err);
    }
  }
}

let initialStore = {
    data: 42,
}

const testReducer = (state=initialStore, {type, payload}) => {
    switch (type) {
        case INCREMENT_COUNTER:
          return {
            ...state,
            data: state.data + payload,
          };
        case DECREMENT_COUNTER:
          return {
            ...state,
            data: state.data - payload,
          };
        default:
          return state;
      }
}

export default testReducer;