
var sticky_header;
var head_img;
saved_scroll=-1;

var head_h=0;
var metric_lo=0;
var head_y=0;
var metric_hi=0;

var head2;
var head_h2;
var metric_lo2;
var head_y2;
var metric_hi2;

$(document).ready(function(){ 
    $("#nav_placeholder").load("nav_bar.html");
    $("#footer_placeholder").load("footer.html");
    $("#footer_placeholder").css("position","absolute").css("top","1140px").css("width","99%");
    
    $( "#synopsis_btn1" ).click(function() {
        //$("#nav_bar").css("mark","synopsis_directed1");
        window.location='synopsis.html';
      });

    $( "#synopsis_btn2" ).click(function() {
        //$("#nav_bar").css("mark","synopsis_directed2");
        window.location='synopsis.html';
        
      });


    head_img=$("#head_img");
    sticky_header=$("#sticky_header");
    sticky_header.css("position","absolute").css("right","0").css("left","0");

    head_h=sticky_header.height();
    metric_lo=head_img.offset().top;
    head_y=(metric_lo+head_img.height());
    metric_hi=head_y-head_h-30;

    head2=$('#title_stalker1');
    head22=$('#title_stalker2')
    //interval=head22.offset().top-head2.offset().top+head2.height();
    head_h2=head2.height();
    head_h22=head22.height();
    metric_lo2=head2.offset().top;
    metric_hi2=$('#picnic_img').offset().top+$('#picnic_img').height()-200;

    window.addEventListener('scroll', function(e){
        scroll=$(document).scrollTop();
        //console.log(/*" interval: "+interval+*/"  scroll: "+scroll+" metric hi2: "+(metric_hi2)+" metric lo2: "+metric_lo2);

        if (scroll<metric_hi && scroll>metric_lo)
            sticky_header.css("top",scroll);
        else if (scroll<metric_lo)
            sticky_header.css("top",metric_lo);
        else 
            sticky_header.css("top",metric_hi);

        scroll+=280;
        if (scroll<metric_hi2 && scroll>metric_lo2)
        {
            head2.css('top',scroll);
            head22.css('top',scroll+head_h2);
        }
        else if (scroll<metric_lo2)
        {
            head2.css('top',metric_lo2);
            head22.css('top',metric_lo2+head_h2);
        }
        else   
        {
            head2.css('top',metric_hi2);
            head22.css('top',metric_hi2+head_h2);
        }
           

    });


    




});






