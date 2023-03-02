basic.pause(2000)
if (input.buttonIsPressed(Button.A)) {
    music.ringTone(262)
} else {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    basic.showIcon(IconNames.Giraffe)
}
