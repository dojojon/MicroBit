let score = 0
let running = false
input.onButtonPressed(Button.A, function () {
    running = true
})
basic.forever(function () {
    if (running) {
        score = 0
        basic.showIcon(IconNames.Duck)
        basic.pause(Math.randomRange(1000, 5000))
        basic.clearScreen()
        while (!(input.buttonIsPressed(Button.B))) {
            basic.pause(1);
            score += 1
        }
        basic.clearScreen()
        basic.showNumber(score)
        running = false
    } else {
        basic.showArrow(6)
    }
})
