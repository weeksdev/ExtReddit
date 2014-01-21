Ext.define('ExtReddit.Application', {
    name: 'ExtReddit',

    extend: 'Ext.app.Application',

    views: [
        'SectionView',
        'SectionGrid',
        'SidePanel',
        'mainPanel'
    ],

    controllers: [
        'Main'
    ],

    stores: [
        'SectionGrids',
        'SubredditSearchs',
        'mains'
    ]
});
