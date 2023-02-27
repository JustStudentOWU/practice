import React, {useEffect, useState} from 'react';
import {Post, ChosenPost} from "../../components";

export function Posts() {
    let [posts, setPosts] = useState([]);
    let [chosenPost, setChosenPost] = useState({});
    let [toggle, setToggle] = useState(false);

    const chosePost = (post) => {
        setChosenPost(post);
        setToggle(!toggle);
    }

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => setPosts(value))
    }, []);
    return (
        <div>
            <div>
                {chosenPost.id && toggle && <ChosenPost item={chosenPost}/>}
            </div>
            {
                posts.map(value => <Post key={value.id} item={value} chosePost={chosePost}/>)
            }
        </div>
    )

}