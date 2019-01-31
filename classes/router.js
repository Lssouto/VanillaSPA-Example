function Router(routes){
    const _history = [];
    const _routes  = routes;
    const routerContainer = document.querySelector('router-view');
    const _methods = {
        renderRoute: (route, params) => { 
            const delay = getComputedStyle(routerContainer).transitionDuration.replace('s','') * 1000;
            routerContainer.classList.add('__out');
            _history.push(route);
            setTimeout(() => {
                methods().renderTemplate(routerContainer,'');
                route.component.init(routerContainer, params);
                routerContainer.classList.remove('__out');
                routerContainer.classList.add('__in');
            }, delay);

        },
        navigateTo: (to, params) => {
            if(_history.length){
                _history[_history.length-1].component.destroy();
            }  
            const activedRoute = _routes.find( rout => {
                return to == rout.name;
            })
            if(!activedRoute){
                console.error('Route "'+ to +'" not found');
                return;
            }
            else {
                _methods.renderRoute(activedRoute, params);
            }          
            
        },
        pop: () => {
            const poped = _history.pop();
            if(!poped){
                const homepage = _routes.find( rout => {
                    return rout.path == "/" ;
                }) 
                _methods.renderRoute(homepage)
            } else {
                poped.component.destroy();
                _methods.renderRoute(_history[_history.length-1])
            }
        }
    }
    return {
        navigateTo: _methods.navigateTo,
        pop: _methods.pop
    }
}


