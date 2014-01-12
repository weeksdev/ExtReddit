Ext.define('ExtReddit.model.SubredditSearch', {
    extend: 'Ext.data.Model',
    fields: [
		{ name: 'name', mapping: 'name', type: 'auto' }
    ],
    proxy: {
        type: 'jsonp',
        callbackKey: 'jsonp',
        url: 'http://www.reddit.com/api/subreddits_by_topic.json',
        extraParams: {
            'query': 'ufo'
        },
        headers: { 'Content-type': 'text/json;  charset=utf-8', 'Accepts': 'text/json' },
        reader: {
            type: 'json',
            root: '',
            successProperty:''
        }
    }
});