import React from "react";

export default function User(props) {
  return (
    <li className={props.isAdmin ? "superuser" : "user"}>
      {props.firstname} {props.lastname} - {props.age}ans - {props.email}
      {props.isAdmin && <span class="superuser"> (Admin)</span>}
    </li>
  );
}
