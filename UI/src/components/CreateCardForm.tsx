import { PlusCircle, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";

const CreateCardForm = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <PlusCircle size={32} color="black" className="hover:cursor-pointer"></PlusCircle>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay></Dialog.Overlay>
        <Dialog.Content>
          <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
            <form name="formCreateCard" id="formCreateCard"
              action="http://localhost:5550/password" method="POST"
              className="p-6 w-80 bg-slate-500">
              <div>
                <p>Nome</p>
                <input name="name" id="name" type="text" className="w-full" />
              </div>
              <div>
                <p>Senha</p>
                <input name="password" id="password" type="text" className="w-full" />
              </div>
              <div>
                <p>E-mail</p>
                <input name="email" id="email" type="email" className="w-full" />
              </div>
              <div>
                <p>CPF</p>
                <input name="cpf" id="cpf" type="text" className="w-full" />
              </div>
              <div>
                <p>Ass. Eletronica</p>
                <input name="assinaturaEletronica" id="assinaturaEletronica" type="text" className="w-full" />
              </div>
              <div>
                <p>Conta</p>
                <input name="conta" id="conta" type="text" className="w-full" />
              </div>
              <div>
                <p>Link/Site</p>
                <input name="weblink" id="weblink" type="text" className="w-full" />
              </div>
              <div>
                <p>Descrição</p>
                <input name="description" id="description" type="text" className="w-full" />
              </div>
              <button type="submit" className="w-full h-8 mt-5 font-bold bg-emerald-400">CRIAR</button>
            </form>
          </div>
          <Dialog.Close asChild>
            <button type="button" className="absolute top-1 right-1">
              <X size={32} color="red"></X>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CreateCardForm;