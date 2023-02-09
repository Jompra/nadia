// function init() {
//     const grid = document.querySelector('.outer-grid')
//     const resetBtn = document.querySelector('.reset')
    
//     const width = 5
//     const gridCellCount = width * 2
//    // const images =['../../images/kkslider.webp', '../../images/celeste.png', '../../images/timmytommy.webp', '../../images/reese.webp', '../../images/gulliver.webp', '../../images/kkslider.webp', '../../images/celeste.png', '../../images/timmytommy.webp', '../../images/reese.webp', '../../images/gulliver.webp']
//     const images = [
//          {name: 'kkslider', image: '../../images/kkslider.webp'},
//          {name: 'celeste', image: '../../images/celeste.png'},
//          {name: 'timmytommy', image: '../../images/timmytommy.webp'},
//          {name: 'reese', image: '../../images/reese.webp'},
//          {name: 'gulliver', image: '../../images/gulliver.webp'},
//          {name: 'kkslider', image: '../../images/kkslider.webp'},
//          {name: 'celeste', image: '../../images/celeste.png'},
//          {name: 'timmytommy', image: '../../images/timmytommy.webp'},
//          {name: 'reese', image: '../../images/reese.webp'},
//          {name: 'gulliver', image: '../../images/gulliver.webp'}
//     ]
//    const shuffledImages = images.sort(() => 0.5 - Math.random());

//    let x 
//    let y
//     function createCells() {
//         for (let i = 0; i < gridCellCount; i++) {
//             // main div
//             const mainDiv = document.createElement('div')
//             grid.appendChild(mainDiv)
//             mainDiv.className = 'main-box'

//             // // front div: the leaf
//             // const frontDiv = document.createElement('div')
//             // mainDiv.appendChild(frontDiv)
//             // frontDiv.className = 'front-box'

//             // const leaf = document.createElement('img')
//             // leaf.src = '../../images/leaf.png'
//             // frontDiv.appendChild(leaf)

//             // back div: the image
//             // const backDiv = document.createElement('div')
//             // mainDiv.appendChild(backDiv)
//             // backDiv.className = 'back-box'
            
//             const img = document.createElement('img')
//              img.src = shuffledImages[i].image
//             mainDiv.appendChild(img) 
//             //   y = shuffledImages[i].name
//             //  x = img.src
//             addImg()
//             function addImg(event){
//                 console.log(event.target.id)
//                 console.log("addddd")
               
//             }
     
//             //   img.classList.add('pics')
//             //   return img
//         } 
//     }
//     createCells()

//     const cards = document.querySelectorAll('.main-box')
//     const back = document.querySelectorAll('.back-box')

//     let firstCard
//     let secondCard 

//     let count = 0

//     function addImage () {
//         console.log('hi')
//         }
    
//     // function flipImage(e) { 
//     //         count++
//     //      if (count < 3) {
//     //         this.classList.add('flip') 
//     //         if (count === 1) {
                
//     //             firstCard = e.target
//     //             console.log(firstCard)
//     //         }
//     //        else if (count === 2) {
//     //             secondCard = e.target
//     //             console.log(secondCard)
//     //         }
//     //         console.log(count)
//     //         // console.log(this.shuffledImages)
//     //     }
//     // }
// // compare()
// //   function compare () {
// //      for (let i=0; i<=shuffledImages.length; i++) {
// //         console.log('the name is')
// //         console.log(shuffledImages[i].name)
         
// //      }
// //    }


//     cards.forEach(box => box.addEventListener('click', createCells))
// }
// window.addEventListener('DOMContentLoaded', init)





// NEW CODE:

function init(){
const grid = document.querySelector('.outer-grid');
const resetBtn = document.querySelector('.reset');
let interval
const timeValue = document.getElementById("timer")
// const result = document.querySelector('.results')

const width = 4;
const gridCellCount = width * 3;
const images = [
  { name: 'kkslider', image: '../images/kkslider.webp' },
  { name: 'celeste', image: '../images/celeste.png' },
  { name: 'timmytommy', image: '../images/timmy-tommy.png' },
  { name: 'reese', image: '../images/reese.webp' },
  { name: 'gulliver', image: '../images/gulliver.webp' },
  { name: 'mabel', image: '../images/mabel.png' },
  { name: 'kkslider', image: '../images/kkslider.webp' },
  { name: 'celeste', image: '../images/celeste.png' },
  { name: 'timmytommy', image: '../images/timmy-tommy.png' },
  { name: 'reese', image: '../images/reese.webp' },
  { name: 'gulliver', image: '../images/gulliver.webp' },
  { name: 'mabel', image: '../images/mabel.png' },
];

//shuffleArray takes in the images array as an input arr
//then it uses a built-in method "sort()" to arrange them alphabetically
//Math.random() returns a value between 0 and 1
//so -0.5 is used to have both positive and negative values
//now elements in the array can be rearranged to both right and left positions of the array
const shuffleArray = arr => 
    arr.sort(() => Math.random() - 0.5)

// stored the shuffled array into this variable
const shuffledImages = shuffleArray(images);

// create the cells
function createCard (image) {
  const mainBox = document.createElement('div');
  mainBox.classList.add('main-box');

  const backBox = document.createElement('div');
  backBox.classList.add('back-box');
  backBox.innerHTML = `<img src=${image.image} alt=${image.name}>`;
  mainBox.classList.add(`${image.name}`)

  const frontBox = document.createElement('div');
  frontBox.classList.add('front-box');

  mainBox.appendChild(backBox);
  mainBox.appendChild(frontBox);

  return mainBox;
};

const addCardsToGrid = () => {
  shuffledImages.forEach(image => {
    const card = createCard(image);
    grid.appendChild(card);
  });
};

// timer
let seconds = 0
 function timeGenerator () {
    seconds += 1;
    
    if (seconds >= 30) {
      seconds = 0;
      alert('you lost :(')
    }
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    timeValue.innerHTML = `<span>Timer: </span>${secondsValue}`;
  }
  interval = setInterval(timeGenerator, 1000);


let firstSelection = ''
let secondSelection = ''
let count = 0 
let winCounter = 0 

let temp1 = ''
let temp2 = ''
function flipCard(event) {
  const clickedCard = event.currentTarget;
  count++
  if (count < 3) {
  clickedCard.classList.add('flip')
  if (count === 1) {
    temp1 = clickedCard
    firstSelection = clickedCard.classList[1]
    console.log(firstSelection)
    console.log(temp1)

  } else if (count === 2) {
    temp2 = clickedCard
    secondSelection = clickedCard.classList[1]
    console.log(secondSelection)

    if (firstSelection !== secondSelection) {
        console.log('not matched')
        let delay = setTimeout(() => {
            temp1.classList.add('shake')
            temp2.classList.add('shake')

            temp1.classList.remove('flip')
            temp2.classList.remove('flip')
            
            console.log(clickedCard)
          }, 900)
          count =0
      }
      else if (firstSelection === secondSelection) {
        console.log('matched')
        count =0
        winCounter++
        if (winCounter === 6) {
            alert('you won!')
        }
      }
      console.log(count)
  }
}
}

const bindClickToCards = () => {
  const cards = document.querySelectorAll('.main-box');
  cards.forEach(card => card.addEventListener('click', flipCard));
};

const resetGrid = () => {
  grid.innerHTML = '';
  addCardsToGrid();
  bindClickToCards();
  shuffleArray(images)
  count = 0
  seconds = 0
};

resetBtn.addEventListener('click', resetGrid);

addCardsToGrid();
bindClickToCards();
}
 window.addEventListener('DOMContentLoaded', init)
