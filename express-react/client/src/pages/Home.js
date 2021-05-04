import React, { Component } from 'react';
import NavBar from '../component/NavBar'
import Card from '../component/Card'
import "../component/Card.css";
import './Home.css';
import PostSide from '../component/PostSide'
import NotifSide from '../component/NotifSide'
class Home extends Component {
  constructor(){
      super();
      this.state ={users: []};
  }
  componentDidMount() {
         fetch('/users')
           .then(res => {
               console.log(res);
               return res.json()
            })
           .then(users => { 
               console.log(users); 
               this.setState({ users })
            });
        }
  render() {
       return (
           <div className="App">
             <NavBar 
             page="home"
             />
               <div className="container">
                 <div className="row">
                 <PostSide />
                 <div className="col-sm-8">
                   {this.state.users.map(user =>
                   <div key={user.id}>
                     <Card 
                        user={user.profile}
                        url={user.postUrl}
                        caption={user.caption}
                        />
                   </div>
      )}
    </div>
    <NotifSide />
  </div>
</div>
             </div>
          
       );
   }
}

export default Home;