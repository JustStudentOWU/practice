import React from 'react';

export function UserPost({item}) {
    return (
        <div>
            {item.id} - {item.name} - {item.body}
        </div>
    )

}