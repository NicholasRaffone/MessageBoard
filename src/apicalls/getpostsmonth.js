const getPostsMonth = (year, month) => {
    const resp = fetch(`https://messageboard-back.herokuapp.com/api/posts/get_posts_month/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                'year': year,
                'month': month,
            }
        )
    }).then(resp => resp.json())
    return resp
}

export default getPostsMonth;
