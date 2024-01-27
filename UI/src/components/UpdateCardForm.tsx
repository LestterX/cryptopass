import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import axios from 'axios'
import { X } from "@phosphor-icons/react";
import { ICard } from "../models/Card";
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
const UpdateCardForm = (props: ICard) => {
  const [values, setValues] = useState(initialValues);
  const onChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value })
  }
  const onSubmit = (passwordId: string) => {
    const postData = async () => {
      await axios.put(`http://localhost:5550/password/${passwordId}`, values)
        .then((response) => {
          console.log(response);
          setValues(initialValues)
          alert(`Criado com sucesso! \nID: ${response.data.id}`)
          setValues(initialValues)
        })
        .catch((err) => {
          alert(err.response.data.message);
          setValues(initialValues)
        })
    }
    postData()
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="place-self-center bg-emerald-400 w-full h-8 leading-8 text-center" type="button">EDITAR</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-white/5 w-screen h-screen fixed inset-0 backdrop-blur-sm"></Dialog.Overlay>
        <Dialog.Content className="">
          <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(props.id) }} name="formCreateCard" id="formCreateCard"
              action="http://localhost:5550/password" method="POST"
              className="p-6 w-80 bg-emerald-400 relative rounded-lg">
              <div>
                <p>Nome</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} value={props.name} maxLength={16} name="name" id="name" type="text" className="w-full" />
              </div>
              <div>
                <p>Senha</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} value={props.password} name="password" id="password" type="text" className="w-full" />
              </div>
              <div>
                <p>E-mail</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} value={props.email} name="email" id="email" type="email" className="w-full" />
              </div>
              <div>
                <p>CPF</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} value={props.cpf} name="cpf" id="cpf" type="text" className="w-full" />
              </div>
              <div>
                <p>Ass. Eletronica</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} value={props.assinaturaEletronica} name="assinaturaEletronica" id="assinaturaEletronica" type="text" className="w-full" />
              </div>
              <div>
                <p>Conta</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} value={props.conta} name="conta" id="conta" type="text" className="w-full" />
              </div>
              <div>
                <p>Link/Site</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} value={props.weblink} name="weblink" id="weblink" type="text" className="w-full" />
              </div>
              <div>
                <p>Descrição</p>
                <input onChange={(e) => onChange(e.target.name, e.target.value)} value={props.description} name="description" id="description" type="text" className="w-full" />
              </div>
              <div className="mt-5">
                <button type="submit" className="w-full h-8 font-bold bg-emerald-200" >ATUALIZAR</button>
                <button type="button" className="w-full h-8 mt-2 font-bold bg-red-400" onClick={async () => {
                  await axios.delete(`http://localhost:5550/password/${props.id}`)
                  { window.location.href = 'http://localhost:5173' }
                }}>REMOVER</button>
              </div>
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

export default UpdateCardForm;