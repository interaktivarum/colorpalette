let colors = []

// Töm hela färgpaletten
function clearPalette() {
    colors = []
}

// Slumpa den första färgen i färgpaletten
function randomBaseColor() {
    // Töm färgpaletten
    clearPalette()

    // Slumpa första färgen
    colors[0] = chroma.random()
}

// Rotera en färg 'color' (färgrymd: HSL) 'degrees' antal grader. Returnera den nya färgen.
function rotateHue(color, degrees) {
    return chroma(color).set('hsl.h', '+' + degrees)
}

function logPalette() {
    console.log("Färgpalett:", colors.toString())
}

// Skapa en färgpalett med tre färger: RGB
function setPaletteRGB() {
    clearPalette()
    colors[0] = '#ff0000'
    colors[1] = '#00ff00'
    colors[2] = '#0000ff'

    // Logga färgpaletten i konsollen
    logPalette()
}

// Skapa en färgpalett med tre färger (triadic), baserat på den första färgen. 
function setPaletteTriadic() {
    // Varje färg ska roteras 360/3 = 120 grader
    let step = 360 / 3
    colors[1] = rotateHue(colors[0], step)
    colors[2] = rotateHue(colors[0], step * 2)

    // Logga färgpaletten i konsollen
    logPalette()
}