var  express = require('express')
var ejs =require('ejs')
var app = express()
const port = 8080

var bodyParser = require('body-parser');
var session = require('express-session')

mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_project"
 })
 


app.use(express.static('public'))//deliver html via public folder
app.set('view engine','ejs')//view wngine to ejs
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"secret"}))




app.get('/', function(req, res) {
    // res.render('./views/pages/index.ejs')//node already knows views so just name......

    mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"node_project"
     })
     con.query("SELECT * FROM products",(err,result)=>{
        res.render('pages/index',{result:result});
     })
   

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))