const container = document.querySelector('.photo-holder')
let desert = ['img/desert/desert-1.jpg', 'img/desert/desert-2.jpg', 'img/desert/desert-3.jpg', 'img/desert/desert-4.jpg', 'img/desert/desert-5.jpg', 'img/desert/desert-6.jpg', 'img/desert/desert-7.jpg', 'img/desert/desert-8.jpg', 'img/desert/desert-9.jpg', 'img/desert/desert-10.jpg', 'img/desert/desert-11.jpg']

console.log(desert)
let URLs = [desert, ['img/snow/snow-1.jpg', 'img/snow/snow-2.jpg', 'img/snow/snow-3.jpg', 'img/snow/snow-4.jpg'],desert]
console.log(URLs)


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