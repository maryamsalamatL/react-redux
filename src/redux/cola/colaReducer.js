import { BUY_COLA } from "./colaTypes";

const initialState = {
  numOfCola: 15,
};
const colaReucer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COLA:
      return { ...state, numOfCola: state.numOfCola - 1 };
    default:
      return state;
  }
};
export default colaReucer;
