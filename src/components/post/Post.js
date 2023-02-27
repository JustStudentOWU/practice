import React from 'react';

export function Post({chosePost, item}) {
    return (
        <div>
            {item.id} - {item.title} - <button onClick={() => {
            chosePost(item);
        }
        }>info</button>
        </div>
    )

}