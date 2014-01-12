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
    },{
        //region: 'center',
        //xtype: 'tabpanel',
        //items:[{
            style:'background-color:white !important;',
            xtype: 'mainPanel',
            title:'Hot',
            autoScroll: true
        //}]
    }
    //{
    //    region: 'east',
    //    xtype: 'panel',
    //    itemId:'otherSitePanel',
    //    title: 'Selected Site',
    //    width: 600,
    //    resizable: true,
    //    items: [{
    //        xtype: 'component',
    //        itemId:'otherSiteComp',
    //        width:600,
    //        autoEl: {
    //            tag: 'iframe',
    //            frameBorder:0,
    //            src:'http://www.sencha.com/forum/showthread.php?226742-How-to-open-external-domain-web-page-inside-a-panel.-Web-with-javascript-fails.'
    //        }
    //    }]
    //}
    ]
});