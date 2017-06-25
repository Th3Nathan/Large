import React from 'react';
class UserShow extends React.Component {
  render(){
    return (
      <section className="user-show">
        <div className="user-show-profile-box">
          <div className="user-show-info">
            <input type="text" className="user-show-name" value={"Your Username"} />
            <br />
            <input type="text" className="user-show-bio" value={"here is the text of your bio"} />
            <div className="user-show-following">
              <h2 className="follow-info">4 Following</h2>
              <h2 className="follow-info">1 Follower</h2>
            </div>
            <div className="user-show-not-editing">
              <button>Edit</button>
            </div>
            <div className="user-show-editing">
              <button>Save</button>
              <button>Cancel</button>
            </div>
          </div>
          <div className="user-show-image">
            <img src="images/logo.png" />
          </div>
        </div>
        <h1>Your Stories!!!</h1>
        <p>Here is a list of stories that the current user has written</p>
      </section>
    );
  }

}

export default UserShow;
