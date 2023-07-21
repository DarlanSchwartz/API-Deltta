import { Router } from "express";
import { deleteClient, getAllClients, getClientIds, getOneClient, registerClient, updateClient } from "../controllers/clients.controller.js";
import ClientSchema from "../schemas/client.schemas.js";
import validateSchema from "../middlewares/validateSchema.js";

const clientRouter = Router();

clientRouter.get('/clients', getAllClients);
clientRouter.get('/client/:id', getOneClient);
clientRouter.post('/clients',validateSchema(ClientSchema), registerClient);
clientRouter.put('/client/:id',validateSchema(ClientSchema), updateClient);
clientRouter.delete('/client/:id', deleteClient);
clientRouter.get('/client-ids', getClientIds);

export default clientRouter;