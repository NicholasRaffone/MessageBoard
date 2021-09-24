const getCommentsPost = (post) => {
    const resp = fetch(`https://messageboard-back.herokuapp.com/api/comments/get_comments_post/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                'post': post
            }
        )
    }).then(resp => resp.json())
    return resp
}

export default getCommentsPost;
