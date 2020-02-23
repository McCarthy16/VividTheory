const MongoClient = require('mongodb').MongoClient;
export class database {
    setConnection() {
        const uri = "mongodb+srv://MyUser:<mypass>@mccarthy16-hbvbo.gcp.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
            const collection = client.db("test").collection("devices");
            console.log("here");
            client.close();
        });
    }
}
//# sourceMappingURL=database.js.map