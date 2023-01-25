import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'1',title:"Learning Web Dev",content:"Lets learn Redux Toolkit"},
    {id:'2',title:"Learning Web Dev",content:"Lets learn Redux Toolkit"},
]

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded(state,action){
            state.push(action.payload)
        }
    }
})

// selector functions
export const selectAllPosts = (state)=>state.posts
export const {postAdded} = postsSlice.actions
export default postsSlice.reducer