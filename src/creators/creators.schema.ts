import {Schema, model} from 'mongoose'

const creator = new Schema({
    nome: { type: String, required: true },
    imagem: { type: String, required: true },
    comics: [{ type: String, required: false }],
})

export default model('Creator', creator)