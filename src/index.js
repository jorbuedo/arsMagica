var m = require("mithril")
var state = require("./state")
var rdt = require("./rdt")
var tecnicas = require("./tecnicas")
var formas = require("./formas")
var calculadora = require("./calculadora")

var layout = {
    view: function(vnode){
        return m(".layout", [
            m(tecnicas),
            m(formas),
            m(rdt),
            m(calculadora),
        ])
    }
}

m.route(document.getElementById("app"), "/Creo/Animal", {
    "/:tecnica/:forma": {
        onmatch: function(args, requestedPath) {
            state.selected.range = state.combo[args.tecnica][args.forma].range
            state.selected.duration = state.combo[args.tecnica][args.forma].duration
            state.selected.target = state.combo[args.tecnica][args.forma].target
            return layout
        }
    }
})

