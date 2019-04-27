import { MongoClient } from 'mongodb';
import { MONGO_CLIENT, DB_NAME } from '../env/env'

let dataBase;

export function initDb () {
    MongoClient.connect(MONGO_CLIENT, (err, client) => {
        if(err) {
            dataBase = err;
        }
        dataBase = client.db(DB_NAME);
    });
}

export function getDb () {
    return new Promise((resolve, reject) => {
        if(dataBase) {
            resolve(dataBase);
        } else {
            reject(dataBase);
        }
    });
}

