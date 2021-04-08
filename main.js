/*********
 * SLIDER
 *********/

//REFERENCES
var prevBtn = $('.prev');
var nextBtn = $('.next');
var circle = $('.nav i');

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
circle.click(clickCircle);

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
    reset();

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
    var image = $('.images img');

    //Reset
    reset();

    $(this).addClass('active');
    image.eq($(this).index()).addClass('active');
}

/**
 * Navigation with keyboard number
 * @param {number} index 
 */
function keyboardNum(index){
    var image = $('.images img');
    var circle = $('.nav i')

    //Reset
    reset();

    image.eq(index).addClass('active');
    circle.eq(index).addClass('active');
}

/**
 * Remove class active
 */
function reset(){
    var activeImg = $('.images .active');
    var activeCircle = $('.nav .active');

    activeImg.removeClass('active');
    activeCircle.removeClass('active');
}