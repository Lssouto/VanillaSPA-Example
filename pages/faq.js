const faq = new Component(() => {
    const _methods = {
        handleSubmit: (e) => {
            e.preventDefault();
            let formValues = methods().serializeForm('#testeForm');
            console.log(formValues);
        }
    };

    const callScripts = () => {
        methods().createEvent('#testeForm', 'submit', _methods.handleSubmit);
    };
    const destroy = () => {
        methods().destroyEvent('#testeForm', 'submit', _methods.handleSubmit);
    };

    const renderTemplate = () => {
        return  '<section class="container">' +
                    '<form action="" id="testeForm">' +
                        '<div class="input-container">' + 
                            '<input type="text" name="nome" placeholder="Name" >' + 
                        '</div>' +
                        '<div class="input-container">' + 
                            '<input type="text" name="sobrenome" placeholder="Last name" >' + 
                        '</div>' +
                        '<div class="input-container">' + 
                            '<input type="text" name="message" placeholder="Message">' + 
                        '</div>' +
                        '<input type="submit" value="submit">' + 
                    '</form>' +
                '</section>';
    };

    return {
        _methods: _methods,
        callScripts: callScripts,
        destroy: destroy,
        renderTemplate: renderTemplate
    }
})