(this.webpackJsonplumin=this.webpackJsonplumin||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=(a(17),a(2)),l=a(3),u=a(5),s=a(4),m=(a(18),a(19),function(){return r.a.createElement("h1",{id:"title"},"LUMiN")}),d=(a(20),a(21),function(e){var t=e.isOn,a=e.id;return t?r.a.createElement("div",{className:"GameSquare OFF",id:a}," "):r.a.createElement("div",{className:"GameSquare ON",id:a}," ")}),f=function(e){var t=e.gameState;return r.a.createElement("div",{className:"gameBoard"},t.map((function(e,a){return r.a.createElement("div",{className:"row",id:"row".concat(a),key:a},e.map((function(e,n){return r.a.createElement(d,{key:n,isOn:t[a][n],id:"".concat(a).concat(n)})})))})))},v=a(10),g=a(11),E=(a(27),function(e){e.score;return r.a.createElement("div",{className:"restart",id:"restart"},r.a.createElement(v.a,{id:"restartIcon",icon:g.a}))}),h=(a(28),function(e){var t=e.score;return r.a.createElement("div",{className:"score-board"},r.a.createElement("h1",null,"Moves: ",t),r.a.createElement(E,null))}),p=(a(29),a(30),function(e){var t=e.buttonText,a=e.id;return r.a.createElement("div",{className:"button",id:a},t)}),S=function(){return r.a.createElement("div",{className:"win-screen"},r.a.createElement("h1",{className:"win-text"},"You win"),r.a.createElement("div",{className:"win-options"},r.a.createElement(p,{buttonText:"Login"}),r.a.createElement(p,{buttonText:"Play Again",id:"play-again"})))},b=function(e){var t=e.gameState,a=e.score,n=e.gameWon;return r.a.createElement("div",{className:"game"},r.a.createElement(h,{score:a}),r.a.createElement(f,{gameState:t}),n?r.a.createElement(S,null):null)},N=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{id:"debugger"},"DEBUGGER"))}}]),a}(n.Component);function w(e){for(var t=e,a=0;a<=100;a++){var n=Math.floor(5*Math.random()),r=Math.floor(5*Math.random()),c=[n+1,n-1,r+1,r-1];t[n][r]=1-t[n][r],c[0]<=4&&(t[c[0]][r]=1-t[c[0]][r]),c[1]>=0&&(t[c[1]][r]=1-t[c[1]][r]),c[2]<=4&&(t[n][c[2]]=1-t[n][c[2]]),c[3]>=0&&(t[n][c[3]]=1-t[n][c[3]])}return t}function k(){for(var e=[],t=0;t<5;t++){for(var a=[],n=0;n<5;n++)a.push(0);e.push(a)}return e}var O=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t=e.target.id;"debugger"===t&&n.setState({gameWon:!0}),"restart"!==t&&"restartIcon"!==t&&"play-again"!==t||n.setState({score:0,gameState:w(k()),gameWon:!1});var a=parseInt(t[0]),r=parseInt(t[1]);if(function(e){return e>=0&&e<=44&&!isNaN(e[0])}(t)){var c=n.state.score+1,o=n.state.gameState,i=[a+1,a-1,r+1,r-1];o[a][r]=1-o[a][r],i[0]<=4&&(o[i[0]][r]=1-o[i[0]][r]),i[1]>=0&&(o[i[1]][r]=1-o[i[1]][r]),i[2]<=4&&(o[a][i[2]]=1-o[a][i[2]]),i[3]>=0&&(o[a][i[3]]=1-o[a][i[3]]),function(e){if(0===e.gameState.flat(2).reduce((function(e,t){return e+t}),0))return!0}(n.state)&&n.setState({gameWon:!0}),n.setState({score:c,gameState:o})}},n.state={gameWon:!1,score:0,gameState:[]},n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.setState({gameState:w(k())})}},{key:"render",value:function(){var e=this.state,t=e.score,a=e.gameState,n=e.gameWon;return r.a.createElement("div",{onClick:this.handleClick,className:"App"},r.a.createElement(m,null),r.a.createElement(b,{score:t,gameState:a,gameWon:n}),r.a.createElement(N,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.7d4d0b4c.chunk.js.map