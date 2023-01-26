import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    title: "Learning Web Dev",
    content: "Lets learn Redux Toolkit",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
    },
  },
  {
    id: "2",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    title: "Learning Web Dev",
    content: "Lets learn Redux Toolkit",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      // this is the payload which will be going to be used in newPost
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

// selector functions
export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
