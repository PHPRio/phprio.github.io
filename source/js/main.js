/*
 Spectral by HTML5 UP
 html5up.net | @ajlkn
 Free for personal and commercial use under the CC-BY 3.0 license (html5up.net/license)
 */

(function ($) {
    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large : '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small : '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {
        var $window = $(window),
            $body   = $('body'),
            $banner = $('#banner'),
            $header = $('#header');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () { $body.removeClass('is-loading'); }, 100);
        });

        // Randomized header background
        var totalBackgrounds = 11;
        var randBg = Math.floor(Math.random() * totalBackgrounds);
        $('.random-bg').css('backgroundImage', 'url(/images/bg/'+randBg+'.jpg)');

        // Mobile?
        if (skel.vars.mobile) {
            $body.addClass('is-mobile');
        } else {
            skel
                .on('-medium !medium', function () { $body.removeClass('is-mobile'); })
                .on('+medium', function () { $body.addClass('is-mobile'); });
        }

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function () {
            $.prioritize('.important\\28 medium\\29', skel.breakpoint('medium').active);
        });

        // Scrolly.
        $('.scrolly').scrolly({
            speed : 1500,
            offset: $header.outerHeight()
        });

        $('#menu')
            .append('<a href="#menu" class="close"></a>')
            .appendTo($body)
            .panel({
                delay       : 500,
                hideOnClick : true,
                hideOnSwipe : true,
                resetScroll : true,
                resetForms  : true,
                side        : 'right',
                target      : $body,
                visibleClass: 'is-menu-visible'
            });

        if ($banner.length > 0 && $header.hasClass('alt')) {
            $window.on('resize', function () { $window.trigger('scroll'); });
            $banner.scrollex({
                bottom   : $header.outerHeight() + 1,
                terminate: function () { $header.removeClass('alt'); },
                enter    : function () { $header.addClass('alt'); },
                leave    : function () { $header.removeClass('alt'); }
            });

        }

    });

})(jQuery);
