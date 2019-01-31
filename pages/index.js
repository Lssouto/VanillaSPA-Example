let home = new Component(() => {
    const _methods = {
        getListItem: () => {
            // document.querySelector('button.__load').setAttribute('disabled', '');
            let items = itemService().get();
            console.log(items)
            components[1].component.events.updateItens(items);
        },
        handleSubmit: (e) => {
            e.preventDefault();
            let formValues = methods().serializeForm('#item-form');
            console.log(formValues);
            const isFormValid = Object.keys(formValues).every(key => {
                return !!formValues[key];
            })
            if(isFormValid){
                itemService().post(formValues);
                _methods.addListItem(formValues);
            } else {
                throw 'Form inválido';
            }
        },
        clearList: () => {
            const list = document.querySelector('.list-item');
            list.innerHTML = "";
        }
    };

    const callScripts = () => {
        methods().createEvent('button.__load', 'click', _methods.getListItem);  
        methods().createEvent('#item-form', 'submit', _methods.handleSubmit);  
    };

    const destroy = () => {
        methods().destroyEvent('button.__load', 'click', _methods.getListItem);
        methods().destroyEvent('#item-form', 'submit', _methods.handleSubmit);
    };

    const components = [{
        identifier: 'c-header',
        component: header
    },
    {
        identifier: 'c-list',
        component: list
    }];

    const renderTemplate = () => {
        return  '<section class="container">' +
                    '<h1>Lista de itens</h1>' +
                    '<button class="btn __load" >Load more</button>' +
                    '<div class="form-title">Adicionar</div>' +
                    '<form id="item-form">'+ 
                        '<div class="input-container">' +  
                            '<label>Name:</label>' + 
                            '<input type="text" name="title">'+
                        '</div>' + 
                        '<div class="input-container">' + 
                            '<label>Description:</label>'+
                            '<input type="text" name="description">'+
                        '</div>' +
                        '<div class="input-container">' +
                            '<label>Price:</label>'+
                            '<input type="text" name="price">'+
                        '</div>' +
                        '<div class="action"><button class="__small">Add</button></div>' + 
                        '</form>' + 
                    '<c-list></c-list>' +
                    '</ul>' +
                '</section>' 
    };

    return {
        components,
        _methods,
        callScripts,
        renderTemplate,
        destroy
    }
});
