import * as data from './data.js'
import * as ui from './ui.js'

const init = () => {
    data.fetchPage()
        .then(item => {
            ui.printItem(item)
        })
}

export {
    init
}