const db = require("../config/mysql");

exports.index = (req, res) => {
  tasks= [];
  db.connection.query("SELECT * FROM tasks", (err, rows) => {
    if (err) throw err;
    res.json({ tasks: rows });
  });
};

exports.show = (req, res) => {
  tasks=[]
  db.connection.query(`SELECT * FROM tasks WHERE task_id =${req.params.id}`,(err,rows)=>{
    if(err) throw err;
    res.json({tasks:rows});
  })
  
};

exports.store = (req, res) => {

 
    let sql =
      "INSERT INTO tasks (title,description,isDone) VALUES ('Mi segunda tarea', 'segunda descripcion',true)";
      db.connection.query(sql,(err,rows)=>{
        if(err) throw err;
        else{
          console.log("sucess")
        }
      })
  
};

exports.delete = (req, res) => {
  
  db.connection.query(`DELETE FROM tasks WHERE task_id = ${req.params.id}`,(err,rows) =>{
    if (err) throw err;
      res.json((`se borro correctamente la tarea ${req.params.id}`))
    

  })

};
