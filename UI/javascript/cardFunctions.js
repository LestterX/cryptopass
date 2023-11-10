/* eslint-disable @typescript-eslint/no-unused-vars */

const createCard = ({
  name,
  password,
  email,
  cpf,
  assinaturaEletronica,
  conta,
  weblink,
  description,
  createdAt,
  updatedAt
}) => {
  let card = document.createElement('div');
  card.classList.add('card');

  let topBar = document.createElement('div');
  topBar.classList.add('topBar');
  let topBarH1 = document.createElement('h1');
  topBarH1.innerHTML = name;
  topBar.appendChild(topBarH1);
  card.appendChild(topBar);

  let createdAtUpdatedAt = document.createElement('div');
  createdAtUpdatedAt.classList.add('created-updated');
  let pC = document.createElement('p');
  pC.innerHTML = createdAt;
  createdAtUpdatedAt.appendChild(pC);
  let pA = document.createElement('p');
  pA.innerHTML = updatedAt;
  createdAtUpdatedAt.appendChild(pA);
  card.appendChild(createdAtUpdatedAt);

  let cardContent = document.createElement('div');
  cardContent.classList.add('card-content');

  cardContent.appendChild(
    creatCardContent('password', 'Senha', password));

  cardContent.appendChild(
    creatCardContent('email', 'E-mail', email));

  cardContent.appendChild(
    creatCardContent('cpf', 'CPF', cpf));

  cardContent.appendChild(
    creatCardContent(
      'assinaturaEletronica',
      'Assinatura Eletronica',
      assinaturaEletronica));

  cardContent.appendChild(
    creatCardContent('conta', 'Conta', conta));

  cardContent.appendChild(
    creatCardContent('weblink', 'Weblink', weblink));

  cardContent.appendChild(
    creatCardContent('description', 'Descrição', description));

  card.appendChild(cardContent);

  return card;
};

const creatCardContent = (className, name, value) => {
  let content = document.createElement('div');
  content.classList.add(className);
  let h3 = document.createElement('h3');
  h3.innerHTML = name;
  content.appendChild(h3);
  let p = document.createElement('p');
  p.innerHTML = value;
  content.appendChild(p);

  return content;
};

export const cardFunctions = {
  createCard
};