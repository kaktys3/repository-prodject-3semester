let canv = document.querySelector('.canvas')
let canvModel = canv.getContext('2d')

const dinoGame = () => {
    let dinoMiniElem = new Image()
    let dinoBigElem = new Image()
    let dinoThreeElem = new Image()

    dinoMiniElem.src = '../andrii img/kaktus-mini.png'
    dinoBigElem.src = '../andrii img/kaktus-big.png'
    dinoThreeElem.src = '../andrii img/many-kactus.png'

    let timer = Math.round(Math.random() * (1000 - 1500) + 1500)
    console.log(timer)

    dinoBigElem.onload = () => {
        canvModel.drawImage(dinoBigElem, 275, 110, 20, 40);
    };

    dinoMiniElem.onload = () => {
        canvModel.drawImage(dinoMiniElem, 255, 130, 10, 20);
    };

    dinoThreeElem.onload = () => {
        canvModel.drawImage(dinoThreeElem, 220, 110, 20, 40);
    };
}

console.log(dinoGame())