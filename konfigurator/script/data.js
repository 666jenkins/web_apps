class Product {
    constructor (input) {
        this.title = input.slice(input.indexOf('Srbija. ') + 8, input.indexOf('karakteristike'))
        this.price = input.slice(input.indexOf('cena od <b>') + 11, input.indexOf('</b> do'))
        this.priceInt = Number(this.price.slice(0, this.price.indexOf('.')) + this.price.slice(this.price.indexOf('.') + 1, this.price.length - 3))
    }
}

const fetchPage = () => {

    const url = "https://www.eponuda.com/racunari-procesori-cene/amd-ryzen-5-2600-6-core-3-4-ghz-socket-am4-procesor-cena-434702"

    const fetchItem = fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
        .then(response => {
            if (response.ok) return response.json()
        })
        .then(data => {

            const item = new Product(data.contents)

            console.log(item);
            return item;
        })
    return fetchItem;
}

export {
    fetchPage
}