import React, { useState } from 'react'
import MakeComment from '../apicalls/makecomment'

const CommentForm = (props) => {
    const [text, setText] = useState('')
    const changeText = (newtext) => {
        setText(newtext.target.value)
    }
    return (
        <div className="commentform">
            {props.currpost ?
                <form>
                    <textarea value={text} onChange={changeText} /><br />
                    <input type="submit" onClick={(e) => {
                        e.preventDefault();
                        MakeComment(text, props.currpost.id).then(() => props.incComments());
                        setText('');
                    }} />
                </form>
                : null}
        </div>
    )
}
export default CommentForm;