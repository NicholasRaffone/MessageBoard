import React, { useState, useEffect } from 'react'

const PostDetail = (props) => {
    return (
        <div className={`postcover ${props.class}`} onClick={() => props.setID(-1)}>
            <div className="postdetail detail" onClick={(e) => e.stopPropagation()} style={{ 'backgroundColor': (props.currpost ? props.currpost.color : '') }}>
                <h1>{props.currpost ? props.currpost.title : ''}</h1>
                <h2>{props.currpost ? props.currpost.date : ''}</h2>
                <h3>{props.currpost && props.currpost.is_admin ? 'admin' : ''}</h3>
                <h2>{props.currpost ? props.currpost.text : ''}</h2>
                <hr />
                comments here
            <h4>comment form here</h4>
            </div>
        </div >
    )
}
export default PostDetail;