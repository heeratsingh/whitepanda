var admin=require('firebase-admin')
var serviceAccount = require("./key.json");
// var exp= require('express');
// var app= exp()
// app.use(exp.json())

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));


// app.listen(8888);

app.post('/update', function(req, res) {
    console.log(req.body); // the posted data
});
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://whitepandaapi.firebaseio.com"
});

var db= admin.firestore();
class Car{
    // id;
    // model;
    // seats;
    // vehiclenumber;
    // status;
    // rent;

    constructor(){
    }

    set car(obj){
        db.collection('cars').add(obj).then(id=>{
            console.log(id);
        });

    }
    // get car(status ,seatingcapacity, datetime ){

    // }
}


app.get('/addcar',(req,res)=>{
    let c=new Car();
    try {
        console.log(req);
        res.json({'err':0, 'status':'successful','data':req})
    } catch (error) {
        // next(error);
        // c.car=req.body;
    }
    
    console.log(c);
})

let port =8000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 