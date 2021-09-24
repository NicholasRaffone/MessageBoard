const makeComment = (text, post, token = "") => {
    const resp = fetch(`https://messageboard-back.herokuapp.com/api/comments/make_comment/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
        body: JSON.stringify(
            {
                'text': text,
                'post': post,
            }
        )
    }).then(resp => resp.json())
    return resp
}

export default makeComment;
