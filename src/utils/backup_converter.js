import fs from 'fs';
import db from '../database/database.connection.js';

const backupFilePath = '../back-end/src/backups/backup-clients_2.txt';

async function BackupConverter() {
  let jsonArray = null;

  try {
    const data = await fs.promises.readFile(backupFilePath, 'utf8');
    jsonArray = JSON.parse(data);

    //console.log(jsonArray);

    // Promise.all to await for all db insetions
    await Promise.all(
      jsonArray.map(async (client) => {
        await db.collection('clients').insertOne(client);
      })
    );

    console.log('Todos os dados foram inseridos no banco de dados!');
  } catch (err) {
    console.error('Erro ao ler ou converter o arquivo:', err.message);
  }
}

BackupConverter();