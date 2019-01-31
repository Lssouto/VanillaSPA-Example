var _items = [
    {
        id: 0,
        title: 'Celular',
        description: 'Um celular muito top',
        price: '1.500,00'
    },
    {   
        id: 1,
        title: 'Computer',
        description: 'melhor q xiaomi',
        price: '5.500,00'
    },
    {   
        id: 2,
        title: 'PS4',
        description: 'TopZera',
        price: '4.400,00'
    },
    {   
        id: 3,
        title: 'XBOX',
        description: 'Melhor q o ps4',
        price: '5.500,00'
    },
    {   
        id: 4,
        title: 'TVs',
        description: 'Uma tv gigante para sua casa',
        price: '5.500,00'
    }
];
const itemService = function() {
    const _methods = {
        get: () => {
            return _items;
        },
        post: (item) => {
            item.id = _items[_items.length-1].id + 1 ;
            _items.push(item);
        },
        del: (id) => {
            let index = _items.findIndex((it) => {
                return it.id == id;
            })
            console.log(_items.splice(index,1));
        },
        put: (item) => {
            let index = _items.findIndex((it) => {
                return it.id == id;
            })
            _items.splice(index,1, item);
        },
        getOne: (id) =>{
            return _items.find((it) => {
                return it.id == id;
            })
        }
    }
    return {
        get: _methods.get,
        post: _methods.post,
        del: _methods.del,
        put: _methods.put,
        getOne: _methods.getOne
    }
}


