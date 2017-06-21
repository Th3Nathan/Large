import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { usersSelector } from '../../reducers/selectors.js';
import Users from './users';

const mapStateToProps = ({users}) => {
  return {
    users: usersSelector(users)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
