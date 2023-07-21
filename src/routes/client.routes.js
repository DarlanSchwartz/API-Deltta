import { Router } from "express";
import { deleteClient, deleteClients, getAllClients, getClientIds, getOneClient, registerClient, updateClient } from "../controllers/clients.controller.js";
import ClientSchema from "../schemas/client.schemas.js";
import validateSchema from "../middlewares/validateSchema.js";
import validateAuth from "../middlewares/validateAuth.js";

const clientRouter = Router();

clientRouter.get('/clients',validateAuth, getAllClients);
clientRouter.get('/client/:id',validateAuth, getOneClient);
clientRouter.post('/clients',validateAuth,validateSchema(ClientSchema), registerClient);
clientRouter.put('/client/:id',validateAuth,validateSchema(ClientSchema), updateClient);
clientRouter.delete('/client/:id',validateAuth, deleteClient);
clientRouter.get('/client-ids',validateAuth, getClientIds); 
clientRouter.post('/delete-clients',validateAuth, deleteClients); 

export default clientRouter;