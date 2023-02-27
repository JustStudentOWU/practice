import React, {useState} from 'react';
import {ChosenUser} from "../chosenUser/ChosenUser";

export function User({item, userInfo, chosenUser}) {
    let [toggle, setToggle] = useState(false);
    return (
        <div>
            {item.id} - {item.name} - <button onClick={() => {
            userInfo(item);
            setToggle(!toggle)
        }
        }>info</button>
            <div>
                {
                    chosenUser.id === item.id && toggle && <ChosenUser item={chosenUser}/>
                }
            </div>
        </div>
    )

}