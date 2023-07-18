
import db from '../database/database.connection.js';

export async function getOneClient(req, res) {
    try {
        return res.status(200).send([]);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function getAllClients(req, res) {
   try {
        return res.status(200).send('');
   } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
   }
}


export async function registerClient(req, res) {
    try {
         return res.status(200).send('');
    } catch (error) {
         console.log(error);
         return res.status(500).send('Internal server error');
    }
 }

 
export async function updateClient(req, res) {
    try {
         return res.status(200).send('');
    } catch (error) {
         console.log(error);
         return res.status(500).send('Internal server error');
    }
 }

  
export async function deleteClient(req, res) {
    try {
         return res.status(200).send('');
    } catch (error) {
         console.log(error);
         return res.status(500).send('Internal server error');
    }
 }