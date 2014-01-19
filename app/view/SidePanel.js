Ext.define('ExtReddit.view.SidePanel', {
    extend: 'Ext.form.Panel',
    xtype:'SidePanel',
    items: [{
        xtype: 'fieldset',
        border:0,
        layout: 'hbox',
        items: [{
            xtype: 'textfield',
            emptyText: 'Search',
            itemId:'SearchField'
        }, {
            xtype: 'button',
            text: 'Search',
            itemId: 'SearchButton',
            margin:'0 10 0'
        }]
    }, {
        xtype:'SectionGrid'
    }]
});