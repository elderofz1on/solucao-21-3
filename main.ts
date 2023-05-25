basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hackbitmotors.Servo(hackbitmotors.Servos.S8, 10)
    } else if (input.buttonIsPressed(Button.B)) {
        hackbitmotors.Servo(hackbitmotors.Servos.S8, 170)
    } else {
        hackbitmotors.Servo(hackbitmotors.Servos.S8, Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 10, 170))
    }
})
