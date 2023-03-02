import React, {useState} from 'react';
import {ChosenUser} from "./ChosenUser";
import {getUser} from "../../services";

export function User({item, showUserPost}) {
    const [toggle, setToggle] = useState(false);
    const [chosenUser, setChosenUser] = useState({});
    const findUser = (id) => {
        getUser(id).then(value => setChosenUser(value));
    }
    return (
        <div>
            {item.id} - {item.name} - <button onClick={() => {
            findUser(item.id);
            setToggle(!toggle);
        }}>details</button>
            <button onClick={() => {
            showUserPost(item.id);
            }}>User posts
            </button>
            {
                chosenUser.id && toggle && <ChosenUser item={chosenUser}/>
            }
            <hr/>
        </div>
    )

}