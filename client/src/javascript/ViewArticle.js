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
        	article:[],
        	idx:Number
        }
  }


  componentDidMount(){
  	this.state.idx = this.props.location.state.idx
  	
    fetch('/api')
      .then(res => res.json())
      .then(articles => this.setState({articles}));

  }


  render(){  
  	var article;
  	
  	article = this.state.articles[this.props.location.state.idx]
    //index = this.state.articles.findIndex(x => "/"+x.url === this.props.location.pathname)    
	    
    if (article != undefined){
	    return (<div className="containers">
	            <div className="return">logo to return</div>
	            
	            {<div className="artice" key={article.url} dangerouslySetInnerHTML={{__html:article.body}}></div>
	            }
	            </div>
	    );
	}
	else{
		return(<div></div>);

	}
  }
}