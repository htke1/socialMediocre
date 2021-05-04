import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Like from 'react-bootstrap-icons/';
import { FacebookProvider, Feed } from 'react-facebook';
import UserIcon from './UserIcon';
function Card(props)
{
return(
    <div className="feed">
    <div className="card" width=" 18rem;">
    <UserIcon 
    username="Kasoonga"
    profilepic="https://cdn0.iconfinder.com/data/icons/activities-flat-colorful/2048/2145_-_Holding_flowers-512.png"
    />
    <img src={props.url} className="card-img-top" alt="..."/>
          <div className="card-body">
           <p className="card-text">{props.caption}</p>
           <button className="btn btn-outline-dark"><Like.Heart /></button>
           <button className="btn btn-outline-dark"><Like.ChatSquare /></button>
           <FacebookProvider appId="123456789">
        <Feed link="https://www.facebook.com">
          {({ handleClick }) => (
            <button className="btn btn-outline-dark" onClick={handleClick}><Like.Share/></button>
          )}
        </Feed>
      </FacebookProvider> 
           </div>
    </div>
    </div>
)
}

export default Card;