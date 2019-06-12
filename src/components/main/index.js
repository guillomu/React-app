import React from "react";

import Users from "../users/";

import "./style.css";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      submitted: false,
      error: ""
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ submitted: false });
    console.log(name, value);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    //Si username ou password est vide on arrete l'executin de la fonction
    if (!username || !password) {
      return;
    }

    //Sinon on remet les champs à vide
    e.target.username.value = "";
    e.target.password.value = "";

    // On fait le traitement après un temps de chargement
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({
        username: username,
        password: password,
        loading: false,
        submitted: true
      });
    }, 2000);
  }

  onLogout() {
    this.setState({ submitted: false });
  }

  render() {
    let title = "Login";

    return (
      <main className="text-center">
        {!this.state.submitted && (
          <form
            name="form"
            onSubmit={e => this.handleSubmit(e)}
            className="loginForm"
          >
            <h1 className="h3 mb-3 font-weight-normal">{title}</h1>
            <label>Username: </label>
            <input
              className="form-control"
              name="username"
              type="text"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
            <label>Password: </label>
            <input
              className="form-control"
              name="password"
              type="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            {/* {this.state.loading && <div className="spinner"></div>} */}
            {!this.state.loading && (
              <button className="btn btn-lg btn-primary btn-block">
                Sign up
              </button>
            )}
            {this.state.loading && (
              <button
                className="btn btn-lg btn-primary btn-block"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </button>
            )}
          </form>
        )}
        {/* Si le formulaire est validé on affiche la liste des utilisateurs */}
        {this.state.submitted && (
          <div>
            <Users firstname={this.state.username} />
            <button
              className="btn btn-lg btn-primary"
              onClick={() => this.onLogout()}
            >
              Logout
            </button>
          </div>
        )}
      </main>
    );
  }
}
