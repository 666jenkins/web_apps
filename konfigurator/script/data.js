class Product {
    constructor(input) {
        this.getPrice = () => {

            let index1;
            let index2;

            if (input.includes('cena od <b>')) {
                index1 = input.indexOf('cena od <b>') + 11;
                index2 = input.indexOf('</b> do');
            } else {
                index1 = input.indexOf('cena <b>') + 8;
                index2 = input.indexOf('</b> din')
            }

            return input.slice(index1, index2)
        }

        this.title = input.slice(input.indexOf('<h1>') + 4, input.indexOf('</h1>') - 5)
        this.price = this.getPrice();
        this.priceInt = Number(this.price.slice(0, this.price.indexOf('.')) + this.price.slice(this.price.indexOf('.') + 1, this.price.length - 3))

    }
}

const fetchPage = () => {

    const url = "https://www.eponuda.com/4k-ultra-hd-monitori/samsung-lu28d590ds-4k-uhd-cena-333821"

    const fetchItem = fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
        .then(response => {
            if (response.ok) return response.json()
        })
        .then(data => {

            console.log(data.contents);
            const item = new Product(data.contents)

            console.log(item);
            return item;
        })
    return fetchItem;
}

export {
    fetchPage
}