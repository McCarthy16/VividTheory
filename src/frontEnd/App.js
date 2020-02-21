import React from 'react';
import './App.css'; 
// load backEnd connection, receive articles for dashboard page
const backEnd = require("./../packages/backEnd");
var back = new backEnd.backEnd();
back.setElements(); // currently only used to initialize the mock articles
var articles = back.getElements();


// React App to generate html with our data
// TODO: set max columns to 3 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="http://www.vividtheory.com">
          <img src="https://vividtheory.blob.core.windows.net/assignment/vtlogo.svg"  border="0" className="App-logo" alt="logo" />
        </a>
        <div class="neumorphism" >

        </div>
        <p>
          Vivid Theory Blog.
        </p> 
      </header>

      <div className="gallery">
        {
          articles.map(e1 => 
          <div class="article-display-container" key={e1.id}> 
            <div class="article-display-card"> 
              <h2> {e1.title}</h2> 
              <p> {e1.body} </p> 
              
            </div>
          </div>)
          
        }
      </div>

    </div>
  );
}

export default App;
