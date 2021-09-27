import React, { useState } from 'react'
import RemovePost from '../apicalls/removepost'
import FlagPost from '../apicalls/flagpost'

const PostInfo = (props) => {
    const [flagged, setFlagged] = useState(false)
    return (
        <div>
            <div className="titletext">
                <h1>{props.currpost ? props.currpost.title : ''}</h1>
                <div className="verified">
                    <div className="hiddeninfo">
                        <span>Verified User</span>
                    </div>
                    {props.currpost && props.currpost.is_admin ?
                        <img className="checkmark" src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" /> :
                        null
                    }
                </div>
                <div className="delete">
                    {props.currpost && props.validated ?
                        <img className="checkmark" onClick={() => { RemovePost(props.currpost.id, props.token).then(() => props.reset()) }} src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png" /> :
                        <img className="checkmark" onClick={() => { FlagPost(props.currpost.id); setFlagged(true) }} style={{ 'display': `${flagged ? "none" : ""}` }} src="https://cdn-icons-png.flaticon.com/512/985/985382.png" />}
                </div>
                <div className="exitbutton" >
                    {props.currpost ? <button onClick={() => props.reset()} >X</button> : null}
                </div>
            </div>
            <h2>{props.currpost ? props.currpost.date : ''}</h2>
            <h2>{props.currpost ? props.currpost.text : ''}</h2>
            { props.currpost ? <hr /> : null}
        </div >
    )
}
export default PostInfo;
