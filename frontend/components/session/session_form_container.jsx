import { connect } from 'react-redux';
import { signUp, signIn, scrubErrors } from '../../actions/session_actions';
import { turnOffModalAnimation, turnOnModalAnimation } from '../../actions/presentational_actions';

import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors,
    formType: ownProps.location.pathname.slice(1),
    modalAnimation: state.presentation.modalAnimation
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  const processForm = (ownProps.location.pathname.slice(1) === 'signin')
   ? signIn : signUp;

  return {
    processForm: user => dispatch(processForm(user)),
    signIn: user => dispatch(signIn(user)),
    scrubErrors: () => dispatch(scrubErrors()),
    turnOnModalAnimation: () => dispatch(turnOnModalAnimation()),
    turnOffModalAnimation: () => dispatch(turnOffModalAnimation())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
