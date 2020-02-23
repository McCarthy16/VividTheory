import React from 'react'; 
import './../css/Dashboard.css';
import {Link} from 'react-router-dom';
// load backEnd connection, receive articles for dashboard page
//const backEnd = require("./../packages/backEnd");
//var back = new backEnd.backEnd();
//back.setElements(); // currently only used to initialize the mock articles
//back.setConnection();
//var articles = back.getElements();
// React App to generate html with our data
export default class Dashboard extends React.Component{
  constructor(){
    super();
    this.state = {
      articles:[]
    }
  }

  componentDidMount(){
    fetch('/api/articles')
      .then(res => res.json())
      .then(articles => this.setState({articles}));
  }


  render(){
    return (
      <div>
          <div className="gallery">
            {

              this.state.articles.map(e1 =>                
                <Link to={e1.url} id={e1.id} key={e1.id} >              
                <div className="article-display-container" > 
                  <div className="article-display-img">
                    <div className="date">
                      <div className="day"> {e1.day}</div>
                      <div className="month">{e1.month}</div>
                    </div>
                  </div>
                  <div className="article-display-card"> 
                    <h2> {e1.title}</h2><br></br> 
                    <div className="article-preview"> {e1.preview} </div>                     
                  </div> 
                </div>               
              </Link>
            )    
          }
          </div>
          <footer className="App-footer">
            </footer>
          </div>
    );
  }
}