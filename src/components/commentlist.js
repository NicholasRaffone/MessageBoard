import React from 'react'

const CommentList = (props) => {
    return (
        <div className="commentdiv">
            {
                props.comments ?
                    props.comments.map((val, i) => {
                        return (
                            <div className="commenttext">
                                {val.text}
                            </div>
                        )
                    }) :
                    null
            }
        </div>
    )
}
export default CommentList;