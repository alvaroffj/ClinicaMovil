// the app method accepts a fn to invoke on init unobtrusively 
var run = function(application) {
    if (navigator.userAgent.indexOf('Browzr') > -1) {
        // blackberry
        setTimeout(application, 250)	
    } else {
        // attach to deviceready event, which is fired when phonegap is all good to go.
        x$(document).on('deviceready', application, false);
    }
}

// throw our settings into a lawnchair
, store = new Lawnchair({adaptor:'dom'})

// shows id passed
, display = function(id) {
    console.log(id);
    x$(["#welcome", "#map", "#settings"]).each(function(e, i) {
        console.log(x$("#welcome"));
        var display = '#' + x$(e)[0].id === id ? 'block' : 'none';
        console.log(display);
        x$(e).css({ 'display':display })
    });
}

// reg a click to [id]_button, displays id (if it exists) and executes callback (if it exists)
, when = function(id, callback) {
    console.log("when: "+id + '_button');
    console.log(x$(id + '_button'));
    x$(id + '_button').on('touchstart', function () {
        if (x$(id).length > 0) 
            display(id);
        if (callback)
            callback.call(this);
		return false;
    });
}

// gets the value of the setting from the ui
, ui = function(setting) {
    var radio = x$('#settings_form')[0][setting];
    for (var i = 0, l = radio.length; i < l; i++) {
        if (radio[i].checked)
            return radio[i].value;
    }
};

// console.log("lala");
// console.log(store);