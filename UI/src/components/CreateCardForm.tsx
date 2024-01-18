import { PlusCircle, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import axios from 'axios'
const initialValues = {
  name: '',
  password: '',
  email: '',
  cpf: '',
  assinaturaEletronica: '',
  conta: '',
  weblink: '',
  description: '',
}
const CreateCardForm = () => {
  const [values, setValues] = useState(initialValues);
  const onChange = (name: string, value: string) => {
    console.log('Before' + Object.values(values));
    setValues({ ...values, [name]: value })
    console.log('After' + Object.values(values));
  }
  const onSubmit = () => {
    const postData = async () => {
      await axios.post('http://localhost:5550/password', values)
        .then((response) => {
          console.log(response);
          setValues(initialValues)
          alert(`Criado com sucesso! \nID: ${response.data.id}`)
        })
        .catch((err) => { alert(err.response.data.message) })
    }
    postData()
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <PlusCircle size={32} color="black" className="hover:cursor-pointer"></PlusCircle>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-white/5 w-screen h-screen fixed inset-0 backdrop-blur-sm"></Dialog.Overlay>
        <Dialog.Content className="">
          <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
            <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} name="formCreateCard" id="formCreateCard"
              action="http://localhost:5550/password" method="POST"
              className="p-6 w-80 bg-emerald-400 relative rounded-lg">
              <div>
                <p>Nome</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} maxLength={16} name="name" id="name" type="text" className="w-full" />
              </div>
              <div>
                <p>Senha</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} name="password" id="password" type="text" className="w-full" />
              </div>
              <div>
                <p>E-mail</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} name="email" id="email" type="email" className="w-full" />
              </div>
              <div>
                <p>CPF</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} name="cpf" id="cpf" type="text" className="w-full" />
              </div>
              <div>
                <p>Ass. Eletronica</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} name="assinaturaEletronica" id="assinaturaEletronica" type="text" className="w-full" />
              </div>
              <div>
                <p>Conta</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} name="conta" id="conta" type="text" className="w-full" />
              </div>
              <div>
                <p>Link/Site</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} name="weblink" id="weblink" type="text" className="w-full" />
              </div>
              <div>
                <p>Descrição</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} name="description" id="description" type="text" className="w-full" />
              </div>
              <button type="submit" className="w-full h-8 mt-5 font-bold bg-emerald-200" >CRIAR</button>
              <Dialog.Close asChild className="absolute top-1 right-1">
                <button type="button" className="">
                  <X size={32} color="red"></X>
                </button>
              </Dialog.Close>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CreateCardForm;