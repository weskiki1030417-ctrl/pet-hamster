input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
basic.showLeds(`
    . # # . #
    . # . # .
    . # # . .
    . # . # .
    . # . . #
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `)
basic.showLeds(`
    . # . . #
    . # . # .
    . # # . .
    . # . # .
    . # . . #
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `)
