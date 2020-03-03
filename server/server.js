const express = require('express')
const app = express()
const port = 3000
const routes = require( '../routes/routes' )
const morgan = require('morgan')
var bodyParser = require('body-parser')
require('dotenv').config()

console.log( process.env.DB_NAME);


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use( morgan( "dev") );
routes(app)
console.log(process.env.DB_USER);
app.get("*", (req, res) => res.status(400).send({
	message: "No se encuentra el recurso"
}));
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
//   })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))