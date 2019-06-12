import React from "react";

import User from "./user";

import "./style.css";

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          firstname: "Thomas",
          lastname: "Dupont",
          age: 25,
          email: "thomas@email.com",
          isAdmin: false,
          role: "guest",
          active: false
        },
        {
          firstname: "Xavier",
          lastname: "Martin",
          age: 28,
          email: "xavier@email.com",
          isAdmin: true,
          role: "admin",
          active: true
        },
        {
          firstname: "Paul",
          lastname: "Moulin",
          age: 19,
          email: "paul@email.com",
          isAdmin: true,
          role: "admin",
          active: false
        },
        {
          firstname: "Michel",
          lastname: "Michel",
          age: 32,
          email: "michel@email.com",
          isAdmin: false,
          role: "guest",
          active: false
        }
      ]
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    if (this.props.firstname) {
      this.setState(prevState => ({
        users: [
          ...prevState.users,
          {
            firstname: this.props.firstname,
            lastname: "dupont",
            age: 24,
            email: "email@email.com",
            isAdmin: false
          }
        ]
      }));
    }
  }

  handleLogin(user) {
    let newUsersState = this.state.users.map(stateUser => {
      stateUser.active = false;
      if (stateUser.email === user.email) {
        stateUser.active = true;
      }
      return stateUser;
    });

    this.setState({
      users: newUsersState
    });
  }

  render() {
    let UsersList = this.state.users.map((user, index) => {
      return (
        <User
          key={"user-" + index}
          number={index}
          firstname={user.firstname}
          lastname={user.lastname}
          email={user.email}
          age={user.age}
          isAdmin={user.isAdmin}
          role={user.role}
          active={user.active}
          handleLogin={() => this.handleLogin(user)}
        />
      );
    });

    //slice() renvoie un sous tableau couper par rapport au indices donnés
    // eslint-disable-next-line
    var firstHalfUsers = UsersList.slice(0, this.state.users.length / 2);

    // eslint-disable-next-line
    var secondHalfUsers = UsersList.slice(this.state.users.length / 2);

    //find() retourne un seul element correspondant à une condition
    // eslint-disable-next-line
    let superUser = this.state.users.find(user => {
      return user.isAdmin;
    });

    //filter() retourne un tableau de tous les elements correspondant à une condition
    var guestUsers = UsersList.filter(user => {
      return user.props.role === "guest";
    });

    var adminUsers = UsersList.filter(user => {
      return user.props.role === "admin";
    });

    var currentUser = UsersList.find(user => {
      return user.props.active;
    });

    console.log(currentUser);
    return (
      <div>
        {currentUser && (
          <div className="currentUser">
            <h4>Current User</h4>
            <ul>{currentUser}</ul>
          </div>
        )}
        <br />
        <h3>Guest Users</h3>
        <ul>{guestUsers}</ul>
        <h3>Admin Users</h3>
        <ul>{adminUsers}</ul>
      </div>
    );
  }
}
