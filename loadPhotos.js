const container = document.querySelector('.portfolio-filter')
let desert = ['img/desert/desert-6.jpg', 'img/desert/desert-2.jpg', 'img/desert/desert-3.jpg', 'img/desert/desert-4.jpg', 'img/desert/desert-5.jpg', 'img/desert/desert-7.jpg', 'img/desert/desert-1.jpg', 'img/desert/desert-8.jpg', 'img/desert/desert-9.jpg', 'img/desert/desert-10.jpg', 'img/desert/desert-11.jpg']
let desertDimensions = [["large-width", "large-height"],[""],["large-width"],["large-width"],[""],[""],[""],[""],["large-width"],[""],["large-width"]]
let desertNames = ['Valley of Fire', 'Grand Prismatic', 'Painted Desert', 'Smith Rock', 'Ah-Shi-Sle-Pah', 'Smith Rock', 'Sedona', 'Painted Desert', 'Valley of Fire', 'Utah Highway', 'Petrified Forest']
let flowers = ['img/flowers/flowers-1.jpg', 'img/flowers/flowers-2.jpg', 'img/flowers/flowers-3.jpg']
let flowersDimensions = [["large-height", "large-width"],["large-height"],["large-height","large-width"]]
let flowersNames = ['EC Manning', 'Whistler', 'Lynn Canyon']
let forest = ['img/forest/forest-6.jpg', 'img/forest/forest-4.jpg', 'img/forest/forest-8.jpg', 'img/forest/forest-1.jpg', 'img/forest/forest-2.jpg', 'img/forest/forest-11.jpg', 'img/forest/forest-13.jpg', 'img/forest/forest-7.jpg',  'img/forest/forest-5.jpg', 'img/forest/forest-10.jpg', 'img/forest/forest-3.jpg', 'img/forest/forest-12.jpg', 'img/forest/forest-9.jpg']
let forestDimensions = [["large-width","large-height"],["large-height"], ["large-width","large-height"], ["large-width","large-height"], ["large-width"], [""], [""],["large-width"],  ["large-width"], [""], [""], [""],  ["large-width"]]
let forestNames = ['EC Manning', 'Columbia River Gorge', 'Santa Fe','Valles Caldera', 'Linville Gorge', 'Linville Gorge', 'Redwoods', 'EC Manning', 'Chapel Hill',  'Columbia River Gorge', 'Pisgah', 'Chapel Hill', 'Chapel Hill']
let mountain = ['img/mountain/mountain-1.jpg','img/mountain/mountain-2.jpg', 'img/mountain/mountain-14.jpg', 'img/mountain/mountain-4.jpg', 'img/mountain/mountain-5.jpg', 'img/mountain/mountain-6.jpg','img/mountain/mountain-7.jpg', 'img/mountain/mountain-8.jpg','img/mountain/mountain-9.jpg', 'img/mountain/mountain-10.jpg','img/mountain/mountain-12.jpg','img/mountain/mountain-11.jpg','img/mountain/mountain-13.jpg','img/mountain/mountain-3.jpg','img/mountain/mountain-15.jpg','img/mountain/mountain-16.jpg']
let mountainDimensions = [["large-width","large-height"], [""],[""],[""],[""],["large-width"],[""],[""],["large-width"],[""],["large-width", "large-height"],["large-width"],[""],[""],["large-width"],["large-width"],[""]]
let mountainNames = ['North Cascades', 'Seqouia', 'Glacier', 'Humphreys Peak', 'Humphreys Peak', 'Wedgemount', 'Wedgemount', 'Whistler', 'Zion', 'Humphreys Peak', 'Humphreys Peak', 'Humphreys Peak', 'Linville Gorge', 'Humphreys Peak', 'Humphreys Peak', 'Wedgemount']
let snow = ['img/snow/snow-3.jpg', 'img/snow/snow-2.jpg', 'img/snow/snow-1.jpg', 'img/snow/snow-4.jpg', 'img/snow/snow-5.jpg', 'img/snow/snow-8.jpg', 'img/snow/snow-6.jpg', 'img/snow/snow-7.jpg']
let snowDimensions = [["large-width"],[""],["large-width"],["large-width"],["large-width"],[""],["large-width","large-height"],["large-width"]]
let snowNames = ['Humphreys Peak', 'Wedgemount', 'Grand Teton', 'Humphreys Peak', 'North Cascades', 'Humphreys Peak', 'Great Sand Dunes', 'Grand Teton']
let water = ['img/water/water-8.jpg', 'img/water/water-1.jpg', 'img/water/water-3.jpg', 'img/water/water-9.jpg', 'img/water/water-7.jpg', 'img/water/water-6.jpg', 'img/water/water-2.jpg', 'img/water/water-4.jpg', 'img/water/water-11.jpg', 'img/water/water-12.jpg', 'img/water/water-13.jpg',  'img/water/water-15.jpg','img/water/water-16.jpg','img/water/water-17.jpg']
let waterDimensions = [["large-height","large-width"],["large-width"],[""],[""],["large-width"],["large-width","large-height"],["large-width"],[""],["large-width"],[""],["large-wdith"],[""],[""],["large-width"],[""],[""],[""],[""],[""],]
let waterNames = ['Lynn Canyonl', 'Yellowstone', 'Zion', 'Toketee', 'Crater Lake', 'Linville Gorge', 'Glacier', 'Glacier', 'Seqouia', 'Zion', 'Zion', 'Eureka', 'Linville Gorge', 'Linville Gorge']
let URLs = [water, mountain, forest, flowers, snow, desert]
let classNames =["water", "mountain", "forest", "flowers", "snow", "desert"]
let photoNames =[waterNames, mountainNames, forestNames, flowersNames, snowNames, desertNames]
let dimensions = [ waterDimensions, mountainDimensions, forestDimensions, flowersDimensions, snowDimensions, desertDimensions]


