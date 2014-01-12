Ext.define('ExtReddit.Application', {
    name: 'ExtReddit',

    extend: 'Ext.app.Application',

    views: [
        'SidePanel',
        'mainPanel'
    ],

    controllers: [
        'Main'
    ],

    stores: [
        'SubredditSearchs',
        'mains'
    ]
});
