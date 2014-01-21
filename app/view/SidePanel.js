Ext.define('ExtReddit.view.SidePanel', {
    extend: 'Ext.form.Panel',
    xtype: 'SidePanel',
    items: [{
        xtype:'component',
        border:0,
        html:[
            '<h1>Welcome.</h1>',
            '<div>An Simple ExtJS Port of Reddit.</div>',
            "<div>For the source, check out GitHub</div>",
            '<div>&nbsp;</div>'
            ]
    },{
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
        xtype:'SectionView'
    }]
});