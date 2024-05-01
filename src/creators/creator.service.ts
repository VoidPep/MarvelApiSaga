import Creator from './creator.schema'

class CreatorService {
    async create(creator: any) {
        return await Creator.create(creator)
    }

    async findAll() {
        return await Creator.find()
    }

    async update(id: string, creator: any) {
        return await Creator.findByIdAndUpdate(id, creator)
    }

    async delete(id: string) {
        return await Creator.findByIdAndDelete(id)
    }
}

export default new CreatorService()