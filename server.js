const express = require('express');
const cors = require('cors');
const helmet =  require('helmet');
const app = express();
const port = 3000 ;

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

let userdata = [] ;
app.get('/getname' , (req,res)=>{
    let user = {
        name: "James Gun " ,
        age : "33"
    }
    res.send({message: "data come successfully ", data: user , value: true});

});
app.post('/postname' , (req,res)=> {
   let user  = req.body ;
   userdata.push(user);
   res.send({message: "data post successfully " , data:  user , value: true});
});

app.get('/getalluser' , (req,res)=>{
    res.send({ message : "success" , data:userdata , value: true});
});
app.get('/getreset', (req,res)=>{
     userdata.length = 0 ;
    res.send({message : "all data erased" ,data: userdata  , value: true})
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))