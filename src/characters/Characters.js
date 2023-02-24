import React from 'react';
import {Character} from "./index";

export function Characters({id}) {
    let person;
    let eric = {
        id: 1,
        name: 'Cartman Eric',
        age: 10,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEric_Cartman&psig=AOvVaw0LF3pxtAKbPqAAZyfJZXdT&ust=1677286843519000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjkiMb6rP0CFQAAAAAdAAAAABAE',
    };
    let kenny = {
        id: 2,
        name: 'McCormic Kenny',
        age: 10,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Dkenny%2BMccormick&psig=AOvVaw0Sz5NVgsW9rXQurLXHZP6U&ust=1677286812326000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjpw7f6rP0CFQAAAAAdAAAAABAE',
    }
    if (id === 1) {
        person = eric
    }
    if (id === 2) {
        person = kenny
    }
    return (
        <div>
            {
                <Character name={person.name} img={person.img} age={person.age}/>
            }
        </div>
    )

}

