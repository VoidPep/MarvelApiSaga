import Personagens from "./personagem.schema";

class PersonagemService {
    async create(personagem: any) {
        return await Personagens.create(personagem);
    }

    async findAll() {
        return await Personagens.find();
    }

    async update(id: string, personagem: any) {
        return await Personagens.findByIdAndUpdate(id, personagem);
    }

    async delete(id: string) {
        return await Personagens.findByIdAndDelete(id);
    }
}

export default new PersonagemService()