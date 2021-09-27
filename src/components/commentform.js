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
                    <br />
                    <textarea value={text} onChange={changeText} className="postvalinp" /><br /><br />
                    <input type="submit" className="submitpost" onClick={(e) => {
                        e.preventDefault();
                        MakeComment(text, props.currpost.id, props.token).then(() => props.incComments());
                        setText('');
                    }} />
                </form>
                : null}
        </div>
    )
}
export default CommentForm;