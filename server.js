const express = require('express');
const cors = require('cors');
const helmet =  require('helmet');
const app = express();


app.use(cors({
    origin: '*'
})) ;
app.use(helmet());
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile('index.html'));

app.get('/getname' , (req,res)=>{
    let user = {
        name: "James Gun " ,
        age : "33"
    }
    res.send({message: "data come successfully ", data: user , value: true});

});




app.listen(80);