import React from "react";
import { Figure } from 'react-bootstrap'

const Card3 =({movieCard3})=> {
   
    return (
     
       
         <div className="fig">
            <div className="third">Favoris</div>
            {movieCard3.map((el)=>
            
            <Figure className="espfig">
            <Figure.Image
              width={300}
              height={400}
              alt="171x180"
              src={el.src}
              
            />
            <Figure.Caption  >
              
              
            <li class="menu-item">
            {el.title}
            <ul class="drop-menu">
              <li class="drop-menu-item">{el.title}</li>
              <li class="drop-menu-item">DESCRIPTION : {el.description}</li>
              <li class="drop-menu-item">RATE : {el.rate}</li>
              
            </ul>
          </li>
            
            
            </Figure.Caption >
          </Figure>
            )}


         </div>
             )
            }
            
            export default Card3
