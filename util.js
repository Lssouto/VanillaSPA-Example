function methods(){ 
    return {
        destroyEvent: function(element, event, handler){
            const el = document.querySelector(element);
            if(el)
                document.querySelector(element).removeEventListener(event, handler, false);
            else
                console.error('El not found')
        },
        createEvent: function(element, event, handler){
            const el = document.querySelector(element);
            if(el)
                document.querySelector(element).addEventListener(event, handler);
            else
                console.error('El not found')
            
        },
        renderTemplate( container, content ){
            if(!container) 
                container = this.getMainContainer();
            container.innerHTML = content;
        },
        getMainContainer: function(){
            return document.querySelector('div[app]');
        },
        serializeForm: function(selector){
            let form = document.querySelector(selector);
            if(!form)
                return;
            let elements = form.elements;
            elements = Array.prototype.slice.call(elements);
            let payload = {};
            elements.forEach( el => {
                if(el.getAttribute('type') && el.getAttribute('type').toLowerCase() != 'submit'){
                    const key = el.getAttribute('name');
                    const value = el.value;
                    if (key){
                        payload[key] = value;
                    }
                }
            })
            return payload;
        }
    }
}
