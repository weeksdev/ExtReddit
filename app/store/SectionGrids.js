Ext.define('ExtReddit.store.SectionGrids', {
    extend:'Ext.data.Store',
    fields: ['section', 'link'],
    data: {
        'items': [
            { 'section': 'Main', 'link': 'http://www.reddit.com/.json' },
            { 'section': 'New', 'link': 'http://www.reddit.com/new/.json' },
            { 'section': 'Rising', 'link': 'http://www.reddit.com/rising/.json' },
            { 'section': 'Controversial', 'link': 'http://www.reddit.com/controversial/.json' },
            { 'section': 'Top', 'link': 'http://www.reddit.com/top/.json' },
            { 'section': 'Gilded', 'link': 'http://www.reddit.com/gilded/.json' }
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