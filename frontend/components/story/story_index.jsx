import React from "react";

class StoryIndex extends React.Component {
  componentDidMount(){
    this.props.fetchStories();
  }

  render(){
    const stories = this.props.stories.map(story => {
      return (
        <li key={story.id}>{story.body}<img src={story.image_url}/></li>
      );
    });
  return (
  <div>
    <h2>Hello from the stories list</h2>
    {stories}
  </div>
  );
  }
}

export default StoryIndex;
