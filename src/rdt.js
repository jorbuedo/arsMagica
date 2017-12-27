var m = require("mithril")
var state = require("./state")

var rdt = {
    view: function(vnode) {
        var spell = state.combo[m.route.param("tecnica")][m.route.param("forma")]
        return [
            m("strong", "Pagina: " + spell.pag),
            m(".rdt", [
                m("ul", [
                    m("strong", "Alcances"),
                    state.ranges.map(function(elem, index){
                        return m("li", {
                            onclick:function(){
                                state.selected.range = index
                            },
                            class: state.getSelectionClass(spell.range,state.selected.range, index)
                        }, elem)
                    }),
                ]),
                m("ul", [
                    m("strong", "Duraciones"),
                    state.durations.map(function(elem, index){
                        return m("li", {
                            onclick:function(){
                                state.selected.duration = index
                            },
                            class: state.getSelectionClass(spell.duration,state.selected.duration, index)
                        }, elem)
                    }),
                ]),
                m("ul", [
                    m("strong", "Objetivos"),
                    state.targets.map(function(elem, index){
                        return m("li", {
                            onclick:function(){
                                state.selected.target = index
                            },
                            class: state.getSelectionClass(spell.target,state.selected.target, index)
                        }, elem)
                    }),
                ]),
            ])
        ]
    }
}

module.exports = rdt

