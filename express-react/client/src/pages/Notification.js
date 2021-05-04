import React, { Component } from 'react';
import NavBar from '../component/NavBar'
class Notification extends Component {
  constructor(){
    super();
    this.state ={notifications: []};
}
componentDidMount() {
       fetch('/notifications')
         .then(res => {
             console.log(res);
             return res.json()
          })
         .then(notifications => { 
             console.log(notifications); 
             this.setState({ notifications })
          });
      }
render() {
     return (
         <div className="App">
             <NavBar 
             page="notification"
             />
             {this.state.notifications.map(notification =>
             <div key={notification.id}>
            
             <h3>{notification.profile}</h3>
             <p>{notification.message}</p>
             </div>
           )}
         </div>
     );
 }
}

export default Notification;