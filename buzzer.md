# Using Buzzer Notes

## Set up

Parts:  2 clip wires, 1 PEIZO Buzzer or headphones

1. Connect a wire from Pin 0 to a leg on the buzzer
2. Connect a wire from GND to the other leg of the buzzer
3. Add input for button A block
4. In music section add play melody block
5. Download to microbit
6. Test

## Ideas

* Try a song 
* Try making a police siren sound
* Try a security buzzer using the light sensors so it alarms when the box is opened
* Try a changing the tone with sensors/light movement/temperature
* Try a changing the tempo when sensors/light movement/temperature

## Some songs

Twinkle Twinkle
(https://www.letsplaykidsmusic.com/twinkle-twinkle-little-star-easy-piano-music/)

C C G G A A G F F E E D D C

## Movement Sensor

Try change the tone using another axis.

```javascript
basic.forever(function () {
    if (Math.abs(input.acceleration(Dimension.X)) > 100) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
```
