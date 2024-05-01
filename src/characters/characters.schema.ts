import { Schema, model } from "mongoose";

const personagem = new Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: true },
})

export default model('Personagem', personagem)