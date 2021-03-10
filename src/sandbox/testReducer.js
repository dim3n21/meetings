const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = (amount) => {
    return {
        type: INCREMENT_COUNTER,
        payload: amount
    }
}

export const decrement = (amount) => {
    return {
        type: DECREMENT_COUNTER,
        payload: amount
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