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

    //Navigation with Keyboard
    $(document).keydown(function(event){
        console.log(event.keyCode); //test
        if(event.keyCode == 37){
            navSlide('prev');
        } else if(event.keyCode == 39){
            navSlide('next');
        }
    });

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