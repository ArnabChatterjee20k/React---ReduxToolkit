import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id:"0",name:"Arnab"},
    {id:"1",name:"Arnab2"},
    {id:"2",name:"Arnab3"},
]

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer