import React,{Component} from 'react';
import NavbarContainer from './NavbarContainer'; 
import { Link } from 'react-router-dom'
import axios from "axios"

class Internship extends Component{

    state = {
        posts: [
          {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
          {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
          {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
        ],
        applyPosts:[]
    }      

    componentDidMount(){
        var result1
        axios.get("http://localhost:5000/posts/internships").then(res=>{
            result1 = res.data
            this.setState({
                ...this.state,
                posts : result1
            })
            console.log(this.state)
        })
      }

    render()
    {      
       // console.log(this.props)
        console.log(this.state)
        const { posts } = this.state
        console.log(posts)
        const postList = posts.length ? (
          posts.map(post => {
            return (
              <div className="post card" key={post.id}>
                <div className="card-content">
                <Link to={'/profile/' + post.authorId}>
                    <div className="card-title red-text"><h2>Morgan Stanley</h2></div>
                </Link>

                <div>
                    <span className="card-title red-text">{post.text}</span>
                </div>

      
                
                  
                </div>
              </div>
            )
          })
        ) : (
          <div className="center">No posts to show</div>
        )

        return(
            <div>
                <NavbarContainer/>
                <div><h1>Internships & Job Opportunities:</h1> <br/>{postList}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
      posts: state.posts
    }
  }

export default Internship ;
