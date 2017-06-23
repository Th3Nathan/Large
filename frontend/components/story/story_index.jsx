import React from "react";
import StoryBlurb from "./blurb";

class StoryIndex extends React.Component {
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
  <div>
    <h2>Hello frothe stories list</h2>
    {stories}
  </div>
  );
  }
}

export default StoryIndex;
