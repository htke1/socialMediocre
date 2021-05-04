import  { Component} from 'react';
import NavBar from '../component/NavBar'
import './Home.css'
class AddPost extends Component {


    render() {
        return(
            <div className="body">
            <NavBar />
            <center>           
             <h2 >Add a post.</h2>
            <form action="http://localhost:3005/posts" method="POST">
            <input name="propic" type="text" placeholder="Username"/>
            <input name="url" type="text" placeholder="PostUrl"/>
            <input name="caption" type="text" placeholder="Caption"/>
            <button type="submit">Add + </button>
            </form>
            </center>
            </div>
        )
    }
}

export default AddPost;