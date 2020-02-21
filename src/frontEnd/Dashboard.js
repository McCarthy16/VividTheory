import React from 'react'; 
import './css/Dashboard.css';
import {Link} from 'react-router-dom';

// load backEnd connection, receive articles for dashboard page
const backEnd = require("./../packages/backEnd");
var back = new backEnd.backEnd();
back.setElements(); // currently only used to initialize the mock articles
var articles = back.getElements();
var pathName;
// React App to generate html with our data
// TODO: set max columns to 3 
export default class Dashboard extends React.Component{

  render(){
    console.log(this.props, "here");
    return (
          <div className="gallery">
            {
              articles.map(e1 => 
                
                <Link to={e1.url} id={e1.id} key={e1.id} >
                <div className="article-display-container" > 
                  <div className="article-display-card"> 
                    <h2> {e1.title}</h2> 
                    <p> {e1.body} </p> 
                    
                  </div> 
                </div>
              </Link>
            )
              
            }
          </div>
    );
  }
}


