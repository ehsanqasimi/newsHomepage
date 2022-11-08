let ul = document.querySelector('ul')
let heroImage = document.querySelector('.heroImage')

$('.burger').click(function () {
    $('.burger').hide()
    $('.close').show()
    ul.style.display = 'flex'
    $('.overlay').show()
})

$('.close').click(function () {
    $('.close').hide()
    $('.burger').show()
    $('ul').hide()
    $('.overlay').hide()
})


if (window.innerWidth >= 700) {
    heroImage.src = `./assets/images/image-web-3-desktop.jpg`
} else {
    heroImage.src = `./assets/images/image-web-3-mobile.jpg`
}


// window.addEventListener('resize', () => {
//     if (window.innerWidth >= 700) {
//         heroImage.src = `./assets/images/image-web-3-desktop.jpg`
//     } else {
//         heroImage.src = `./assets/images/image-web-3-mobile.jpg`
//     }

// })







