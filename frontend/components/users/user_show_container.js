import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show';


const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};


const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()).then(() => turnOnModalAnimation())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
