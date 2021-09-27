import React, { useState } from 'react';

const Admin = (props) => {
    const [showform, setShowForm] = useState(false);
    const [pword, setPword] = useState('');
    const changePword = (newpword) => {
        setPword(newpword.target.value)
    }
    return (
        <div className="adminform">
            <form
                style={{ 'display': `${showform ? "" : "none"}` }}
                onSubmit={(e) => {
                    e.preventDefault(); setShowForm(false); props.setToken(pword); setPword('');
                }}>
                <input value={pword} onChange={(e) => changePword(e)} placeholder={"Admin Password"} />
            </form>
            <button className="login" onClick={() => setShowForm(true)}
            ><img src="https://cdn-icons-png.flaticon.com/512/747/747335.png" /></button>
        </div>
    )
}
export default Admin;