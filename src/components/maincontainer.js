import React, { useState, useEffect } from 'react';
import Main from './main'
import PostDetail from './postdetail'
import MakePost from './makepost'
import getPostsMonth from '../apicalls/getpostsmonth'

const MainContainer = () => {
    const [postID, setID] = useState(-1);
    const [posts, setPosts] = useState([])
    const [currpost, setCurrpost] = useState([])
    const [makePost, setmakePost] = useState(false)
    const [coords, setCoords] = useState([])

    //get posts every time page loads / <<NEW POST IS MADE>>
    useEffect(() => {
        getPostsMonth('2021', '9').then(resp => { setPosts(resp.posts) });
    }, [, makePost]);

    //update currentpost as postID or posts changes: meaning if a posts is updated, posts will be displayed
    useEffect(() => {
        const val = posts.find(function (val) {
            return val.id === postID;
        });
        setCurrpost(val);
    }, [postID, posts])

    return (
        <React.Fragment>
            <MakePost
                class={makePost}
                setmakePost={(val) => setmakePost(val)}
                coords={coords}
            />
            <PostDetail
                setID={(id) => setID(id)}
                postID={postID}
                class={postID != -1 ? "shown" : "hidden"}
                currpost={currpost}
            />
            <Main
                setID={(id) => setID(id)}
                posts={posts}
                setmakePost={(val) => setmakePost(val)}
                setCoords={(val) => { setCoords(val) }}
            />
        </React.Fragment>
    )
}

export default MainContainer;
