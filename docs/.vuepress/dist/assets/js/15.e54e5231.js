(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{251:function(e,t,s){},262:function(e,t,s){"use strict";s(251)},271:function(e,t,s){"use strict";s.r(t);s(89);var n={data:()=>({query:"",focused:!1,focusIndex:0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const e=this.query.trim().toLowerCase();if(!e)return;const{pages:t,themeConfig:s}=this.$site,n=s.searchMaxSuggestions||5,o=this.$localePath,u=t=>t.title&&t.title.toLowerCase().indexOf(e)>-1,i=[];for(let e=0;e<t.length&&!(i.length>=n);e++){const s=t[e];if(this.getPageLocalePath(s)===o)if(u(s))i.push(s);else if(s.headers)for(let e=0;e<s.headers.length&&!(i.length>=n);e++){const t=s.headers[e];u(t)&&i.push(Object.assign({},s,{path:s.path+"#"+t.slug,header:t}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath(e){for(const t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(e){this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0},focus(e){this.focusIndex=e},unfocus(){this.focusIndex=-1}}},o=(s(262),s(14)),u=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-box"},[t("input",{attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?t("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(s,n){return t("li",{staticClass:"suggestion",class:{focused:n===e.focusIndex},on:{mousedown:function(t){return e.go(n)},mouseenter:function(t){return e.focus(n)}}},[t("a",{attrs:{href:s.path},on:{click:function(e){e.preventDefault()}}},[t("span",{staticClass:"page-title"},[e._v(e._s(s.title||s.path))]),e._v(" "),s.header?t("span",{staticClass:"header"},[e._v("> "+e._s(s.header.title))]):e._e()])])})),0):e._e()])}),[],!1,null,null,null);t.default=u.exports}}]);