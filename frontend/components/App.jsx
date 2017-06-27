import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Header from './header';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import UsersContainer from './users/users_container.jsx';
import StoriesIndexContainer from './story/stories_index_container';
import StoriesShowContainer from './story/stories_show_container';
import NewStory from './story/new_story_container';
import EditStory from './story/edit_story_container';
import UserShow from './users/user_show_container';
import CommentShow from './comment/comment_show_container';

const App = () => {
  return (
  <div>
    <Header />
    <Switch>
    <Route path="/comments/:comment_id" component={CommentShow} />
    <ProtectedRoute exact path="/stories/new" component={NewStory} />
    <Route path="/stories/edit/:story_id" component={EditStory} />
    <Route exact path="/users/:id" component={UserShow} />
    <Route exact path="/stories/:story_id/" component={StoriesShowContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/signin" component={SessionFormContainer} />
    <ProtectedRoute exact path="/stories/" component={StoriesIndexContainer} />
    </Switch>

  </div>
  );
};

export default App;
