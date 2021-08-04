import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Detail = ({match,movieCard}) => {
const movie= movieCard.find(elt => elt.id.toString() === match.params.id.toString())
    return (
        <div className="bande">
          <Card  key={movie.id} style={{ width: '30rem' }}>
                 <Card.Img  variant="top" src={movie.src} />
                 <Card.Body className="heni">
                   <Card.Title>{movie.title}</Card.Title>
                   <Card.Text>
                     {movie.description}
                   </Card.Text>
                   <Link to={`/card/${movie.id}/${movie.id}`}><Button variant="danger"  >Bande-annonce</Button></Link>
                 </Card.Body>
               </Card>
               </div> )
    
}

export default Detail
