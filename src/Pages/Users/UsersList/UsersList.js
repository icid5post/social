import React from "react";
import * as axios from "axios";

const UsersList = props => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.fetchingUsers(response.data.items);
      });
  }

  return (
    <div>
      {props.users.map(item => {
        return (
          <div key={item.id}>
            <b>{item.name}</b>
            <div>{item.status}</div>
            <div>{item.country}</div>
            <div>
              {item.follow ? (
                <button onClick={() => props.unfolowUser(item.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => props.folowUser(item.id)}>follow</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
