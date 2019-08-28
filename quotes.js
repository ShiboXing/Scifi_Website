
var sig=false;


$(document).ready(function(){ 
   
    $("#nav_placeholder").load("nav_bar.html");
    $("#footer_placeholder").load("footer.html");
    
    header=$("header");
    header.css("height","400px");
    $('.quote_heading').css('opacity','1');
    passed=false;
    passed2=false;


        
    /*window.alert($("#nav_bar").css('mark'));

    if ($("#nav_bar").css('mark').equals("synopsis_directed1"))
    {
        window.scrollTo(0,500);
        $("#nav_bar").removeClass('synopsis_directed1');
    }
    else if ($("#nav_bar").attr('name').equals("synopsis_directed2"))
    {
        window.scrollTo(0,900);
        $("#nav_bar").removeClass('synopsis_directed2');
    }*/



    window.addEventListener('scroll', function(e){
        scroll=$(document).scrollTop();
        this.console.log(scroll);
    
        if (!passed && scroll>360 && scroll<800)
        {
            $(".synopsis_pic1").stop();
            $(".synopsis_pic1").animate({
                'background-size' : '60%',
                'background-position-x': "70%",
                'background-position-y': "60%",
                
            },2000);
            passed=true;
        }
        else if (passed && (scroll>800 || scroll <360))
        {
            $(".synopsis_pic1").stop();
            $(".synopsis_pic1").animate({
                'background-size' : '100%',
                'background-position-x': "50%",
                'background-position-y': "30%",
                
            },2000);
            passed=false;
        }
        if (!passed2 && scroll>800 && scroll<1200)
        {
            $(".synopsis_pic2").stop();
            $(".synopsis_pic2").animate({
                'background-size' : '200%',
                'background-position-x': "50%",
                'background-position-y': "60%",
            },2000);
            passed2=true;
        }
        else if  (passed2 && (scroll>1200 || scroll <800))
        {
            $(".synopsis_pic2").stop();
            $(".synopsis_pic2").animate({
                'background-size' : '100%',
                
            },2000);
            passed2=false;
        }


    });

    
});


function changeBlur(e){

    //JQUERY's animate() doesn't work with pre-fetched variables ARE YOU KIDDING ME???
    //console.log("mouse overed"+sig);
    if (!sig){
        sig=true;
        /// !!!
        $(".quotes_header2").css({
            'filter':"grayscale(60%) blur(0px)"
            
        },1000);
        /// !!!
        $(".quotes_header1").css({
            'filter': "contrast(200%) grayscale(90%) brightness(1.7) blur(3px)"
        },1000);

        $('#quote_w').animate({
            'opacity':0
        },500);
    }
}

function resetBlur(e){
    sig=false;
    $(".quotes_header2").css({
        'filter': 'grayscale(60%) blur(3px)'
        
    },1000);
    /// !!!
    $(".quotes_header1").css({
        'filter': 'contrast(200%) grayscale(70%) brightness(1.7)'
    },1000);

    $('#quote_w').animate({
        'opacity':1
    },500);
}






