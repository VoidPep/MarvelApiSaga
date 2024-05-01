import CreatorService from './creators.service';
import {Request, Response} from 'express';
import Constants from "../../constants";
import axios from "axios";
import PersonagemService from "../characters/characters.service";

class CreatorsController {
    async create(req: Request, res: Response) {
        try {
            const creator = req.body;
            const response = await CreatorService.create(creator);
            res.status(201).json(response);
        } catch (error: any) {
            res.status(400).json({message: error.message});
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const response = await CreatorService.findAll();
            res.status(200).json(response);
        } catch (error: any) {
            res.status(400).json({message: error.message});
        }
    }

    async createMany(req: Request, res: Response) {
        try {
            const url = `${Constants.MARVEL_API_URL}/creators?${Constants.MARVEL_API_PARAMS}`
            const characters = await axios.get(url)

            const newCreators = characters.data.data.results.map((creator: any) => ({
                nome: creator.fullName,
                imagem: `${creator.thumbnail?.path}.${creator.thumbnail?.extension}`,
                comics: creator.comics.items.map((comic: any) => comic.name),
            }))

            const response = await CreatorService.create(newCreators);
            res.status(201).json(response);
        } catch (error: any) {
            res.status(400).json({message: error.message});
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const creator = req.body;
            const response = await CreatorService.update(id, creator);
            res.status(200).json(response);
        } catch (error: any) {
            res.status(400).json({message: error.message});
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const response = await CreatorService.delete(id);
            res.status(200).json(response);
        } catch (error: any) {
            res.status(400).json({message: error.message});
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const response = await CreatorService.findById(id);
            res.status(200).json(response);
        } catch (error: any) {
            res.status(400).json({message: error.message});
        }
    }
}

export default new CreatorsController()