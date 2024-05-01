import { Router } from 'express'
import CharactersController from './src/characters/characters.controller';
import ComicsController from './src/comics/comics.controller';
import CreatorsController from './src/creators/creators.controller';

const routes = Router();

routes.post('/personagens', CharactersController.create);
routes.get('/personagens', CharactersController.findAll);
routes.get('/personagens/:id', CharactersController.findById);
routes.put('/personagens/:id', CharactersController.update);
routes.delete('/personagens/:id', CharactersController.delete);

export{
    routes
}