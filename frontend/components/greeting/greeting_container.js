import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom';
import { turnOffModalAnimation, turnOnModalAnimation } from '../../actions/presentational_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logOut: () => dispatch(logOut())
      .then(() => turnOnModalAnimation())
        .then(() => ownProps.history.push('/login')),
    turnOnModalAnimation: () => dispatch(turnOnModalAnimation())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));
