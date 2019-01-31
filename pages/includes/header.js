const header = new Component(() => {

    const renderTemplate = () => {
        return ''+
            '<div class="navbar navbar-fixed-top">'+
                '<div class="navbar-brand">' +
                    '<a href="http://vanilla-js.com/" target="_blank">' + 
                        'VanillaJs' +
                    '</a>'+
                '</div>'+
                '<ul class="navbar-list">'+
                    `<li onclick='router.navigateTo("home")'>Home</li>`+
                    `<li onclick='router.navigateTo("FAQ")'>FAQ</li>`+
                '</ul>'+
            '</div>'
    }

    return {
        renderTemplate: renderTemplate
    }
})