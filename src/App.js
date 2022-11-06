import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { List, Paper, Typography, useStepContext } from "@mui/material";
import Card from "./components/Card.js";

const BASE_API_URL = `https://jsonplaceholder.typicode.com`;

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      await axios
        .get(`${BASE_API_URL}/posts`)
        .then((res) => {
          const responseData = res.data;
          console.log(responseData);
          setPosts(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        })
    }

    getPosts();
  }, []);

  const handleDeletePost = (id, idx) => {
    async function delPost() {
      await axios
        .delete(`${BASE_API_URL}/posts/${id}`)
        .then((res) => {
          let arr = posts;
          if (idx !== -1) {
            arr.splice(idx, 1)
          }
          setPosts([...arr]);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        })
    }

    delPost();
  };

  return (
    <div className="App">
      <div className="list-container">
        <div className="list-title-wrapper">
          <Typography variant="h4">Posts</Typography>
        </div>
        
        <Paper elevation={2} style={{ maxHeight: "600px", overflow: "auto" }}>
          <List>
            {posts.map((d, idx) => (
              <Card
                key={d.id}
                title={`${d.title}`}
                body={`${d.body}`}
                onDelete={() => handleDeletePost(d.id, idx)}
              />
            ))}
          </List>
        </Paper>
      </div>
    </div>
  );
}

export default App;
