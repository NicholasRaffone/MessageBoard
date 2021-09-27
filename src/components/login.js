import React, { useState } from 'react'

const Login = (props) => {
    const [pword, setPword] = useState('')
    const changePword = (newpword) => {
        setPword(newpword.target.value)
    }
    return (
        <div>
            <form className="mainblock">
                <input className="posttitleinp loginput" placeholder="Enter Password" value={pword} onChange={changePword} required="required" maxlength="50" />
                <input className="passinput" type="submit" onClick={(e) => { e.preventDefault(); props.checkpword(pword) }}></input>
            </form>
        </div>
    )
}
export default Login;
