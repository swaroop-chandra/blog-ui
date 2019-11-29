import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card,ListGroup, Badge} from 'react-bootstrap'


class UserList extends React.Component{

    render(){
        return (
            <div className='row'>
        <div className='col-md-5 offset-md-1'>
                

        <Card style={{ width: '40rem'}}>
        <Card.Body>
            <Card.Header><h3 className='text-dark'>{this.props.user.name}</h3></Card.Header><br/>
            <Card.Title className='offset-md-1 text-secondary font-weight-bold'>UserName: {this.props.user.username}</Card.Title>
            <Card.Text className='offset-md-1 text-secondary font-weight-bold'>Email:{this.props.user.email}              
            </Card.Text>
            <hr/>
            <ListGroup as='ul'> 
            <ListGroup.Item as='li' className='d-flex justify-content-between align-items-center' active>List of Posts
            <Badge variant='dark'className='badge-allign-right' >{this.props.posts.length}</Badge></ListGroup.Item>
            
            {this.props.posts.map(post=>(
                <ListGroup.Item as='li' key={post.id} className='list-group-item'><Link to={`/posts/${post.id}`}>{post.title}</Link></ListGroup.Item>
                
            ))}</ListGroup>
            </Card.Body>
            </Card>
            </div>
            <div className='col-md-3 offset-md-1'>
            <Card style={{ width: '25rem' }}>
                
            <Card.Img variant="top" src={this.props.image} />
            </Card>
            </div>

        </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return {
        user:state.users.find(user=>user.id==props.match.params.id),
        image:state.images[(props.match.params.id)-1],
        posts:state.posts.filter(post=>post.userId==props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserList)