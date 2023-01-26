import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

export const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find(user => user.id === String(userId));
  return <span>by {author ? author.name : "Unknown author"}</span>;
};
