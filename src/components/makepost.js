import React, { useState, useEffect } from 'react'
import PostForm from './postform'

const MakePost = (props) => {
    const [classN, setClassN] = useState('hidden');
    useEffect(() => {
        setClassN(props.class ? 'shown' : 'hidden')
    }, [props.class])
    return (
        <div className={`postcover ${classN}`} onClick={() => { setClassN('hidden'); props.setmakePost(false); }}>
            <div className="postdetail form" onClick={(e) => e.stopPropagation()}>
                <PostForm
                    xpos={props.coords[0]}
                    ypos={props.coords[1]}
                    setmakePost={props.setmakePost}
                />
            </div>
        </div >
    )
}
export default MakePost;