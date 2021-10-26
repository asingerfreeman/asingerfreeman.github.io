const container = document.querySelector('.photo-holder')
let desert = ['img/desert/desert-1.jpg', 'img/desert/desert-2.jpg', 'img/desert/desert-3.jpg', 'img/desert/desert-4.jpg', 'img/desert/desert-5.jpg', 'img/desert/desert-6.jpg', 'img/desert/desert-7.jpg', 'img/desert/desert-8.jpg', 'img/desert/desert-9.jpg', 'img/desert/desert-10.jpg', 'img/desert/desert-11.jpg']
let flowers = ['img/flowers/flowers-1.jpg', 'img/flowers/flowers-2.jpg', 'img/flowers/flowers-3.jpg']
let forest = ['img/forest/forest-1.jpg', 'img/forest/forest-2.jpg', 'img/forest/forest-3.jpg', 'img/forest/forest-4.jpg', 'img/forest/forest-5.jpg', 'img/forest/forest-6.jpg', 'img/forest/forest-7.jpg', 'img/forest/forest-8.jpg', 'img/forest/forest-9.jpg', 'img/forest/forest-10.jpg', 'img/forest/forest-11.jpg', 'img/forest/forest-12.jpg', 'img/forest/forest-13.jpg']
let mountain = ['img/mountain/mountain-1.jpg','img/mountain/mountain-2.jpg', 'img/mountain/mountain-3.jpg', 'img/mountain/mountain-4.jpg', 'img/mountain/mountain-5.jpg', 'img/mountain/mountain-6.jpg','img/mountain/mountain-7.jpg', 'img/mountain/mountain-8.jpg','img/mountain/mountain-9.jpg', 'img/mountain/mountain-10.jpg','img/mountain/mountain-11.jpg','img/mountain/mountain-12.jpg','img/mountain/mountain-13.jpg','img/mountain/mountain-14.jpg','img/mountain/mountain-15.jpg','img/mountain/mountain-16.jpg']
let snow = ['img/snow/snow-1.jpg', 'img/snow/snow-2.jpg', 'img/snow/snow-3.jpg', 'img/snow/snow-4.jpg', 'img/snow/snow-5.jpg', 'img/snow/snow-6.jpg', 'img/snow/snow-7.jpg', 'img/snow/snow-8.jpg', 'img/snow/snow-9.jpg']
let water = ['img/water/water-1.jpg', 'img/water/water-2.jpg', 'img/water/water-3.jpg', 'img/water/water-4.jpg', 'img/water/water-5.jpg', 'img/water/water-6.jpg', 'img/water/water-7.jpg', 'img/water/water-8.jpg', 'img/water/water-9.jpg', 'img/water/water-10.jpg', 'img/water/water-11.jpg', 'img/water/water-12.jpg', 'img/water/water-13.jpg', 'img/water/water-14.jpg', 'img/water/water-15.jpg','img/water/water-16.jpg','img/water/water-17.jpg', 'img/water/water-18.jpg']

let URLs = [water, mountain, forest, flowers, snow,desert]


let count = 0

let img

function loadImages(numPhotos =1){
    let i = 0
    let j = 0
    img = document.createElement('div')
    img.classList.add('portfolio-filter')
    while (j < numPhotos) {
        console.log(URLs.length)
        console.log(URLs[j].length)
        console.log(URLs[j])
        while (count < URLs.length && i < URLs[j].length && URLs[count][i] != undefined){

            const imgTest = document.createElement('div')
            imgTest.style.backgroundImage = `url('${URLs[count][i]}')`
            imgTest.classList.add("pf-item")
            imgTest.classList.add("set-bg")
            imgTest.classList.add("water")
            
            const anchor = document.createElement("a")
            anchor.classList.add("pf-icon")
            anchor.classList.add("image-popup")
            anchor.href = URLs[count][i]
            
            const span = document.createElement("span")
            span.classList.add("icon_plus")

            const label = document.createElement("div")
            label.classList.add("pf-text")
            label.innerHTML = "<h4>Name</h4><span>Class</span>"

            anchor.appendChild(span)
            imgTest.appendChild(anchor)
            imgTest.appendChild(label)
            img.appendChild(imgTest)
            i++
            
        }
        container.appendChild(img)
        count++
        j++
    }


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
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });
}


window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages()
    }
})