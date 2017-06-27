import React from 'react';
import { Link } from 'react-router-dom';
import NewAuthorBox from './new_author_box';
import ReactQuill, { Quill } from 'react-quill';
import renderHTML from 'react-render-html';

class StoryForm extends React.Component {
  constructor(props){
    super(props);
   this.quilModules = {
            toolbar: {
                container: [
                    ['bold', 'italic', 'blockquote'],
                    ['link', 'image'],
                ],
                handlers: {
                    'image': this.imageHandler.bind(this),
                    'link': this.linkHandler.bind(this)
                }
            }
        };
    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
    this.linkHandler = this.linkHandler.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount(){
    if (this.props.formType === "edit"){
      this.props.fetchSingleStory(this.props.storyId)
        .then(({story}) => this.props.updateDraft(story))
          .then(() => this.quillRef.getEditor().pasteHTML(this.props.draft.body));
    }
    else if (!this.props.draft){
      this.props.updateDraft({});
    }
    else {
      this.quillRef.getEditor().pasteHTML(this.props.draft.body);
    }
  }

  linkHandler(value){
      if (value) {
        var href = prompt('Enter the URL');
        this.quillRef.getEditor().format('link', href);
      } else {
        this.quillRef.getEditor().format('link', false);
      }
    }

  imageHandler(image, callback){
      var range = this.quillRef.getEditor().getSelection();
      var value = prompt('What is the image URL');
      if(value) {
          this.quillRef.getEditor().insertEmbed(range.index, 'image', value, "user");
      }
  }

  updateTitle(e){
    const newDraft = Object.assign({}, this.props.title, { title: e.target.value });
    this.props.updateDraft(newDraft);
  }

  updateDescription(e){
    const newDraft = Object.assign({}, this.props.draft, { description: e.target.value });
    this.props.updateDraft(newDraft);
  }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      const newDraft = Object.assign({}, this.props.draft, { imageFile: file, imageUrl: fileReader.result} );
      this.props.updateDraft(newDraft);
    }.bind(this);

    if (file){
      fileReader.readAsDataURL(file);
    }
  }

  updateBody(html){
    this.props.updateDraft(this.state);
    const newDraft = Object.assign({}, this.props.draft, { body: html })
  }

  render(){
    if (!this.props.draft) return null;
    const { title, body, description, imageUrl } = this.props.draft;
    debugger
    return (
      <section id="new-story">
      <NewAuthorBox
        currentUser={this.props.currentUser}
      />
      <br/>
      <input className="new-story-title"
        onChange={this.updateTitle}
        type="text" value={title}
        placeholder="Enter a title">
      </input>

      <input onChange={this.updateFile}
        type="file"
        id="files"
        className="hidden"
      />
      <input className="new-story-description"
        onChange={this.updateDescription}
        type="text" value={description}
        placeholder="Enter a description">
      </input>


      <label htmlFor="files"><i className="fa fa-picture-o" aria-hidden="true"></i></label>
      <img id="story-image-preview" src={imageUrl} />
      <div id="text-editor">
        <ReactQuill
          ref={(el) => this.quillRef = el}
          theme="bubble"
          placeholder={"Tell your story"}
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

      </section>
    );
  }
}

export default StoryForm;
