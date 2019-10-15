import React from "react";
import classes from "./Post.module.scss";

const Post = () => {
  return (
    <div className={classes.post}>
      <div className={classes.images}>
        <img src="/images/post1.jpg" alt="" />
      </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque
      corporis, cum cumque delectus ducimus ex ipsum labore magnam maiores nobis
      non quisquam quo rem repellendus, tenetur vitae voluptatem?
    </div>
  );
};

export default Post;
