/*
 * File: app/view/Stores.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AI.view.Stores', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.stores',

    requires: [
        'AI.view.FilterField',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.form.field.Text',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.grid.property.Grid',
        'Ext.grid.Panel'
    ],

    initialLoad: false,
    itemId: 'StoreInspector',
    iconCls: 'icn-stores',
    title: 'Stores',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    height: 300,
                    itemId: 'StoreList',
                    store: 'Stores',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'RefreshStores',
                                    iconCls: 'icn-refresh',
                                    text: 'Refresh'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'filterfield',
                                    itemId: 'FilterStoresList'
                                }
                            ]
                        }
                    ],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'id',
                            text: 'Store ID',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'count',
                            text: 'Record Count'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    itemId: 'StoreDetails',
                    resizable: true,
                    resizeHandles: 'n',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            itemId: 'RecordList',
                            title: 'Store Records',
                            store: 'Records',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    resizable: false,
                                    dataIndex: 'id',
                                    text: 'Record ID',
                                    flex: 1
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    itemId: 'mypagingtoolbar',
                                    width: 360,
                                    displayInfo: true,
                                    store: 'Records'
                                }
                            ]
                        },
                        {
                            xtype: 'propertygrid',
                            itemId: 'RecordDetail',
                            width: 300,
                            resizable: true,
                            resizeHandles: 'w',
                            title: 'Record Details',
                            nameColumnWidth: '50%',
                            source: {
                                
                            }
                        }
                    ]
                }
            ],
            listeners: {
                beforeadd: {
                    fn: me.onStoreInspectorBeforeAdd,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onStoreInspectorBeforeAdd: function(container, component, index, eOpts) {
        this.setTitle(AI.util.i18n.getMessage(this.title));

    }

});