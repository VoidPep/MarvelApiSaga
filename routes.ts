import { Router } from 'express'
import CharactersController from './src/characters/characters.controller';
import ComicsController from './src/comics/comics.controller';

const routes = Router();

routes.post('/personagens', CharactersController.create);
routes.get('/personagens', CharactersController.findAll);
routes.put('/personagens/:id', CharactersController.update);
routes.delete('/personagens/:id', CharactersController.delete);

export{
    routes
}