import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learning Web Dev", content: "Lets learn Redux Toolkit" },
  { id: "2", title: "Learning Web Dev", content: "Lets learn Redux Toolkit" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

// selector functions
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
