import React, {useEffect, useState} from 'react';
import {User} from "../index";

export function Users() {
    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUser] = useState({});

    const userInfo = (user) => {
        setChosenUser(user);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value))
    }, [])
    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value} userInfo={userInfo} chosenUser={chosenUser}/>)
            }
        </div>
    )

}