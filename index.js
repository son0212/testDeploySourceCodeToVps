const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('views','./views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
	var ipUser = req.ip;
	res.render('index',{ipUser:ipUser});
});

const port = 80;

app.listen(port,()=>{
	console.log(`The server has been started at the port: ${port} or http://localhost:${port}`);
});
