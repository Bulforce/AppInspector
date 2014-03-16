/*
 * File: app/controller/Events.js
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

Ext.define('AI.controller.Events', {
    extend: 'Ext.app.Controller',

    requires: [
        'AI.util.extjs.Events',
        'AI.util.touch.Events',
        'AI.util.InspectedWindow'
    ],

    models: [
        'Event'
    ],
    stores: [
        'Events'
    ],
    views: [
        'Events'
    ],

    init: function(application) {
        this.control({
            'button#RecordEvents' : {
                'click' : this.onRecordEventsClick
            },

            'button#StopRecording' : {
                'click' : this.onStopRecordingClick
            },

            'button#ClearEvents' : {
                'click' : this.onClearEventsClick
            }
        });
    },

    onClearEventsClick: function(btn) {
        var me = this,
            store = Ext.getStore('Events');

        store.removeAll();
    },

    onRecordEventsClick: function(btn) {
        var me = this,
            store = Ext.getStore('Events'),
            util;

        btn.hide();
        btn.next().show();

        if (me.getApplication().info.framework === 'ext') {
            util = AI.util.extjs.Events.recordEvents;
        }
        else {
            util = AI.util.touch.Events.recordEvents;
        }

        var getEvents = function() {
            if (!me.recording) { return; }

            AI.util.InspectedWindow.eval(
                util,
                null,
                function (events) {
                    store.add(events);

                    requestAnimationFrame(getEvents);
                }
            );
        };


        me.recording = true;
        requestAnimationFrame(getEvents);
    },

    onStopRecordingClick: function(btn) {
        var me = this,
            util;

        me.recording = false;

        btn.prev().show();
        btn.hide();

        if (me.getApplication().info.framework === 'ext') {
            util = AI.util.extjs.Events.stopEvents;
        }
        else {
            util = AI.util.touch.Events.stopEvents;
        }

        AI.util.InspectedWindow.eval(
            util,
            null,
            Ext.emptyFn
        );
    }

});
