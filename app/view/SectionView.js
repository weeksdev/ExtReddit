Ext.define('ExtReddit.view.SectionView', {
    extend: 'Ext.view.View',
    requires: ['ExtReddit.store.SectionGrids'],
    xtype: 'SectionView',
    padding: '10 10 10',
    defaults: {
        padding: '10 10 10'
    },
    store: 'SectionGrids',
    tpl: new Ext.XTemplate(
        '<h2>Sections</h2>',
        '<tpl for=".">',
        '<div class="SectionItem">',
        '{section}',
        '</div>',
        '</tpl>'
    ),
    itemSelector: 'div.SectionItem',
    overCls: 'SectionItem-over',
    selectedItemCls: 'SectionItem-selected',
    itemCls:'SectionItem'
});