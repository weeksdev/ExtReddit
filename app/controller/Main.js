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
            }
        });
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
        var url = item.selected.items[0].get('url');
        var site = Ext.Element.select('iframe');
        site.elements[0].src = url;
        //console.log(url);
        //window.open(
        //    url,
        //    '_blank' // <- This is what makes it open in a new window.
        //);
    },
    mainStoreLoaded: function (s) {
        console.log('Main Store Loaded');
    }
});