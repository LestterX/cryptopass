export interface IPassword {
  id: string, //Required
  name: string, //Required
  password: string, //Required
  email?: string,
  cpf?: string,
  assinaturaEletronica?: string,
  conta?: string,
  weblink?: string,
  description?: string,
  createdAt?: string,
  updatedAt?: string,
}