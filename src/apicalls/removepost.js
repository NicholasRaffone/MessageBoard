const removePost = (post, id, token = "") => {
    const resp = fetch(`https://messageboard-back.herokuapp.com/api/posts/${id}/remove_post/`, {
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

export default removePost;
