import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, ListGroup } from 'react-bootstrap'

class UserList extends React.Component{

    render(){
        return (
            <div className='col-md-6 offset-md-3 '>
                
                {this.props.users.map((user,index)=>{
                    return (<div key={user.id}><br/><div className='row'>
                <div className='col-md-4'>{
                    
                    <img src={this.props.images[index] }style={{width:"220px" ,height:"230px"}}/>
                }</div>
                    <div className='col-md-8'> <Card style={{background:'#DCDCDC'}}>
                        <Card.Title className='p-3 text-center'>Author Details</Card.Title>
                                    <Card.Body className='p-5' style={{height:"160px"}}>
                        <ListGroup as='li'  className='list-group-item text-center' style={{background:'#A9A9A9'}}><Link className='text-dark' to={`/user/${user.id}`}>{user.name}</Link></ListGroup>
                        </Card.Body>
                </Card></div></div></div>)
                })}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        users:state.users,
        images:state.images
    }
}
export default connect(mapStateToProps)(UserList)
