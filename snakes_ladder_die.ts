let roll = 0

input.onButtonPressed(Button.A, function () {
    roll = Math.randomRange(0, 8)
    if (roll == 1) {
        basic.showIcon(IconNames.Snake)
    } else if (roll == 8) {
        basic.plotLeds(`
    # . . . #
    # # # # #
    # . . . #
    # # # # #
    # . . . #
    `);
    } else {
        basic.showNumber(roll)
    }
})
