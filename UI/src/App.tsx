import { useEffect, useState } from "react";
import Card from "./components/Card";
import TopBar from "./components/TopBar";
import { ICard } from "./models/Card";

import axios from 'axios';
// import CreateCardForm from "./components/CreateCardForm";

function App() {
  // {id: '', name: ''}
  const [passwords, setPasswords] = useState<ICard[]>([]);
  useEffect(() => {
    const getData = async () => {
      axios.get(`http://localhost:5550/password`)
        .then(response => setPasswords(response.data))
    }
    getData()
  }, [])

  console.log(passwords);


  return (
    <>
      <TopBar></TopBar>
      {/* <CreateCardForm></CreateCardForm> */}
      <main className="w-screen h-screen bg-white ">
        {passwords.map(password => {
          <Card key={"asdwd"} name="asdw" password="asdw"></Card>
        })}
      </main>
    </>
  )
}

export default App
