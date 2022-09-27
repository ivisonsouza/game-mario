<<<<<<< HEAD
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')
const button = document.querySelector('.button')
const buttonMobile = document.querySelector('.jump-mobile')

const jump = function()  {
    mario.classList.add('jump');

    setTimeout(function() {
        mario.classList.remove('jump');
    },800)
}

const loop = setInterval(function() {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseFloat(window.getComputedStyle(mario).bottom.replace('px', ''));
    const buttonReiniciar = window.getComputedStyle(button);


    console.log('loop')
    console.log(marioPosition)

    if (pipePosition < 38 && marioPosition < 55) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom= `${marioPosition}px`

        mario.src = './img/mario-lose.png'
        mario.style.width = '70px'

        clouds.style.animation = 'none'
        button.style.display = 'block'

        clearInterval(loop)
    }


},10);

document.addEventListener('keydown', jump);
=======
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')
const button = document.querySelector('.button')

const jump = function()  {
    mario.classList.add('jump');

    setTimeout(function() {
        mario.classList.remove('jump');
    },800)
}

const loop = setInterval(function() {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseFloat(window.getComputedStyle(mario).bottom.replace('px', ''));
    const buttonReiniciar = window.getComputedStyle(button);


    console.log('loop')
    console.log(marioPosition)

    if (pipePosition < 38 && marioPosition < 55) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom= `${marioPosition}px`

        mario.src = './img/mario-lose.png'
        mario.style.width = '70px'

        clouds.style.animation = 'none'
        button.style.display = 'block'

        clearInterval(loop)
    }


},10);

document.addEventListener('keydown', jump);
>>>>>>> 0af86381a9b7c47f7e361dbd46c5557b5988b55e
