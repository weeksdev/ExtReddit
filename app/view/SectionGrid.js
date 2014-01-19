Ext.define('ExtReddit.view.SectionGrid', {
    extend:'Ext.grid.Panel',
    xtype: 'SectionGrid',
    store: 'SectionGrids',
    columns: [{
        header: 'Section',
        dataIndex:'section'
    }, {
        header: 'Link',
        dataIndex:'link'
    }]
});