import React from "react";
import StoryBlurb from "./blurb";

class FeedIndex extends React.Component {
  componentDidMount(){
      this.props.feed();
  }

  render(){
    if (!this.props.stories) return null;
    const stories = this.props.stories.map(story => {
      return (
        <StoryBlurb key={story.id} story={story} />
      );
    });
  return (
  <section className="stories">
    <h1>{this.props.title || "Your Feed"}</h1>
    <div className="story-index">
      {stories}
    </div>
  </section>
  );
  }
}

export default FeedIndex;
