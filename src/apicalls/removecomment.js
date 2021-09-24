const removeComment = (post, id, token = "") => {
    const resp = fetch(`https://messageboard-back.herokuapp.com/api/comments/${id}/remove_comment/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
        body: JSON.stringify(
            {
                'post': post,
            }
        )
    }).then(resp => resp.json())
    return resp
}

export default removeComment;
