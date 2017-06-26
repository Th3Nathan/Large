import React from "react";
import StoryBlurb from "./blurb";

class StoriesIndex extends React.Component {
  componentDidMount(){
    this.props.fetchStories();
  }

  render(){
    const stories = this.props.stories.map(story => {
      return (
        <StoryBlurb key={story.id} story={story} />
      );
    });
  return (
  <section className="stories">
    <h1>{this.props.title || "Featured Stories"}</h1>
    <div className="story-index">
      {stories}
    </div>
  </section>
  );
  }
}

export default StoriesIndex;
