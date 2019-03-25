let p1 = new Promise((resolve, reject) => {
    resolve('Hello');
});

let p2 = new Promise((resolve, reject) => {
    resolve('World');
});

// let p3 = new Promise((resolve, reject) => {
//     reject('Not resolved');
// });

Promise.all([p1, p2])
    .then((resolveResult) => {
        // console.log(resolveResult);
        // const output = resolveResult.join(' ')

        const [hello, world] = resolveResult;
        const output = `${hello} ${world}`;

        console.log(output);
    })
    .catch((error) => {
        console.log(error);
    })

///////////////////////////////////////////////

let p1 = new Promise((resolve, reject) => {
    let date = new Date(Date.now());
    let currTime = `${date.getHours()}:${date.getMinutes()}`;
    resolve(currTime);
});

Promise.all([p1]).then((resolveResult) => {
    console.log(resolveResult.join(''));
})

//////////////////////////  ZADATAK  ///////////////////////////////////////////

const allPromises = [];

for (let id = 0; id < 100; id++) {

    const myPromise = new Promise((resolve, reject) => {

        const delay = Number.parseInt(Math.random() * 500)
        setTimeout(() => {
            resolve(`Promise with ID:${id} executed after ${delay}ms`)
        }, delay);

    })
        .then((resolveResult) => {
            console.log(resolveResult);
        })

    allPromises.push(myPromise)
}

Promise
    .all(allPromises)
    .then((_) => {
        console.log('-----------------------------------');
        console.log("All promises finished successfully!");
        console.log('-----------------------------------');
    })