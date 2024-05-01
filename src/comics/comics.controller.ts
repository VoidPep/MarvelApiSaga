import ComicsService from "./comics.service";
import { Request, Response } from 'express';

class ComicsController {
    async create(req: Request, res: Response) {
        try {
            const comics = req.body;
            const response = await ComicsService.create(comics);
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const response = await ComicsService.findAll();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const comics = req.body;
            const response = await ComicsService.update(id, comics);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const response = await ComicsService.delete(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default new ComicsController()