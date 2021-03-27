import { Component } from "react";
import "../Forms.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <section className="register">
        <form action="#" method="post">
          <fieldset>
            <legend>Register</legend>
            <p className="field">
              <label htmlFor="username">Username</label>
              <span className="input">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.onChangeHandler}
                />
                <span className="actions"></span>
                <i className="fas fa-user"></i>
              </span>
            </p>
            <p className="field">
              <label htmlFor="password">Password</label>
              <span className="input">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChangeHandler}
                />
                <span className="actions"></span>
                <i className="fas fa-key"></i>
              </span>
            </p>
            <input
              className="button"
              type="submit"
              className="submit"
              value="Register"
            />
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Register;
