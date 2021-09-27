import React, { useState, useEffect } from 'react';
import Main from './main'
import Login from './login'
import PostDetail from './postdetail'
import MakePost from './makepost'
import SideBar from './sidebar'
import Admin from './admin'
import getPostsMonth from '../apicalls/getpostsmonth'

const MainContainer = () => {
    const sha512 = require('js-sha512');
    const today = new Date();
    const start_month = 9
    const start_year = 2021
    const this_month = today.getMonth() + 1
    const this_year = today.getFullYear();
    const [locked, setLocked] = useState(false);
    const [validated, setValidated] = useState(false);
    const [showsidebar, setShowSidebar] = useState(false);
    const [token, setToken] = useState('');
    const [month, setMonth] = useState(this_month)
    const [year, setYear] = useState(this_year)
    const [postID, setID] = useState(-1);
    const [posts, setPosts] = useState([])
    const [currpost, setCurrpost] = useState([])
    const [makePost, setmakePost] = useState(false)
    const [coords, setCoords] = useState([])
    const checkhash = '20f0cfdc8935408bb8940b47de8838a8da6fa20c98b4931fefcb59febdb23976f8b1239706b70219b46d65945fc4b6620a97dd028faf7ae2a79dfe915912cb44'
    const checkpword = 'bd9abafc721a3cb0472b1f5b6e214648b3b5bf1a5bac41088674794193b0dfcacedc25411011b17279c0e3266040ca1ef6abf734f0f0762eb0e26b85b4030cd6'

    const verifyToken = () => {
        return (
            checkhash === sha512(token)
        )
    }

    const dateinfo = {
        start_month: start_month,
        start_year: start_year,
        this_month: this_month,
        this_year: this_year
    }

    useEffect(() => { setValidated(verifyToken()) }, [, token])

    useEffect(() => {
        getPostsMonth(String(year), String(month)).then(resp => { setPosts(resp.posts) });
    }, [, makePost, year, month, postID]);

    //update currentpost as postID or posts changes: meaning if a posts is updated, posts will be displayed
    useEffect(() => {
        const val = posts.find(function (val) {
            return val.id === postID;
        });
        setCurrpost(val);
    }, [postID, posts])
    const checkPword = (pword) => {
        setLocked(checkpword === sha512(pword.toLowerCase()))
    }
    return (
        <React.Fragment>{locked ?
            <React.Fragment>{
                !validated ?
                    <Admin
                        setToken={(val) => setToken(val)}
                    /> :
                    null
            }
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
                    token={token}
                />
                <PostDetail
                    setID={(id) => setID(id)}
                    postID={postID}
                    class={postID != -1 ? "shown" : "hidden"}
                    currpost={currpost}
                    token={token}
                    validated={validated}
                />
                <Main
                    setID={(id) => setID(id)}
                    posts={posts}
                    setmakePost={(val) => setmakePost(val)}
                    setCoords={(val) => { setCoords(val) }}
                    valid={this_month === month && this_year === year}
                /> </React.Fragment> : <Login setLocked={(val) => setLocked(val)} checkpword={(val) => checkPword(val)} />}
        </React.Fragment>
    )
}

export default MainContainer;
