function Component(lifecycle){

    let _lifecycle = lifecycle;
    let mockedHooks = {};

    const renderChildComponents = (components) => {
        if(!!components && components.length){
            components.forEach(comp => {
                const element = document.querySelector(comp.identifier);
                comp.component.init(element);
            })
        } else {
            return;
        }
    }

    if(!_lifecycle()['renderTemplate']){
        throw 'Template inválido';
    } else {
        mockedHooks.renderTemplate = _lifecycle().renderTemplate;
    }

    if(!_lifecycle()['destroy']){
        mockedHooks.destroy = () => {};
    } else {
        mockedHooks.destroy = _lifecycle().destroy;   
    }

    if(!_lifecycle()['callScripts']){
        mockedHooks.callScripts = () => {};
    } else {
        mockedHooks.callScripts = _lifecycle().callScripts;   
    }

    if(!_lifecycle()['events']){
        mockedHooks.events = {};
    } else {
        mockedHooks.events = _lifecycle().events;   
    }

    mockedHooks._methods = _lifecycle()._methods;
    mockedHooks.components = _lifecycle().components;
    // mockedHooks._components = {};

    // if(!!mockedHooks.components && mockedHooks.components.length){    
    //     mockedHooks.components.forEach( comp => {
    //         mockedHooks._components[comp.identifier] = comp.component;
    //     })
    // }


    if(!!_lifecycle()['init']){
        mockedHooks.init = (container, props) => {

            _lifecycle().init(props);

            if(container){
                methods().renderTemplate(container, mockedHooks.renderTemplate());
            } else {
                methods().renderTemplate(null, mockedHooks.renderTemplate());
            }
            mockedHooks.callScripts();

            renderChildComponents(mockedHooks.components);
        }
    } else {
        mockedHooks.init = (container) => {
            if(container){
                methods().renderTemplate(container, mockedHooks.renderTemplate());
            } else {
                methods().renderTemplate(null, mockedHooks.renderTemplate());
            }
            mockedHooks.callScripts();
            renderChildComponents(mockedHooks.components);
        }
    }


    
    return function(newLifecycle){

        this.callScripts = newLifecycle.callScripts;
        this.renderTemplate = newLifecycle.renderTemplate;
        this.destroy = newLifecycle.destroy;
        this.init = newLifecycle.init;
        this._methods = newLifecycle._methods;
        this.events = newLifecycle.events;
        return {
            events: this.events,
            destroy: this.destroy,
            init: this.init
        }
        
    }(mockedHooks)
}