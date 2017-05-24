$(function(){
    
    var width = 300;
    var animationSpeed = 1000;
    var pause = 2000;
    var currentSlide = 1;
    
    var $carousel = $('.carousel');
    var $slideBox = $('.carousel ul');
    var $slides = $('.carousel li');
    
    var interval;
    
    function startCarousel(){
        interval = setInterval(function(){
            $slideBox.animate({'margin-left':'-='+width},animationSpeed, function(){
                ($slideBox).find('li:last').after($slideBox.find('li:first'));
                $slideBox.css('margin-left',0);
            }); //End animate function     
        }, pause);//End Setinterval function
    };//End carousel function 
    
    function stopCarousel(){
        clearInterval(interval);
    }
    
    $carousel.on('mouseenter',stopCarousel).on('mouseleave', startCarousel);
    
    //Have carousel started on page load
    startCarousel();
}); 