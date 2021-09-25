import React, { useState, useEffect } from 'react';
import Main from './main'
import PostDetail from './postdetail'
import MakePost from './makepost'
import SideBar from './sidebar'
import getPostsMonth from '../apicalls/getpostsmonth'

const MainContainer = () => {
    const today = new Date();
    const start_month = 9
    const start_year = 2021
    const this_month = today.getMonth() + 1
    const this_year = today.getFullYear()
    const [showsidebar, setShowSidebar] = useState(false);
    const [token, setToken] = useState('');
    const [month, setMonth] = useState(this_month)
    const [year, setYear] = useState(this_year)
    const [postID, setID] = useState(-1);
    const [posts, setPosts] = useState([])
    const [currpost, setCurrpost] = useState([])
    const [makePost, setmakePost] = useState(false)
    const [coords, setCoords] = useState([])

    const dateinfo = {
        start_month: start_month,
        start_year: start_year,
        this_month: this_month,
        this_year: this_year
    }

    useEffect(() => {
        getPostsMonth(String(year), String(month)).then(resp => { setPosts(resp.posts) });
    }, [, makePost, year, month]);

    //update currentpost as postID or posts changes: meaning if a posts is updated, posts will be displayed
    useEffect(() => {
        const val = posts.find(function (val) {
            return val.id === postID;
        });
        setCurrpost(val);
    }, [postID, posts])

    return (
        <React.Fragment>
            <SideBar
                showsidebar={showsidebar}
                setShowSidebar={(val) => setShowSidebar(val)}
                dateinfo={dateinfo}
                setMonth={(val) => { setMonth(val) }}
                setYear={(val) => { setYear(val) }}
                year={year}
                month={month}
            />
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
                valid={this_month === month && this_year === year}
            />
        </React.Fragment>
    )
}

export default MainContainer;
