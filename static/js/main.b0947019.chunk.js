(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),s=n.n(a),i=(n(14),n(3)),o=n.n(i),u=n(5),h=n(6),l=n(7),d=n(9),f=n(8),j=(n(16),n(0)),p=function(e){return Object(j.jsx)("h1",{children:e.country.name})},b=function(e){return e.countries.map((function(e){return Object(j.jsx)(p,{country:e},e.id)}))},g=function(e){var t=e.placeholder,n=e.changeHandler;return Object(j.jsx)("input",{type:"search",placeholder:t,onChange:n})},O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).changeSearchField=function(e){r.setState({searchField:e.target.value})},r.getFilteredCountries=function(){return r.state.countries.filter((function(e){return e.name.toLowerCase().includes(r.state.searchField.toLowerCase())}))},r.state={countries:[],searchField:""},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,this.setState({countries:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(g,{changeHandler:this.changeSearchField,placeholder:"Search for a country"}),Object(j.jsx)(b,{countries:this.getFilteredCountries()})]})}}]),n}(c.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.b0947019.chunk.js.map