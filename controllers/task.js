// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: "localhost",
//   user:"root",
//   password:"",
//   database:"bakery"
// });

exports.index = (req, res) => {
  tasks = [
    {
      name: "task 1",
      description: "description task"
    },
    {
      name: "task 2",
      description: "description task"
    }
  ];
  res.json({ tasks: tasks });
}

exports.show = (req, res) => {
  tasks = {
    name: "task " + req.params.id,
    description: "description task"
  };
  res.json({ tasks: tasks });
};

// exports.store = (req, res) => {
//   const data = req.body;
//   console.log("body", data);
//   var sql = `INSERT INTO tasks 
//             (
//                 Title, Description, isDone
//             )
//             VALUES
//             (
//                 ?, ?, ?
//             )`;


//   res.json({ tasks: tasks });
// };

exports.delete = (req,res) => {
  tasks = {
    name: " task " + req.params.id ,
    description: "task description"
  };
  res.json({tasks:tasks})
}
