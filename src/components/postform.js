import React, { useState } from 'react'
import MakePost from '../apicalls/makepost'

const PostForm = (props) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [color, setColor] = useState(0)
    const colors = ['#ffe6ff', '#ffd6d6', '#fff4e6', '#fdffe6', '#e6ffec', '#e6fffb',]
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
                console.log(title, text, props.xpos, props.ypos, colors[color], props.token)
                MakePost(title, text, props.xpos, props.ypos, colors[color], props.token).then(() => props.setmakePost(false));
                setTitle(''); setText(''); setColor(0);
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
            <input placeholder="Enter a Title..." className="posttitleinp" value={title} onChange={changeTitle} required="required" maxlength="50" /><br />
            <textarea placeholder="Enter Some Text..." className="postvalinp" value={text} onChange={changeText} required="required" /><br />
            <br />
            {
                colors.map((val, i) => {
                    return <span class={`dot ${color === i ? 'selected' : ''}`} style={{ 'backgroundColor': val }} key={i} onClick={() => { setColor(i); }} />
                })
            }
            <br /><br />
            <input className="submitpost" type="submit" />
        </form>
    )
}
export default PostForm;