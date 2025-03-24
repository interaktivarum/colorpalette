let data = {
    colorAmount: 3,
    colors: [],

    // Töm hela färgpaletten
    clearPalette() {
        this.colors = []
    },

    // Slumpa den första färgen i färgpaletten
    randomBaseColor() {
        // Töm färgpaletten
        this.clearPalette()

        // Slumpa första färgen
        this.colors[0] = chroma.random()
    },

    // Rotera en färg 'color' (färgrymd: HSL) 'degrees' antal grader. Returnera den nya färgen.
    rotateHue(color, degrees) {
        return chroma(color).set('hsl.h', '+' + degrees)
    },

    logPalette() {
        console.log("Färgpalett:", this.colors.toString())
    },

    // Skapa en färgpalett med tre färger: RGB
    setPaletteRGB() {
        this.clearPalette()
        this.colors[0] = '#ff0000'
        this.colors[1] = '#00ff00'
        this.colors[2] = '#0000ff'

        // Logga färgpaletten i konsollen
        this.logPalette()
    },

    // Skapa en färgpalett med tre färger (triadic), baserat på den första färgen. 
    setPaletteTriadic() {
        // Varje färg ska roteras 360/3 = 120 grader
        let step = 360 / 3
        this.colors[1] = this.rotateHue(this.colors[0], step)
        this.colors[2] = this.rotateHue(this.colors[0], step * 2)

        // Logga färgpaletten i konsollen
        this.logPalette()
    }
}