let count = 0

let img


function loadImages(numPhotos =1, count){
    console.log(count)
    let i = 0
    img = document.createElement('div')
    img.classList.add('portfolio-filter')
    container.innerHTML = ""
    while (count < URLs.length && i < URLs[count].length && URLs[count][i] != undefined){

        let imgTest = document.createElement('div')
        imgTest.style.backgroundImage = `url('${URLs[count][i]}')`
        imgTest.classList.add("pf-item")
        imgTest.classList.add("set-bg")
            for (let j = 0; j< dimensions[count][i].length;j++){
                if (dimensions[count][i]!=""){
                    imgTest.classList.add(dimensions[count][i][j])
                }
            }
            
        
        
        imgTest.classList.add(classNames[count])
        
        let anchor = document.createElement("a")
        anchor.classList.add("pf-icon")
        anchor.classList.add("image-popup")
        anchor.href = URLs[count][i]
        
        let span = document.createElement("span")
        span.classList.add("icon_plus")

        let label = document.createElement("div")
        label.classList.add("pf-text")
        label.innerHTML = `<h4>${photoNames[count][i]}</h4><span>${capitalizeFirstLetter(classNames[count])}</span>`

        anchor.appendChild(span)
        imgTest.appendChild(anchor)
        imgTest.appendChild(label)
        console.log("reached")
        container.appendChild(imgTest)
        i++
        
    }
    


    // Isotppe Filter
    $(".waterFilter").on('click', function() {
        console.log("Water")
        loadImages(1,0)
        $(this).addClass('active');
        
    });

    $(".mountainFilter").on('click', function() {
        console.log("mountain")
        loadImages(1,1)
        $(this).addClass('active');
    });

    $(".forestFilter").on('click', function() {
        loadImages(1,2)
        $(this).addClass('active');
    });

    $(".plantFilter").on('click', function() {
        loadImages(1,3)
        $(this).addClass('active');
    });

    $(".snowFilter").on('click', function() {
        loadImages(1,4)
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

loadImages(0,5)

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// window.addEventListener('scroll', () => {
//     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
//         loadImages()
//     }
// })