var Express = require("express");
const { MongoClient, ServerApiVersion }= require("mongodb");
var cors = require("cors");
const multer = require("multer");
// const bodyParser = require('body-parser');

var app=Express();
app.use(cors());
// app.use(bodyParser.json());

var CONNECTION_STRING = "mongodb+srv://planpal:Gowtham%401404@cluster1.c1mdxvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";


var DBNAME = "Planpal";
var database;

const client = new MongoClient(CONNECTION_STRING, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsAllowInvalidCertificates: false,

    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});


async function startServer() {
    try {
        const client = await MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
        database = client.db(DBNAME);
        console.log("CONNECTION ESTABLISHED");

        app.listen(5038, () => {
            console.log("Server is running on port 5038");
        });
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }
}

startServer();



// function generateRegistrationNumber(length = 8) {
//     const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let regNumber = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         regNumber += charset[randomIndex];
//     }
//     return regNumber;
// }




// app.listen(5038,()=>{
//     Mongoclient.connect(CONNECTION_STRING,(_error,client)=>{
//         database=client.db(DBNAME);
//         console.log("CONNECTION ESTABLISHED");
//     })
// });

app.get('/ndcon/planpal/GetNotes',(request,response)=>{
    database.collection("Patients").find({}).toArray((error,result)=>{
        response.send(result);
    });
})

app.post('/ndcon/planpal/AddNotes',multer().none(),(request,response)=>{
    database.collection("Patients").count({},function(error,numOfDocs){
        database.collection("Patients").insertOne({
            id:(numOfDocs+1).toString(),
            description:request.body.newNotes
        });
        response.json("Added Notes");
    })
})

app.delete('/ndcon/planpal/DeleteNotes',(request,response)=>{
    database.collection("Patients").deleteOne({
        id:request.query.id 
    });
    response.json("Deleted Notes")
})


