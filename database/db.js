const mysql = require('mysql2');

const config = require('../config/config-db.json');
const root = "game_start";
const password = "NCKeT_*ffa3LvR4";
const database = "ecomerce_game";
const host = "MySQL.8.0.Server";

//se crea un objeto con la información de la base de datos del user
const pool = mysql.createPool({
  host: host,
  user: root,
  database: database,
  password: password,
});

module.exports = pool.promise(); //exportamos como una promesa
