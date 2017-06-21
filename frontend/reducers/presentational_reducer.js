import {
  TURN_OFF_MODAL_ANIMATION,
  TURN_ON_MODAL_ANIMATION,
} from '../actions/presentational_actions';
import { merge } from 'lodash';

const defaultState = {
    modalAnimation: true,
};

const presentationalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case TURN_ON_MODAL_ANIMATION:
      newState.modalAnimation = true
      return newState;
    case TURN_OFF_MODAL_ANIMATION:
      newState.modalAnimation = false
      return newState;
    default:
      return state;
  }
};

export default presentationalReducer;
