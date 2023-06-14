import React from "react";
import { ReactDOM } from "react";
class Profile extends React.Component {
 render(){
     // this.props.img_url = 'http://via.placeholder.com/350x150'
     const style = {
         padding: '10px',
         border: '1px solid green',
         display: 'block',
         marginLeft: 'auto',
         marginRight: 'auto',
         width: '50%',
         color: '#4db1e8',
         textAlign: 'center',
         fontFamily: 'sans-serif'
     }
     return (
         <div style={style}>
           <img src={this.props.logo_url} height="250px"/>
           <h1>{this.props.title}</h1>
         </div>
     );
 }
}
module.exports = Profile;

ReactDOM.render(
 <Profile 
     logo_url="https://books.agiliq.com/projects/django-design-patterns/en/latest/_static/logo.png"
     title="Mobile App, Web App and API Development and More"/>,
 document.getElementById("main")
);