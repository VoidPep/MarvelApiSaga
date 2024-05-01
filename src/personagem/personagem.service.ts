import Personagem from "./personagem.schema";

class PersonagemService {
    async create(personagem: any) {
        return await Personagem.create(personagem);
    }

    async findAll() {
        return await Personagem.find();
    }

    async update(id: string, personagem: any) {
        return await Personagem.findByIdAndUpdate(id, personagem);
    }

    async delete(id: string) {
        return await Personagem.findByIdAndDelete(id);
    }
}

export default new PersonagemService()