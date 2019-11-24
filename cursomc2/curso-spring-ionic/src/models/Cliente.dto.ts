export interface ClienteDTO {
    id: string;
    nome: string;
    email: string;
    // ? indica que o campo é opcional
    imageUrl?: string
}