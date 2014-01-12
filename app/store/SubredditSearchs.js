Ext.define('ExtReddit.store.SubredditSearchs', {
    extend: 'Ext.data.Store',
    model: 'ExtReddit.model.SubredditSearch',
    autoLoad: true,
    listeners: {
        load: function (me, records, successful, eOpts) {
            console.log(me);
            console.log(records);
            console.log(successful);
            console.log(eOpts);
        }
    }
});