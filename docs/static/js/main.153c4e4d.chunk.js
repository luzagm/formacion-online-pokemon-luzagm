(this.webpackJsonppokemon1=this.webpackJsonppokemon1||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/pokemon.ddd5084d.png"},22:function(e,a,t){e.exports=t.p+"static/media/ball-poke.3f26bc9c.png"},26:function(e,a,t){e.exports=t(45)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(15),r=t.n(l),m=t(6),i=(t(31),t(23)),c=t(16),s=t(17),p=t(24),u=t(18),k=t(8),d=t(25),v=t(5),f=function(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=25").then((function(e){return e.json()}))},h=t(19),E=t.n(h),_=(t(32),function(){return o.a.createElement("div",{className:"header__box"},o.a.createElement("img",{src:E.a,alt:"Pokemon",className:"logo"}))}),N=function(e){return e.map((function(e,a){return o.a.createElement("li",{className:"pokemon__types--item pokemon__types--detail--item",key:a},e)}))},y=(t(33),function(e){return o.a.createElement("li",{className:"pokemon__card"},o.a.createElement(m.b,{className:"pokemon__card-link",to:"/detail/".concat(e.pokemonId)},o.a.createElement("img",{className:"pokemon__image",src:e.pokemonImage,alt:"".concat(e.pokemonName)}),o.a.createElement("p",{className:"pokemon__id"},"ID / ".concat(e.pokemonId)),o.a.createElement("div",{className:"pokemon__info"},o.a.createElement("h2",{className:"pokemon__name"},e.pokemonName),o.a.createElement("ul",{className:"pokemon__types"},N(e.pokemonType)),o.a.createElement("div",{className:"pokemon__evolutions"},o.a.createElement("p",{className:"pokemon__evolutions--title"},"Evolves to:"),o.a.createElement("p",{className:"pokemon__evolutions--name"},e.pokemonEvolutionName)))))}),g=t(22),b=t.n(g),w=(t(39),function(e){if(console.log(e),e.loading)return o.a.createElement("div",{className:"loader"},o.a.createElement("img",{className:"pokeball",src:b.a,alt:"Pokeball"}));if(0===e.pokemons.length)return o.a.createElement("div",{className:"not__found"},o.a.createElement("p",{className:"not__found--text"},"No hay pokemons que coincidan con la b\xfasqueda"));var a=e.pokemons.map((function(e,a){return o.a.createElement(y,{key:a,pokemonName:e.name,pokemonImage:e.image,pokemonType:e.types,pokemonEvolutionName:e.firstEvolutionName,pokemonId:e.id})}));return o.a.createElement("div",{className:"pokemon__wrapper"},o.a.createElement("ul",{className:"pokemon"},a))}),j=(t(40),function(e){var a=e.searchByName;return o.a.createElement("form",{className:"filter__container"},o.a.createElement("input",{onChange:a,className:"input",placeholder:"Search pokemon by name"}))}),I=function(e){return o.a.createElement("div",{className:"App"},o.a.createElement(j,{searchByName:e.searchByName}),o.a.createElement(w,{pokemons:e.pokemons,loading:e.loading}))},O=function(e){return e.map((function(e,a){return o.a.createElement("li",{className:"pokemon__abilities--detail--item",key:a},e)}))},x=function(e){return e.map((function(e,a){return o.a.createElement("li",{className:"pokemon__moves--detail--item",key:a},e)}))},B=(t(41),function(e){return o.a.createElement("div",{className:"pokemon__card--detail"},o.a.createElement("h2",{className:"pokemon__name--detail"},e.pokemonName),o.a.createElement("div",{className:"pokemon__wrap--detail"},o.a.createElement("img",{className:"pokemon__image--detail",src:e.pokemonImage,alt:"".concat(e.pokemonName)}),o.a.createElement("ul",{className:"pokemon__types--detail"},N(e.pokemonType))),o.a.createElement("div",{className:"pokemon__info--wrapper"},o.a.createElement("div",null,o.a.createElement("div",{className:"pokemon__title--detail"},"Profile"),o.a.createElement("p",{className:"pokemon__abilities--detail"},o.a.createElement("strong",null,"Abilities:"),O(e.pokemonAbility)),o.a.createElement("ul",null,o.a.createElement("li",{className:"pokemon__height--detail"},o.a.createElement("strong",null,"Height:")," ",e.pokemonHeight),o.a.createElement("li",{className:"pokemon__weight--detail"},o.a.createElement("strong",null,"Weight:")," ",e.pokemonWeight))),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("span",{className:"pokemon__evolution--name"}," ",e.pokemonName)," ","evolves to"," ",o.a.createElement("span",{className:"pokemon__evolution--name"},e.pokemonEvolutionName))),o.a.createElement("div",null,o.a.createElement("div",{className:"pokemon__title--detail"},"Moves"),o.a.createElement("p",{className:"pokemon__moves--detail"},x(e.pokemonMoves)))))}),S=(t(42),function(e){return void 0===e.pokemon?o.a.createElement("div",null,"Loading..."):o.a.createElement("div",{className:"details"},o.a.createElement(B,{pokemonName:e.pokemon.name,pokemonImage:e.pokemon.image,pokemonType:e.pokemon.types,pokemonHeight:e.pokemon.height,pokemonWeight:e.pokemon.weight,pokemonAbility:e.pokemon.abilities,pokemonMoves:e.pokemon.moves,pokemonId:e.pokemon.id}),o.a.createElement(m.b,{className:"back-link",to:"/"},o.a.createElement("div",{className:"back"},"Back")))}),A=(t(43),function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("p",{className:"footer__text"},"Luz Aguirre Morales \xa9 2019"))}),D=(t(44),function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(p.a)(this,Object(u.a)(a).call(this))).state={pokemons:[],inputValue:"",loading:!0},e.searchByName=e.searchByName.bind(Object(k.a)(e)),e.renderOriginal=e.renderOriginal.bind(Object(k.a)(e)),e.renderDetail=e.renderDetail.bind(Object(k.a)(e)),e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getPokemonInfo()}},{key:"getPokemonInfo",value:function(){var e=this;f().then((function(a){var t=!0,n=!1,o=void 0;try{for(var l,r=a.results[Symbol.iterator]();!(t=(l=r.next()).done);t=!0){var m=l.value;fetch(m.url).then((function(e){return e.json()})).then((function(a){fetch(a.species.url).then((function(e){return e.json()})).then((function(t){fetch(t.evolution_chain.url).then((function(e){return e.json()})).then((function(t){var n=[],o=!0,l=!1,r=void 0;try{for(var m,c=a.types[Symbol.iterator]();!(o=(m=c.next()).done);o=!0){var s=m.value;n.push(s.type.name)}}catch(I){l=!0,r=I}finally{try{o||null==c.return||c.return()}finally{if(l)throw r}}var p=[],u=!0,k=!1,d=void 0;try{for(var v,f=a.abilities[Symbol.iterator]();!(u=(v=f.next()).done);u=!0){var h=v.value;p.push(h.ability.name)}}catch(I){k=!0,d=I}finally{try{u||null==f.return||f.return()}finally{if(k)throw d}}var E=[],_=!0,N=!1,y=void 0;try{for(var g,b=a.moves[Symbol.iterator]();!(_=(g=b.next()).done);_=!0){var w=g.value;E.push(w.move.name)}}catch(I){N=!0,y=I}finally{try{_||null==b.return||b.return()}finally{if(N)throw y}}var j={name:a.name,image:a.sprites.front_default,id:a.id,types:n,abilities:p,moves:E,height:a.height,weight:a.weight,firstEvolutionName:t.chain.evolves_to[0]?t.chain.evolves_to[0].species.name:""};e.setState({pokemons:[].concat(Object(i.a)(e.state.pokemons),[j]),loading:!1})}))}))}))}}catch(c){n=!0,o=c}finally{try{t||null==r.return||r.return()}finally{if(n)throw o}}}))}},{key:"searchByName",value:function(e){var a=e.currentTarget.value;return this.setState({inputValue:a})}},{key:"renderOriginal",value:function(){var e=this,a=this.state.pokemons.filter((function(a){return a.name.toUpperCase().includes(e.state.inputValue.toUpperCase())}));return o.a.createElement(I,{pokemons:a,loading:this.state.loading,searchByName:this.searchByName})}},{key:"renderDetail",value:function(e){var a,t=parseInt(e.match.params.id),n=!0,l=!1,r=void 0;try{for(var m,i=this.state.pokemons[Symbol.iterator]();!(n=(m=i.next()).done);n=!0){var c=m.value;c.id===t&&(a=c)}}catch(s){l=!0,r=s}finally{try{n||null==i.return||i.return()}finally{if(l)throw r}}return o.a.createElement(S,{pokemon:a})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(_,null),o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:"/",component:this.renderOriginal}),o.a.createElement(v.a,{path:"/detail/:id",render:this.renderDetail})),o.a.createElement(A,null))}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(m.a,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.153c4e4d.chunk.js.map