import { deletePost } from "./profile-reducer";
import profileReducer from "./profile-reducer";

it("delete post test", () => {
  let action = deletePost(2);
  let state = {
    myPosts: {
      posts: [
        {
          id: 1,
          message: "hello"
        },
        {
          id: 2,
          message: "hello it is seccond post"
        }
      ]
    }
  };

  let testState = profileReducer(state, action);

  expect(testState.myPosts.posts.length).toBe(1);
});
