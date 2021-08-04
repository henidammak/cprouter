import React from 'react'

const Cardj2 = ({match,movieCard2}) => {
const movie= movieCard2.find(elt => elt.id.toString() === match.params.id.toString())

    return (
       <div>
           <p className="bande">{movie.src2}</p>
       </div>
    
    )}

export default Cardj2