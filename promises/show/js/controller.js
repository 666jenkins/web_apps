import * as data from './data.js'
import * as ui from './ui.js'

function init() {
    data.fetchShows()
        .then((shows) => {
            ui.printShows(shows);
            ui.onClick();
        })
    data.searchShows((data) => {
        ui.addToDDItem(data);
        ui.onClick();
    });
}

function initDetail() {
    data.singleShow()
        .then((show) => {
            ui.printSingle(show);
        })
}

export {
    init,
    initDetail
}