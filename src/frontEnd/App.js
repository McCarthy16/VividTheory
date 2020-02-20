import React from 'react';
import './App.css'; 
// load backEnd connection, receive articles for dashboard page
const backEnd = require("./../packages/backEnd");
var back = new backEnd.backEnd();
back.setElements(); // currently only used to initialize the mock articles
var articles = back.getElements();


// React App to generate html with our data
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="http://www.vividtheory.com">
          <img src="https://vividtheory.blob.core.windows.net/assignment/vtlogo.svg"  border="0" className="App-logo" alt="logo" />
        </a>
        <p>
          Vivid Theory Blog.
        </p> 
      </header>

      <li className="Article-container">
        {
          articles.map(e1 => <div key={e1.id}> <h2> {e1.title}</h2> <p> {e1.body} </p> </div>)
        }
      </li>

    </div>
  );
}

export default App;
