import React, { useState } from 'react'
import MakePost from '../apicalls/makepost'

const PostForm = (props) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [color, setColor] = useState(0)
    const colors = ['#ff00ff', '#00ffff', '#ffff00']
    const changeTitle = (newtitle) => {
        setTitle(newtitle.target.value)
    }
    const changeText = (newtext) => {
        setText(newtext.target.value)
    }
    return (
        <form onSubmit={
            (e) => {
                e.preventDefault();
                MakePost(title, text, props.xpos, props.ypos, colors[color]);
                setTitle(''); setText(''); setColor(0);
                props.setmakePost(false)
            }
        }>
            <div className="postformtitle">
                <h1>Make a Post</h1>
                <div className="exitbutton" >
                    <button type="button" onClick={() => {
                        setTitle(''); setText(''); setColor(0);
                        props.setmakePost(false)
                    }} >X</button>
                </div>
            </div>
            <input value={title} onChange={changeTitle} required="required" maxlength="50" /><br />
            <textarea value={text} onChange={changeText} required="required" /><br />
            <br />
            {
                colors.map((val, i) => {
                    return <span class={`dot ${color === i ? 'selected' : ''}`} style={{ 'backgroundColor': val }} key={i} onClick={() => { setColor(i); }} />
                })
            }
            <br /><br />
            <input type="submit" />
        </form>
    )
}
export default PostForm;