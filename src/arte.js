var m = require("mithril")
var state = require("./state")

var arte = {
    view: function(vnode) {
        var link = vnode.attrs.tec? "/"+vnode.attrs.arte +"/"+ m.route.param("forma") : "/"+m.route.param("tecnica") + "/" + vnode.attrs.arte
        return m("a.arte",{
            href:link,
            oncreate: m.route.link,
            class: (vnode.attrs.arte == m.route.param("forma") || vnode.attrs.arte == m.route.param("tecnica"))? "active" : ""
        }, [
            m("figure", [
                m("img", {src:"img/"+vnode.attrs.arte.toLowerCase()+".jpg"}),
                m("figcaption", vnode.attrs.arte)
            ])
        ])
    }
}

module.exports = arte

