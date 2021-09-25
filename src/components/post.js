import React, { useState, useEffect } from 'react'

const Post = (props) => {
    const [style, setStyle] = useState()
    const clickHandler = (e) => {
        props.setID(props.id)
        e.stopPropagation();
    }
    useEffect(() => {
        setStyle({ 'top': `${props.ypos}px`, 'left': `${props.xpos}px`, 'backgroundColor': `${props.color}` })
    }, [, props])
    return (
        <div className="element" onClick={(e) => clickHandler(e)} style={style}>
            <p>
                {props.title}
            </p><br />
            {props.is_admin ? <img className="checkmark" src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" /> : null}
        </div>
    )
}
export default Post