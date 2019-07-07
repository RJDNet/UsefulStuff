import { FETCHED_NUMBER } from '../actions/types';

const initialState = {
  numberState: 10
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case FETCHED_NUMBER:
      return {
        ...state,
        numberState: state.numberState + 1
      }
    default:
      return state;
  }
}