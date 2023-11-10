/* eslint-disable @typescript-eslint/no-unused-vars */

import { cardFunctions } from './cardFunctions.js';
const cardsSection = document.querySelector('.cards');

const card = (name) => cardFunctions.createCard({
  name: name,
  password: '123456',
  assinaturaEletronica: '123514',
  conta: '7845',
  cpf: '70937622478',
  createdAt: '23/05/2014 - 23h45',
  description: 'Testando apenas isso aqui',
  email: 'lgs.alves@hotmail.com',
  updatedAt: '24/05/2014 - 23h45',
  weblink: 'https://www.minecraft.net/account_settings'
});

