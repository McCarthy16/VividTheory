const express = require('express');
const mongoose = require('mongoose');
const app = express();

//connect to my database
const uri = 'mongodb+srv://MyUser:Marie1234shyla@mccarthy16-hbvbo.gcp.mongodb.net/vividtheory?retryWrites=true&w=majority'
mongoose.connect(uri, {
	useNewUrlParser:true,
	useUnifiedTopology:true
});

mongoose.connection.on('connected', () => {
	console.log('connected')
});

//Schema 
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
	url: String,
	title:String,
	body: String,
	day:String,
	month:String
});
const Article = mongoose.model('entries',ArticleSchema);

/** Code to save to my database
const data = {
	url: "Article/03",
	title:"Article 03",
	body: "This is Article 03",
	day:"17",
	month:"FEB"
}

const newArticle = new Article(data);

newArticle.save((error) => {
	if (error) {
		console.log("failed")
	} else {
		console.log("success")
	}
});
*/


app.get('/api/articles', (req, res) => {
  const articles = [
    {id: 1, url: 'Article/01', title: 'Article 01', preview:"This is Article 01",body: `<h1>This is Article 05</h1>`, day:"19", month:"FEB" },
    {id: 2, url: 'Article/01', title: 'Article 01', preview:"This is Article 01",body: `<h1>This is Article 05</h1>`, day:"19", month:"FEB" },
    {id: 3, url: 'Article/01', title: 'Article 01', preview:"This is Article 01",body: `<h1>This is Article 05</h1>`, day:"19", month:"FEB" }];
  res.json(articles);
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);