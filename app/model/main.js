Ext.define('ExtReddit.model.main', {
	extend: 'Ext.data.Model',
	fields: [
		{ name:'id',mapping: 'data.id', type: 'auto' },
                { name: 'domain', mapping: 'data.domain', type: 'auto' },
		{ name: 'subreddit', mapping: 'data.subreddit', type: 'auto' },
		{ name: 'author', mapping: 'data.author', type: 'auto' },
		{ name: 'over_18', mapping: 'data.over_18', type: 'auto' },
		{ name: 'thumbnail', mapping: 'data.thumbnail', type: 'auto' },
		{ name: 'subreddit_id', mapping: 'data.subreddit_id', type: 'auto' },
		{ name: 'downs', mapping: 'data.downs', type: 'auto' },
		{ name: 'ups', mapping: 'data.ups', type: 'auto' },
		{ name: 'permalink', mapping: 'data.permalink', type: 'auto' },
		{ name: 'name', mapping: 'data.name', type: 'auto' },
		{ name: 'url', mapping: 'data.url', type: 'auto' },
		{ name: 'title', mapping: 'data.title', type: 'auto' },
		{ name: 'num_comments', mapping: 'data.num_comments', type: 'auto' },
        { name: 'score', mapping: 'data.score', type: 'auto' }
	],
	proxy: {
		type: 'jsonp',
		callbackKey:'jsonp',
		url: 'http://www.reddit.com/.json',
		extraParams: {
		    'count': 25,
                    'after':null
		},
		headers: { 'Content-type': 'text/json;  charset=utf-8', 'Accepts': 'text/json' },
		reader: {
			type: 'json',
			root: 'data.children',
			successProperty: 'success'
		}
	}
});
