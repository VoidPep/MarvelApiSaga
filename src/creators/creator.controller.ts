import CreatorService from './creator.service'

class CreatorController {
    async create(req, res) {
        try {
            const creator = req.body;
            const response = await CreatorService.create(creator);
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const response = await CreatorService.findAll();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const creator = req.body;
            const response = await CreatorService.update(id, creator);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const response = await CreatorService.delete(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default new CreatorController()