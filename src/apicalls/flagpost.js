const flagPost = (id) => {
    const resp = fetch(`https://messageboard-back.herokuapp.com/api/posts/${id}/flag_post/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(resp => resp.json())
    return resp
}

export default flagPost;
