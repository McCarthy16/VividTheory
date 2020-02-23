const express = require('express');

const app = express();

app.get('/api/articles', (req, res) => {
  const articles = [
    {id: 1, url: 'Article/01', title: 'Article 01', preview:"This is Article 01",body: 'This is Article 05', day:"19", month:"FEB" }];
  res.json(articles);
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);