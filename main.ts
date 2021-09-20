let x = 0
basic.forever(function () {
    x = 360 - input.compassHeading()
    x = Math.map(x, 0, 360, 0, 8)
    x = Math.round(x)
    x = x % 8
    images.arrowImage(x).showImage(0, 0)
})
