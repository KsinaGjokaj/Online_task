import React from "react";
import "./UsersList.css";


const UsersList = (props) => {
  return (
    <div className="container overflow-hidden">
      <div className="row">
        <ul className="list col">
          {props.users.map((user) => (
            <li key={user.id}>
              {user.username}  {user.lastname} <br /> {user.email}

              {user.select.map(user => <div key={user.label}>{user.label}</div>)}
            </li>

          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;