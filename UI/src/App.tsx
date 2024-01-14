import { useEffect, useState } from "react";
import Card from "./components/Card";
import TopBar from "./components/TopBar";
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5550/password`)
      .then(response => setPosts(response.data))
  }, [])

  console.log(posts);
  

  return (
    <>
      <TopBar></TopBar>
      <main className="w-screen h-screen bg-white ">
        <Card name="Teste" password="12324234123"></Card>
      </main>
    </>
  )
}

export default App
