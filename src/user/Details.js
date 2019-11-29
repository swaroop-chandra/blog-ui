import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ListGroup, Button, Card} from 'react-bootstrap'
import {startGetUser} from '../actions/user'

class Details extends React.Component{
constructor(){
    super()
    this.state={
        isCom:false
    }
}
componentDidMount(){
    const id=this.props.post.userId
    this.props.dispatch(startGetUser(id))
}

handleClick=()=>{
    this.setState({
        isCom:!this.state.isCom
    })
    // console.log(this.state.comments)
}
render(){
    // console.log(this.props.match.params)
    return (
        <div className='col-md-8 offset-md-2'>
            <div className='row'>
                <div className='col-md-4'>
                <Card.Img variant='' src={this.props.images[(this.props.post.userId)-1]}/>
                </div>
                <div className='col-md-4'>
                <Card style={{background:'#DCDCDC',width:'600px'}}>
                <Card.Title className='text-secondary'>User Name:<Link to={`/user/${this.props.user.id}`}>{this.props.user.name}</Link></Card.Title>
                <Card.Body>{this.props.post.title}</Card.Body>
                <Card.Body>{this.props.post.body}</Card.Body>
                <Card.Footer><Button onClick={this.handleClick}>View more Posts</Button>
                <Link to={`/post/${this.props.match.params.id}/comment`} className='float-right'><Button>COMMENT</Button></Link></Card.Footer>
                </Card> 
                </div>
               </div>
                {this.state.isCom && (
                <ListGroup as='ul'><br/>
                    {this.props.posts.map(post=>{
                        if(post.id==this.props.match.params.id){
                            return <ListGroup.Item as='li' key={post.id} onClick={this.state.isCom=false} className='shadow p-3 mb-2 bg-secondary rounded'><Link to={`/posts/${post.id}`}>{post.title}</Link> </ListGroup.Item>
                        }
                        return (
                        <ListGroup.Item as='li' key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link> </ListGroup.Item>)
            })}
                </ListGroup>
            )}
        </div>
    )
}
}

const mapStateToProps=(state,props)=>{
    return {
        post:state.posts.find(post=>post.id==props.match.params.id),
        user:state.user,
        posts:state.posts,
        images:state.images
    }
}
export default connect(mapStateToProps)(Details)




                