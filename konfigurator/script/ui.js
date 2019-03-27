const printItem = item => {

    $('.list-group')
        .append(
            $(`<li>${item.title}</li>`)
                .addClass("list-group-item d-flex justify-content-between align-items-center")
                .append(
                    $(`<span>${item.price} din</span>`)
                        .addClass("badge badge-primary badge-pill")
                )
        )
}

export {
    printItem
}