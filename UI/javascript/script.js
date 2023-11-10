/* eslint-disable @typescript-eslint/no-unused-vars */

import { cardFunctions } from './cardFunctions.js';

const SERVER_PORT = 5550;
const cardsSection = document.querySelector('.cards');

const data = fetch(`http://localhost:${SERVER_PORT}/password`, {
  method: 'GET',
}).then(data => {
  return data.json();
}).then(data => {
  for (let result of data.result) {
    cardsSection.appendChild(cardFunctions.createCard({
      name: result.name,
      password: result.password,
      assinaturaEletronica: result.assinaturaEletronica,
      conta: result.conta,
      cpf: result.cpf,
      createdAt: result.createdAt,
      description: result.description,
      email: result.email,
      updatedAt: result.updatedAt,
      weblink: result.weblink
    }));
  }
});