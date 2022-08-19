const mysql = require('mysql');

class DataBase
{
  constructor(){}
  connect(host, user, pwd, db)
  {
    this.conn = mysql.createConnection({
      host: host || "localhost",
      user: user || "root",
      password: pwd
    });
  }
  query(json)
  {
    
  }
}
