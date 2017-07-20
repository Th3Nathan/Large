import React from "react";
import StoryBlurb from "./blurb";
import {Link} from "react-router-dom";

class FeedIndex extends React.Component {
  componentDidMount(){
      this.props.feed();
  }

  render(){
    if (!this.props.stories) return null;
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
    <Link className="index-title" to="/">To Featured Stories</Link>
    <div className="story-index">
      {stories}
    </div>
  </section>
  );
  }
}

export default FeedIndex;
