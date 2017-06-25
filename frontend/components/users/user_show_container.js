import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show';
import { fetchSingleUser } from '../../actions/user_actions';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.session.currentUser,
    showedUser: state.users.showed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
