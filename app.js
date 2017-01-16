$(document).ready(function () {

    /* ce images */
    $('.ce-image').each(function () {
        var parentTag = $(this).parent().get(0).tagName;
        if (parentTag == 'A') {
            $(this).parent().remove();
        } else {
            $(this).remove();
        }
    });

    /* remove single edit div */
    $('.single-edit').remove();

    /* delete gallery brs */
    $('.gallery br').each(function () {
        $(this).remove();
    });

    /* image lightbox */
    var showOverlay = function () {
        $('<div class="lightbox-overlay"></div>').appendTo('body');
    };

    var hideOverlay = function () {
        $('.lightbox-overlay').remove();
    };

    /* arrows */

    var arrowsOn = function (instance, selector) {

        var $arrows = $('<div class="lightbox-arrows"><a type="button" class="imagelightbox-arrow imagelightbox-arrow-left">' + semplice.lightbox_prev + '</a><a type="button" class="imagelightbox-arrow imagelightbox-arrow-right">' + semplice.lightbox_next + '</a></div>');

        $arrows.appendTo('body');

        // fade in
        $('.lightbox-arrows').delay(200).fadeIn('slow');

        $('.imagelightbox-arrow').on('click touchend', function (e) {
            e.preventDefault();

            var $this = $(this),
                $target = $(selector + '[href="' + $('#imagelightbox').attr('src') + '"]'),
                index = $target.index(selector);

            if ($this.hasClass('imagelightbox-arrow-left')) {
                index = index - 1;
                if (!$(selector).eq(index).length)
                    index = $(selector).length;
            } else {
                index = index + 1;
                if (!$(selector).eq(index).length)
                    index = 0;
            }

            instance.switchImageLightbox(index);
            return false;
        });
    };

    var arrowsOff = function () {
        $('.lightbox-arrows').fadeOut('fast', function () {
            $('.lightbox-arrows').remove();
        });
    };


});

var selectorG = 'a[data-rel^=lightbox]';
var instanceG = $(selectorG).imageLightbox({
selector: 'id="imagelightbox"',
allowedTypes: 'png|jpg|jpeg|gif|svg',
animationSpeed: 250,
preloadNext: true,
enableKeyboard: true,
quitOnEnd: false,
quitOnImgClick: false,
quitOnDocClick: true,
onStart: function () {
arrowsOn(instanceG, selectorG);
showOverlay();
},
onEnd: function () {
arrowsOff();
hideOverlay();
},
onLoadStart: false,
onLoadEnd: false
});


}
});
});
})(jQuery);