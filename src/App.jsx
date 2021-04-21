import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      userName: "",
      email: "",
      password: "",
    };
  }
  changeFullName = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };
  changeusername = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  changeemail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  changepassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const registered = {
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password:this.state.password
    };
    axios.post('http://localhost:4000/app/signup/',registered)
    .then(response=>console.log(response.data))
    this.setState({
        fullName:'',
        userName:'',
        email:'',
        password:''
    })
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.changeFullName}
                value={this.state.fullName}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="Username"
                onChange={this.changeusername}
                value={this.state.userName}
                className="form-control form-group"
              />

              <input
                type="text"
                placeholder="email"
                onChange={this.changeemail}
                value={this.state.email}
                className="form-control form-group"
              />

              <input
                type="text"
                placeholder="password"
                onChange={this.changepassword}
                value={this.state.password}
                className="form-control form-group"
              />

              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
