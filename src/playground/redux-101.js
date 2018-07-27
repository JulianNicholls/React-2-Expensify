import { createStore, combineReducers } from 'redux';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';
const SET = 'set';

const increment = (by = 1) => ({ type: INCREMENT, value: by });
const decrement = (by = 1) => ({ type: DECREMENT, value: by });
const reset = () => ({ type: RESET });
const set = to => ({ type: SET, value: to });

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case RESET:
      return 0;

    case SET:
      return action.value;

    case INCREMENT:
      return state + action.value;

    case DECREMENT:
      return state - action.value;

    default:
      return state;
  }
};

const store = createStore(combineReducers({ count: countReducer }));

store.subscribe(() => {
  console.log('Store:', store.getState());
});

store.dispatch(increment());
store.dispatch(increment(3));

store.dispatch(reset());
store.dispatch(decrement());

store.dispatch(set(7));
store.dispatch(decrement(4));
