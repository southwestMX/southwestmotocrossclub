(this.webpackJsonpswmx=this.webpackJsonpswmx||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/swmx_logo.f2dbf84e.png"},17:function(e,t,a){e.exports=a.p+"static/media/noraLogo.c1d1205d.png"},18:function(e,t,a){e.exports=a.p+"static/media/mylapsLogo.4211dcc0.svg"},19:function(e,t,a){e.exports=a.p+"static/media/membershipform-2021.f65e96b8.pdf"},20:function(e,t,a){e.exports=a.p+"static/media/Mito.4377561c.png"},23:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),c=a(43),i=(a(28),a(2)),s=a(3),m=a(5),u=a(4),d=a(6),p=a(7),h=a.n(p),b=(a(33),a(42)),E=a(1),v=a.n(E),f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.context.router.route.location.pathname===this.props.to?" active":"";return r.a.createElement("li",{className:"nav-item"+e},r.a.createElement(b.a,{className:"nav-link",to:this.props.to},this.props.text))}}]),t}(n.Component);f.contextTypes={router:v.a.object};var k=f,y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={links:[{to:"/",text:"Home"},{to:"/RiderInformation",text:"Rider Information"},{to:"/PastResults",text:"Past Results"},{to:"/Committee",text:"Committee"},{to:"/Sponsors",text:"Sponsors"}]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement(b.a,{className:"navbar-brand text-info",to:"/"},"South West Motocross Club"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},this.state.links.map((function(e){return r.a.createElement(k,{to:e.to,text:e.text,key:e.to})}))))))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container d-flex h-100"},r.a.createElement("div",{className:"col text-center justify-content-center align-self-center text-info"},"\xa9 South West Motocross Club")))}}]),t}(n.Component),w=a(44),O=a(45),j=a(16),N=a.n(j),x=a(11),S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={width:500},e.handleResize=e.handleResize.bind(Object(x.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setWidth(),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.addEventListener("resize",null)}},{key:"setWidth",value:function(){var e=this.divElement.clientWidth;e<500?e-=30:e>500&&(e=500),this.setState({width:e})}},{key:"handleResize",value:function(e,t){this.setWidth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-12",ref:function(t){return e.divElement=t}},r.a.createElement("iframe",{title:"facebook"+this.props.tabs,src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsouthwest.motocrossclub%2F&tabs="+this.props.tabs+"&width="+this.state.width+"&height="+this.props.height+"&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=147961479317852",width:this.state.width,height:this.props.height,scrolling:"no",frameBorder:"0",allow:"encrypted-media"}))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{title:"Home | SWMX"},r.a.createElement("div",null,r.a.createElement("img",{id:"logo",className:"img-fluid",src:N.a,alt:"South West Motocross Club"}),r.a.createElement("div",{id:"home-body",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"button-column col-sm-6 d-flex flex-column"},r.a.createElement("p",null,"Memberships are now available! For further details about membership and other club information such as fixtures and results"),r.a.createElement("p",{className:"mt-auto"},r.a.createElement("a",{className:"btn btn-info",href:"/RiderInformation"},"View Rider Information"))),r.a.createElement("div",{className:"button-column col-sm-6 d-flex flex-column"},r.a.createElement("p",null,"Please take a moment to view this year's sponsors"),r.a.createElement("p",{className:"mt-auto"},r.a.createElement("a",{className:"btn btn-info",href:"/Sponsors"},"View Sponsors")))),r.a.createElement("div",{id:"latest-events",className:"row"},r.a.createElement("h2",{className:"mx-auto"},"Latest Event / Facebook News"),r.a.createElement(S,{tabs:"events,timeline",title:"Latest Events",height:"750"})))))}}]),t}(n.Component),C=a(17),L=a.n(C),R=a(18),T=a.n(R),I=a(19),W=a.n(I),H=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{className:"btn btn-info speedhive-btn "+this.props.className,to:"//speedhive.mylaps.com/Events/"+this.props.eventId,rel:"noopener noreferrer",target:"_blank"},null==this.props.displayText?"Race Results":this.props.displayText)}}]),t}(n.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{id:this.props.id,className:"table table-md table-striped table-bordered"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,this.props.headers.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,this.props.details.map((function(e,t){return r.a.createElement("tr",{key:t},function(e){return Object.keys(e).map((function(t,a){var n=e[t];return r.a.createElement("td",{key:a,className:t.startsWith("speedHiveLink")?"vertical-align":""},function(e,t){return"speedHiveLinks"===e?t.map((function(e,t){return r.a.createElement(H,{key:t,eventId:e.eventId,displayText:e.displayText,className:"s-margin-bottom-4"})})):"speedHiveLink"===e?r.a.createElement(H,{eventId:t.eventId}):t}(t,n))}))}(e))})))))}}]),t}(n.Component),D=["Round","Date","Track",""],_=[{round:"1",date:"6th June",track:"MX Memorial @ Bodmin Raceway",speedHiveLinks:[{eventId:1867771}]},{round:"2",date:"25th July",track:"Whiteway Barton",empty:""},{round:"3 / 4",date:"31st July / 1st August",track:"Landrake",empty:""},{round:"5 / 6",date:"21st / 22nd August",track:"Little Silver Moto Park",empty:""},{round:"7 / 8",date:"11th / 12th September",track:"Littlehempston",empty:""}],F=function(){return r.a.createElement("div",null,r.a.createElement(P,{id:"championshipDates",headers:D,details:_}))},A=["Group","Entry Fee"],J=[{group:"Autos",entry:"\xa330"},{group:"65 & 85 SW / BW",entry:"\xa335"},{group:"Rookies",entry:"\xa335"},{group:"Adult A (MX1 & MX2)",entry:"\xa340"},{group:"Adult B (Novice & Vets)",entry:"\xa340"}],B=function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"margin-top-60"},"Groups / Entry Fees"),r.a.createElement(P,{headers:A,details:J}))},X=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{title:"Rider Information ".concat("2021"," | SWMX")},r.a.createElement("div",null,r.a.createElement("h1",{className:"my-md-4"},"Rider Information ","2021"),r.a.createElement("h2",{className:"margin-top-60"},"Club Membership"),r.a.createElement("p",null,r.a.createElement("a",{href:"//nora92.com",target:"_blank"},r.a.createElement("img",{className:"alignnone size-full",src:L.a,alt:"",width:"200",height:"56"}))),r.a.createElement("p",null,"The South West Motocross Club is part of the Nora92 and riders are required to hold an Nora92 racing license to attend our events (full/day license)."),r.a.createElement("p",null,"To encourage riders to take out a full Nora92 license, we offer a discount to join our club when South West Motocross Club is named on the license."),r.a.createElement("p",null,"\xa315 \u2013 If South West Motocross Club is named on the license"),r.a.createElement("p",null,"\xa330 \u2013 If licence has been taken out with any other Nora92 Club"),r.a.createElement("p",null,r.a.createElement(b.a,{className:"btn btn-info",to:"//nora92.com/product/2021-licence/",rel:"noopener noreferrer",target:"_blank"},"View Nora92 License Options")),r.a.createElement("p",null,r.a.createElement(b.a,{className:"btn btn-info",to:W.a,rel:"noopener noreferrer",target:"_blank"},"SWMX ","2021"," Membership Form")),r.a.createElement("h2",{className:"margin-top-60"},"Fixtures"),r.a.createElement("h3",{className:"margin-top-25"},"Championship"),r.a.createElement(F,null),r.a.createElement(B,null),r.a.createElement("div",{className:"margin-bottom-20"},r.a.createElement("h2",{className:"margin-top-60"},"Race Timing"),r.a.createElement("p",null,r.a.createElement(b.a,{to:"//www.mylaps.com"},r.a.createElement("img",{className:"mylaps-logo alignnone",src:T.a,alt:"MyLaps logo",width:"300",height:"53"}))," "),r.a.createElement("h5",null,"MyLaps used for all of our race timings"),r.a.createElement("h5",null,"Riders without their own transponder are able to hire them from us on a strictly \u2018first come, first served\u2019 basis."))))}}]),t}(n.Component),z=["Round","Date","Track",""],G=[{round:"Winter Warmer",date:"14th January",track:"Little Silver Moto Parc",speedHiveLink:{eventId:1489377}},{round:"1 & 2",date:"28th / 29th April",track:"Littlehempston",speedHiveLinks:[{eventId:1489377,displayText:"Day 1 Results"},{eventId:1489377,displayText:"Day 2 Results"}]},{round:"3",date:"27th May",track:"Matt Jones Memorial @ Landrake Moto Parc",speedHiveLink:{eventId:1534198}},{round:"4",date:"17th June",track:"Tincleton",speedHiveLink:{eventId:1546457}},{round:"5",date:"15th July",track:"Fraddon",speedHiveLink:{eventId:1561096}},{round:"MCF Team Event",date:"18th / 19th August",track:"Sherwood Park MX",speedHiveLink:{eventId:1576375}},{round:"6",date:"26th August",track:"Whiteway Barton",speedHiveLink:{eventId:1582122}},{round:"7 & 8",date:"8th / 9th September",track:"Little Silver Moto Parc",speedHiveLinks:[{eventId:1590259,displayText:"Day 1 Results"},{eventId:1590266,displayText:"Day 2 Results"}]},{round:"9",date:"23rd September",track:"Crediton",empty:"Cancelled - lack of riders"},{round:"10",date:"7th October",track:"Landrake Moto Parc",speedHiveLink:{eventId:1603087}}],V=function(){return r.a.createElement("div",null,r.a.createElement(P,{headers:z,details:G}))},q=["Round","Date","Track",""],K=[{round:"Winter Warmer",date:"14th January",track:"Little Silver Moto Parc",speedHiveLink:{eventId:1489377}},{round:"2",date:"31st March",track:"Brookthorpe",speedHiveLink:{eventId:1639991}},{round:"3",date:"14th April",track:"Littlehempston",speedHiveLink:{eventId:1645896}},{round:"1 (Rescheduled)",date:"Monday 6th May",track:"Little Silver Moto Parc",speedHiveLink:{eventId:1655910}},{round:"4",date:"19th May",track:"Matt Jones Memorial @ Landrake Moto Parc",speedHiveLink:{eventId:1664006}},{round:"5",date:"16th June",track:"Whiteway Barton",speedHiveLink:{eventId:1680011}},{round:"6",date:"23th July",track:"Bodmin Mx",speedHiveLink:{eventId:1702243}},{round:"7",date:"15th September",track:"Crediton Mx",speedHiveLink:{eventId:1728777}},{round:"8",date:"13th October",track:"Littlehempston",empty:"Cancelled"}],U=function(){return r.a.createElement("div",null,r.a.createElement(P,{headers:q,details:K}))},Q=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{title:"Past Results | SWMX"},r.a.createElement("div",null,r.a.createElement("h1",{className:"my-md-4"},"Past Results"),r.a.createElement("h3",{className:"margin-top-25"},"2019"),r.a.createElement(U,null),r.a.createElement("h3",{className:"margin-top-25"},"2018"),r.a.createElement(V,null)))}}]),t}(n.Component),Y=["President","Chairman","Vice-Chairman","Treasurer","Secretary"],Z=[{president:"Paul Jenkins",chairman:"Russell Watts",viceChairman:"Paul Jenkins",tresurer:"Sally Ford",secretary:"Sally Ford"},{president:"",chairman:"",viceChairman:"",tresurer:"Russell Watts",secretary:""}],$=["Race Day Treasurer","Race Day Secretary","Points","Child Protection Officers","Chief Marshall","Chief Starter"],ee=[{racedayTresurer:"Caroline Parry",racedaySecretary:"Sally Ford",points:"Tracy Watts",childProtectionOfficer1:"Carmen Jenkins",chiefMarshal:"Russell Watts",chiefStarter:"Gary Down"},{racedayTresurer:"",racedaySecretary2:"Simeon Loxley",points:"",childProtectionOfficer2:"Russell Watts",chiefMarshal:"",chiefStarter:""}],te=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{title:"Committee 2018 | SWMX"},r.a.createElement("div",{className:"margin-bottom-20"},r.a.createElement("h1",{className:"my-md-4"},"Committee 2018"),r.a.createElement(P,{headers:Y,details:Z}),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-md table-striped table-bordered"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"4"},"General Committee Members"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Kirsty Crawthorne"),r.a.createElement("td",null,"Shaun Miller"),r.a.createElement("td",null,"Carmen Jenkins"),r.a.createElement("td",null,"Lorna Hopkins")),r.a.createElement("tr",null,r.a.createElement("td",null,"Robert Sprake"),r.a.createElement("td",null,"Simon Ellett"),r.a.createElement("td",null,"Richard Birch"),r.a.createElement("td",null,"Angie Hill")),r.a.createElement("tr",null,r.a.createElement("td",null,"Trevor Bennett"),r.a.createElement("td",null,"Tracey Watts"),r.a.createElement("td",null,"Richard Hopkins"),r.a.createElement("td",null))))),r.a.createElement("h1",{className:"my-md-4"},"Race Day Committee 2018"),r.a.createElement(P,{headers:$,details:ee})))}}]),t}(n.Component),ae=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.imageSrc,t=this.props.linkTo,a=this.props.linkDisplayText,n=a;return r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"sponsor vertical-center"},r.a.createElement("img",{className:"sponsor-image",border:"0",src:e,alt:n})),r.a.createElement("h2",null,r.a.createElement(b.a,{to:t,rel:"noopener noreferrer",target:"_blank"},a)))}}]),t}(n.Component),ne=a(20),re=a.n(ne),le=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{title:"Sponsors 2019 | SWMX"},r.a.createElement("div",null,r.a.createElement("h1",{className:"my-md-4"},"Sponsors 2019"),r.a.createElement("div",{className:"row sponsor-row"},r.a.createElement(ae,{imageSrc:"http://www.lucasoil.co.uk/images/ws-logo_shield_text.png",linkTo:"//www.lucasoil.co.uk",linkDisplayText:"Lucus Oil"}),r.a.createElement(ae,{imageSrc:"https://www.progrip.com/k-content/progrip/themes/progrip/html/img/logo.png",linkTo:"//www.progrip.com",linkDisplayText:"ProGrip"}),r.a.createElement(ae,{imageSrc:"http://www.spiralgfx.com/image/catalog/spiral_assets/2018-website-logo.png",linkTo:"//www.spiralgfx.com",linkDisplayText:"Spiral GFX"})),r.a.createElement("div",{className:"row sponsor-row"},r.a.createElement(ae,{imageSrc:"http://www.rhinogoo.co.uk/wp-content/uploads/2016/04/rhino-goo-logo.png",linkTo:"//www.rhinogoo.co.uk",linkDisplayText:"Rhino Goo"}),r.a.createElement(ae,{imageSrc:"https://www.midwestracing.co.uk/wp-content/uploads/2016/04/midwest_racing_husqvarna_logo.png",linkTo:"//www.midwestracing.co.uk",linkDisplayText:"Midwest Racing"}),r.a.createElement(ae,{imageSrc:"http://planetmoto.co/wp-content/uploads/2018/08/cropped-FINAL-No-Tag.png",linkTo:"//planetmoto.co",linkDisplayText:"Planet Moto"})),r.a.createElement("div",{className:"row sponsor-row"},r.a.createElement(ae,{imageSrc:re.a,linkTo:"//www.mito.uk.com",linkDisplayText:"Mito UK"}),r.a.createElement(ae,{imageSrc:"https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/26992350_2063321783883184_1642002184584418542_n.jpg?_nc_cat=109&_nc_ht=scontent-lhr3-1.xx&oh=599c222c3ba3eedd25a47a890940e210&oe=5CDD2A02",linkTo:"//www.facebook.com/pages/category/Product-Service/L-A-Racing-Fuels-uk-Race-fuel-supplier-and-race-fuel-consultant-1628977477317619/",linkDisplayText:"LA Racing Fuels"}))))}}]),t}(n.Component),oe=function(){return r.a.createElement("main",null,r.a.createElement(w.a,null,r.a.createElement(O.a,{exact:!0,path:"/",component:M}),r.a.createElement(O.a,{exact:!0,path:"/RiderInformation",component:X}),r.a.createElement(O.a,{exact:!0,path:"/PastResults",component:Q}),r.a.createElement(O.a,{exact:!0,path:"/Committee",component:te}),r.a.createElement(O.a,{exact:!0,path:"/Sponsors",component:le})))},ce=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{title:"South West Motocross Club"},r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement("div",{className:"container"},r.a.createElement(oe,null)),r.a.createElement(g,null)))}}]),t}(n.Component);a(35),a(36);o.a.render(r.a.createElement(c.a,{basename:""},r.a.createElement(ce,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.51ab6ced.chunk.js.map