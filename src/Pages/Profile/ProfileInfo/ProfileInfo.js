import React from "react";
import classes from "./ProfileInfo.module.scss";
import image from "./avatar.jpg";

const ProfileInfo = props => {
  const avatar = props.user.photos.large ? props.user.photos.large : image;
  console.log(props, "rk-test");
  return (
    <div className={classes.profileInfo}>
      <div className={classes.avatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={classes.description}>
        <b>{props.user.login}</b> <br />
        <b>{props.user.fullName}</b> <br />
        {props.user.lookingForAJobDescription}
      </div>
    </div>
  );
};

export default ProfileInfo;
