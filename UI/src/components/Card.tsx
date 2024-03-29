import { ICard } from "../models/Card";
import * as dayjs from 'dayjs';
import UpdateCardForm from "./UpdateCardForm";

const formatDate = (rawDate: string): string => {
  const day = String(dayjs(rawDate).get('date')).length <= 1
    ? '0' + String(dayjs(rawDate).get('date'))
    : String(dayjs(rawDate).get('date'))
  const month = String(dayjs(rawDate).get('month') + 1).length <= 1
    ? '0' + String(dayjs(rawDate).get('month') + 1)
    : String(dayjs(rawDate).get('month') + 1)
  const year = dayjs(rawDate).get('year')
  const hour = dayjs(rawDate).get('hour')
  const minutes = dayjs(rawDate).get('minutes')
  const formattedDate = `${day}/${month}/${year} ${hour}:${minutes}`
  return String(formattedDate);
}

const Card = (props: ICard) => {
  return (
    <>
      <div key={props.id} className="flex flex-col w-80 h-96 bg-emerald-200">
        <div className="bg-emerald-400 text-center text-3xl font-black">
          <h1>{String(props.name).toUpperCase() || 'Sem Nome'}</h1>
        </div>
        <div className="flex flex-row justify-between m-3 text-sm">
          <div className="flex flex-col items-center">
            <span>Criado</span>
            <span>{formatDate(String(props.createdAt)) || 'Vazio'}</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Atualizado</span>
            <span> {formatDate(String(props.updatedAt)) || 'Vazio'}</span>
          </div>
        </div>
        <div className="bg-white flex flex-2 h-full">
          <ul>
            <li><b>Senha:</b> {props.password || 'Vazio'}</li>
            <li><b>E-mail:</b> {props.email || 'Vazio'}</li>
            <li><b>CPF:</b> {props.cpf || 'Vazio'}</li>
            <li><b>Link:</b> {
              (function genLink() {
                if (String(props.weblink).startsWith('http')) {
                  return (
                    <a href={props.weblink} target="_blank"
                      className="text-blue-700 underline"
                    >Acessar</a>
                  )
                } else {
                  return 'Vazio'
                }
              }())
            } </li>
            <li><b>conta:</b> {props.conta || 'Vazio'}</li>
            <li><b>Assinatura Eletrônica:</b> {props.assinaturaEletronica || 'Vazio'}</li>
          </ul>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="">
            <span>{String(props.description) || 'Vazio'}</span>
          </div>
          <div className="">
            <UpdateCardForm
              id={props.id}
              name={props.name}
              password={props.password}
              assinaturaEletronica={props.assinaturaEletronica}
              conta={props.conta}
              cpf={props.cpf}
              description={props.description}
              email={props.email}
            ></UpdateCardForm>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;