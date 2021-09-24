const flagComment = (id) => {
    const resp = fetch(`https://messageboard-back.herokuapp.com/api/comments/${id}/flag_comment/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(resp => resp.json())
    return resp
}

export default flagComment;
