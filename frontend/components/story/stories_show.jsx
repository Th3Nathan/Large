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
        <StickyContainer>
      <section>
        <StoryAuthorBox
          author={this.props.story.author}
          author_id={this.props.story.author_id}
          story={this.props.story.body}
          date={this.props.story.date}
        />


        <div className="story-show-image-container">
          <img className="stories-show-image" src={`${this.props.story.image_url}`} />
        </div>

        <Sticky disableCompensation>
        {
          ({ style, isSticky, wasSticky, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
            if (distanceFromTop  < 10)
              return ( <ShareBar /> );
            else
              return <div></div>;
           }
         }
        </Sticky>
        <p>{this.props.story.body}jdslfjdslfjdslkfjdslkjflksdjflksdjfl sdlkfjsdljf sdlkfjsdlk lsdkjfljdslfjdslkfjdslkjflksdjflksdjfl sdlkfjsdljf sdlkfjsdlk lsdkjfljdslfjdslkfjdslkjflksdjflksdjfl sdlkfjsdljf sdlkfjsdlk lsdkjfljdslfjdslkfjdslkjflksdjflksdjfl sdlkfjsdljf sdlkfjsdlk lsdkjfljdslfjdslkfjdslkjflksdjflksdjfl sdlkfjsdljf sdlkfjsdlk lsdkjfljdslfjdslkfjdslkjflksdjflksdjfl sdlkfjsdljf sdlkfjsdlk lsdkjfljdslfjdslkfjdslkjflksdjflksdjfl sdlkfjsdljf sdlkfjsdlk lsdkjfljdslfjdslkfjdslkjflksdjflksdjfl sdlkfjsdljf sdlkfjsdsdlk lsdkjfls dfsd sdfds
        </p>

      </section>
      </StickyContainer>
    );
  }
  }
}

export default StoriesShow;
