export default interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    rg: string;
    cpf: string;
    birth_date: Date;
}