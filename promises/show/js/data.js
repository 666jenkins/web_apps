const API_BASE_URL = 'http://api.tvmaze.com';

class Show {
    constructor(id, name, rating, image, summary, premiered, genres) {
        this.id = id
        this.name = name
        this.rating = rating
        this.image = image
        this.summary = summary
        this.premiered = premiered
        this.genres = genres
    }
}

const fetchShows = () => {
    const fetchPromise = fetch(`${API_BASE_URL}/show`)
        .then((response) => {
            return response.json()
        })
        .then((responseShows) => {
            const myShows = responseShows
                .slice(0, 50)
                .map((item) => {
                    const { id, name, rating, image } = item;
                    return new Show(id, name, rating.average, image.medium);
                });
            return myShows;
        })
    return fetchPromise
}

const singleShow = () => {
    const showId = localStorage.getItem('showId')
    const fetchPromise = fetch(`${API_BASE_URL}/shows/${showId}`)
        .then((response) => {
            return response.json()
        })
        .then((showData) => {
            console.log(showData);
            const myShow = new Show(
                showId,
                showData.name,
                undefined,
                showData.image.original,
                showData.summary,
                showData.premiered,
                showData.genres
            );
            return myShow;
        })
    return fetchPromise
}

function searchShows(addDropdown) {

    const searchBox = $('input');
    let showsFound;

    let searchRequest = `${API_BASE_URL}/search/shows?q=`

    searchBox.on('input', function () {
        let searchQuery = searchRequest + searchBox.val();
        $.get(searchQuery, function (searchData) {
            showsFound = searchData;
        })
        $(".dropdown-menu").html("");
        addDropdown(showsFound);
        $('.dropdown-toggle').dropdown();
    })


    // $('#target').submit(function(event) {
    //     event.preventDefault();
    // })
}

export {
    fetchShows,
    singleShow,
    searchShows
}