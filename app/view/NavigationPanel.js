Ext.define('ExtReddit.view.NavigationPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'NavigationPanel',
    defaults: {
        border:0
    },
    bbar: [{
        xtype: 'button',
        text: 'Previous',
        itemId:'previousPage'
    },{
        xtype: 'button',
        text: 'Next',
        itemId:'nextPage'
    }]
});