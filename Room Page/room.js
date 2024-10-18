$(document).ready(function() {
    function adjustLayout() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        $('.hero-section').css('height', windowHeight * 0.8 + 'px');

        if (windowWidth < 768) {
            $('.overlay-text-large').css('font-size', '6vw');
            $('.overlay-text-small').css('font-size', '4vw');
        } else if (windowWidth >= 768 && windowWidth < 1440) {
            $('.overlay-text-large').css('font-size', '4vw');
            $('.overlay-text-small').css('font-size', '3vw');
        } else {
            $('.overlay-text-large').css('font-size', '3vw');
            $('.overlay-text-small').css('font-size', '2.5vw');
        }
    }

    adjustLayout();
    $(window).resize(function() {
        adjustLayout();
    });
});
