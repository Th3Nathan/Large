import React from 'react';
import { Link } from 'react-router-dom';
import StoryAuthorBox from './story_author_box';
import ShareBar from './share_bar';
import { StickyContainer, Sticky } from 'react-sticky';
// import renderHTML from 'react-render-html';
import Comments from '../comment/comment_list_container';

class StoriesShow extends React.Component {


  componentDidMount(){
    this.props.fetchSingleStory(this.props.match.params.story_id);
  }

  //will receive props nextprops !== current url then refetch

  render(){



    if (this.props.story){
      const createMarkup = () => {
        return {__html: `${this.props.story.body}`};
      };


      const backgroundImage = {"backgroundImage": `url(${this.props.story.image_url})`};
      return(

      <StickyContainer>
      <section className="story-show">
        <StoryAuthorBox
          author={this.props.story.author}
          author_id={this.props.story.author_id}
          story={this.props.story.body}
          date={this.props.story.date}
        />


      <h1 className="story-title">{this.props.story.title}</h1>

        <div className="story-show-image-container">
          <img className="stories-show-image" src={`${this.props.story.image_url}`} />
        </div>

        <Sticky disableCompensation>
        {
          ({ style, isSticky, wasSticky, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
            if (distanceFromTop  < 10)
              return (
                <div id="share-bar-div">
                  <ShareBar
                    updateStory={this.props.updateStory}
                    likeCount={this.props.story.like_count}
                    likedByCurrentUser={this.props.liked_by_current_user}
                  />
                </div>
              );
            else
              return <div></div>;
           }
         }
        </Sticky>
        <div dangerouslySetInnerHTML={createMarkup()} />

      <Comments />
      </section>
      </StickyContainer>
    );
  } else return null;
    }

  }

export default StoriesShow;
