import React, {useEffect, useState} from 'react';
import {getUserPosts, getUsers} from "../../services";
import {User} from "./User";
import {UserPost} from "./UserPost";

export function Users() {
    const [users, setUsers] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value))
    },[]);
    const showUserPost = (id) => {
        getUserPosts(id).then(value => setUserPosts(value))
    }

    return (
    <div className={'main'}>
        <div className={'users'}>
            {
                users.map(value => <User key={value.id}
                                         item={value}
                                         showUserPost={showUserPost}
 />)
            }
        </div>
        <div className={'posts'}>
            {
                userPosts.map(value => <UserPost key={value.id}
                                                 item={value} />)
            }
        </div>
    </div>
    )

}