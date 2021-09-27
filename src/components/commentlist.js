import React, { useRef } from 'react'
import CommentEntry from './commententry'

const CommentList = (props) => {
    return (
        <div className="commentdiv">
            {
                props.comments !== [] ?
                    props.comments.map((val, i) => {
                        return (
                            <CommentEntry val={val} incComments={props.incComments} validated={props.validated} token={props.token} />
                        )
                    }) : null
            }
        </div>
    )
}
export default CommentList;