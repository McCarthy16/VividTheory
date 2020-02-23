//const {mysql} = require('mysql')
const MongoClient = require('mongodb').MongoClient;



export class database{
  setConnection(){
    const uri = "mongodb+srv://MyUser:<mypass>@mccarthy16-hbvbo.gcp.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {

      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      console.log("here")
      client.close();
    });
  }
}


/** let config = {
     user: "MyUser",
     database: "VividTheory",
     password: "...",
     socketPath:"/cloudsql/moonlit-bucksaw-269000:us-west1:jordansdatabase "
}


let connection = mysql.createConnection(config);

connection.connect(function(err) {

    if (err) {

      console.error('Error connecting: ' + err.stack);

      return;

    }

    console.log('Connected as thread id: ' + connection.threadId);

  });

*/

