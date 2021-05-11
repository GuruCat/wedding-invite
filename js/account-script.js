'use strict';

$(document).ready(function() {
    $('#w-account').click(function(){
        $('#w-account-num').toggle('slow');
    });
    $('#m-account').click(function(){
        $('#m-account-num').toggle('slow');
    });

    var clipboard = new Clipboard('#m-account');
    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });

    var wAccClipboard = new Clipboard('#w-account');
    wAccClipboard.on('success', function(e) {
        console.log(e);
    });

    wAccClipboard.on('error', function(e) {
        console.log(e);
    });
});