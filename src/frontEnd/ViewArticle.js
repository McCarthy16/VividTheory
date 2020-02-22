import React from 'react';
import './css/ViewArticle.css';

const backEnd = require("./../packages/backEnd");
var back = new backEnd.backEnd();
back.setElements(); // currently only used to initialize the mock articles
var articles = back.getElements();
var index;
// React App to generate html with our data
// TODO: set max columns to 3 
export default class ViewArticle extends React.Component{
  render(){
    
    index = articles.findIndex(x => "/"+x.url === this.props.location.pathname)    
    

    return (<div>
            <div className="article" dangerouslySetInnerHTML={{__html: articles[index].body}}/>
            
            </div>

    );
  }
}


