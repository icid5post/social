import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import UserItem from "./UserItem/UserItem";

const Users = props => {
  return (
    <div>
      <Pagination
        total={props.totalCount}
        current={props.currentPage}
        size={props.pageSize}
        range="10"
        getPages={props.getPages}
      />

      {props.users.map(item => {
        return (
          <UserItem
            item={item}
            followUser={props.followUser}
            followedProgress={props.followedProgress}
            followSuccess={props.followSuccess}
            unfollowSuccess={props.unfollowSuccess}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Users;
