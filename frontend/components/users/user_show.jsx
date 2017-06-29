import React from 'react';
import StoriesIndex from './../story/stories_index';

class UserShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editing: false,
      username: "",
      bio: "",
      following: 4,
      followers: 6,
      image_file: null,
      image_url: "",
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.update = this.update.bind(this);
    this.cancel = this.cancel.bind(this);
    this.save = this.save.bind(this);
  }


  componentDidMount(){
    //WHY DOES THIS WORK????!!!
    this.props.fetchStories()
    .then(() => this.props.fetchSingleUser(this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.user.username,
          bio: response.user.bio,
          image_url: response.user.image_url,
        });
      }));
  }

  update(field){
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  toggleEdit(e){
    e.preventDefault();
    this.setState({editing: this.state.editing ? false : true});
  }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({image_file: file, image_url: fileReader.result });
    }.bind(this);

    if (file){
      fileReader.readAsDataURL(file);
    }
  }

  save(e){
    e.preventDefault();
    let user = this.props.loggedInUser;
    user.username = this.state.username;
    user.bio = this.state.bio;
    let formData = new FormData();
    formData.append("user[username]", user.username);
    formData.append("user[bio]", user.bio);
    if (this.state.image_file){
      formData.append("user[image]", this.state.image_file);
    }
    this.props.updateUser(formData, this.props.loggedInUser.id)
      .then(() => this.props.fetchSingleUser(this.props.match.params.id))
        .then(() => this.setState({editing: false}));
  }

  cancel(){
    this.setState({
      editing: false,
      username: this.props.loggedInUser.username,
      bio: this.props.loggedInUser.bio,
      image_url: this.props.loggedInUser.image_url,
    });
  }

  render(){




    let disabled = this.state.editing ? false : true;

    let editButtons;
    if (!this.props.loggedInUser || !this.props.showedUser)
      editButtons = null;
    else if (this.props.loggedInUser.id !== this.props.showedUser.id){
      if (!this.props.showedUser.followed_by_current_user){
        editButtons = (
          <button className="user-show-editing-save">
            Unfollow
          </button>
        );
      }
      else {
        editButtons = (
          <div className="user-show-not-editing">
            <button>Follow</button>
          </div>
        );
      }
    } else if (!this.state.editing){
      editButtons = (
        <div className="user-show-not-editing">
          <button onClick={this.toggleEdit}>Edit</button>
        </div>
      );
    }
    else {
      editButtons = (
        <div className="user-show-editing">
          <button onClick={this.save} className="user-show-editing-save">Save</button>
          <button className="user-show-editing-cancel" onClick={this.cancel}>Cancel</button>
        </div>
      );
    }

    let overlay;
    if (this.state.editing){
      overlay = (
        <label htmlFor="files">
          <i className="fa fa-picture-o user-show-picture-overlay" aria-hidden="true"></i>
        </label>);
    } else { overlay = null; }

    return (
      <section className="user-show">
        <div className="user-show-profile-box">
          <div className="user-show-info">
            <input disabled={disabled} onChange={this.update('username')} type="text" className="user-show-name" value={this.state.username} />
            <br />
            <input disabled={disabled} onChange={this.update('bio')} type="text" className="user-show-bio" value={this.state.bio} />
            <div className="user-show-following">
              <h2 className="follow-info"><b>{this.state.following}</b> Following&nbsp;&nbsp;</h2>
              <h2 className="follow-info"><b>{this.state.followers}</b> Follower</h2>
            </div>
            { editButtons }
          </div>

          <input onChange={this.updateFile}
            type="file"
            id="files"
            className="hidden"
          />
            { overlay }
            <img className="user-display-image" src={this.state.image_url} />


        </div>
        <StoriesIndex title={"Stories"} fetchStories={this.props.fetchStories} stories={this.props.storiesByUser} />
      </section>
    );
  }

}

export default UserShow;
