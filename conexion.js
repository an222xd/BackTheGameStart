const mysql = require("mysql");
const root = "game_start";
const password = "NCKeT_*ffa3LvR4";
const database = "ecomerce_game";
const host = "MySQL.8.0.Server";

module.exports = mysql.createPool({
  host: host,
  user: root,
  database: database,
  password: password,
});
