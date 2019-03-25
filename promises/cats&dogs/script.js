const dog = () => {

    const doges = [];

    for (let i = 0; i < 10; i++) {
        const getDoge = fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                return res.message;
            })
        doges.push(getDoge);
    }

    Promise.all(doges)
        .then((arr) => {
            arr.forEach(url => {
                let img = `<img src="${url}" alt="" />`;
                document.querySelector("#images").innerHTML += img;
            })
        })
}