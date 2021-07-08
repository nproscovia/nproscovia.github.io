$(function () {
    "use strict";
    $('#start').click(function () {
        const $boundaries = $("#maze .boundary");
        const $status = $('#status');
        const $maze = $('#maze');
        $boundaries.removeClass('youlose'); 
        $status.text("click the 'S' to begin");

        $boundaries.mouseenter(function () {
            $boundaries.addClass('youlose');
        });

        $maze.mouseleave(function () {
           
            $boundaries.addClass('youlose');
        });

        $('#end').mouseenter(function () {
            if ($boundaries.hasClass('youlose')) {
                $status.text("You lose :[");
            } else {
                $status.text("You win! :]");
            }
            $boundaries.off('mouseenter');
            $maze.off('mouseleave');
        });
    });
});