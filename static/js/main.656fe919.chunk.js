(this.webpackJsonpprojokes=this.webpackJsonpprojokes||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),i=n.n(r),c=(n(14),n(5)),l=n(6),s=n(1),u=n(8),k=n(7),m=(n(2),function(e){var t=e.joke,n=e.setup,o=e.delivery;return a.a.createElement("div",{className:"f3"},a.a.createElement("div",null,t),a.a.createElement("div",null,n),a.a.createElement("div",null,o))}),v=function(e){var t=e.jokeClick;return a.a.createElement("button",{className:"joke-button bg-gold bw4 br-pill b--dark-red grow grow:hover ",onClick:t},"joke")},d=(n(15),function(e){Object(u.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={joke:"Click the button",setup:"to get a joke",delivery:"about programmers"},e.jokeButtonClick=e.jokeButtonClick.bind(Object(s.a)(e)),e}return Object(l.a)(n,[{key:"jokeButtonClick",value:function(){var e=this;fetch("https://sv443.net/jokeapi/v2/joke/Programming").then((function(e){return e.json()})).then((function(t){return function(){if("28"===t.id)e.jokeButtonClick()}(),"single"===t.type?(e.setState({joke:t.joke}),e.setState({setup:""}),e.setState({delivery:""})):(e.setState({setup:t.setup}),e.setState({delivery:t.delivery}),e.setState({joke:""}))}))}},{key:"render",value:function(){var e=this.state,t=e.joke,n=e.setup,o=e.delivery;return a.a.createElement("div",{className:"app"},a.a.createElement("div",null,a.a.createElement(v,{jokeClick:this.jokeButtonClick})),a.a.createElement("div",{className:"joke"},a.a.createElement(m,{joke:t,setup:n,delivery:o})),a.a.createElement("div",{className:"githubDiv"},a.a.createElement("a",{href:"https://github.com/Furuikeya/projokes"}," GitHub ")))}}]),n}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.656fe919.chunk.js.map