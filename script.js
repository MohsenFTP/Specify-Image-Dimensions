 $( window ).on( "load", function() {
    var x = document.getElementsByTagName("img");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].setAttribute("height", x[i].height);
        x[i].setAttribute("width", x[i].width);
    }
});
