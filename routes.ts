import { Router } from 'express'
import CharactersController from './src/characters/characters.controller';
import ComicsController from './src/comics/comics.controller';
import CreatorsController from './src/creators/creators.controller';

const routes = Router();

routes.post('/personagens', CharactersController.create);
routes.post('/personagens/createMany', CharactersController.createMany);
routes.get('/personagens', CharactersController.findAll);
routes.get('/personagens/:id', CharactersController.findById);
routes.put('/personagens/:id', CharactersController.update);
routes.delete('/personagens/:id', CharactersController.delete);

routes.post('/comics', ComicsController.create);
routes.post('/comics/createMany', ComicsController.createMany);
routes.get('/comics', ComicsController.findAll);
routes.get('/comics/:id', ComicsController.findById);
routes.put('/comics/:id', ComicsController.update);
routes.delete('/comics/:id', ComicsController.delete);

routes.post('/creators/createMany', CreatorsController.createMany);
routes.post('/creators', CreatorsController.create);
routes.get('/creators', CreatorsController.findAll);
routes.get('/creators/:id', CreatorsController.findById);
routes.put('/creators/:id', CreatorsController.update);
routes.delete('/creators/:id', CreatorsController.delete);

export{
    routes
}