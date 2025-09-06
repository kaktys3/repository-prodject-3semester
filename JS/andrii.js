let canv = document.querySelector('.canvas')
let canvModel = canv.getContext('2d')
let isGameRunning = false
let interwal

const dinoGame = () => {
    clearInterval(interwal)

    let dinoMiniElem = new Image()
    let dinoBigElem = new Image()
    let dinoThreeElem = new Image()
    let dino = new Image()

    dino.src = '../andrii img/google-dino.png'
    dinoMiniElem.src = '../andrii img/kaktus-mini.png'
    dinoBigElem.src = '../andrii img/kaktus-big.png'
    dinoThreeElem.src = '../andrii img/many-kactus.png'

    let numbers = 300
    let numberElemDino = 0

    let elemDinoArr = [dinoBigElem, dinoMiniElem, dinoThreeElem]

    let dinoAnimation = document.querySelector('.dino-container__dino-img')
    let title = document.querySelector('.dino-container__game-over')

    dinoAnimation.style.top = "150px"

    document.body.addEventListener("click", () => {
                dinoAnimation.style.animationName = "positionDino"
                dinoAnimation.style.animationTimingFunction = "cubic-bezier(.25,.65,.35,1.3)"
                dinoAnimation.style.animationDuration = "0.9s"
                dinoAnimation.style.top = "0px"

                setTimeout(() => {
                    dinoAnimation.removeAttribute('style')
                    dinoAnimation.style.top = "150px"
                }, 800)
            })

    elemDinoArr[numberElemDino].onload = () => {
        title.style.display = 'none'
        interwal = setInterval(() => {
            canvModel.clearRect(0, 0, 720, 200);
            if (numberElemDino > 0) {
                canvModel.drawImage(elemDinoArr[numberElemDino], numbers, 112, 20, 40);
            } else {
                canvModel.drawImage(elemDinoArr[numberElemDino], numbers, 122, 15, 30);
            }

            numbers -= 1
            if (numbers < -20) {
                numberElemDino = Math.round(Math.random() * (0 - 2) + 2)
                numbers = 300
            }

            if (dinoAnimation.style.top === "150px" && numbers === 20) {
                clearInterval(interwal)
                title.style.display = "block"
                isGameRunning = false
            }
        }, 0.002)

    };

}


document.body.addEventListener("keydown", () => {
    if(!isGameRunning) {
    console.log(dinoGame())
    }

    isGameRunning = true
})

console.log(isGameRunning)