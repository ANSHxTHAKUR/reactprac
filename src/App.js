import "./styles.css";
import React, { useState, useEffect } from "react";
import { readData, createPost } from "./utils/AxiosFunction";

const baseURL = "https://jsonplaceholder.typicode.com/posts";
const baseURL1 = "https://jsonplaceholder.typicode.com/posts/1";
export default function App() {
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const fetch1 = async () => {
      const data = await readData(baseURL1);

      // console.log(data);
      setPost(data);
    };
    fetch1();
  }, []);

  const createdPost = async () => {
    const data = await createPost(baseURL, title, body);
    console.log(data + "post");
    setPost(data);
  };

  if (!post) return null;
  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button onClick={createdPost}>create Post</button>
    </div>
  );
}

// function createPost() {
//   axios
//     .post(baseURL, {
//       title: "Hello World!",
//       body: "This is a new post.",
//     })
//     .then((response) => {
//       setPost(response.data);
//     });
// }
