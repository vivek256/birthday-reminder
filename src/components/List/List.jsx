import React from 'react'
import './List.css'


const List = (props) => {
    return (
        <div className='list-component'>
            <img src={props.Data.image} alt={props.Data.name} />
            <div><h4>{props.Data.name}</h4><p>{props.Data.age} years</p></div>
        </div>
    )
}

export default List