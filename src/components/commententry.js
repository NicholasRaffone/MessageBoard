import React, { useState } from 'react'
import RemoveComment from '../apicalls/removecomment'
import FlagComment from '../apicalls/flagcomment'

const CommentEntry = (props) => {
    const [flagged, setFlagged] = useState(false)
    return (
        <div className="commenttext">
            <div className="username">
                <p>{props.val.is_admin ? "Verified Commenter" : "Anonymous Commenter"} ({props.val.date})</p>
                <div className="verified">
                    <div className="hiddeninfo">
                        <span>Verified User</span>
                    </div>
                    {props.val.is_admin ? <img className="checkmark" src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" /> : null}
                </div>
                <div className="delete">
                    {props.validated ?
                        <img className="checkmark" onClick={() => { RemoveComment(props.val.id, props.token).then(() => props.incComments()) }} src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png" /> :
                        <img className="checkmark" onClick={() => { FlagComment(props.val.id); setFlagged(true) }} style={{ 'display': `${flagged ? "none" : ''}` }} src="https://cdn-icons-png.flaticon.com/512/985/985382.png" />
                    }
                </div>
            </div>
            <p>{props.val.text}</p>
        </div>
    )
}
export default CommentEntry;