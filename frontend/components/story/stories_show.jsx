import React from 'react';
import { Link } from 'react-router-dom';
import StoryAuthorBox from './story_author_box';
import ShareBar from './share_bar';
import { StickyContainer, Sticky } from 'react-sticky';
class StoriesShow extends React.Component {

  componentDidMount(){
    this.props.fetchSingleStory(this.props.match.params.story_id);
  }

  render(){
      const backgroundImage = {"backgroundImage": `url(${this.props.story.image_url})`};
      if (!this.props.story.id){
        return <h2> Im hanging around two long </h2>;
      } else { return(
      <section>
        <StickyContainer>
        <StoryAuthorBox
          author={this.props.story.author}
          author_id={this.props.story.author_id}
          story={this.props.story.body}
          date={this.props.story.date}
        />
      <div style={backgroundImage} className="stories-show-image"></div>
      <Sticky>
      {
        ({
          style,
          isSticky,
          wasSticky,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight
        }) => {
          if (distanceFromTop < 18){
            return (
                <ShareBar />
            );
          }
          else {
            return <div></div>;
          }
         }
       }
      </Sticky>
      </StickyContainer>
      </section>
    );
  }
  }
}

export default StoriesShow;
