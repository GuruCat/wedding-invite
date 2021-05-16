'use strict';

$(document).ready(function() {
    $('#w-account').click(function(){
        $('#w-account-num').toggle('slow');
    });
    $('#m-account').click(function(){
        $('#m-account-num').toggle('slow');
    });

    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });

    $('#youtube-streaming').click(function () {
        window.open('https://www.youtube.com/channel/UCKoYfu4nhEXq352BFDbO0_Q', 'newWindow');
        return false;
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