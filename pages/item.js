const item = new Component( () => { 
    const renderTemplate = () => {
        return '<section class="container __item">' +
                    '<h1>' + this._item.title + '</h1>' +
                    '<p>' + this._item.description + '</p>' +
                    '<div class="__item-price">' +
                        '<span>$</span>'+
                        this._item.price +
                '</section>';
    }

    const init = (item) => {
        this._item = itemService().getOne(item.id);
        console.log(this._item)
    }
    return {
        renderTemplate: renderTemplate,
        init: init,
    }
});
