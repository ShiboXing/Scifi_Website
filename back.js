
$(document).ready(function(){ 
    $("#nav_placeholder").load("nav_bar.html");
    $("#footer_placeholder").load("footer.html");

    header=$("header");
    header.css("height","400px");
    r=$('.r');
    g=$('.g');
    m=$('.johnny');
    //the degree of overlapping flashing effect
    limit=30;

    rleft=r.css('left').split('px')[1];
    gleft=g.css('left').split('px')[1];
    mleft=m.css('left').split('px')[1];

    console.log("rleft: " +rleft+"  gleft: "+gleft);

    setInterval(function(){ 
        //random inte from -6 to 6
        delta_r=Math.floor(Math.random()*limit)-(limit/2);
        delta_g=Math.floor(Math.random()*limit)-(limit/2);
        
        //console.log("new r,g left: "+(rleft+delta_r) +"  "+(gleft+delta_g)+"    delta r g:"+delta_r+" "+delta_g);
        r.css('left',(rleft+delta_r)+'px');
        g.css('left',(gleft+delta_g)+'px');
        
    },50);



});






