import * as data from './data.js'
import * as ui from './ui.js'

function init() {
    data.fetchUsers(ui.displayUsers);
}
export { init };