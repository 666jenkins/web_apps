const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

class Obj {
    constructor(comment, title) {
        this.comment = comment
        this.title = title
    }
}

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 6,
        min: 2
    },
    wordsPerSentence: {
        max: 5,
        min: 1
    }
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    const data = [];

    for (let i = 0; i < 20; i++) {
        let post = new Obj(lorem.generateSentences(), lorem.generateWords())
        data.push(post)
    }

    res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});