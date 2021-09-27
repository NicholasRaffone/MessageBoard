const removePost = (id, token = "") => {
    const resp = fetch(`https://messageboard-back.herokuapp.com/api/posts/${id}/remove_post/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'token': token
        }
    }).then(resp => resp.json())
    return resp
}

export default removePost;
