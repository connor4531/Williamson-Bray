var marginY = 0;
var destination = 0;
var speed = 15;
var scroller = null;

function initScroll(elementId){
    destination = document.getElementById(elementId).offsetTop;

    scroller = setTimeout(function(){
        initScroll(elementId);
    },1);

    marginY = marginY + speed;

    if(marginY >= destination - 100){
        clearTimeout(scroller);
    }
     window.scroll(0, marginY);
}

function toTop(elementId)
{
     scroller = setTimeout(function(){
        toTop(elementId);
    },1);

    marginY = marginY - speed;
    
    if(marginY <= 0){
        clearTimeout(scroller);
    }
    window.scroll(0, marginY);
}