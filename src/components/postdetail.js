import React, { useState, useEffect } from 'react'
import PostInfo from './postinfo'
import CommentForm from './commentform'
import getCommentsPosts from '../apicalls/getcommentspost'
import CommentList from './commentlist'

const PostDetail = (props) => {
    const [comments, setComments] = useState([])
    const [numcomments, setNumComments] = useState(0)
    const reset = () => {
        props.setID(-1);
        setComments([]);
    }
    useEffect(() => {
        if (props.currpost && props.currpost.id && props.currpost.id !== -1)
            getCommentsPosts(props.currpost.id.toString()).then(resp => { setComments(resp.comments) })
    }, [props.currpost, numcomments])
    return (
        <div className={`postcover ${props.class}`} onClick={() => reset()}>
            <div className="postdetail detail" onClick={(e) => e.stopPropagation()} style={{ 'backgroundColor': (props.currpost ? props.currpost.color : '') }}>
                <PostInfo currpost={props.currpost} reset={() => reset()} token={props.token} validated={props.validated} />
                <CommentList comments={comments} token={props.token} validated={props.validated} incComments={() => setNumComments(numcomments + 1)} />
                <CommentForm currpost={props.currpost} incComments={() => setNumComments(numcomments + 1)} token={props.token} />
            </div>
        </div >
    )
}
export default PostDetail;