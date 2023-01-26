import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    title: "Learning Web Dev",
    content: "Lets learn Redux Toolkit",
  },
  {
    id: "2",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    title: "Learning Web Dev",
    content: "Lets learn Redux Toolkit",
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
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date : new Date().toISOString()
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
