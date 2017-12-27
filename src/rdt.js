var m = require("mithril")
var state = require("./state")

var rdt = {
    getClass: function(inicial, selected, index){
        var str = (index == inicial)? "rdtIni " : ""
        str += (index == selected)? "rdtSel " : ""
        return str
    },
    view: function(vnode) {
        var spell = state.combo[m.route.param("tecnica")][m.route.param("forma")]
        return m(".rdt", [
            m("ul", [
                m("strong", "Alcances"),
                state.ranges.map(function(elem, index){
                    return m("li", {
                        onclick:function(){
                            state.selected.range = index
                        },
                        class: rdt.getClass(spell.range,state.selected.range, index)
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
                        class: rdt.getClass(spell.duration,state.selected.duration, index)
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
                        class: rdt.getClass(spell.target,state.selected.target, index)
                    }, elem)
                }),
            ]),
        ])
    }
}

module.exports = rdt

