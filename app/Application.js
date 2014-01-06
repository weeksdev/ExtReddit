Ext.define('ExtReddit.Application', {
    name: 'ExtReddit',

    extend: 'Ext.app.Application',

    views: [
        'mainPanel'
    ],

    controllers: [
        'Main'
    ],

    stores: [
        'mains'
    ]
});
