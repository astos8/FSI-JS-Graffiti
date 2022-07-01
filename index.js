
// Select some elements...

// changing page header to align left
let header = document.querySelector('#page-header')
header.style.textAlign ="left"

// give img  border -radius 50px
let dogImages = document.querySelectorAll('.dog-image')
for (let i=0; i< dogImages.length; i++){
    dogImages[i].style.borderRadius ='50px'
}

 // changing the align of dog names
let dogNames = document.querySelectorAll('.dog-name')
for (let i=0; i< dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}

// changing color of footer
let footer = document.querySelector('.footer')
footer.style.color ="purple"

// flipping img
for (let i=0; i< dogImages.length; i++){
    dogImages[i].style.transform ='scaleY(-1)'
}

