(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{230:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(233),i=a(94),l=(a(49),a(237)),u=a(221),c=a.n(u),s=a(231),d=function(){var e=Object(s.b)().author;return r.a.createElement("div",{className:c.a.author},r.a.createElement("p",{className:c.a.author__bio},e.bio,r.a.createElement("a",{className:c.a["author__bio-twitter"],href:Object(l.a)("twitter",e.contacts.linkedin),rel:"https://www.linkedin.com/in/seungyoun-choi-98192b108/",target:"_blank"},r.a.createElement("strong",null,e.name)," on linkedIn")))},m=a(284),f=a.n(m),p=function(e){var t=e.postTitle,a=e.postSlug,n=Object(s.b)(),o=n.url,i=n.disqusShortname;return i?r.a.createElement(f.a,{shortname:i,identifier:t,title:t,url:o+a}):null},h=a(222),b=a.n(h),g=function(e){var t=e.body,a=e.title;return r.a.createElement("div",{className:b.a.content},r.a.createElement("h1",{className:b.a.content__title},a),r.a.createElement("div",{className:b.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},v=a(244),E=a.n(v),w=a(223),y=a.n(w),k=function(e){var t=e.date;return r.a.createElement("div",{className:y.a.meta},r.a.createElement("p",{className:y.a.meta__date},"Published ",E()(t).format("D MMM YYYY")))},_=a(224),N=a.n(_),O=function(e){var t=e.tags,a=e.tagSlugs;return r.a.createElement("div",{className:N.a.tags},r.a.createElement("ul",{className:N.a.tags__list},a&&a.map(function(e,a){return r.a.createElement("li",{className:N.a["tags__list-item"],key:t[a]},r.a.createElement(i.Link,{to:e,className:N.a["tags__list-item-link"]},t[a]))})))},C=a(225),M=a.n(C),T=function(e){var t=e.post,a=t.html,n=t.fields,o=n.tagSlugs,l=n.slug,u=t.frontmatter,c=u.tags,s=u.title,m=u.date;return r.a.createElement("div",{className:M.a.post},r.a.createElement(i.Link,{className:M.a["post__home-button"],to:"/"},"All Articles"),r.a.createElement("div",{className:M.a.post__content},r.a.createElement(g,{body:a,title:s})),r.a.createElement("div",{className:M.a.post__footer},r.a.createElement(k,{date:m}),c&&o&&r.a.createElement(O,{tags:c,tagSlugs:o}),r.a.createElement(d,null)),r.a.createElement("div",{className:M.a.post__comments},r.a.createElement(p,{postSlug:l,postTitle:t.frontmatter.title})))};a.d(t,"query",function(){return S});var S="2166023545";t.default=function(e){var t=e.data,a=Object(s.b)(),n=a.title,i=a.subtitle,l=t.markdownRemark.frontmatter,u=l.title,c=l.description,d=null!==c?c:i;return r.a.createElement(o.a,{title:u+" - "+n,description:d},r.a.createElement(T,{post:t.markdownRemark}))}},231:function(e,t,a){"use strict";var n=a(234),r=function(){return n.data.site.siteMetadata},o=a(235),i=function(){return o.data.allMarkdownRemark.group},l=a(236),u=function(){return l.data.allMarkdownRemark.group};a.d(t,"b",function(){return r}),a.d(t,"a",function(){return i}),a.d(t,"c",function(){return u})},232:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},LINKEDIN:{path:"M852 0 172 0C77.408 0 0 77.408 0 172l0 680c0 94.592 77.408 172 172 172l680 0c94.592 0 172-77.408 172-172L1024 172C1024 77.408 946.592 0 852 0zM384 832l-128 0L256 384l128 0L384 832zM320 320c-35.36 0-64-28.64-64-64s28.64-64 64-64 64 28.64 64 64S355.36 320 320 320zM832 832l-128 0L704 576c0-35.36-28.64-64-64-64s-64 28.64-64 64l0 256-128 0L448 384l128 0 0 79.456C602.4 427.2 642.752 384 688 384c79.52 0 144 71.648 144 160L832 832z",viewBox:"0 0 1024 1024"}},r={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},233:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(240),i=a.n(o),l=a(206),u=a.n(l),c=function(e){var t=e.children,a=e.title,n=e.description;return r.a.createElement("div",{className:u.a.layout},r.a.createElement(i.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{property:"og:site_name",content:a}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:title",content:a})),t)};a.d(t,"a",function(){return c})},234:function(e){e.exports={data:{site:{siteMetadata:{author:{name:"Youn Choi(최승윤)",bio:"On a trail to become a backend developer.",photo:"/photo.jpg",contacts:{twitter:"#",github:"#",linkedin:"#"}},menu:[{label:"Articles",path:"/"},{label:"About me",path:"/pages/about"}],url:"https://github.com/CHOISEUNGYOUN/CHOISEUNGYOUN.github.io.git",title:"Youn's Journal",subtitle:"The world is your oyster.",copyright:"© All rights reserved.",disqusShortname:""}}}}},235:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"TIL",totalCount:6}]}}}},236:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"CSS",totalCount:5},{fieldValue:"Class",totalCount:2},{fieldValue:"DOM",totalCount:2},{fieldValue:"ES6",totalCount:1},{fieldValue:"HTML",totalCount:5},{fieldValue:"Javascript",totalCount:2},{fieldValue:"OOP",totalCount:1},{fieldValue:"Python",totalCount:1},{fieldValue:"class",totalCount:1}]}}}},237:function(e,t,a){"use strict";var n=a(232),r=function(e){var t;switch(e){case"twitter":t=n.a.TWITTER;break;case"github":t=n.a.GITHUB;break;case"linkedin":t=n.a.LINKEDIN;break;case"vkontakte":t=n.a.VKONTAKTE;break;case"telegram":t=n.a.TELEGRAM;break;case"email":t=n.a.EMAIL;break;case"rss":t=n.a.RSS;break;default:t={}}return t},o=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"linkedin":a="https://www.linkedin.com/"+t;break;default:a=t}return a};a.d(t,"b",function(){return r}),a.d(t,"a",function(){return o})},284:function(e,t,a){"use strict";e.exports=a(285)},285:function(e,t,a){"use strict";a(8),a(51),a(139),a(30),a(31),a(16),a(50),a(140),a(38),a(138),a(96),a(17),a(97),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=l(a(0)),i=l(a(54));function l(e){return e&&e.__esModule?e:{default:e}}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],c=!1;function s(e,t){var a=t.onNewComment,n=t.language,r=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["onNewComment","language"]);for(var o in r)e.page[o]=r[o];e.language=n,a&&(e.callbacks={onNewComment:[a]})}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["default"].Component),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,a){return u.some(function(e){return e===a})?t:n({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))},{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!c){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),c=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach(function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){s(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){s(this,t)},this.addDisqusScript())}}]),t}();d.displayName="DisqusThread",d.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},d.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=d}}]);
//# sourceMappingURL=component---src-templates-post-template-js-23aec1abd545e53444e5.js.map