(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,i){},16:function(t,e,i){},17:function(t,e,i){},19:function(t,e,i){"use strict";i.r(e);var s=i(2),a=i.n(s),c=i(5),n=i.n(c),l=(i(15),i(3)),r=i(8),o=i(6),d=i(7),m=i(1),h=i(10),u=i(9),j=(i.p,i(16),i(17),i(0));var p=function(t){var e;"all"==t.view?e=t.items:"active"==t.view?e=t.items.filter((function(t){return!t.isCompleted})):"completed"==t.view&&(e=t.items.filter((function(t){return t.isCompleted})));var i=e.map((function(e){return Object(j.jsxs)("div",{className:"list ".concat(t.isDark?"dark_list":""),children:[Object(j.jsx)("div",{className:"circle_border_wrap",children:Object(j.jsx)("div",{onClick:function(){return t.toggleCompleted(e.key)},className:"".concat(e.isCompleted?"tick_circle":"untick_circle","\n                                ").concat(t.isDark?"dark_untick_circle":"")})}),Object(j.jsx)("p",{className:"".concat(e.isCompleted?"crossover_text":""," \n                            ").concat(e.isCompleted&&t.isDark?"dark_crossover_text":""),children:e.text}),Object(j.jsx)("div",{className:"item_cross",onClick:function(){return t.deleteItem(e.key)}})]},e.key)}));return Object(j.jsx)("div",{id:"items_container",children:i})},b=function(t){Object(h.a)(i,t);var e=Object(u.a)(i);function i(t){var s;return Object(o.a)(this,i),(s=e.call(this,t)).state={isDark:!1,view:"all",items:[],currentItem:{text:"",key:"",isCompleted:!1}},s.handleInput=s.handleInput.bind(Object(m.a)(s)),s.addItem=s.addItem.bind(Object(m.a)(s)),s.deleteItem=s.deleteItem.bind(Object(m.a)(s)),s.toggleCompleted=s.toggleCompleted.bind(Object(m.a)(s)),s.clearCompleted=s.clearCompleted.bind(Object(m.a)(s)),s.setView=s.setView.bind(Object(m.a)(s)),s.toggleMode=s.toggleMode.bind(Object(m.a)(s)),s}return Object(d.a)(i,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now(),isCompleted:!1}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(console.log(e),""!==e.text){var i=[].concat(Object(r.a)(this.state.items),[e]);this.setState({items:i,currentItem:{text:"",key:"",isCompleted:!1}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"toggleCompleted",value:function(t){var e=this.state.items.map((function(e){if(e.key==t){var i=e;return e.isCompleted?i.isCompleted=!1:i.isCompleted=!0,i}return e}));this.setState({items:e})}},{key:"clearCompleted",value:function(){var t=this.state.items.filter((function(t){return!t.isCompleted}));this.setState({items:t})}},{key:"setView",value:function(t){this.setState({view:t.target.id})}},{key:"toggleMode",value:function(){this.setState((function(t){return{isDark:!t.isDark}}))}},{key:"render",value:function(){var t,e,i;return Object(j.jsx)("div",{className:"light_bg ".concat(this.state.isDark?"dark_bg":""),children:Object(j.jsxs)("div",{id:"app_container",children:[Object(j.jsx)("h1",{children:"TODO"}),Object(j.jsx)("div",{className:"switch_to_dark ".concat(this.state.isDark?"switch_to_light":""),onClick:this.toggleMode}),Object(j.jsxs)("form",{id:"input_field",type:"text",onSubmit:this.addItem,children:[Object(j.jsx)("div",{className:"light_input_circle ".concat(this.state.isDark?"dark_input_circle":"")}),Object(j.jsx)("input",{type:"text",placeholder:"Create a new todo...",className:"light_input ".concat(this.state.isDark?"dark_input":""),value:this.state.currentItem.text,onChange:this.handleInput}),Object(j.jsx)("button",{type:"submit",hidden:!0})]}),Object(j.jsx)(p,{items:this.state.items,view:this.state.view,isDark:this.state.isDark,deleteItem:this.deleteItem,toggleCompleted:this.toggleCompleted}),Object(j.jsxs)("div",{className:"light_footer ".concat(this.state.isDark?"dark_footer":""),children:[Object(j.jsxs)("p",{className:"light_counter ".concat(this.state.isDark?"dark_counter":""),children:[this.state.items.length," items left"]}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",(t={id:"all",className:"light_filter ".concat(this.state.isDark?"dark_filter":""),onClick:this.setView},Object(l.a)(t,"className","all"==this.state.view?"selected_filter":""),Object(l.a)(t,"children","All"),t)),Object(j.jsx)("li",(e={id:"active",className:"light_filter ".concat(this.state.isDark?"dark_filter":""),onClick:this.setView},Object(l.a)(e,"className","active"==this.state.view?"selected_filter":""),Object(l.a)(e,"children","Active"),e)),Object(j.jsx)("li",(i={id:"completed",className:"light_filter ".concat(this.state.isDark?"dark_filter":""),onClick:this.setView},Object(l.a)(i,"className","completed"==this.state.view?"selected_filter":""),Object(l.a)(i,"children","Completed"),i))]})}),Object(j.jsx)("button",{onClick:this.clearCompleted,className:"light_clear ".concat(this.state.isDark?"dark_clear":""),children:"Clear Completed"})]}),Object(j.jsx)("p",{className:"light_drag ".concat(this.state.isDark?"dark_drag":""),children:"Drag and drop to reorder list"})]})})}}]),i}(a.a.Component),k=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(e){var i=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,n=e.getTTFB;i(t),s(t),a(t),c(t),n(t)}))};i.p,i.p;n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.9104a791.chunk.js.map