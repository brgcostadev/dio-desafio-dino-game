const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false
let position = 0

function handleKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isJumping)
            jump()
    }
}

function jump() {
    isJumping = true

    let upInterval = setInterval(() => {
        if(position >= 160) {
            clearInterval(upInterval)
            let downInterval = setInterval(() => {
                if(position == 20) {
                    clearInterval(downInterval)
                    isJumping = false
                }

                position -= 20
                dino.style.bottom = position + 'px'
            }, 20)
        }
        
        position += 20 
        dino.style.bottom = position + 'px'
    }, 20)
}

function createCactus() {
    const cactus = document.createElement('div')
    let cactusPosition = 1000
    let randomTime = Math.random() * 6000

    console.log(randomTime)

    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {
        if(cactus < -60) {
            clearInterval(leftInterval)
            background.removeChild(cactus)
        }
        if(cactusPosition > 0 && cactusPosition < 80 && position < 75) {
            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo </h1>'
        }

        cactusPosition -= 10
        cactus.style.left = cactusPosition + 'px'
    }, 20)

    setTimeout(createCactus, randomTime)
}

createCactus()
document.addEventListener('keyup', handleKeyUp)