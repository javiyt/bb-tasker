requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min',
        'bootstrap': 'libs/bootstrap.min',
        'backbone-lib': 'libs/backbone-min',
        'backbone-debug': 'libs/backbone.debug',
        'backbone': 'libs/backbone.localStorage-min',
        'underscore': 'libs/underscore-min',
        'text': 'libs/text',
        'domReady': 'libs/domReady'
    },
    shim: {
        'jquery': {
            'exports': '$'
        },
        'bootstrap': {
            'deps': ['jquery']
        },
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['underscore', 'jquery', 'backbone-lib', 'backbone-debug'],
            'exports': 'Backbone'
        },
        'backbone-lib': {
            'deps': ['underscore', 'jquery']
        },
        'backbone-debug': {
            'deps': ['backbone-lib']
        }
    }
});

// Require main
requirejs( ['domReady', 'jquery', 'bootstrap', 'backbone', 'script'], function( domReady, $, bootstrap, Backbone, AppRouter )
{
    domReady( function()
    {
        new AppRouter();
        Backbone.history.start();
    });
} );