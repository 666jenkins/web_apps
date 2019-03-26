const printPosts = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const post =
            `<div>
            <h3>${arr[i].title}</h3>
            <p>${arr[i].comment}</p>
            </div>`
        document.querySelector('main').innerHTML += post
    }
}

const err = () => {
    document.querySelector('main').innerHTML += `<h1> Server is kill</br>RIP server</br>+</h1>`
}

export {
    printPosts,
    err
}