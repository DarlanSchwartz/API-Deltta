import { Router } from "express";
import { deleteClient, getAllClients, getOneClient, registerClient, updateClient } from "../controllers/clients.controller.js";

const clientRouter = Router();

clientRouter.get('/all-clients', getAllClients);
clientRouter.get('/one-client', getOneClient);
clientRouter.post('/clients', registerClient);
clientRouter.put('/clients', updateClient);
clientRouter.delete('/clients', deleteClient);

export default clientRouter;