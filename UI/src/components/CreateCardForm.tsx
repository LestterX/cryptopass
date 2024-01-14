import axios from "axios";

function CreateCardForm() {
  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
        <form name="formCreateCard" id="formCreateCard" action="" className="p-6 w-80 bg-slate-500">
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
            <p>Descrição</p>
            <input name="descricao" id="descricao" type="text" className="w-full" />
          </div>
          <button className="w-full h-8 mt-5 font-bold bg-emerald-400" type="button" onClick={(e) => {
            e.preventDefault();
            axios.postForm('https://localhost:5550/password')
              .then(response => console.log(response))
          }}>CRIAR</button>
        </form>
      </div>
    </>
  );
}

export default CreateCardForm;