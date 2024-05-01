import PersonagemService from "./characters.service";
import Constants from '../../constants';
import { Request, Response } from 'express';
import axios from "axios";

class CharactersController {
    async create(req: Request, res: Response) {

        const url = `${Constants.MARVEL_API_URL}/characters?${Constants.MARVEL_API_PARAMS}`
        const characters = await axios.get(url)

        try {
            const personagem = req.body;
            const response = await PersonagemService.create(personagem);
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const response = await PersonagemService.findAll();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const personagem = req.body;
            const response = await PersonagemService.update(id, personagem);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const response = await PersonagemService.delete(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const response = await PersonagemService.findById(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default new CharactersController()