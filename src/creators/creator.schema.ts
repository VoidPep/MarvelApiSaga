import {Schema, model} from 'mongoose'

const creator = new Schema({
    nome: { type: String, required: true },
    funcao: { type: String, required: true },
    comics: { type: Schema.Types.ObjectId, ref: 'Comics' }
})

export default model('Creator', creator)