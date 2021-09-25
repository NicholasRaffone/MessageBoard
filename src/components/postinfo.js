import React from 'react'

const PostInfo = (props) => {
    return (
        <div>
            <div className="titletext">
                <h1>{props.currpost ? props.currpost.title : ''}</h1>
                {props.currpost && props.currpost.is_admin ? <img className="checkmark" src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" /> : null}
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
