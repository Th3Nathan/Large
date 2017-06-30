import React from 'react';
import { Link } from 'react-router-dom';
import StoryAuthorBox from './story_author_box';
import ShareBar from './share_bar';
import { StickyContainer, Sticky } from 'react-sticky';
// import renderHTML from 'react-render-html';
import Comments from '../comment/comment_list_container';

class StoriesShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSingleStory(this.props.match.params.story_id);
  }

  //will receive props nextprops !== current url then refetch

  render(){


    if (!this.props.story) return null;
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
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          currentUser={this.props.currentUser}
          refetch={() => this.props.fetchSingleStory(this.props.match.params.story_id)}
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
                    userId={this.props.currentUser.id}
                    updateStoryLikes={this.props.updateStoryLikes}
                    story={this.props.story}
                    fetchSingleStory={this.props.fetchSingleStory}
                  />
                </div>
              );
            else
              return <div></div>;
           }
         }
        </Sticky>

        <div className="story-body" dangerouslySetInnerHTML={createMarkup()} />

      <Comments
        updateCommentLikes={this.props.updateCommentLikes}

      />
      </section>
      </StickyContainer>
    );
  } else return null;
    }

  }

export default StoriesShow;
