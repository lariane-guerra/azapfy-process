/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Card.css'

export default ({img,name,onClick}) => {
      return(
     <>
        <div className= "layoutcard" onClick={onClick}> 
            <figure>
                <img src={img} alt={name} />
            </figure>
            <h3>{name}</h3> 
        </div>
    </> 
) 
}  