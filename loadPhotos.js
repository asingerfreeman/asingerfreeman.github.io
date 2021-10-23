const container = document.querySelector('.container')

let URLs = [['img/snow/snow-1.jpg', 'img/snow/snow-2.jpg', 'img/snow/snow-3.jpg', 'img/snow/snow-4.jpg'],['img/desert/desert-1.jpg', 'img/desert/desert-2.jpg', 'img/desert/desert-3.jpg', 'img/desert/desert-4.jpg']]

function loadImages(numClasses =1){
    let i = 0
    console.log("reached")
    while (i < numClasses){
        let j = 0
        console.log("1")
        while (j < URLs.length){
            console.log("2")
            const imgDiv = document.createElement('img')
            imgDiv.src= URLs[i][j]
            container.appendChild(imgDiv)
            j++
        }
        i++
    }
}

loadImages()

window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages()
    }
})

