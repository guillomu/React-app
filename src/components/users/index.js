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
          role: "guest"
        },
        {
          firstname: "Xavier",
          lastname: "Martin",
          age: 28,
          email: "xavier@email.com",
          isAdmin: true,
          role: "admin"
        },
        {
          firstname: "Paul",
          lastname: "Moulin",
          age: 19,
          email: "thomas@email.com",
          isAdmin: true,
          role: "admin"
        },
        {
          firstname: "Michel",
          lastname: "Michel",
          age: 32,
          email: "michel@email.com",
          isAdmin: false,
          role: "guest"
        }
      ],
      currentUser: ""
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
        ],
        currentUser: this.props.firstname
      }));
    }
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
        />
      );
    });

    var firstHalfUsers = UsersList.slice(0, this.state.users.length / 2);

    var secondHalfUsers = UsersList.slice(this.state.users.length / 2);

    let superUser = this.state.users.find(user => {
      return user.isAdmin;
    });

    return (
      <div>
        <h3>Guest Users</h3>
        <ul>{firstHalfUsers}</ul>
        <h3>Admin Users</h3>
        <ul>{secondHalfUsers}</ul>
        <div className="superuser">
          <h3>Admin</h3>
          <ul>
            <li>
              {superUser.firstname} {superUser.lastname} - {superUser.age}ans -
              {superUser.email}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
