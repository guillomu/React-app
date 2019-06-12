import React from "react";

export default function User(props) {
  let userClassName = "user";

  if (props.role === "admin") {
    userClassName += " admin";
  }

  if (props.role === "guest") {
    userClassName += " guest";
  }

  return (
    <li className={userClassName}>
      {props.firstname} {props.lastname} - {props.age}ans - {props.email}
      <span className="superuser">{props.isAdmin ? " (Admin)" : ""}</span>
      {!props.active && (
        <button className="btn btn-primary btn-sm" onClick={props.handleLogin}>
          Login as
        </button>
      )}
    </li>
  );
}
