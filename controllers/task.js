const db = require("../config/mysql");

exports.index = (req, res) => {
  tasks = [];
  db.connection.query("SELECT * FROM tasks", (err, rows) => {
    if (err) throw err;
    res.json({ tasks: rows });
  });
};

exports.show = (req, res) => {
  tasks = [];
  db.connection.query(
    `SELECT * FROM tasks WHERE task_id =${req.params.id}`,
    (err, rows) => {
      if (err) throw err;
      
      if (!rows[0]) {
        res.status(404).json( { tasks: {}})
        return
      }

      res.json({ tasks: rows[0] });
    }
  );
};

exports.store = (req, res) => {
  const {title,description,isDone} = req.body;
  let sql =
  `INSERT INTO tasks (title,description,isDone) VALUES ('${title}', '${description}',${isDone})`;
  db.connection.query(sql, (err, rows) => {
    if (err) throw err;
    res.status(200).json("task insertion success")
  });
};

exports.update = (req,res) =>{
  const {title ,description , isDone} = req.body;
  let sql = `UPDATE tasks SET title = '${title}',description='${description}',isDone=${isDone} WHERE task_id=${req.params.id}`
  db.connection.query(sql,(err,rows)=>{
    if(err) throw err;

    res.status(200).json(`se modifico la tarea id numero : ${req.params.id}`)
  })
}

exports.delete = (req, res) => {
  db.connection.query(
    `DELETE FROM tasks WHERE task_id = ${req.params.id}`,
    (err, rows) => {
      if (err) throw err;
      res.json(`se borro correctamente la tarea ${req.params.id}`);
    }
  );
};
