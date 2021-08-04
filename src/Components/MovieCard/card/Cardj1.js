import React from 'react'

const Cardj1 = ({match,movieCard1}) => {
const movie= movieCard1.find(elt => elt.id.toString() === match.params.id.toString())

    return (
       <div>
           <p className="bande">{movie.src2}</p>
       </div>
    
    )}

export default Cardj1