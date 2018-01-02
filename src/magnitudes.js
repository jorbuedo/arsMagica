var m = require("mithril")
var state = require("./state")

var magnitudes = {
    view: function(vnode) {
        var spell = state.combo[m.route.param("tecnica")][m.route.param("forma")]
        return [
            m(".rdt", [
                m("ul", [
                    m("strong", "Magnitud"),
                    state.magnitudes.map(function(elem, index){
                        return m("li", {
                            onclick:function(){
                                state.selected.magnitude = index
                            },
                            class: state.getSelectionClass(4,state.selected.magnitude, index)
                        }, elem)
                    }),
                ]),
                m("ul.descripciones", {style:"width:600px;max-width:100%;"}, [
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


