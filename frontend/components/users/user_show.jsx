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
    this.follow = this.follow.bind(this);
    this.unFollow = this.unFollow.bind(this);
  }


  componentDidMount(){
    this.props.fetchStories()
    .then(() => this.props.fetchSingleUser(this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.user.username,
          bio: response.user.bio || "",
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
    let user = this.props.currentUser;
    user.username = this.state.username;
    user.bio = this.state.bio;
    let formData = new FormData();
    formData.append("user[username]", user.username);
    formData.append("user[bio]", user.bio);
    if (this.state.image_file){
      formData.append("user[image]", this.state.image_file);
    }
    this.props.updateUser(formData, this.props.currentUser.id)
      .then(() => this.props.fetchSingleUser(this.props.match.params.id))
        .then(() => this.setState({editing: false}));
  }

  cancel(){
    this.setState({
      editing: false,
      username: this.props.currentUser.username,
      bio: this.props.currentUser.bio,
      image_url: this.props.currentUser.image_url,
    });
  }

  follow(e){
    e.preventDefault();
    this.props.follow(this.props.showedUser.id).then(() => this.props.refresh(this.props.currentUser.id));
  }

  unFollow(e){
    e.preventDefault();
    this.props.unFollow(this.props.showedUser.id).then(() => this.props.refresh(this.props.currentUser.id))
      .then(() => this.props.fetchSingleUser(this.props.showedUser.id));
  }


  render(){

    if (!this.props.showedUser.id || !this.props.currentUser ) return null;

    let disabled = this.state.editing ? false : true;

    let editButtons;
    if (this.props.currentUser.id !== this.props.showedUser.id){
      if (this.props.showedUser.followed_by_current_user){
        editButtons = (
          <button onClick={this.unFollow} className="user-show-unfollow">
            Unfollow
          </button>
        );
      }
      else {
        editButtons = (
          <button onClick={this.follow} className="user-show-editing-save">
          Follow
          </button>
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
            <textarea disabled={disabled} onChange={this.update('bio')} type="text" className="user-show-bio" placeholder="create a biography" value={this.state.bio || ""} />
            <div className="user-show-following">
              <h2 className="follow-info"><b>{this.props.showedUser.following_count}</b> Following&nbsp;&nbsp;</h2>
              <h2 className="follow-info"><b>{this.props.showedUser.followed_by_count}</b> Followers</h2>
            </div>
            { editButtons }
          </div>

          <input onChange={this.updateFile}
            type="file"
            id="files"
            className="hidden"
          ></input>
            { overlay }
            <img className="user-display-image" src={this.state.image_url} />


        </div>
        <StoriesIndex
           title={"Stories"}
           updateStoryBookmarks={this.props.updateStoryBookmarks}
           fetchSingleStory={this.props.fetchSingleStory}
           user_id={this.props.user_id}
           fetchStories={this.props.fetchStories}
           location={this.props.location}
           stories={this.props.storiesByUser}
        />
      </section>
    );
  }

}

export default UserShow;
