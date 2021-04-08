$(document).ready(function(){

    //REFERENCES
    var prevBtn = $('.prev');
    var nextBtn = $('.next');

    //Navigation
    prevBtn.click(function(){
        navSlide('prev')
    });
    nextBtn.click(function(){
        navSlide('next')
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
    console.log(direction); //test
}