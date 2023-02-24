import React from 'react';

export function Character({name, age, img}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <img src={img} alt={name}/>
        </div>
    )

}