import React from 'react'; 
import './../css/Dashboard.css';
import {Link} from 'react-router-dom';

// React App to generate dashboar's html with our data
export default class Dashboard extends React.Component{
  // constructor to initialize state values
  constructor(){
    super();
    this.state = {
      articles:[]
    }
  
  }
  // called when the component mounts
  // get the data from the backend
  componentDidMount(){
    fetch('/api')
      .then(res => res.json())
      .then(articles => this.setState({articles}));
  }

  // rend html for the 'root'
  render(){
    return (
      <div>
          <div className="gallery">
            {

              this.state.articles.map(e1 =>                
                <Link to={{
                  pathname:e1.url,
                  state: {
                    idx:e1.idx
                  }


                }} key={e1.idx}>              
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