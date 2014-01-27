Ext.define('ExtReddit.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'SidePanel',
        bodyPadding:5,
        width: 300,
        collapsible: true,
        collapsed:false
    }, {
        style: 'background-color:white !important;',
        xtype: 'mainPanel',
        title: 'Hot',
        autoScroll: true,
        border:0
    }, {
        xtype: 'NavigationPanel',
        bodyPadding: 5,
        border:0,
        height: 40,
        region:'south'
    }]
});