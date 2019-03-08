# micro:bit Arklow dojo notes 

## Ideas

* Virutal Pet - 
* Reaction Game - https://codeclubprojects.org/en-GB/microbit/reaction/
* Sonar - https://www.instructables.com/id/Distance-Sensing-With-the-Microbit-and-Sonar-HC-SR/
* GPIO - Blinky Lights
* Frustraition Game - https://codeclubprojects.org/en-GB/microbit/frustration/
* Buzzer/Headphones - [Notes](./buzzer.md)
* Light Sensor - Whos been eating my sweets
* Water sensor - Nails and analog pins
* Game Controller - USB Controller motor bike example
* Bluetooth - Message from phone??
* Rover - Connect to rover??

* Serial - Serial comms
* Wifi - ESP8266 over serial
* Transition from blocks to javascript
* Python 

## Scripts

### Virtual Pet 

Virtual pet in blocks - let score = 0
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


### Buzzer 

### Reaction Duck

Press A to start.  When the duck disappears press B.  The smaller the score the better.

reaction_duck.js




