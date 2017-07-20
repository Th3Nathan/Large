import React from "react";
import StoryBlurb from "./blurb";
import {Link} from "react-router-dom";

class StoriesIndex extends React.Component {
  componentDidMount(){
    if (this.props.location.pathname === "/stories" || this.props.location.pathname === "/")
      this.props.fetchStories();
  }

  render(){
    const stories = this.props.stories.map(story => {
      return (
        <StoryBlurb key={story.id}
             story={story}
             updateStoryBookmarks={this.props.updateStoryBookmarks}
             user_id={this.props.user_id}
             fetchSingleStory={this.props.fetchSingleStory}/>
      );
    });
  return (
  <section className="stories">
    <Link className="index-title" to="/stories">To Feed</Link>
    <div className="story-index">
      {stories}
    </div>
  </section>
  );
  }
}

export default StoriesIndex;
