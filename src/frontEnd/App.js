import React from 'react';
import './css/App.css'; 

import Dashboard from './Dashboard'
import ViewArticle from './ViewArticle'
import {Route, Link} from 'react-router-dom';
const backEnd = require("./../packages/backEnd");
var back = new backEnd.backEnd();
back.setElements(); // currently only used to initialize the mock articles
var articles = back.getElements();
// React App to generate html with our data
// TODO: set max columns to 3
var paths = ["/Article/1","/Article/2","/Article/3","/Article/4","/Article/5","/Article/6","/Article/7","/Article/8","/Article/9"] 
export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <a href="http://www.vividtheory.com">
            <img src="https://vividtheory.blob.core.windows.net/assignment/vtlogo.svg"  border="0" className="App-logo" alt="logo" />
          </a>
          <Link to="/" > 
            <div className="neumorphism"> 
            </div>
          </Link>
          <p>
            Vivid Theory Blog.
          </p> 
        </header>

        <Route exact path="/" component={()=> <Dashboard id={123}/>}/>

              
        <Route  path="/Article" key="Article" component={ViewArticle}/>

      </div>
    );
  }
}


