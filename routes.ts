import { Router } from 'express'
import PersonagensController from './src/personagem/personagem.controller';
import ComicsController from './src/comics/comics.controller';

const routes = Router();

routes.post('/personagens', PersonagensController.create);
routes.get('/personagens', PersonagensController.findAll);
routes.put('/personagens/:id', PersonagensController.update);
routes.delete('/personagens/:id', PersonagensController.delete);

export{
    routes
}