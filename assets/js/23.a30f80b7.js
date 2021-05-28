(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{375:function(e,t,n){"use strict";n.r(t);var a=n(42),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"reactivity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reactivity"}},[e._v("#")]),e._v(" Reactivity")]),e._v(" "),n("p",[e._v("Instead of updating the DOM by hand after manually adding event listeners to manually queried\nelements, Muban makes used of the "),n("a",{attrs:{href:""}},[e._v("@vue/reactivity")]),e._v(" package to - with the help of some additional\nutils and binding setup - create a single data flow from user input to DOM mutations, that take\nthe component state as the focus.")]),e._v(" "),n("p",[e._v("Good articles to read are:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://v3.vuejs.org/guide/composition-api-introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://v3.vuejs.org/guide/composition-api-introduction.html"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://composition-api.vuejs.org/api.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://composition-api.vuejs.org/api.html"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("It would also help to point out similarities and differences in how reactivity is used between Vue\nand Muban, since other parts of the component setup are a bit different.")]),e._v(" "),n("h4",{attrs:{id:"similarities"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#similarities"}},[e._v("#")]),e._v(" Similarities")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Both Vue and Muban use a "),n("code",[e._v("setup")]),e._v(" function to manage component state.")])]),e._v(" "),n("li",[n("p",[e._v("Component state is managed through "),n("code",[e._v("ref")]),e._v(", "),n("code",[e._v("reactive")]),e._v(" and "),n("code",[e._v("computed")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("with the help of "),n("code",[e._v("watch")]),e._v(" and "),n("code",[e._v("watchEffect")]),e._v(" (from the "),n("code",[e._v("@vue/runtime-core")]),e._v(" package) you can react\nto changes in the state, and trigger side-effects.")])]),e._v(" "),n("li",[n("p",[e._v('Both have lifecycle "hooks" (e.g. '),n("code",[e._v("onMounted")]),e._v(") that can be used in the "),n("code",[e._v("setup")]),e._v(" function.")])]),e._v(" "),n("li",[n("p",[e._v('"hooks" or "compositions" are separate functions with reusable code that can be invoked in the\n'),n("code",[e._v("setup")]),e._v(' function or other "hooks", and can make use of both the reactive state and lifecycle hooks.')])]),e._v(" "),n("li",[n("p",[e._v('Incoming props are "reactive", so they can be used in bindings or be watched, resulting in\ntargeted DOM updates only to those affected elements.')])]),e._v(" "),n("li",[n("p",[e._v("State is used to define how the DOM should be displayed (although the methods are different).")])]),e._v(" "),n("li",[n("p",[e._v("Passing down reactive data between hooks or templates/bindings has the same caveats with\ndestructuring and wrapping things in refs.")])])]),e._v(" "),n("h4",{attrs:{id:"differences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#differences"}},[e._v("#")]),e._v(" Differences")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Vue")]),e._v(" creates all elements in the template/JSX, while "),n("strong",[e._v("Muban")]),e._v(" only changes certain elements\nwith bindings.")])]),e._v(" "),n("li",[n("p",[e._v("In "),n("strong",[e._v("Vue")]),e._v(" and "),n("strong",[e._v("React")]),e._v(", because they render everything, the data/state flows from top to\nbottom. Your props always come from the parent.")]),e._v(" "),n("p",[e._v("In "),n("strong",[e._v("Muban")]),e._v(' the rendered HTML is your initial source of truth. Similar-ish to an SSR setup,\nthe components need to "re-hydrate" their initial state based on the rendered HTML.\nThis initial state is placed on the elements itself, being passed to / queried from (child)\ncomponents directly. Which means that most initial data flows bottom-up from child to parent\ncomponents.')])]),e._v(" "),n("li",[n("p",[e._v("In "),n("strong",[e._v("Vue")]),e._v(" and "),n("strong",[e._v("React")]),e._v(", a "),n("code",[e._v("ref")]),e._v(" is a boxed primitive you can assign directly to HTML tags with\nthe "),n("code",[e._v("ref=")]),e._v(" attribute.")]),e._v(" "),n("p",[e._v("In "),n("strong",[e._v("Muban")]),e._v(" you also have the "),n("code",[e._v("data-ref=")]),e._v(" attribute, and have the same "),n("code",[e._v("ref")]),e._v(" in your state, but\nthey are not linked up. So the concept is the same, but the technical solution is slightly\ndifferent. In Muban you define your refs in the component definition (that will query your\n"),n("code",[e._v("data-ref")]),e._v(' elements), and they become "ref items" that can be used in bindings.')])])])])}),[],!1,null,null,null);t.default=i.exports}}]);