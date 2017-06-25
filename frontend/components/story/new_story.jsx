import React from 'react';
import { Link } from 'react-router-dom';
import NewAuthorBox from './new_author_box';
import ReactQuill, { Quill } from 'react-quill';
import renderHTML from 'react-render-html';

class NewStory extends React.Component {
  constructor(props){
    super(props);
    if (this.props.draft){
      this.state = { editorHtml: this.props.draft.editorHtml,
      title: this.props.draft.title};
    } else {
      this.state = { editorHtml: "",
        title: ""};
    }


   this.quilModules = {
            toolbar: {
                container: [

                    ['bold', 'italic', 'blockquote'],
                    ['link', 'image'],
                ],
                handlers: {
                    'image': this.imageHandler.bind(this)
                }
            }
        };
    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
  }


  imageHandler(image, callback){
      var range = this.quillRef.getEditor().getSelection();
      var value = prompt('What is the image URL');
      if(value) {
          this.quillRef.getEditor().insertEmbed(range.index, 'image', value, "user");
      }
  }

  updateTitle(e){
    this.setState({title: e.target.value});
    this.props.updateDraft(this.state);
  }

  updateBody(html){
    this.setState({editorHtml: html});
    this.props.updateDraft(this.state);
  }

  render(){
    return (
      <section>
      <NewAuthorBox
        currentUser={this.props.currentUser}
      />
      <br/>
      <input className="new-story-title" onChange={this.updateTitle} type="text" value={this.state.title} placeholder="Enter a title"></input>
      <div id="text-editor">
        <ReactQuill
          ref={(el) => this.quillRef = el}
          theme="bubble"
          placeholder="Tell your story"
          onChange={this.updateBody}
          modules={this.quilModules}
          formats={[
            'header',
            'bold', 'italic', 'blockquote',
            'link', 'image'
          ]}
        >
        </ReactQuill>
      </div>
      <h3>Here it is!, title is {this.state.title}</h3>
      {renderHTML(this.state.editorHtml)}
      </section>
    );
  }
}

export default NewStory;
