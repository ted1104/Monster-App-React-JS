(this.webpackJsonpmonster=this.webpackJsonpmonster||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n.n(r),a=n(3),o=n.n(a),i=(n(13),n(4)),h=n(5),l=n(7),u=n(6),d=(n(14),n(15),n(16),function(e){return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(s.jsx)("h2",{children:e.monster.name}),Object(s.jsx)("p",{children:e.monster.email})]})}),j=function(e){return Object(s.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(s.jsx)(d,{monster:e},e.id)}))})},m=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(s.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value,title:t.target.value})},e.state={monsters:[],searchField:"",title:"Monster Apps"},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=e.title,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:r}),Object(s.jsx)(m,{placeholder:"Search monsters",handleChange:this.handleChange}),Object(s.jsx)(j,{monsters:c})]})}}]),n}(r.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.77d75064.chunk.js.map