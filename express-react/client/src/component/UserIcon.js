import './Card.css'
import * as Like from 'react-bootstrap-icons'
function UserIcon (props){
  return(
    <div className="User">
    <img class="propic" src={props.profilepic} alt="..."/>
    <h6 className="userName">{props.username}</h6>
    <button className="btn btn-outline-dark edit"><Like.PencilSquare /></button>
    </div>
  )
}
export default UserIcon;