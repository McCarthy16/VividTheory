import React from 'react';
import './../css/ViewArticle.css';
//const backEnd = require("./../packages/backEnd");
//var back = new backEnd.backEnd();
//back.setElements(); // currently only used to initialize the mock articles
//var articles = back.getElements();
//var index;
// React App to generate html with our data
// TODO: set max columns to 3 
export default class ViewArticle extends React.Component{
  constructor(){
    super();
    this.state = {
        	articles: [],
        	article:[]
        }
  }

  setArticle(){
  	this.setState(
  		{article: [this.state.articles[0]]});
  }
  componentDidMount(){
    fetch('/api/articles')
      .then(res => res.json())
      .then(articles => this.setState({articles}));
  	
  }


  render(){  
  	
    //index = this.state.articles.findIndex(x => "/"+x.url === this.props.location.pathname)    
    return (<div className="containers">
            <div className="return">logo to return</div>
            {this.state.article.map(article =>
            	<div className="artice" dangerouslySetHTML={article.body}></div>
            )}
            </div>
    );
  }
}