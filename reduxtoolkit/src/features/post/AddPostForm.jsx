import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')


    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({title, content, id:nanoid()})
            )
            setTitle('')
            setContent('')
        }
    }


    return (
        <section>
            <h2>Add a New Post</h2>
            <form style={{display:"flex",flexDirection:"column",gap:10,alignItems:"flex-start"}}>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    style={{alignSelf:"stretch"}}
                    onClick={onSavePostClicked}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm