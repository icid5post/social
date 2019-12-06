import React from "react";
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Profile = props => {
  return (
    <div>
      <ProfileInfo user={props.user} />
      <ProfileStatus
        status={props.status}
        updateProfileStatus={props.updateProfileStatus}
      />
      <MyPost
        myPosts={props.myPosts}
        addPost={props.addPost}
        postTextChange={props.postTextChange}
      />
    </div>
  );
};

export default Profile;
