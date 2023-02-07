function init() {
    const grid = document.querySelector('.outer-grid')
    
    const width = 5
    const gridCellCount = width * 2
    const images =['../../images/kkslider.webp', '../../images/celeste.png', '../../images/timmytommy.webp', '../../images/reese.webp', '../../images/gulliver.webp', '../../images/kkslider.webp', '../../images/celeste.png', '../../images/timmytommy.webp', '../../images/reese.webp', '../../images/gulliver.webp']
    const shuffledImages = images.sort((a, b) => 0.5 - Math.random());

    function createCells() {
        for (let i = 0; i < gridCellCount; i++) {
            // first div 
            const firstDiv = document.createElement('div')
            grid.appendChild(firstDiv)
            firstDiv.className = 'main-box'

            // second div
            const secDiv = document.createElement('div')
            firstDiv.appendChild(secDiv)
            secDiv.className = 'inner-box'

            // third div: the leaf
            const thirdDiv = document.createElement('div')
            secDiv.appendChild(thirdDiv)
            thirdDiv.className = 'front-box'

            const leaf = document.createElement('img')
            leaf.src = '../../images/leaf.png'
            thirdDiv.appendChild(leaf)

            // fourth div: the image
            const fourthDiv = document.createElement('div')
            secDiv.appendChild(fourthDiv)
            fourthDiv.className = 'back-box'
            
            const img = document.createElement('img')
            img.src = shuffledImages[i]
            fourthDiv.appendChild(img) 
        }
    }
    createCells()
    // flip the images when clicked 
    const innerBox = document.querySelectorAll('.inner-box')
    const backBox = document.querySelectorAll('.back-box')

    function flipImage() { 
        for (let i=0; i<shuffledImages.length; i++) {
        this.classList.add('flip')
       
    }
}
    
  innerBox.forEach(box => box.addEventListener('click', flipImage))
}
window.addEventListener('DOMContentLoaded', init)