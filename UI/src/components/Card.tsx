import { ICard } from "../models/Card";
interface ICardProps extends Omit<ICard, 'id'> { }

const Card = (props: ICardProps) => {
  return (
    <>
      <div className="flex flex-col w-80 h-96 bg-emerald-200">
        <div className="bg-emerald-400 text-center text-3xl font-black">
          <h1>{String(props.name).toUpperCase() || 'Sem Nome'}</h1>
        </div>
        <div className="flex flex-row justify-between m-3">
          <span>Criado: {props.createdAt || 'Vazio'}</span>
          <span>Atualizado: {props.updatedAt || 'Vazio'}</span>
        </div>
        <div className="bg-white flex flex-2 h-full">
          <ul>
            <li><b>Senha:</b> {props.password || 'Vazio'}</li>
            <li><b>E-mail:</b> {props.email || 'Vazio'}</li>
            <li><b>CPF:</b> {props.cpf || 'Vazio'}</li>
            <li><b>Link:</b> {props.weblink || 'Vazio'}</li>
            <li><b>conta:</b> {props.conta || 'Vazio'}</li>
            <li><b>Assinatura Eletrônica:</b> {props.assinaturaEletronica || 'Vazio'}</li>
          </ul>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="">
            <span>Descrição: {props.description || 'Vazio'}</span>
          </div>
          <div className="">
            <button className="place-self-center bg-emerald-400 w-full h-8 leading-8 text-center" type="button" onClick={(e) => { e.preventDefault(); alert(props.name) }}>Editar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;