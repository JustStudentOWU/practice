import React from 'react';

export function ChosenUser({item}) {
    return (
        <div>
            {item.name} - {item.username} - {item.email}
        </div>
    )

}