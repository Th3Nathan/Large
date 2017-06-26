import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import { turnOnModalAnimation } from '../actions/presentational_actions';
import NewStoryHeader from "./new_story_header";
import { createStory } from './../actions/story_actions';
import { removeDraft } from './../actions/session_actions';

const StoryLink = () => {
  return (
    <Link id="new-story-link" to="/stories/new">Write a story</Link>
  );
};

const RedirectStoryLink = () => {
  return (
    <Link id="new-story-link" to="/signin">Write a story</Link>
  );
};

class Header extends React.Component {
  constructor(props){
    super(props);
    this.publish = this.publish.bind(this);
    this.delete = this.delete.bind(this);
  }

  publish(e){
    e.preventDefault();
    let story = this.props.draft;
    let formData = new FormData();
    formData.append("story[title]", story.title);
    formData.append("story[body]", story.body);
    formData.append("story[image]", story.imageFile);
    formData.append("story[author_id]", this.props.currentUser.id);
    formData.append("story[description]", story.description);
    this.props.createStory(formData);
    this.props.removeDraft();
    this.props.history.push('/');
  }

  delete(e){
    e.preventDefault();
    this.props.removeDraft();
    this.props.history.push('/stories');
  }

  render(){
    let newStoryBlock;
    if (
      (this.props.location.pathname.slice(1, 8) === "stories") &&
          (this.props.currentUser.story_ids.includes(parseInt(this.props.location.pathname.split("/")[2])))
        ){
      newStoryBlock = <EditHeader storyId={parseInt(this.props.location.pathname.split("/")[2])} />;
    }
    else if (this.props.location.pathname === "/stories/new"){
      newStoryBlock = <NewStoryHeader delete={this.delete} publish={this.publish} />;
    } else {
      newStoryBlock = <Link id="new-story-link" to="/stories/new">Write a story</Link>;
    }

    return (
      <header>
      <img src="https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg" ></img>
        <Link to="/">
          <div id="title">
            <h1>Large</h1>
          </div>
        </Link>

        <GreetingContainer />
        { newStoryBlock }
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    draft: state.session.draft
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
     turnOnModalAnimation: () => dispatch(turnOnModalAnimation() ),
     createStory: (story) => dispatch(createStory(story)),
     removeDraft: () => dispatch(removeDraft())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
