import React from 'react';
class UserShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editing: false,
      username: "",
      bio: "",
      following: 4,
      followers: 6,
      image_file: "",
      image_url: "",
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount(){
    this.props.fetchSingleUser(this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.user.username,
          bio: response.user.bio,
          image_url: response.user.image_url,
          image_file: null
        });
      });
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
    user.image = this.state.image_file;
    let formData = new FormData();
    formData.append("user[username]", user.username);
    formData.append("user[bio]", user.bio);
    formData.append("user[image]", user.imageFile);

    this.props.updateUser(user, this.props.loggedInUser.id)
      .then(response => {
        this.setState({
          username: response.user.username,
          bio: response.user.bio,
          image_url: response.user.image_url,
          image_file: null
        });
      });
  }

  render(){
    let editButtons;
    if (!this.props.loggedInUser || !this.props.showedUser)
      editButtons = null;
    else if (this.props.loggedInUser.id !== this.props.showedUser.id){
      editButtons = null;
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
          <button className="user-show-editing-save">Save</button>
          <button className="user-show-editing-cancel" onClick={this.toggleEdit}>Cancel</button>
        </div>
      );
    }

    return (
      <section className="user-show">
        <div className="user-show-profile-box">
          <div className="user-show-info">
            <input type="text" className="user-show-name" value={this.state.username} />
            <br />
            <input type="text" className="user-show-bio" value={this.state.bio} />
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
            <label htmlFor="files"><i className="fa fa-picture-o user-show-picture-overlay" aria-hidden="true"></i></label>
            <img className="user-display-image" src={this.state.image_url} />


        </div>
        <h1>Your Stories!!!</h1>
        <p>Here is a list of stories that the current user has written</p>
      </section>
    );
  }

}

export default UserShow;
