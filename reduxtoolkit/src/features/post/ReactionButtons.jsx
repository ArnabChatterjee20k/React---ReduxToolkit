import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😍",
  heart: "❤",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        style={{backgroundColor:"transparent"}}
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div style={{display:"flex",gap:4}}>{reactionButtons}</div>;
};

export default ReactionButtons;
