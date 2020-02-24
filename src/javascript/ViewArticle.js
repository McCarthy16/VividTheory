import React from 'react';
import './../css/ViewArticle.css';
import {Link} from 'react-router-dom';

// React App to generate Article's html with our data
export default class ViewArticle extends React.Component{
  // constructor to initialize state values
  constructor(){
    super();
    this.state = {
        	articles: [],
        	article:[],
        	idx:Number
        }
  }

  // called when the component mounts
  // get the data from the backend
  componentDidMount(){
  	this.setState({idx:this.props.location.state.idx});
  	//console.log("here")
    fetch('/api')
      .then(res => res.json())
      .then(articles => this.setState({articles}));

  }

  // render html for the 'root' 
  render(){  
  	var article;
  	
  	article = this.state.articles[this.props.location.state.idx]
    //index = this.state.articles.findIndex(x => "/"+x.url === this.props.location.pathname)    
	    
    if (article !== undefined){
	    return (<div className="container">
              <Link to="/" > 
	              <div className="return">&#10094;</div>
	            </Link>
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