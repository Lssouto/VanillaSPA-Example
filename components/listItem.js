const listItem = new Component(() => {
    this._item = {};
    const renderTemplate = () => {
        return      `<div class="title">` +this._item.title+ `</div>` +
                    `<p>` +this._item.description+ `</p>` + 
                    // `<button class="btn __navigate" onCLick="router.navigateTo('item', {id: ${this._item.id}})">Editar</button>` +
                    `<button class="btn __navigate">Editar</button>` +
                    `<button class="btn __remove">Remover</button>`;
    };

    const init = (item) => {
        this._item = item;
    };

    return {
        renderTemplate,
        init
    };
});