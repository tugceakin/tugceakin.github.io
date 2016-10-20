$(document).ready(function() {


    /* Scroll hire me button to contact page */
    $('.hire-me').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    /* For Bootstrap current state on portfolio sorting */

    $('ul.nav-pills li a').click(function(e) {
        $('ul.nav-pills li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })

    /* portfolio mixitup */

    $(window).load(function() {
        var $container = $('.grid-wrapper');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.grid-controls li a').click(function() {
            $('.grid-controls .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });

    /* Sticky menu */
    $(".navbar").sticky({
        topSpacing: 0
    });


    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });

    //Insert stars
    var posArr = [[10, 30], [20,70], [15,80], [30,40], [40, 10],
                  [15, 5], [5, 15], [22, 22], [8, 82], [26, 90],
                  [35, 77], [6, 60]];
    for(var i=0; i<12; i++){
      var home = $("#page-welcome");
      var starDiv = $('<div class="star"></div>');
      var delay = Math.random() * 2;
      starDiv.css({
        'margin-top': posArr[i][0] + '%',
        'margin-left': posArr[i][1] + '%',
        '-webkit-animation-delay': delay + 's',
        'animation-delay' : delay + 's'
      });
      home.prepend(starDiv);
    }

    //Make nav link white after click
    $('.navbar a').click(function(e) {
        $(this).css({'color': 'white'});
    })
});
