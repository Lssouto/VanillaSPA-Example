const app = new Component(function(){
    return {
        renderTemplate: function(){
            return  '<div class="app-container">' + 
                        '<c-header></c-header>' +
                        '<div class="margin-from-nav"></div>'+
                        '<router-view class="transition-opacity"></router-view>' +
                    '</div>';
        }
    }
})
app.init();

const router = new Router([ 
    {
        component: home,
        name: 'home',
        path: '/'
    },
    {
        component: item,
        name: 'item',
        path: '/item'
    },
    {
        component: faq,
        name: 'FAQ',
        path: '/faq'
    }
]);

router.navigateTo('home');