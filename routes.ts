import { Router } from 'express'
import PersonagemController from './src/personagem/personagem.controller';

const routes = Router();

routes.post('/personagens', PersonagemController.create);
routes.get('/personagens', PersonagemController.findAll);
routes.put('/personagens/:id', PersonagemController.update);
routes.delete('/personagens/:id', PersonagemController.delete);

export{
    routes
}