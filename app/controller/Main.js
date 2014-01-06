Ext.define('ExtReddit.controller.Main', {
    extend: 'Ext.app.Controller',
    views: ['mainPanel'],
    getMainPanel: function () {
        return Ext.ComponentQuery.query('mainPanel')[0];
    },
    init: function () {
        Ext.getStore('mains').on('load', this.mainStoreLoaded, this);  
        this.control({
            'mainPanel': {
                select: this.itemSelected
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
            }
        });
    },
    navigation: function (btn) {
        var s = Ext.getStore('mains');
        var panel = this.getMainPanel();
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
    itemSelected: function (item) {
        //console.log(item);
        //var url = item.selected.items[0].get('url');
        //var site = Ext.Element.select('iframe');
        //site.elements[0].src = url;
        //console.log(url);
        //window.open(
        //    url,
        //    '_blank' // <- This is what makes it open in a new window.
        //);
    },
    mainStoreLoaded: function (s) {
        console.log('Main Store Loaded');
        console.log(s.getProxy().getReader().jsonData.data);
        var before = s.getProxy().getReader().jsonData.data.before;
        var beforeBtn = Ext.ComponentQuery.query('#previousPage')[0];
        var afterBtn = Ext.ComponentQuery.query('#nextPage')[0];
        var after = s.getProxy().getReader().jsonData.data.after;
        var page = Ext.ComponentQuery.query('mainPanel')[0];
        page.before = before;
        page.after = after;
        if (before == null) {
            beforeBtn.disable();
        } else {
            beforeBtn.enable();
        }
        if (after == null) {
            afterBtn.disable();
        } else {
            afterBtn.enable();
        }
    }
});