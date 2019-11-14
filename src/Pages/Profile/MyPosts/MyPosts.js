import React from "react";
import Comment from "../../../components/Comment/Comment";
import classes from "./MyPost.module.scss";
import Textarea from "../../../components/Ui/Textarea/Textarea";

const MyPosts = props => {
  const ref = React.createRef();

  const addNewPost = () => {
    props.addNewPost();
  };

  const addPostHandler = () => {
    let message = ref.current.value;
    props.addPostHandler(message);
  };

  return (
    <div className={classes.post}>
      <div className={classes.images}>
        <img src={"../images/post1.jpg"} alt="" />
      </div>
      <div className={classes.commentForm}>
        <div className={classes.commentForm__ava}></div>
        <div className={classes.textArea}>
          <Textarea
            ref={ref}
            value={props.profilePage.newPostText}
            onChange={addPostHandler}
          />
        </div>
        <div className={classes.addButton}>
          <button onClick={addNewPost}>add post</button>
        </div>
      </div>
      <div className={classes.commentsList}>
        {props.profilePage.posts.map(item => (
          <Comment message={item.message} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
