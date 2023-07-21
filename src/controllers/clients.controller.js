import db from '../database/database.connection.js';

export async function getOneClient(req, res) {
     const {id} = req.params;

     if(!id || isNaN(Number(id))) return res.status(400).send('É necessário passar o id do cliente corretamente via url para pegar informações de um cliente -> /client/ID_DO_CLIENTE');

     try {
          const client = await db.collection('clients').findOne({id : Number(id)});
          return res.status(200).send(client);
     } catch (error) {
          console.log(error);
          return res.status(500).send('Erro interno do servidor: ' + error.message);
     }
}

export async function getAllClients(req, res) {
     try {
          const clients = await db.collection('clients').find().toArray();
          return res.status(200).send(clients);
     } catch (error) {
          console.log(error);
          return res.status(500).send('Erro interno do servidor: ' + error.message);
     }
}

export async function getClientIds(req, res) {
     try {
          const clients = await db.collection('clients').find().toArray();
          const ids = clients.map((client) => Number(client.id));
          return res.status(200).send(ids);
     } catch (error) {
          console.log(error);
          return res.status(500).send('Erro interno do servidor: ' + error.message);
     }
}

export async function registerClient(req, res) {
     try {
       const clients = await db.collection('clients').find().toArray();
       const clientIds = clients.map((client) => Number(client.id));
   
       let id =1;
       do {
         id = Math.floor(Math.random() * 999) + 1;
       } while (clientIds.includes(id));
   
       await insertClientWithId(req.body, id,res);
       return res.status(201).send('Cliente registrado com sucesso!');
     } catch (error) {
       console.log(error);
       return res.status(500).send('Erro interno do servidor: ' + error.message);
     }
}

async function insertClientWithId(clientData, id,res) {
     try {
          await db.collection('clients').insertOne({ ...clientData, id:Number(id) });
     } catch (error) {
          return res.status(500).send('Erro ao inserir o cliente no banco de dados: ' + error.message);
     }
}

export async function updateClient(req, res) {
     const {id} = req.params;

     if(!id || isNaN(Number(id))) return res.status(400).send('É necessário passar o id do cliente corretamente via url para atualizar um cliente -> /client/ID_DO_CLIENTE');

     try {
          const updatedClient = await db.collection('clients').updateOne({id:Number(id)},{$set:req.body});
          if(updatedClient.matchedCount == 0) return res.status(404).send('Cliente não encontrado!');
          return res.status(200).send('Cliente atualizado com sucesso!');
     } catch (error) {
          console.log(error.message);
          return res.status(500).send('Erro interno do servidor: ' + error.message);
     }
}


export async function deleteClient(req, res) {
     const {id} = req.params;

     if(!id || isNaN(Number(id))) return res.status(400).send('É necessário passar o id do cliente corretamente via url para deletar o cliente de  -> /client/ID_DO_CLIENTE');

     try {
          await db.collection('clients').deleteOne({id:Number(id)});
          return res.status(202).send('Cliente removido com sucesso!');
     } catch (error) {
          console.log(error);
          return res.status(500).send('Erro interno do servidor: ' + error.message);
     }
}