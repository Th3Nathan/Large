export const TURN_OFF_MODAL_ANIMATION = "TURN_OFF_MODAL_ANIMATION";
export const TURN_ON_MODAL_ANIMATION = "TURN_ON_MODAL_ANIMATION";

export const turnOffModalAnimation = () => {
  return {
    type: TURN_OFF_MODAL_ANIMATION,
  };
};

export const turnOnModalAnimation = () => {
  return {
    type: TURN_ON_MODAL_ANIMATION,
  };
};
