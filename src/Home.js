import React from 'react'
import image1 from '../src/image/blog.jpg'
import image from '../src/image/welcm.jpg'
import image2 from '../src/image/pod.jpg'
import image3 from '../src/image/auth.jpg'
import image4 from '../src/image/auth1.jpg'
import image5 from '../src/image/authg1.jpg'
import {Carousel,Card } from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'



class Home extends React.Component{

    render(){
    return (<div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

<div className='row'>
    <div className='col-md-3'>
<h3>Latest Posts</h3>
</div>
<div className='col-md-3 offset-md-6'>
<h3>Authors</h3>
</div>
</div>
<div className='row'>
    <div className='col-md-3'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="bottom" src={image3} />
         <Card.Body>
          <Card.Title>Leanne Graham</Card.Title>
           <Card.Text>
           quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
    </Card.Text>
    <Link to={`/user/1`}><button className="btn btn-outline-primary">View Details</button></Link>
  </Card.Body>
</Card>
    </div>
    <div className='col-md-3'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="bottom" src={image5} />
         <Card.Body>
          <Card.Title>Clementine Bauch</Card.Title>
           <Card.Text>
           repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt
    </Card.Text>
    <Link to='/user/3'><button className="btn btn-outline-primary" >View Details</button></Link>
  </Card.Body>
</Card>
    </div>   
    <div className='col-md-3'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="bottom" src={image4} />
         <Card.Body>
          <Card.Title>Ervin Howell</Card.Title>
           <Card.Text>
           delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi
    </Card.Text>
    <Link to={`/user/2`}><button className="btn btn-outline-primary">View Details</button></Link>
  </Card.Body>
</Card>
    </div>
    <div className='col-md-3'>
        
        <ul className='list-group'>
            {
                this.props.users.map(user=>{
                return (<li className='list-group-item' key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>)
                })
            }
        </ul>
    </div>
</div>
</div>    )}
}

const mapStateToProps=(state)=>{
  return {
    users:state.users
  }
}

export default connect(mapStateToProps)(Home)