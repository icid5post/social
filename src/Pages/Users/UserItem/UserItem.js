import React from "react";
import classes from "./UserItem.module.scss";
import avatar from "./avatar.jpg";
import { NavLink } from "react-router-dom";

const UserItem = props => {
  const { item } = props;
  return (
    <div key={item.id} className={classes.user}>
      <NavLink to={"/profile/" + item.id} className={classes.userImg}>
        <img
          src={item.photos.small !== null ? item.photos.small : avatar}
          alt=""
        />
      </NavLink>
      <div className={classes.userContent}>
        <b>{item.name}</b>
        <div>{item.status}</div>
        <div>{item.country}</div>
        <div>
          {item.followed ? (
            <button
              disabled={props.followedProgress.some(id => id === item.id)}
              onClick={() => {
                props.unfollowSuccess(item.id);
                // props.setFollowFetching(true, item.id);
                // axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${item.id}`, {
                //     withCredentials: true,
                //     headers: {
                //         "API-KEY": "91b3d388-ab51-4a66-9390-6df49c8f1d72"
                //     }
                // }).then(response => {
                //     if(response.data.resultCode === 0){
                //         props.unfollowUser(item.id)
                //     }
                //     props.setFollowFetching(false, item.id);
                // });
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followedProgress.some(id => id === item.id)}
              onClick={() => {
                props.followSuccess(item.id);
                // props.setFollowFetching(true, item.id);
                // axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${item.id}`, {}, {
                //     withCredentials: true,
                //     headers: {
                //         "API-KEY": "91b3d388-ab51-4a66-9390-6df49c8f1d72"
                //     }
                // }).then(response => {
                //     if(response.data.resultCode === 0){
                //         props.followUser(item.id)
                //     }
                //     props.setFollowFetching(false, item.id);
                // });
              }}
            >
              follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
