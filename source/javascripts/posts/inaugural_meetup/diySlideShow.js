
// Code based on blog post by leemark:  http://themarklee.com/2013/12/26/simple-diy-responsive-slideshow-made-html5-css3-javascript/#update-5-31-14
// See related github repo:  https://github.com/leemark/better-simple-slideshow/



(function(){

    var counter = 0, // to keep track of current slide
        $items = document.querySelectorAll('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
        numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
    var showCurrent = function(){
        var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

        // remove .show from whichever element currently has it
        // http://stackoverflow.com/a/16053538/2006057
        [].forEach.call( $items, function(el){
            el.classList.remove('show');
        });

        // add .show to the one item that's supposed to have it
        $items[itemToShow].classList.add('show');
    };

// add click events to prev & next buttons
    document.querySelector('.next').addEventListener('click', function() {
        counter++;
        showCurrent();
    }, false);

    document.querySelector('.prev').addEventListener('click', function() {
        counter--;
        showCurrent();
    }, false);

})();


