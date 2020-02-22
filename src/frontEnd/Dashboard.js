import React from 'react'; 
import './css/Dashboard.css';
import {Link} from 'react-router-dom';

// load backEnd connection, receive articles for dashboard page
const backEnd = require("./../packages/backEnd");
var back = new backEnd.backEnd();
back.setElements(); // currently only used to initialize the mock articles
//back.setConnection();
var articles = back.getElements();
// React App to generate html with our data
// TODO: set max columns to 3 
export default class Dashboard extends React.Component{

  render(){

    return (
      <div>
          <div className="gallery">
            {
              articles.map(e1 => 
                

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


// Normal Demo
//  .column
//    .demo-title Normal

    // Post
//    .post-module

      // Thumbnail
//      .thumbnail
//        .date
//          .day 27
//          .month Mar
//        img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg')

      // Post Content
//      .post-content
//        .category Photos
//        h1.title City Lights in New York
//        h2.sub_title The city that never sleeps.
//        p.description New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.
//        .post-meta
//          span.timestamp
//            i.fa.fa-clock- o
  //          |  6 mins ago
    //      span.comments
      //      i.fa.fa-comments
        //    a(href='#')  39 comments