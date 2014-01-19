Ext.define('ExtReddit.store.SectionGrids', {
    extend:'Ext.data.Store',
    fields: ['section', 'link'],
    data: {
        'items': [
            { 'section': 'New', 'link': 'New Stuff' },
            { 'section': 'Example', 'link': 'Right Here' },
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});