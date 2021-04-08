$(document).ready(function(){

    //REFERENCES
    var prevBtn = $('.prev');
    var nextBtn = $('.next');

    //Navigation with Mouse
    prevBtn.click(function(){
        navSlide('prev')
    });
    nextBtn.click(function(){
        navSlide('next')
    });

    //Navigation with Keyboard Arrows
    $(document).keydown(function(event){
        if(event.keyCode == 37){
            navSlide('prev');
        } else if(event.keyCode == 39){
            navSlide('next');
        }
    });

    //Navigation with Keyboard Number
    $(document).keydown(function(event){     
        switch(event.keyCode){
            case 97:
            case 49:
                keyboardNum(0);
                break;
            case 98:
            case 50:
                keyboardNum(1);
                break;
            case 99:
            case 51:
                keyboardNum(2);
                break;
            case 100:
            case 52:
                keyboardNum(3);
                break;
        }
    });

    //Navigation with circle
    var circle = $('.nav i');

    circle.click(clickCircle);

//End Doc Ready
});

/****************
  FUNCTIONS
 ****************/
/**
 * Navigation between slides 
 * @param {string} direction 
 */
function navSlide(direction){
    var activeImg = $('.images .active');
    var activeCircle = $('.nav .active');

    //Reset
    activeImg.removeClass('active');
    activeCircle.removeClass('active');

    //Previous
    if(direction === 'prev'){
        if(activeImg.hasClass('first')){
            $('.images .last').addClass('active');
            $('.nav .last').addClass('active');
        } else{
            activeImg.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    }
    //Next
    else {
        if(activeImg.hasClass('last')){
            $('.images .first').addClass('active');
            $('.nav .first').addClass('active');
        } else{
            activeImg.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }

    }
}

/**
 * Navigation with click on circle
 */
function clickCircle(){
    var activeCircle = $('.nav .active');
    var activeImg = $('.images .active');
    var image = $('.images img');

    //Reset
    activeImg.removeClass('active');
    activeCircle.removeClass('active');

    $(this).addClass('active');
    image.eq($(this).index()).addClass('active');
}

/**
 * Navigation with keyboard number
 * @param {number} index 
 */
function keyboardNum(index){
    var activeImg = $('.images .active');
    var activeCircle = $('.nav .active');
    var image = $('.images img');
    var circle = $('.nav i')

    //Reset
    activeImg.removeClass('active');
    activeCircle.removeClass('active');

    image.eq(index).addClass('active');
    circle.eq(index).addClass('active');
}