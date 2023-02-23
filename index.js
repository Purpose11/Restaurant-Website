const mainBackground = document.getElementById('main-bg')
const mainTexth1 = document.getElementById('tag-line')
const mainTextDiv = document.getElementById('mainText')
const barIcon = document.getElementById('bar')
const navivagationMenu = document.querySelector('.nav-menu ul')
const closeNavigation = document.getElementById('close-navigation')
const foodImg = document.getElementById('food')


const backgroundArray = [
    {
        text : 'A Taste of Home',
        image: 'images/wallpaper4.jpg'
    },
    {
        text : 'The Perfect Burger',
        image: 'images/wallpaper5.jpg'
    },
    {
        text : 'Hasty And Tasty',
        image: 'images/wallpaper6.jpg'
    },
    {
        text : 'Taste The Difference',
        image: 'images/wallpaper8.jpg'
    },
]

let time = 3000
let i = 0

function changeBackground (){
    if ( i < backgroundArray.length){
        i++
        mainBackground.style.backgroundImage = `url(${backgroundArray[i].image})`
        mainTexth1.innerText = `${backgroundArray[i].text}`
        mainTextDiv.classList.add('slide-in-bottom')
      
  
    
    }
    else{
        i = 0
        mainBackground.style.backgroundImage = `url(${backgroundArray[0].image})`
        mainTexth1.innerText = `${backgroundArray[0].text}`
        mainTextDiv.classList.add('slide-in-bottom')
        
    }

    mainTextDiv.addEventListener('animationend', () => {
        mainTextDiv.classList.remove('slide-in-bottom');
      });
      
 
}
setInterval(changeBackground, time)
changeBackground()

barIcon.addEventListener('click', () =>{
   navivagationMenu.style.right = '0'
})

closeNavigation.addEventListener('click', () =>{
    navivagationMenu.style.right = '-100%'
})


setInterval( () => {
    let rotate = 'rotate(10deg)'
    foodImg.style.transform  +=  rotate
}, 200)
