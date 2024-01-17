import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import { ICard } from "./models/Card";

import axios from 'axios';
import Card from "./components/Card";
// import CreateCardForm from "./components/CreateCardForm";

const App = () => {
  // {id: '', name: ''}
  const [passwords, setPasswords] = useState<ICard[]>([]);
  useEffect(() => {
    const getData = async () => {
      axios.get(`http://localhost:5550/password`)
        .then(response => { setPasswords(response.data); })
        .catch(() => { alert("Parece que não há conexão com o servidor") })
    }
    getData()
  }, [])

  if (passwords.length < 1) return (
    <>
      <div className="w-screen h-8 bg-emerald-600">
        <p className="text-white text-center text-3xl">NÃO HÁ SENHAS SALVAS</p>
      </div>
    </>
  )

  return (
    <>
      <TopBar></TopBar>
      <main className="w-screen h-screen bg-white">
        <div className="w-3/4 h-screen mx-auto flex flex-row flex-wrap gap-4">

          {passwords.map((password, index) => {
            return (
              <Card
                key={index}
                name={password.name}
                password={password.password}
                assinaturaEletronica={password.assinaturaEletronica}
                conta={password.conta}
                cpf={password.cpf}
                createdAt={password.createdAt}
                description={password.description}
                email={password.email}
                updatedAt={password.updatedAt}
                weblink={password.weblink}
              ></Card>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default App
