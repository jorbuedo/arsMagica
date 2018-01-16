var m = require("mithril")
var state = require("./state")
var arte = require("./arte")

var tecnicas = {
    view: function() {
        return m("nav", [
            m("strong", "Tecnicas"),
            m("ul.tecnicas", [
                state.tecnicas.map(function(elem){
                    return m(arte, {arte:elem, tec: true})
                }),
            ])
        ])
    }
}

module.exports = tecnicas


