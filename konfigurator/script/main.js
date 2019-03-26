const init = () => {
    const url = "https://www.eponuda.com/graficke-kartice-cene/gigabyte-rtx-2080-windforce-oc-8g-gv-n2080wf3oc-8gc-nvidia-geforce-rtx-2080-8gb-gddr6-256bit-graficka-kartica-cena-455179"

    $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent(url), function (data) {
        const page = data.contents;
        // console.log(page);
        const price = page.slice(page.indexOf('cena od <b>') + 11, page.indexOf('</b> do'))
        const priceNum = Number(price.slice(0, price.indexOf('.')) + price.slice(price.indexOf('.') + 1, price.length - 3))
        console.log(price);
        console.log(priceNum);

        $('.cena').append(`<b>${price}</b>`)
    });
}

export {
    init
}