import React from 'react';
import AuthorBox from './author_box';

class Blurb extends React.Component {

  readTime(){
    return `${Math.floor(this.props.story.body.length / 1375)} minutes`;
  }

  render (){

    const backgroundImage = {"backgroundImage": `url(${this.props.story.image_url})`};
    return (
      <div className="blurb">
        <div style={backgroundImage} className="blurb-image"></div>
        <div className="blurb-text">
          <h3 className="blurb-title">{this.props.story.title}</h3>
          <p className='blurb-description'>{this.props.story.description}</p>
          <AuthorBox
            author={this.props.story.author}
            readTime={this.readTime()}
            date={this.props.story.date}
          />
        </div>
      </div>
    );
  }
}

export default Blurb;
