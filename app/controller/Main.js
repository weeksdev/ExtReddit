Ext.define('ExtReddit.controller.Main', {
    extend: 'Ext.app.Controller',
    views: ['mainPanel'],
    stores:['mains'],
    getMainPanel: function () {
        return Ext.ComponentQuery.query('mainPanel')[0];
    },
    init: function () {
        Ext.getStore('mains').on('load', this.mainStoreLoaded, this);

        

        this.control({
            'mainPanel': {
                select: this.itemSelected,
                itemkeydown: this.itemKeyPressed
            },
            '#otherSitePanel': {
                resize: this.otherSiteResized,
                boxready:this.otherSiteResized
            },
            '#nextPage': {
                click: this.navigation
            },
            '#previousPage': {
                click:this.navigation
            },
            '#SearchButton': {
                click:this.Search
            },
            'SectionView': {
                selectionchange:this.sectionSelectionChanged
            },
            'mainPanel': {
                render:this.mainPanelRendered
            }
        });
    },
    mainPanelRendered: function () {
        var p = Ext.ComponentQuery.query('mainPanel')[0];
        var s = Ext.getStore('mains');
        p.getTargetEl().on('scroll', function (e, t) {
            var height = p.getTargetEl().getHeight();
            if (height + t.scrollTop >= t.scrollHeight) { //Fire method to load more data to the store.
                p.setLoading(true);
                Ext.data.JsonP.request({
                    callbackKey:'jsonp',
                    url: s.proxy.url,
                    params: {
                        'count': 25,
                        'after': p.after
                    },
                    headers: { 'Content-type': 'text/json;  charset=utf-8', 'Accepts': 'text/json' },
                    reader: {
                        type: 'json',
                        root: 'data.children',
                        successProperty: 'success'
                    },
                    success: function (response) {
                        p.after = response.data.after;
                        Ext.each(response.data.children, function (article) {
                            var data = article.data;
                            try{
                                s.add({
                                    id: data.id,
                                    domain: data.domain,
                                    subreddit: data.subreddit,
                                    author: data.author,
                                    over_18: data.over_18,
                                    thumbnail: data.thumbnail,
                                    subreddit_id: data.subreddit_id,
                                    downs: data.downs,
                                    ups: data.ups,
                                    permalink: data.permalink,
                                    name: data.name,
                                    url: data.url,
                                    title: data.title,
                                    num_comments: data.num_comments,
                                    score: data.score
                                });
                            } catch (ex) {
                                //do nothing the item already existed
                            }
                            //s.add(item);
                            //newItems[i] = item;
                            //i++;
                        });
                        p.setLoading(false);
                        //p.after = p.response.data.after;
                    }
                });
                   
            }
        });
    },
    sectionSelectionChanged: function (dv, selected, eOpts) {
        //if selection is made then take the link from the selection and apply to the main store.
        if (selected[0] != null) {
            var section = selected[0];
            var link = section.get('link');
            var store = Ext.getStore('mains');
            store.removeAll();
            store.proxy.url = link;
            store.proxy.extraParams = {
                'count': 25,
                'after': null
            };
            store.load();
        }
    },
    Search: function (btn) {
        var param = btn.up('panel').down('#SearchField').getValue();
        var s = Ext.getStore('mains');
        s.proxy.url = 'http://www.reddit.com/search.json?';
        s.proxy.extraParams = {
            count: 25,
            q:param
        };
        s.load();
        //Clear the current selection of sections if there is one.
        btn.up('viewport').down('SectionView').getSelectionModel().deselectAll();
    },
    itemKeyPressed: function (dv, record, item, index, e, eOpts) {

        if (e.keyCode == 13) {
            window.open(record.get('url'), '_blank');
        } else if (e.keyCode == 39) {
            this.navigation({
                itemId:'nextPage'
            });
        } else if (e.keyCode == 37) {
            this.navigation({
                itemId:'previousPage'
            });
        }
    },
    navigation: function (btn) {
        var s = Ext.getStore('mains');
        var panel = this.getMainPanel();
        console.log(panel.before);
        console.log(panel.after);
        switch (btn.itemId) {
            case 'previousPage':
                s.load({
                    params: {
                        'count': 25,
                        'before': panel.before
                    }
                });
                break;
            case 'nextPage':
                s.load({
                    params: {
                        'count': 25,
                        'after': panel.after
                    }
                });
                break;
        }
        

    },
    otherSiteResized: function (me, width, height) {
        //console.log(width);
        //console.log(height);
        var comp = Ext.ComponentQuery.query('#otherSiteComp')[0];
        comp.setHeight(height);
        comp.setWidth(width);
    },
    itemSelected: function (item,more) {
        mighty = more;
    },
    mainStoreLoaded: function (s) {
        var panel = Ext.ComponentQuery.query('mainPanel')[0];

        panel.getSelectionModel().select(0);

        //console.log('Main Store Loaded');
        //console.log(s.getProxy().getReader().jsonData.data);
        var before = s.getProxy().getReader().jsonData.data.before;
        //var beforeBtn = Ext.ComponentQuery.query('#previousPage')[0];
        //var afterBtn = Ext.ComponentQuery.query('#nextPage')[0];
        var after = s.getProxy().getReader().jsonData.data.after;
        var page = Ext.ComponentQuery.query('mainPanel')[0];
        page.before = before;
        page.after = after;
        //if (before == null) {
        //    beforeBtn.disable();
        //} else {
        //    beforeBtn.enable();
        //}
        //if (after == null) {
        //    afterBtn.disable();
        //} else {
        //    afterBtn.enable();
        //}
    }
});