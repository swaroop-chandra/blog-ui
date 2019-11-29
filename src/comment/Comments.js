import React from 'react'
import axios from 'axios'
import image from '../image/comment.jpg'
import { Badge ,Card, ListGroup} from 'react-bootstrap'
import {startGetComments} from '../actions/comments'
import {connect} from 'react-redux'


class Comments extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    componentDidMount(){
        const iD=this.props.match.params.id
        // axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${iD}`)
        // .then(response=>{
        //     // console.log(response.data)
        //     const comments=response.data
        //     this.setState({comments})
        // })
        // .catch(err=>{
        //     alert(err)
        // })
        this.props.dispatch(startGetComments(iD))
    }

    render(){
        console.log(this.props.match.params)
        return (<div>
            <div className='container bg-secondary text-white '>
            <h2 className='d-flex justify-content-between align-items-center'>Number of Comments<Badge variant ='dark'className='float-right'>{this.props.comments.length}</Badge></h2>
            </div>
            <div className='row'>
                    {this.props.comments.map(comment=>{
                        return (                
                        <div className='col-md-1 offset-md-1 overflow-x:hidden' key={comment.id}>
                        <Card style={{ width: '12rem' }} >
                        <Card.Img variant="bottom" src={image} />
                        <Card.Body>
                        <Card.Title><p className='font-weight-bold'>name:</p><p>{comment.name}</p></Card.Title>
                        <ListGroup><p className='font-weight-bold'>email:</p>{comment.email}</ListGroup><p className='font-weight-bold'>commnt:</p>
                        <Card>{comment.body}</Card>
                        </Card.Body>
                        </Card><br/></div>)
                    }
                )}
            </div></div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        comments:state.comments
    }
}

export default connect(mapStateToProps)(Comments)

