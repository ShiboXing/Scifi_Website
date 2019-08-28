
$(document).ready(function(){ 

    $("#nav_placeholder").load("nav_bar.html");
    $("#footer_placeholder").load("footer.html");
    header=$("header");
    header.css("height","400px");
    flashes=['res/1.jpg','res/2.jpg','res/3.jpg','res/4.jpg','res/5.jpg','res/6.jpg']
    flash_header=$(".flash_header");

    //FLUSH THE HELL OUT OF THOSE IMAGES SO THEY ARE FULLY LOADED!!!!!!!!!!!!!!!
    //#ihatejavascript
    flash_header.css("visibility","hidden");
    for (i=0;i<flashes.length;i++)
        flash_header.css("background","url("+flashes[i]+")");
    for (i=0;i<flashes.length;i++)
        flash_header.css("background","url("+flashes[i]+")");
    for (i=0;i<flashes.length;i++)
        flash_header.css("background","url("+flashes[i]+")");
    flash_header.css("background","url("+flashes[0]+")");
    flash_header.css("visibility","visible");
    //FLUSH ENDED

    dir=[[40,50],[60,70],[80,40],[40,20],[40,60],[40,80]]
   

    count=0;
    
    setInterval(function(){ 
            count=(count+1)%flashes.length;

            flash_header.animate({
                'background-position-x': dir[count][0]+"%",
                'background-position-y': dir[count][1]+"%",
            },2000,'linear');
            //background: "url("+flashes[count]+") "+dir[count][0]+"%"+" "+dir[count][1]+"%"

            
            
            flash_header.css("background","url("+flashes[count]+")");
            
            
    }, 2000);

    flash_header.animate({
        'background-position-x': dir[count][0]+"%",
        'background-position-y': dir[count][1]+"%",
    },2000,'linear');

    $( "#theme_title" ).fadeIn(2000);


});

