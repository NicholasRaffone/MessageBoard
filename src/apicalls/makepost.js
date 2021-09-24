const makePost = (title, text, xpos, ypos, color, token = "") => {
    const resp = fetch(`https://messageboard-back.herokuapp.com/api/posts/make_post/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
        body: JSON.stringify(
            {
                'title': title,
                'text': text,
                'xpos': xpos,
                'ypos': ypos,
                'color': color
            }
        )
    }).then(resp => resp.json())
    return resp
}

export default makePost;
