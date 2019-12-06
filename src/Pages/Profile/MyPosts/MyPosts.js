import React from "react";
import classes from "./MyPost.module.scss";
import Textarea from "../../../components/Ui/Textarea/Textarea";
import Comment from "../Comment/Comment";

const MyPosts = React.memo(props => {
  const ref = React.createRef();

  const addNewPost = () => {
    props.addPost();
  };

  const addPostHandler = () => {
    let message = ref.current.value;
    props.postTextChange(message);
  };

  console.log("render ro");

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
            value={props.myPosts.newPostText}
            onChange={addPostHandler}
          />
        </div>
        <div className={classes.addButton}>
          <button onClick={addNewPost}>add post</button>
        </div>
      </div>
      <div className={classes.commentsList}>
        {props.myPosts.posts.map(item => (
          <Comment message={item.message} key={item.id} />
        ))}
      </div>
    </div>
  );
});

export default MyPosts;
