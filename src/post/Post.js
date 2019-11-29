import React from 'react'
import {connect} from 'react-redux'
import {Link } from 'react-router-dom'
import image3 from '../image/Author.jpg'
import { Badge, Card } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'

class Posts extends React.Component{
    constructor(){
        super()
        this.state={
            items:[],
            hasMore:true,
            start:3,
            end:6
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            let items=this.props.posts.slice(0,3)
            this.setState({items:this.state.items.concat(items)})
        },1000)
        
    }

    fetchMoreData = () => {
        if (this.state.items.length!==this.props.posts.length) {
            // console.log('hi')
        let start=this.state.start,end=this.state.end
        let item=this.props.posts.slice(start,end)
            start=end
            end=end+3
            this.setState({start,end})
        setTimeout(() => {
            let items=this.state.items.concat(item)
          this.setState({items});
        }, 1500)
    }else{
        this.setState({ hasMore: false });
        // return;  
        // console.log('hello')

      }
      }

    render(){
// console.log(this.state.items)
        return (
        <div>
        <div className='row container'>   
        <div className='col-md offset-md-3 bg-secondary text-white'  >       
            <h2 className='d-flex justify-content-between align-items-center text-white'>Number of Posts
        <Badge variant ='dark'className='float-right text-center'>{this.state.items.length} of {this.props.posts.length}</Badge></h2>
                </div>
                </div>
            <div className='col-md-6 offset-md-3'>
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={this.state.hasMore}
                loader={<div className='text-center'><h4 className="spinner-grow ">.</h4></div>}
                endMessage={
                    <div className='col-md bg-secondary text-white center'  >       
            <h2 className='d-flex justify-content-between align-items-center text-white'>yay.!! you have finally seen all our post :)</h2>
                </div>
                }
        >
          
          {
                        this.state.items.map(item=>{
                            return (<div key={item.id}>
                                <Card style={{ width: '40rem' }} >
                                    <Card.Img variant="bottom" src={image3} />
                                    <Card.Body>
                                    <Card.Title><Link to={`/posts/${item.id}`}>{item.title}</Link></Card.Title>
                                    <Card.Text>{item.body}</Card.Text>
                                    <Link to={`/posts/${item.id}`}><button className="btn btn-outline-primary" >View Details</button></Link>
                                    </Card.Body>
                                    </Card><br/><hr/><br/>
                                    </div>
                            )}
                        )
                    }
        </InfiniteScroll>
                    
                
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Posts)



