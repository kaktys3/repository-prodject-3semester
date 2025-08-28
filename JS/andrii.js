let canv = document.querySelector('.canvas')
let canvModel = canv.getContext('2d')

let dinoMiniElem = document.createElement('img')
let dinoBigElem = document.createElement('img')
let dinoThreeElem = document.createElement('img')

let timer = Math.round(Math.random() * (1000 - 1500) + 1500)
console.log(timer)

dinoMiniElem.src = ('/andrii img/kaktus-mini.png')
dinoBigElem.src = ('/andrii img/kaktus-big.png')
dinoThreeElem.src = ('/andrii img/many-kactus.png')

