(this.webpackJsonpDotPolitics=this.webpackJsonpDotPolitics||[]).push([[0],{194:function(e,t,n){},196:function(e,t,n){},350:function(e,t,n){},358:function(e,t,n){},359:function(e,t,n){},365:function(e,t,n){},366:function(e,t,n){},370:function(e,t){},372:function(e,t){},401:function(e,t){},402:function(e,t){},515:function(e,t){},517:function(e,t){},545:function(e,t){},547:function(e,t){},548:function(e,t){},553:function(e,t){},555:function(e,t){},574:function(e,t){},586:function(e,t){},589:function(e,t){},750:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(116),r=n.n(i),s=(n(350),n(80)),o=n(117),l=n(118),d=n(119),j=n(126),b=n(125),u=n(17),m=n(757),h=n(754),f=n(333),p=n(755),x=n(756),O=n(345),A=n(337),y=(n(194),n(2)),g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleQuery=function(e){a.setState({query:e.target.value})},a.handleFilter=function(e){a.setState({filter:e})},a.handleLocation=function(e){a.setState({query:a.state.location})},a.handleSubmit=function(e){var t=a.state,n=t.filter,c=t.query,i=encodeURIComponent(c);a.props.history.push("/search/".concat(n,"/").concat(i))},a.state={query:"",filter:"Representatives",filters:["Representatives","Polls"],location:""},a.getLocation=a.getLocation.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getLocation()}},{key:"getLocation",value:function(){var e=this,t=window.navigator&&window.navigator.geolocation;t&&t.getCurrentPosition((function(t){e.setState({location:[t.coords.latitude,t.coords.longitude]})}),(function(t){e.setState({location:"error"})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.filter,c=t.filters;return Object(y.jsx)("div",{id:"search-bar","aria-describedby":"searchbar-label",children:Object(y.jsxs)(m.a,{onSubmit:this.handleSubmit,children:[Object(y.jsx)(m.a.Label,{id:"searchbar-label",children:"Enter your location or hit the Location button:"}),Object(y.jsxs)(h.a,{children:[Object(y.jsx)(m.a.Group,{children:Object(y.jsx)(f.a,{id:"search-query",value:n,onChange:this.handleQuery,placeholder:"Enter Location Here","aria-label":"Search Bar"})}),Object(y.jsx)(m.a.Group,{children:Object(y.jsx)(p.a,{as:x.a,"aria-label":"Drop Down Bar with 2 options",variant:"outline-secondary",title:a,id:"input-group-dropdown-2",onSelect:this.handleFilter,children:c.map((function(t,n){return Object(y.jsx)(O.a.Item,{eventKey:t,onChange:e.handleFilter,value:t,children:t},n)}))})}),Object(y.jsxs)(m.a.Group,{children:[Object(y.jsx)(A.a,{variant:"primary",type:"submit",onClick:this.handleSubmit,children:" Search "}),Object(y.jsx)(A.a,{variant:"primary",type:"submit",onClick:this.handleLocation,"aria-label":"Click to enter current location in search bar.",children:" Location "})]})]})]})})}}]),n}(a.Component),v=Object(u.f)(g),L=(n(358),function(){return Object(y.jsx)("footer",{children:Object(y.jsx)("div",{id:"footer-content",children:Object(y.jsx)("h1",{className:"foot",children:Object(y.jsx)("a",{href:"https://forms.gle/XM1m6oiSAnDP8BMx9",children:"Contact Us"})})})})}),w=n(74),N=(n(359),function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(v,{}),Object(y.jsx)("div",{id:"parallax-1"})]})}),I=n(29),k=n(759),S=n(189),B=n.p+"static/media/pfp.32fd6d97.png",C=function(e){var t=e.item;return Object(y.jsxs)(k.a,{className:"resultCard",children:[Object(y.jsx)("div",{className:"party",tabIndex:"0",children:t.party}),Object(y.jsxs)(k.a.Body,{children:[Object(y.jsx)("div",{className:"name",tabIndex:"0",children:t.name}),Object(y.jsx)("div",{className:"secondname",tabIndex:"0",children:t.officeName}),Object(y.jsx)("div",{className:"image",tabIndex:"0",children:t.photoUrl?Object(y.jsx)("img",{src:t.photoUrl,onError:function(e){e.target.onerror=null,e.target.src=B},alt:"".concat(t.name)}):Object(y.jsx)("img",{src:B,alt:"".concat(t.name),"aria-label":"No Representative Photo"})}),Object(y.jsxs)("div",{className:"phone",tabIndex:"0",children:["Phone: ",t.phones?t.phones.map((function(e,t){return Object(y.jsx)("p",{children:e},t)})):Object(y.jsx)("p",{})]}),Object(y.jsxs)("div",{className:"link",tabIndex:"0",children:["Links: ",t.urls?t.urls.map((function(e,t){return Object(y.jsx)("p",{children:Object(y.jsx)("a",{href:e,children:e},t)})})):Object(y.jsx)("p",{})]}),Object(y.jsx)("div",{className:"website",tabIndex:"0","aria-label":"Social Media Links",children:t.channels?t.channels.map((function(e,t){if("Twitter"===e.type){var n="https://twitter.com/"+e.id;return Object(y.jsx)(S.SocialIcon,{style:{height:20,width:20},url:n},t)}if("Facebook"===e.type){var a="https://facebook.com/"+e.id;return Object(y.jsx)(S.SocialIcon,{style:{height:20,width:20},url:a},t)}return Object(y.jsx)(y.Fragment,{})})):Object(y.jsx)("p",{})})]})]})},F=function(e){var t=e.item,n="";return Object.entries(t.address).forEach((function(e){var t=Object(I.a)(e,2),a=(t[0],t[1]);""!==a&&(n+=a+" ")})),Object(y.jsxs)(k.a,{children:[Object(y.jsx)(k.a.Header,{children:n}),Object(y.jsxs)(k.a.Body,{children:["Polling Hours: ",t.pollingHours]})]})},G=(n(196),function(e){var t=Object(a.useState)(null),n=Object(I.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(!1),o=Object(I.a)(s,2),l=o[0],d=o[1],j=Object(a.useState)([]),b=Object(I.a)(j,2),u=b[0],m=b[1],h=Object(a.useState)(!0),f=Object(I.a)(h,2),p=f[0],x=f[1],O=Object(a.useState)(!0),A=Object(I.a)(O,2),g=A[0],v=A[1],L=Object(a.useState)(!0),w=Object(I.a)(L,2),N=w[0],S=w[1],B=e.match.params.query;if(c.a.useEffect((function(){fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=".concat("AIzaSyDggZlSpjNNce614YxmnzLWCBm7QbN_-3A","&address=").concat(B)).then((function(e){return e.json()})).then((function(e){e.error?(d((function(e){return!0})),r(e.error)):(d((function(e){return!0})),m((function(t){var n=e.officials;return e.offices.map((function(e){return e.officialIndices.map((function(t){return n[t].officeName=e.name}))})),e.offices.map((function(e){return e.officialIndices.map((function(t){return n[t].levels=e.levels}))})),e.offices.map((function(e){return e.officialIndices.map((function(t){return n[t].divisionId=e.divisionId}))})),n})))}),(function(e){d((function(e){return!0})),r((function(t){return e}))}))}),[B]),i)return Object(y.jsx)("div",{id:"results",children:Object(y.jsxs)(k.a,{className:"resultCard",children:[Object(y.jsxs)(k.a.Header,{children:["Error ",i.code,":"]}),Object(y.jsxs)(k.a.Body,{children:[i.message,"."]}),"Failed to parse address"===i.message?Object(y.jsxs)(k.a.Body,{children:[" ",Object(y.jsx)(k.a.Title,{children:"Disclaimer:"}),"If your address has failed to parse, the address entered may not be an existing address or it is not within the US territories."]}):Object(y.jsx)(k.a.Title,{children:"Please try again."})]})});if(l){var F=!1,G=!1,D=!1,P=u.map((function(e,t){return!0!==p?Object(y.jsx)(y.Fragment,{children:" "}):e.divisionId.includes("county")&&!1===F?(F=!0,Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{"aria-label":"Local",tabindex:"0",children:"Local"})," ",Object(y.jsx)("br",{}),Object(y.jsx)(C,{item:e},t)]})):e.divisionId.includes("county")&&!0===F?Object(y.jsxs)(y.Fragment,{children:[" ",Object(y.jsx)("br",{}),Object(y.jsx)(C,{item:e},t)]}):void 0})),W=u.map((function(e,t){return!0!==g?Object(y.jsx)(y.Fragment,{children:" "}):e.divisionId.includes("state")&&!1===G?(G=!0,Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{"aria-label":"State",tabindex:"0",children:"State"}),Object(y.jsx)("br",{}),Object(y.jsx)(C,{item:e},t)]})):e.divisionId.includes("state")&&!e.divisionId.includes("county")?Object(y.jsxs)(y.Fragment,{children:[" ",Object(y.jsx)("br",{}),Object(y.jsx)(C,{item:e},t)]}):void 0})),V=u.map((function(e,t){return!0!==N?Object(y.jsx)(y.Fragment,{children:" "}):e.divisionId.includes("us")&&!1===D?(D=!0,Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{className:"labelFederal","aria-label":"Federal",tabindex:"0",children:"Federal"})," ",Object(y.jsx)(C,{item:e},t)]})):e.divisionId.includes("us")&&!e.divisionId.includes("state")?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(C,{item:e},t)}):void 0}));return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"label",children:[Object(y.jsx)("br",{}),Object(y.jsxs)("p",{className:"text-center",children:["Show level of government: ",Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"checkbox",id:"=local_results",value:"Local","aria-label":"Show local results",onChange:function(e){x(!0===p?function(e){return!1}:function(e){return!0})},defaultChecked:!0})," ","Local   "]})," ",Object(y.jsx)(y.Fragment,{children:" "}),Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"checkbox",id:"=state_results",value:"State","aria-label":"Show State results",onChange:function(e){v(!0===g?function(e){return!1}:function(e){return!0})},defaultChecked:!0})," ","State   "]})," ",Object(y.jsx)(y.Fragment,{children:" "}),Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"checkbox",id:"federal_results",value:"Federal","aria-label":"Show State results",onChange:function(e){S(!0===N?function(e){return!1}:function(e){return!0})},defaultChecked:!0})," ","Federal   "]})]})]}),V,W,P]})}return Object(y.jsx)("div",{id:"results",children:Object(y.jsx)(k.a,{children:Object(y.jsx)(k.a.Body,{children:"Loading Search Results..."})})})}),D={kind:"civicinfo#voterinforesponse",status:"success",election:{id:"2000",name:"VIP Test Election",electionDay:"2013-06-06"},normalizedInput:{line1:"1263 Pacific Ave",city:"Kansas City",state:"KS",zip:"66102"},pollingLocations:[{address:{locationName:"National Guard Armory",line1:"100 S 20th St",line2:"",line3:"",city:"Kansas City",state:"KS",zip:"66102 "},pollingHours:"9AM - 2PM"}],contests:[{type:"General",office:"Attorney"},{type:"General",office:"Sheriff"},{type:"General",office:"Kansas Representative 32",district:{name:"Kansas Representative 32",scope:"stateLower",id:"32"},sources:[{name:"Voting Information Project",official:!0}]},{type:"General",office:"Governor/Lt. Governor",candidates:[{name:"Andrew P.  Gray",party:"Libertarian",email:"chair@lpks.org"},{name:"Kenneth (ken) W. Cannon",party:"Reform"},{name:"Tom Holland",party:"Democratic",candidateUrl:"www.tomhollandforkansas.com",email:"info@tomhollandforkansas.com"},{name:"Sam Brownback",party:"Republican",candidateUrl:"www.brownbackforkansas.com",email:"media@brownback.com"}]},{type:"General",office:"KCKCC Member AL Brd of Trustee"},{type:"General",office:"Secretary of State",candidates:[{name:"Chris Biggs",party:"Democratic"},{name:"Kris Kobach",party:"Republican"},{name:"Phillip Horatio Lucas",party:"Libertarian"},{name:"Derek Langseth",party:"Reform"}]},{type:"General",office:"U.S. Senate",district:{name:"U.S. Senate",scope:"statewide",id:"5"},candidates:[{name:"Lisa Johnston",party:"Democratic",candidateUrl:"www.lisaforkansas.com",phone:"913-662-1457",email:"lisa@lisaforkansas.com"},{name:"Jerry Moran",party:"Republican"},{name:"Michael Wm. Dann",party:"Libertarian"},{name:"Joseph (joe) K. Bellis",party:"Reform"}],sources:[{name:"Voting Information Project",official:!0}]},{type:"General",office:"BD of Public Utilities 2"},{type:"General",office:"Attorney General",candidates:[{name:"Steve Six",party:"Democratic"},{name:"Derek Schmidt",party:"Republican"},{name:"Dennis Hawver",party:"Libertarian"}]},{type:"General",office:"U.S. Representative 3"},{type:"General",office:"Governor/Lt. Governor",district:{name:"Governor/Lt. Governor",scope:"statewide",id:"1"},candidates:[{name:"Andrew P.  Gray",party:"Libertarian",email:"chair@lpks.org"},{name:"Kenneth (ken) W. Cannon",party:"Reform"},{name:"Tom Holland",party:"Democratic",candidateUrl:"www.tomhollandforkansas.com",email:"info@tomhollandforkansas.com"},{name:"Sam Brownback",party:"Republican",candidateUrl:"www.brownbackforkansas.com",email:"media@brownback.com"}],sources:[{name:"Voting Information Project",official:!0}]},{type:"General",office:"Commissioner-At-Large 2"},{type:"General",office:"Kansas Senate 6"},{type:"General",office:"Clerk"},{type:"General",office:"President / Vice President"},{type:"General",office:"Register of Deeds"},{type:"General",office:"BD of Public Utilities (AL)"},{type:"General",office:"Commissioner 2"},{type:"General",office:"USD 500"},{type:"General",office:"State Board of Education 1"},{type:"General",office:"Treasurer"}],state:[{name:"State of Kansas",electionAdministrationBody:{name:"Kansas",electionOfficials:[{name:"Brad Bryant",title:"Election Director",officePhoneNumber:"785-296-4561",emailAddress:"cclark@essvote.com"}]},local_jurisdiction:{name:"Wyandotte",electionAdministrationBody:{name:"Wyandotte",electionInfoUrl:"http://www.wycokck.org/election",electionOfficials:[{name:"Bruce Newby",title:"Election Commissioner",officePhoneNumber:"(913) 573-8500",emailAddress:"hbbrooks@essvote.com"}]},sources:[{name:"Voting Information Project",official:!0}]},sources:[{name:"Voting Information Project",official:!0}]}]},P=function(e){var t=Object(a.useState)(null),n=Object(I.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(!1),o=Object(I.a)(s,2),l=o[0],d=o[1],j=Object(a.useState)([]),b=Object(I.a)(j,2),u=b[0],m=b[1],h=e.match.params.query;return c.a.useEffect((function(){fetch("https://www.googleapis.com/civicinfo/v2/voterinfo?key=".concat("AIzaSyDggZlSpjNNce614YxmnzLWCBm7QbN_-3A","&address=").concat(h)).then((function(e){return e.json()})).then((function(e){e.error?(d(!0),r(e.error)):(d(!0),m(e.pollingLocations))}),(function(e){d(!0),r(e)}))}),[h]),i?Object(y.jsx)("div",{id:"results",children:Object(y.jsxs)(k.a,{className:"resultCard",children:[Object(y.jsxs)(k.a.Header,{children:["Error ",i.code,":"]}),Object(y.jsxs)(k.a.Body,{children:[i.message,".","Failed to parse address"===i.message?Object(y.jsxs)(y.Fragment,{children:[" ",Object(y.jsx)("br",{}),Object(y.jsx)(k.a.Title,{children:"Disclaimer: "}),"If your address has failed to parse, the address entered may not be an existing address or it is not within the US territories."]}):Object(y.jsx)(y.Fragment,{children:" Please try again."})]}),Object(y.jsx)(k.a.Body,{children:Object(y.jsx)(k.a.Title,{children:"Additional Disclaimer: Election and polling location information are updated at most 2 weeks in advance of elections. When there is no updated election information on the Google Civics Information API, no polling locations will be returned."})}),Object(y.jsxs)(k.a.Body,{children:[Object(y.jsx)(k.a.Title,{children:"Here is an example of what a result could look like:"}),D.pollingLocations.map((function(e,t){return Object(y.jsx)(F,{item:e},t)}))]})]})}):l?Object(y.jsxs)("div",{id:"results",children:[Object(y.jsxs)("h1",{children:["Search Results for: ",decodeURIComponent(h)]}),u.map((function(e,t){return Object(y.jsx)(F,{item:e},t)}))]}):Object(y.jsx)("div",{id:"results",children:Object(y.jsx)(k.a,{children:Object(y.jsx)(k.a.Body,{children:"Loading Search Results..."})})})},W=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).searchResults=function(){var e=a.state.filter;return"Representatives"===e?Object(y.jsx)(G,{}):"Polls"===e?Object(y.jsx)(P,{}):Object(y.jsx)("div",{children:"Sorry. That wasn't a valid search query."})},a.state={filter:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{id:"search-results",children:this.searchResults()})}}]),n}(a.Component),V=(n(365),n(197),n(758)),Z=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"about-banner",children:[Object(y.jsx)("img",{id:"about-logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADWCAIAAABwq0NeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REFCOTNEOTU5MEJBMTFFQkI4OUJCNDFEMDNENEE2NDIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REFCOTNEOTQ5MEJBMTFFQkI4OUJCNDFEMDNENEE2NDIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RjBDNzI3RDkwQjMxMUVCQjg5QkI0MUQwM0Q0QTY0MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RjBDNzI3RTkwQjMxMUVCQjg5QkI0MUQwM0Q0QTY0MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjawqu0AABS7SURBVHja7N0J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",alt:"DotPolitic logo"}),Object(y.jsx)(k.a,{className:"about-banner",tabIndex:"0",children:Object(y.jsxs)(k.a.Body,{children:[Object(y.jsx)(k.a.Title,{children:Object(y.jsx)("h2",{children:"About Us"})}),Object(y.jsxs)(k.a.Text,{"aria-label":"Description of what DotPolitics is.",tabIndex:"0",children:["DotPolitics is a useful tool to look up elected representatives across the United States ",Object(y.jsx)("b",{children:"based on location."}),Object(y.jsx)("br",{}),"Having the means to educate yourself and seek out representative information in a centralized manner is vital for change.",Object(y.jsx)("br",{}),"We provide basic information and links to each representative's social media(s) and contact information, using the ",Object(y.jsx)("a",{href:"https://developers.google.com/civic-information/",children:"Google Civics Information API"}),"."]})]})})]}),Object(y.jsx)("div",{className:"about-team",tabIndex:"0",children:Object(y.jsxs)(k.a,{className:"about-team",children:[Object(y.jsx)("h2",{className:"card-header",children:"Meet the Team"})," ",Object(y.jsx)("br",{}),Object(y.jsxs)(V.a,{variant:"flush",children:[Object(y.jsx)(V.a.Item,{children:"Andrew Zhu"}),Object(y.jsx)(V.a.Item,{children:"Chengdong Ruan"}),Object(y.jsx)(V.a.Item,{children:"Elizabeth Vanegas"}),Object(y.jsx)(V.a.Item,{children:"Emily Fang"})]})]})}),Object(y.jsx)("div",{id:"parallax-1"})]})},z=(n(366),n.p+"static/media/logo_white.c0dbc975.png");var T=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("nav",{className:"navbar",children:[Object(y.jsxs)(w.b,{to:"/",className:"navbar-logo",children:[Object(y.jsx)("img",{id:"logo",src:z,alt:"DotPolitics Logo"}),"DotPolitics"]}),Object(y.jsx)("ul",{children:Object(y.jsx)("li",{className:"nav-item",children:Object(y.jsx)(w.b,{to:"/About",className:"nav-links",children:"About us"})})})]})})},Q=n(33),R=Q.StyleSheet.create({name:{fontSize:35,margin:5},party:{fontSize:25},subtext:{fontSize:18},seperate:{margin:20},socialmedia:{fontSize:12}}),U=function(e){var t=Object(a.useState)([]),n=Object(I.a)(t,2),i=n[0],r=n[1],s=e.match.params.query;return c.a.useEffect((function(){fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=".concat("AIzaSyDggZlSpjNNce614YxmnzLWCBm7QbN_-3A","&address=").concat(s)).then((function(e){return e.json()})).then((function(e){r(e.officials.map((function(e){var t=e.phones?e.phones.map((function(t,n){return Object(y.jsx)("p",{children:t},"".concat(e.name," phone ").concat(n))})):Object(y.jsx)(y.Fragment,{}),n=e.urls?e.urls.map((function(e,t){return Object(y.jsx)("p",{children:Object(y.jsx)("a",{href:e,children:e},t)})})):Object(y.jsx)(y.Fragment,{}),a=e.channels?e.channels.map((function(e,t){return"Twitter"===e.type?Object(y.jsx)(Q.Text,{style:R.socialmedia,children:"https://twitter.com/"+e.id}):"Facebook"===e.type?Object(y.jsx)(Q.Text,{style:R.socialmedia,children:"https://facebook.com/"+e.id}):Object(y.jsx)(y.Fragment,{})})):Object(y.jsx)(y.Fragment,{});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Q.Text,{style:R.party,children:e.party}),Object(y.jsx)(Q.Text,{style:R.name,children:e.name}),Object(y.jsxs)(Q.Text,{style:R.subtext,children:["Phone: ",t]}),Object(y.jsxs)(Q.Text,{style:R.subtext,children:["Links: ",n]}),a,Object(y.jsx)(Q.Text,{style:R.seperate})]})})))}),(function(e){console.log(e)}))}),[s]),Object(y.jsx)(Q.Document,{children:Object(y.jsxs)(Q.Page,{style:R.body,children:[i,Object(y.jsx)(Q.Text,{style:R.pageNumber,render:function(e){var t=e.pageNumber,n=e.totalPages;return"".concat(t," / ").concat(n)},fixed:!0})]})})},X=function(e){return Object(y.jsx)("div",{className:"pdf",children:Object(y.jsx)(Q.PDFDownloadLink,{document:Object(y.jsx)(U,Object(s.a)({},e)),fileName:"repByLocation.pdf",children:Object(y.jsxs)("button",{className:"pdfbutton",children:["Download now!",function(e){e.blob,e.url;var t=e.loading;e.error;return t?"Loading document...":"Download now!"}]})})})};var Y=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)(w.a,{basename:"/DotPolitics",children:[Object(y.jsx)(T,{}),Object(y.jsxs)(u.c,{children:[Object(y.jsx)(u.a,{exact:!0,path:"/",component:N}),Object(y.jsx)(u.a,{exact:!0,path:"/About",component:Z}),Object(y.jsx)(u.a,{exact:!0,path:"/search",component:W}),Object(y.jsx)(u.a,{exact:!0,path:"/search/Representatives/:query",render:function(e){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(v,{})," ",Object(y.jsx)(X,Object(s.a)({},e)),Object(y.jsx)(G,Object(s.a)({},e))]})}}),Object(y.jsx)(u.a,{exact:!0,path:"/search/Polls/:query",render:function(e){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(v,{}),Object(y.jsx)(P,Object(s.a)({},e))]})}})]})]}),Object(y.jsx)(L,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,760)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(Y,{})}),document.getElementById("root")),E()}},[[750,1,2]]]);
//# sourceMappingURL=main.72265316.chunk.js.map