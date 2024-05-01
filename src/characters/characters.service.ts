import Personagens from "./characters.schema";

class CharactersService {
    async create(personagem: any) {
        return await Personagens.create(personagem);
    }

    async findAll() {
        return await Personagens.find();
    }

    async findById(id: string) {
        return await Personagens.findById(id);
    }

    async findByid(id: string) {
        return await Personagens.findById(id);
    }

    async update(id: string, personagem: any) {
        return await Personagens.findByIdAndUpdate(id, personagem);
    }

    async delete(id: string) {
        return await Personagens.findByIdAndDelete(id);
    }
}

export default new CharactersService()