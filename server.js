const express = require('express')
const app = express()
const port = 3000
const routes = require( '../routes/routes' )
const morgan = require('morgan')


// app.get('/',function (req, res){
//   fs.readFile('users.json',(err,data) => {
//       if(err) throw err;
//       const users = JSON.parse(data);
//       res.send(JSON.stringify(users))
//   })
//   console.log("after reading the file");
  

// })

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.use( morgan( "dev") );
routes(app)

app.get("*", (req, res) => res.status(400).send({
	message: "No se encuentra el recurso"
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))