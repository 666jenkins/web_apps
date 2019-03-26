import * as data from './data.js';
import * as ui from './ui.js';

const init = () => {
    data.fetchPosts()
        .then((data) => {
            ui.printPosts(data);
        })
        .catch(ui.err)
}

export {
    init
}