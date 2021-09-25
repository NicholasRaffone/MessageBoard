import React, { useState, useEffect } from 'react'

const MakePost = (props) => {
    const [classN, setClassN] = useState('hidden');
    useEffect(() => {
        console.log('change class')
        setClassN(props.class ? 'shown' : 'hidden')
    }, [props.class])
    return (
        <div className={`postcover ${classN}`} onClick={() => { setClassN('hidden'); props.setmakePost(false) }}>
            <div className="postdetail" onClick={(e) => e.stopPropagation()}>
                make post
            </div>
        </div >
    )
}
export default MakePost;