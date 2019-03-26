const fetchPosts = () => {
    const request = fetch('http://127.0.0.1:3000')
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
    return request
}

export {
    fetchPosts
}