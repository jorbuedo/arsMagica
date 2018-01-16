var m = require("mithril")
var state = require("./state")

var magnitudes = {
    view: function(vnode) {
        var spell = state.combo[m.route.param("tecnica")][m.route.param("forma")]
        return [
            m(".rdt", [
                m("ul", [
                    m("strong", "Poder"),
                    state.magnitudes.map(function(elem, index){
                        return m("li", {
                            onclick:function(){
                                state.selected.magnitude = index
                            },
                            class: state.getSelectionClass(4,state.selected.magnitude, index)
                        }, elem)
                    }),
                ]),
                m("ul.descripciones", [
                    m("strong", "Descripcion"),
                    spell.magn.split('#').map(function(elem, index){
                        return m("li", elem)
                    }),
                ]),
            ]),
            m(".rdt", [
                m("strong", "Guidelines"),
                m("div", spell.dscr)
            ]),
        ]
    }
}

module.exports = magnitudes


