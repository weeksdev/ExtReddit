Ext.define('ExtReddit.view.mainPanel', {
    extend: 'Ext.view.View',
    requires:['ExtReddit.store.mains'],
    xtype: 'mainPanel',
    scroll:'vertical',
    padding:'10 10 10',
    defaults: {
        padding:'10 10 10'
    },
    store: 'mains',
    tpl:new Ext.XTemplate(
        '<tpl for=".">',
        '<div class="itemFormat">',
        '<table border="0">',
        '<tr>',
        '<tpl if="this.isImage(thumbnail)" style:"display:inline;">',
        '<td rowspan="3">',
        "<a href='{url}' target='_blank'><img class='imageFormat' src=" + '{thumbnail}' + " /></a>",
        '</td>',
        '</tpl>',
        '<tpl if="this.isImage(thumbnail)==false" style:"display:inline;">',
        '<td rowspan="3">',
        "<img class='imageFormat' src='images/feellikeasir.gif' height=75 />",
        '</td>',
        '</tpl>',
        '<td><a name={id}></a><a href="{url}" target="_blank"><div class="itemTitle">{title}</div></a></td>',
        '</tr>',
        '<tr>',
        '<td><div class="itemBy">({domain}) By: {author} </div></td>',
        '</tr>',
        '<tr>',
        '<td><div class="itemStats"><div class="itemStatsSmaller">{ups}</div>:<div class="itemStatsBigger">{score}</div>:<div class="itemStatsSmaller">{downs}</div></div>View Comments</td>',
        '</tr>',
        '</table>',
        '</div>',
        '</tpl>',
        '<input type="button" value="Show More"/>',
        {
            isImage: function (thumbnail) {
                var url = '';
                url = url + thumbnail;
                return (url.indexOf("http")>=0)
            }
        }
    ),
    itemSelector: 'div.itemFormat',
    selectedItemCls:'selectedItemFormat'
});