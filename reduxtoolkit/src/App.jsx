import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import PostsList from "./features/post/PostsList";
import AddPostForm from "./features/post/AddPostForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Counter /> */}
      <AddPostForm/>
      <PostsList/>
    </div>
  );
}

export default App;
