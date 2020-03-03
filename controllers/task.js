const db = require("../config/mysql")

exports.index = (req, res) => {
  // tasks = [
  //   {
  //     name: "task 1",
  //     description: "description task"
  //   },
  //   {
  //     name: "task 2",
  //     description: "description task"
  //   }
  // ];
  db.connection.query('SELECT * FROM tasks',(err, rows)=>{
    if(err) throw err;
    res.json({ tasks: rows });
  })
}

exports.show = (req, res) => {
  tasks = {
    name: "task " + req.params.id,
    description: "description task"
  };
  res.json({ tasks: tasks });
};

exports.store = (req, res) => {
 db.connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO tasks (title,description,isDone) VALUES ('Mi primer titulo', 'cuerpo de la descripcion',true)";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

  
};

exports.delete = (req,res) => {
  tasks = {
    name: " task " + req.params.id ,
    description: "task description"
  };
  res.json({tasks:tasks})
}
