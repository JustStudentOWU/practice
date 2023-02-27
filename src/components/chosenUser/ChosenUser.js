import React from 'react';

export function ChosenUser({item}) {
    return (
        <div>
            {item.name} - {item.email}
        </div>
    )

}