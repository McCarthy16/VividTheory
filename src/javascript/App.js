import React from 'react';
import './../css/App.css'; 
import Dashboard from './Dashboard'
import ViewArticle from './ViewArticle'
import {Route, Link} from 'react-router-dom';
// React App to generate html with our dat
//
export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
           <img src="https://vividtheory.blob.core.windows.net/assignment/vtlogo.svg"  border="0" className="App-logo" alt="logo" />    
          <Link to="/" > 
            <div className="neumorphism"> 
            </div>
          </Link>
          <p>
            Vivid Theory
          </p> 
        </header>
        <Route exact path="/" component={()=> <Dashboard id={123}/>}/>
        <Route  path="/Article" key="Article" component={ViewArticle}/>
      </div>
    );
  }
}
