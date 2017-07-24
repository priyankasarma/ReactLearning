import { FETCH_WEATHER } from './../actions/index';

export default function(state = [], action) {
  let returnState = state;

  switch (action.type) {
    case FETCH_WEATHER:
      returnState = [action.payload.data, ...state];
      break;
  }

  return returnState;
}