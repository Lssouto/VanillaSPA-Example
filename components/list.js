const list = new Component(() => {

    const _components = [];
    
    const _methods = {
        navigateTo(e){
            router.navigateTo('item', e.target.params);
        },
        removeItem(e){
            itemService().del(e.target.params);
        },
        removeChildEvents(){
            _components.forEach( comp => {
                comp.el.querySelector('.__remove').removeEventListener('click', _methods.removeItem, false);
                comp.el.querySelector('.__navigate').removeEventListener('click', _methods.navigateTo, false);
            })
        },
        createChildEvents(el, item){
            if(!el){
                return;
            }

            el.querySelector('.__remove').params = { id: item.id };
            el.querySelector('.__remove').addEventListener('click', _methods.removeItem);
            
            el.querySelector('.__navigate').params = { id: item.id };
            el.querySelector('.__navigate').addEventListener('click', _methods.navigateTo);
        
        },
        animations: { 
            animateIn: (el) => {
                el.classList.add('active');
                const delay = getComputedStyle(el).animationDuration.replace('s','') * 1000;
                setTimeout(() => {
                    el.classList.remove('animate-in');
                    el.classList.remove('active');
                }, delay)
                return delay;
            },
            animateMoveBottom: (el) => {
                new Promise( (res, rej) => {
                    el.classList.add('moveBottom');
                    res();
                }).then(() => {
                    el.classList.add('active');
                    let delay = getComputedStyle(el).transitionDuration.replace('s','') * 1000;
                    setTimeout(() =>{

                        el.classList.remove('moveBottom');
                        el.classList.remove('active');
                            
                    }, delay);
                })
                
                let delay = getComputedStyle(el).transitionDuration.replace('s','') * 1000;
                
                return delay;
            }
        },
        addItem: (item) => {
            const list = document.querySelector('.list-item');
            const child = document.createElement('li');
            let delay;
            
            child.classList.add('animate-in');
            child.setAttribute('key', item.id);

            list.childNodes.forEach( (children) => {
                delay = _methods.animations.animateMoveBottom(children);
            })
            
            list.appendChild(child)
            // list.insertBefore(child, list.lastChild)
            list.insertBefore(child, list.firstChild) //Insert on first child

            const itemComponent = listItem;
            itemComponent.init(child, item);
            _methods.createChildEvents(child, item);
            _components.push({comp: itemComponent, el: child});

            // console.log(_components);

            setTimeout(() => {
                _methods.animations.animateIn(child)
            }, delay)
        },
        renderItens: () => {
            // _methods.clearList();
            this._items.forEach( (it, index) => {
                setTimeout( () => {
                    _methods.addItem(it)  
                }, 550 * index)
            })   
        }
    };

    const renderTemplate = () => {
        return '<ul class="list-item"></ul>'
    }

    const events = {
        updateItens: (items) => {
            if(items){
                this._items = items;
                _methods.renderItens();
            }
        }
    }

    const destroy = () => {
        _methods.removeChildEvents();
    }

    return {
        renderTemplate,
        _methods,
        events,
        destroy
    }
})