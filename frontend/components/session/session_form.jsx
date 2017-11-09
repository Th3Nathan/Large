import { Redirect, Link } from 'react-router-dom';
import React from 'react';
import ErrorsList from "../errors_list";
import $ from 'jquery';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
    this.state ={
      username: "",
      password: "",
      userErrors: "",
      passwordErrors: "",
      classname: this.props.modalAnimation ? "w3-animate-zoom" : "",
      imageFile: null,
      imageUrl: "images/default_user.png"
    };
    this.props.turnOffModalAnimation();
    this.submit = this.submit.bind(this);
    this.leaveModal = this.leaveModal.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.turnOnModalAnimation = this.props.turnOnModalAnimation.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (this.props.location.pathname !== newProps.location.pathname){
      this.props.scrubErrors()
      this.setState({
        userErrors: "",
        passwordErrors: "",
      })
    }
  }

  componentWillUnmount(){
    this.props.scrubErrors();
  }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file){
      fileReader.readAsDataURL(file);
    }
  }

  update(field){
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  demoLogin(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[username]", "Guest");
    formData.append("user[password]", "password");
    this.props.signIn(formData);
  }

  submit(e){
    e.preventDefault();
    let userErr;
    let passErr;
    if (this.state.username === ""){
      this.setState({userErrors: "Username can't be blank"});
      userErr = true;
    }
    if (this.state.password === ""){
      this.setState({passwordErrors: "Password can't be blank"});
      passErr = true;
    } else if (this.state.password.length < 6){
      this.setState({passwordErrors: "Password must be at least 6 characters"});
      passErr = true;
    }

    if (!userErr){
      this.setState({userErrors: ""});
    }
    if (!passErr){
      this.setState({passwordErrors: ""});
    }
    this.props.scrubErrors();
    if (userErr || passErr) return true;

    let formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[password]", this.state.password);
    if (this.state.imageFile){
      formData.append("user[image]", this.state.imageFile);
    }

    this.props.scrubErrors();
    this.props.processForm(formData);
  }

  leaveModal(e){
    e.preventDefault();
    this.props.scrubErrors();
    this.props.history.push("/");
    this.turnOnModalAnimation();
  }

  clearForm(e){
    this.props.scrubErrors();
  }

  render(){
  let upload;
  if (this.props.formType === 'signup'){
    upload = (
      <div className="collapse">
          <input onChange={this.updateFile} type="file" id="files" className="hidden"/>
          <label htmlFor="files"><img id="pencil" src="images/pencil.png"/></label>
      <br/>
      </div>
    );
  }

  let imagePreview;
  if (this.props.formType === "signup")
    imagePreview = <img id="image-preview" src={this.state.imageUrl} />;
  else
    imagePreview = <div id="image-preview"></div>;

  let header;
  if (this.props.formType === "signup")
    header = (<h2 className="form-header">Sign Up</h2>);
  else header = (<h2 className="form-header">Sign In</h2>);

  const destination = this.props.formType === "signup" ? "signin" : "signup";

  let redirect = (<div></div>);
  if (this.props.loggedIn){
    redirect = <Redirect to="/" />;
  }

  return (
  <div>
  <div onClick={this.leaveModal} id="overlay"></div>
    <section id="session-form" className={this.state.classname}>
      {redirect}
      {imagePreview}
      <header className="form-header">
      <Link to="/">
        <div id="title">
          <h1>Large</h1>
        </div>
      </Link>
      </header>
      {header}
      <form>

      {upload}
      <br/>
      <h5 className="error" id="first-error">{this.props.errors}</h5>

        <label className="input-label">Username
          <br/>
          <h5 className="error">{this.state.userErrors}</h5>
          <input type="text" onChange={this.update("username")} ></input>
        </label>
        <br/>

        <label className="input-label" >Password
        <br/>
        <h5 className="error">{this.state.passwordErrors}</h5>
          <input type="password" onChange={this.update("password")}></input>
        </label>
        <br/>
        <input className="modal-button" type="submit" value="Go" onClick={this.submit}></input>
        <input className="modal-button" type="submit" value="Demo" onClick={this.demoLogin}></input>
        <br/>
      </form>
      <Link id="toggle-sign-button" to={`/${destination}`}>sign{" " + destination.slice(4, 7)}</Link>
    </section>
    </div>
  );
  }
}

export default SessionForm;
