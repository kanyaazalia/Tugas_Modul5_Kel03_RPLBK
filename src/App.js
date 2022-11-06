import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

const BASE_API_URL = `https://jsonplaceholder.typicode.com`;

function App() {
  useEffect(() => {
    async function getPosts() {
      await axios
        .get(`${BASE_API_URL}/posts`)
        .then((res) => {
          const responseData = res.data;
          console.log(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        })
    }

    getPosts();
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
