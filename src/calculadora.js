var m = require("mithril")
var state = require("./state")

var calculadora = {
    normaliza: function(nivel){
        var aux = nivel >= 5? nivel : 5 + (nivel - 5)/5
        return aux < 1? 1 : aux
    },
    view: function() {
        var spell = state.combo[m.route.param("tecnica")][m.route.param("forma")]
        var nivel = 5
        nivel += (state.selected.range - spell.range ) * 5
        nivel += (state.selected.duration - spell.duration) * 5
        nivel += (state.selected.target - spell.target) * 5
        nivel += (state.selected.magnitude - 4) * 5
        return m(".calculadora", [
            m("strong", "Nivel : " + calculadora.normaliza(nivel)),
        ])
    }
}

module.exports = calculadora



