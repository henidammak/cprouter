import React from 'react'

const Cardj = ({match,movieCard}) => {
const movie= movieCard.find(elt => elt.id.toString() === match.params.id.toString())

    return (
       <div>
           <p className="bande">{movie.src2}</p>
       </div>
    
    )}

export default Cardj