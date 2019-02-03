let energy = 0
let happy = 0

input.onButtonPressed(Button.AB, function () {
    basic.showString("Energy")
    basic.showString("" + energy)
})

input.onGesture(Gesture.Shake, function () {
    energy += -2
    happy += 5
})

input.onButtonPressed(Button.A, function () {
    energy += 5
    basic.showIcon(IconNames.Pitchfork)
})

happy = 12
energy = 25

basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        # # # . .
        # . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . # # #
        . . # # #
        . . # . #
        . . . . .
        `)
    if (happy > 20) {
        basic.showIcon(IconNames.Happy)
    } else if (happy > 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Skull)
        basic.pause(1000)
        basic.showString("Game Over")
    }
})

basic.forever(function () {
    basic.pause(1000)
    happy += -1
})

basic.forever(function () {
    if (energy < 0) {
        happy += -1
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
    }
})
