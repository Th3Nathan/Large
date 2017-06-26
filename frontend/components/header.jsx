import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import { turnOnModalAnimation } from '../actions/presentational_actions';
import NewStoryHeader from "./new_story_header";
import { createStory, fetchSingleStory, updateStory, deleteStory } from './../actions/story_actions';
import { removeDraft, updateDraft } from './../actions/session_actions';
import SaveHeader from './save_header';

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

const EditHeader = (props) => {
  return (
    <section className="edit-header">
      <h2 onClick={props.handler} className="edit-button">Edit Story</h2>
    </section>
  );
};

class Header extends React.Component {
  constructor(props){
    super(props);
    this.publish = this.publish.bind(this);
    this.deleteDraft = this.deleteDraft.bind(this);
    this.deleteStoryHandler = this.deleteStoryHandler.bind(this);
    this.toEditHandler = this.toEditHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
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

  deleteDraft(e){
    e.preventDefault();
    this.props.removeDraft();
    this.props.history.push('/stories');
  }

  deleteStoryHandler(e){
    const storyId = parseInt(this.props.location.pathname.split("/")[2]);
    this.props.deleteStory(storyId)
      .then(() => this.history.push("/"));
  }

  toEditHandler(e){
    e.preventDefault();
    const storyId = parseInt(this.props.location.pathname.split("/")[2]);
    this.props.history.push(`/stories/edit/${storyId}`);
  }

  saveHandler(e){
    e.preventDefault();
    let story = this.props.draft;
    let formData = new FormData();
    formData.append("story[title]", story.title);
    formData.append("story[body]", story.body);
    if (story.imageUrl.slice(0, 2) === "s3")
      formData.append("story[image]", story.imageUrl);
    else { formData.append("story[image]", story.imageFile); }
    formData.append("story[author_id]", this.props.currentUser.id);
    formData.append("story[description]", story.description);
    this.props.updateStory(formData, parseInt(this.props.location.pathname.split("/")[3]));
    this.props.removeDraft();
    this.props.history.push(`/stories/${parseInt(this.props.location.pathname.split("/")[3])}`);
  }

  render(){
    let newStoryBlock;
    if (
      (this.props.location.pathname.slice(1, 8) === "stories") &&
          (this.props.currentUser.story_ids.includes(parseInt(this.props.location.pathname.split("/")[2])))
        ){
      newStoryBlock = <EditHeader handler={this.toEditHandler} />;
    }
    else if (this.props.location.pathname === "/stories/new"){
      newStoryBlock = <NewStoryHeader delete={this.deleteDraft} publish={this.publish} />;
    }
    else if (this.props.location.pathname.slice(1, 13) === "stories/edit"){
      newStoryBlock = <SaveHeader handler={this.saveHandler} delete={this.deleteStoryHandler} />;
    }
    else {
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
     removeDraft: () => dispatch(removeDraft()),
     updateDraft: (draft) => dispatch(updateDraft(draft)),
     deleteStory: (id) => dispatch(deleteStory(id)),
     fetchSingleStory: (id) => dispatch(fetchSingleStory(id)),
     updateStory: (story, id) => dispatch(updateStory(story, id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
