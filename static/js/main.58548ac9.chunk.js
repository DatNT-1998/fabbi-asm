(this["webpackJsonpfabbi-asm-1"]=this["webpackJsonpfabbi-asm-1"]||[]).push([[0],{134:function(e,a,t){e.exports=t(248)},139:function(e,a,t){},244:function(e,a,t){},248:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),i=t.n(r),s=(t(139),t(140),t(95)),o=t(13),u=t(33),c=t(250),m=t(251),d=t(254),p=t(252),h=function(e){var a=c.a.useForm(),t=Object(u.a)(a,1)[0],r=Object(n.useState)(e.location&&e.location.state&&e.location.state.numberPeople?e.location.state.numberPeople:""),i=Object(u.a)(r,2),s=i[0],o=i[1],h=Object(n.useState)(e.location&&e.location.state&&e.location.state.meal?e.location.state.meal:""),b=Object(u.a)(h,2),v=b[0],f=b[1],E=function(){""===v||null===s?alert("Please select a meal and a number of people"):e.history.push({pathname:"/step2/".concat(v),state:{numberPeople:s,meal:v}})};return l.a.createElement(c.a,{form:t,layout:"vertical",onFinish:function(){E()}},l.a.createElement(c.a.Item,{initialValue:v,label:"Please select a meal",name:"mealName",rules:[{required:!0,message:"Please select a meal!"}]},l.a.createElement(m.a,{onChange:function(e){f(e)}},[{value:"1",label:"breakfast"},{value:"2",label:"lunch"},{value:"3",label:"dinner"}].map((function(e,a){return l.a.createElement(m.a.Option,{key:a,value:e.label},e.label)})))),l.a.createElement(c.a.Item,{initialValue:""===s?o(1):s,label:"Please Enter Number of people",name:"numberofPeople",rules:[{required:!0,message:"Please select a number of people!"},function(){return{validator:function(e,a){return a>0&&a<=10?Promise.resolve():Promise.reject("The number of people must not be greater than 10!")}}}]},l.a.createElement(d.a,{type:"number",max:10,min:1,onChange:function(e){o(e)}})),l.a.createElement(p.a,{type:"primary",htmlType:"submit"},"Next"))},b=t(129),v=t(84),f=function(e){var a=c.a.useForm(),t=Object(u.a)(a,1)[0],r=v.dishes,i=Object(n.useState)(e.location&&e.location.state&&e.location.state.restaurant?e.location.state.restaurant:""),s=Object(u.a)(i,2),o=s[0],d=s[1],h=[],f=[];r.map((function(a){var t,n=Object(b.a)(a.availableMeals);try{for(n.s();!(t=n.n()).done;){var l=t.value;e.location.state.meal===l&&h.push(a)}}catch(r){n.e(r)}finally{n.f()}return a})),f=(f=h.map((function(e){return e.restaurant}))).filter((function(e,a){return f.indexOf(e)===a}));var E=function(){""===o?alert("Please select a restaurant"):e.history.push({pathname:"/step3/".concat(o),state:{numberPeople:e.location.state.numberPeople,meal:e.location.state.meal,restaurant:o}})};return l.a.createElement(c.a,{form:t,layout:"vertical",onFinish:function(){E()}},l.a.createElement(c.a.Item,{initialValue:o,label:"Please select a Restaurant",name:"restaurantName",rules:[{required:!0,message:"Please select a restaurant!"}]},l.a.createElement(m.a,{onChange:function(e){d(e)}},f.map((function(e,a){return l.a.createElement(m.a.Option,{key:a,value:e},e)})))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(p.a,{type:"primary",onClick:function(){e.history.push({pathname:"/",state:{numberPeople:e.location.state.numberPeople,meal:e.location.state.meal}})}},"Previous"),l.a.createElement(p.a,{type:"primary",htmlType:"submit"},"Next")))},E=t(99),y=t(255),g=t(256),P=t(257),M=[],k=function(e){var a=c.a.useForm(),t=Object(u.a)(a,1)[0],r=e.location&&e.location.state&&e.location.state.dishes?e.location.state.dishes:[],i=e.location&&e.location.state&&e.location.state.dishes?e.location.state.dishes[0].title:"",s=e.location&&e.location.state&&e.location.state.dishes?e.location.state.dishes[0].numServe:1,o=v.dishes,h=[];o.map((function(a){return a.restaurant===e.location.state.restaurant&&h.push(a),a}));var b=function(){for(var a=f(),t=0,n=0;n<a.length;n++)t+=a[n].numServe;""===i||""===s||null===s?alert("Select a dish and a number of servings "):t<e.location.state.numberPeople?alert("Please select a disc number that matches your number of people"):e.history.push({pathname:"/step4/review",state:{numberPeople:e.location.state.numberPeople,meal:e.location.state.meal,restaurant:e.location.state.restaurant,dish:a}})},f=function(){var e=[{title:i,numServe:s}].concat(Object(E.a)(M)),a=[],t=[];for(var n in e.map((function(e){return void 0!==e&&(a[e.title]?a[e.title]+=e.numServe:a[e.title]=e.numServe,e)})),a)t.push({title:n,numServe:a[n]});return e};return Object(n.useEffect)((function(){var e=t.getFieldValue,a=t.setFieldsValue;function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e(),l=n.users,r=void 0===l?[]:l,i=Object(E.a)(r);i.push(t),a({users:i})}for(var l=1;l<r.length;l++)n({title:r[l].title,numServe:r[l].numServe})}),[e.location,r]),l.a.createElement(c.a,{form:t,layout:"vertical",onValuesChange:function(e,a){if(M=[],"undefined"!==typeof a.users)for(var t=0;t<a.users.length;t++)if(a.users[t]&&a.users[t].title&&a.users[t].title===a.tendia)alert("khong duoc chon 2 mon trung nhau. Vui long chon mon khac"),a.users[t].title="";else{for(var n=t+1;n<=a.users.length;n++){if(a.users[t]&&a.users[t].title&&""===a.users[t].title)return void alert("Vui long chon mon");a.users[t]&&a.users[t].title&&a.users[n]&&a.users[n].title&&a.users[t].title===a.users[n].title&&(alert("khong duoc chon 2 mon trung nhau. Vui long chon mon khac"),a.users[n].title="")}M=a.users}},onFinish:function(){b()}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(c.a.Item,{initialValue:i,label:"Please select a dish",style:{flex:.95},name:"tendia",rules:[{required:!0,message:"Please select a dish!"}]},l.a.createElement(m.a,{onChange:function(e){i=e}},h.map((function(e){return l.a.createElement(m.a.Option,{key:e.id,value:e.name},e.name)})))),l.a.createElement(c.a.Item,{initialValue:s,label:"Please enter no of servings",name:"soluong",rules:[{required:!0,message:"Please select a number of serving!"},function(){return{validator:function(e,a){return a>0&&a<=10?Promise.resolve():Promise.reject("Cannot be greater than 10!")}}}]},l.a.createElement(d.a,{type:"number",max:10,min:1,onChange:function(e){s=e}}))),l.a.createElement(c.a.List,{name:"users"},(function(e,a){var t=a.add,n=a.remove;return l.a.createElement("div",null,e.map((function(e){return l.a.createElement(y.b,{key:e.key,style:{display:"flex",marginBottom:8},align:"start"},l.a.createElement(c.a.Item,Object.assign({label:"Please select a dish"},e,{name:[e.name,"title"],fieldKey:[e.fieldKey,"title"],style:{flex:"0.95",marginRight:"8px"},rules:[{required:!0,message:"Please choose the dish!"}]}),l.a.createElement(m.a,null,h.map((function(e){return l.a.createElement(m.a.Option,{key:e.id,value:e.name}," ",e.name," ")})))),l.a.createElement(c.a.Item,Object.assign({},e,{label:"Please enter no of servings",name:[e.name,"numServe"],fieldKey:[e.fieldKey,"numServe"],rules:[{required:!0,message:"Please select a number!"},function(){return{validator:function(e,a){return a>0&&a<=10?Promise.resolve():Promise.reject("Cannot be greater than 10")}}}],initialValue:1}),l.a.createElement(d.a,{type:"number",max:10,min:1})),l.a.createElement(c.a.Item,null,l.a.createElement(g.a,{style:{marginTop:"16px",marginLeft:"16px",boxSizing:"border"},onClick:function(){n(e.name)}})))})),l.a.createElement(c.a.Item,null,l.a.createElement(P.a,{onClick:function(){return t()}})))})),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(p.a,{type:"primary",onClick:function(){M=[],e.history.push({pathname:"/step2/".concat(e.location.state.restaurant),state:{meal:e.location.state.meal,numberPeople:e.location.state.numberPeople,restaurant:e.location.state.restaurant}})}},"Previous"),l.a.createElement(p.a,{type:"primary",htmlType:"submit"},"Next")))},S=function(e){var a=c.a.useForm(),t=Object(u.a)(a,1)[0],n=e.location.state,r=n.restaurant,i=n.meal,s=n.dish,o=n.numberPeople;return l.a.createElement("div",null,l.a.createElement(c.a,{form:t,className:"ant-form-customize"},l.a.createElement("div",null," Meal: ",l.a.createElement("span",null,i)," "),l.a.createElement("div",null," No of People: ",l.a.createElement("span",null,o)," "),l.a.createElement("div",null," Restaurant: ",l.a.createElement("span",null,r)," "),l.a.createElement("div",{className:"dish-title"}," ",l.a.createElement("span",null,"Dishes:")," ",l.a.createElement("ul",{className:"review-dish"}," ",s.map((function(e,a){return l.a.createElement("li",{key:a}," ",l.a.createElement("span",null," ",e.title," ")," - ",l.a.createElement("span",null," ",e.numServe," "),"  ")}))))),l.a.createElement("div",{className:"buttons"},l.a.createElement(p.a,{type:"primary",onClick:function(){e.history.push({pathname:"/step3/".concat(e.location.state.restaurant),state:{meal:e.location.state.meal,restaurant:e.location.state.restaurant,numberPeople:e.location.state.numberPeople,dishes:s}})}}," Previous "),l.a.createElement(p.a,{type:"primary",onClick:function(){alert("Thank you for using our services!!")}}," Submit ")))},O=(t(244),function(e){var a="",t="",r="",i="",s=Object(o.e)();Object(n.useEffect)((function(){}),[s]);var u=(s||{}).pathname;switch((void 0===u?"":u).split("/")[1]){case"step2":t="primary";break;case"step3":r="primary";break;case"step4":i="primary";break;default:a="primary"}return l.a.createElement("div",{className:"tab-bar"},l.a.createElement(p.a,{type:a}," Step 1 "),l.a.createElement(p.a,{type:t}," Step 2 "),l.a.createElement(p.a,{type:r}," Step 3 "),l.a.createElement(p.a,{type:i}," Review "))});var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s.a,{basename:"/fabbi-asm"},l.a.createElement(O,null),l.a.createElement(o.a,{exact:!0,path:"/",component:h}),l.a.createElement(o.a,{path:"/step2/:id",component:f}),l.a.createElement(o.a,{path:"/step3/:id",component:k}),l.a.createElement(o.a,{path:"/step4/review",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e){e.exports=JSON.parse('{"dishes":[{"id":1,"name":"Chicken Burger","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":2,"name":"Ham Burger","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":3,"name":"Cheese Burger","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":4,"name":"Fries","restaurant":"Mc Donalds","availableMeals":["lunch","dinner"]},{"id":5,"name":"Egg Muffin","restaurant":"Mc Donalds","availableMeals":["breakfast"]},{"id":6,"name":"Burrito","restaurant":"Taco Bell","availableMeals":["lunch","dinner"]},{"id":7,"name":"Tacos","restaurant":"Taco Bell","availableMeals":["lunch","dinner"]},{"id":8,"name":"Quesadilla","restaurant":"Taco Bell","availableMeals":["lunch","dinner"]},{"id":9,"name":"Steak","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":10,"name":"Yakitori","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":11,"name":"Nankotsu","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":12,"name":"Piman","restaurant":"BBQ Hut","availableMeals":["dinner"]},{"id":13,"name":"Vegan Bento","restaurant":"Vege Deli","availableMeals":["lunch"]},{"id":14,"name":"Coleslaw Sandwich","restaurant":"Vege Deli","availableMeals":["breakfast"]},{"id":15,"name":"Grilled Sandwich","restaurant":"Vege Deli","availableMeals":["breakfast"]},{"id":16,"name":"Veg. Salad","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":17,"name":"Fruit Salad","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":18,"name":"Corn Soup","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":19,"name":"Tomato Soup","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":20,"name":"Minestrone Soup","restaurant":"Vege Deli","availableMeals":["lunch","dinner"]},{"id":21,"name":"Pepperoni Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":22,"name":"Pepperoni Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":23,"name":"Hawaiian Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":24,"name":"Seafood Pizza","restaurant":"Pizzeria","availableMeals":["lunch","dinner"]},{"id":25,"name":"Deep Dish Pizza","restaurant":"Pizzeria","availableMeals":["dinner"]},{"id":26,"name":"Chow Mein","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":27,"name":"Mapo Tofu","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":28,"name":"Kung Pao","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":29,"name":"Wontons","restaurant":"Panda Express","availableMeals":["lunch","dinner"]},{"id":30,"name":"Garlic Bread","restaurant":"Olive Garden","availableMeals":["breakfast","lunch","dinner"]},{"id":31,"name":"Ravioli","restaurant":"Olive Garden","availableMeals":["lunch","dinner"]},{"id":32,"name":"Rigatoni Spaghetti","restaurant":"Olive Garden","availableMeals":["lunch","dinner"]},{"id":33,"name":"Fettucine Pasta","restaurant":"Olive Garden","availableMeals":["lunch","dinner"]}]}')}},[[134,1,2]]]);
//# sourceMappingURL=main.58548ac9.chunk.js.map