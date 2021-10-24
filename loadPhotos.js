const container = document.querySelector('.photo-holder')

let URLs = ['img/snow/snow-1.jpg', 'img/snow/snow-2.jpg', 'img/snow/snow-3.jpg', 'img/snow/snow-4.jpg','img/desert/desert-1.jpg', 'img/desert/desert-2.jpg', 'img/desert/desert-3.jpg', 'img/desert/desert-4.jpg']

let count = 0

function loadImages(numPhotos =5){
    let i = 0
    while (i < numPhotos && count < URLs.length){
        const img = document.createElement('div')
        img.classList.add('portfolio-filter')
        const imgTest = document.createElement('div')
        imgTest.style.backgroundImage = `url('${URLs[count]}')`
        imgTest.classList.add("pf-item")
        imgTest.classList.add("set-bg")
        imgTest.classList.add("water")
        
        const anchor = document.createElement("a")
        anchor.classList.add("pf-icon")
        anchor.classList.add("image-popup")
        anchor.href = URLs[count]
        
        const span = document.createElement("span")
        span.classList.add("icon_plus")

        const label = document.createElement("div")
        label.classList.add("pf-text")
        label.innerHTML = "<h4>Name</h4><span>Class</span>"

        anchor.appendChild(span)
        imgTest.appendChild(anchor)
        imgTest.appendChild(label)
        img.appendChild(imgTest)
        container.appendChild(img)
        i++
        count++
    }
}


window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages()
        /*------------------
        Background Set
    --------------------*/
     // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    // Isotppe Filter
    $(".filter-controls li").on('click', function() {
        var filterData = $(this).attr("data-filter");

        $(".portfolio-filter, .gallery-filter").isotope({
            filter: filterData,
        });

        $(".filter-controls li").removeClass('active');
        $(this).addClass('active');
    });

    $(".portfolio-filter, .gallery-filter").isotope({
        itemSelector: '.pf-item, .gf-item',
        percentPosition: true,
        masonry: {
        // use element for option
        columnWidth: '.pf-item, .gf-item',
        horizontalOrder: true,
      }
    });

    //Masonary
    $('.portfolio-details-pic').masonry({
        itemSelector: '.pdp-item',
        columnWidth: '.pdp-item'
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".categories-slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        dots: false,
        nav: true,
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        stagePadding: 120,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 2,
                stagePadding: 0
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    }
})