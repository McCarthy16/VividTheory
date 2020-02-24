const express = require('express');
const mongoose = require('mongoose');
const app = express();
//const routes = require('./public/index')

var path = require('path');

module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000
  }
};

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

app.get('/api', (req, res) => {
  Article.find({ })
  	.then((data) => {
  		res.json(data);
  	})
  	.catch(() => { 
  		console.log("error")
  	});
  
});


const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);