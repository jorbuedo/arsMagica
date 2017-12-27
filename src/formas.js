var m = require("mithril")
var state = require("./state")
var arte = require("./arte")

var formas = {
    view: function() {
        return m("nav", [
            m("strong", "Formas"),
            m("ul.formas", [
                state.formas.map(function(elem){
                    return m(arte, {arte:elem})
                }),
            ])
        ])
    }
}

module.exports = formas



