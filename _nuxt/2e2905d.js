(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{226:function(t,e,n){var content=n(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(98).default)("4c4020d1",content,!0,{sourceMap:!1})},241:function(t,e,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(98).default)("0f4a95c1",content,!0,{sourceMap:!1})},242:function(t,e,n){"use strict";n(226)},243:function(t,e,n){var l=n(97)(!1);l.push([t.i,'li[data-v-0dc3b51b]{border-radius:50%;position:relative;display:flex;justify-content:center;align-items:center;width:2.5em;height:2.5em;margin-bottom:2em;padding:2em;background-color:var(--blue);color:var(--white);border:2px solid transparent}li[data-v-0dc3b51b]:not(:last-child):after{position:absolute;bottom:0;left:50%;z-index:-1;height:calc(2em + 4px);width:5px;background:var(--white);content:"";transform:translateY(100%) translateX(-50%)}li a[data-v-0dc3b51b]{width:2.5em;height:2.5em;display:flex;justify-content:center;align-items:center;color:inherit;border-radius:50%;text-decoration:none;flex-shrink:0;font-size:1.5rem}li.done[data-v-0dc3b51b]{background-color:var(--blue);color:var(--white)}li.active a[data-v-0dc3b51b],li.done a[data-v-0dc3b51b]{pointer-events:all}li.active[data-v-0dc3b51b]{margin-bottom:5em;margin-top:3em;border-color:var(--blue)}li.active[data-v-0dc3b51b],li.active~li[data-v-0dc3b51b]{background-color:var(--white);color:var(--blue)}li.active[data-v-0dc3b51b]:before{height:4em;transform:translateY(-100%) translateX(-50%)}li.active[data-v-0dc3b51b]:after,li.active[data-v-0dc3b51b]:before{position:absolute;bottom:0;left:50%;z-index:-1;width:5px;background:var(--white);content:""}li.active[data-v-0dc3b51b]:after{height:5.1em;transform:translateY(100%) translateX(-50%)}li.active[data-v-0dc3b51b]:last-child:after,li.active[data-v-0dc3b51b]:last-child:before,li.active:last-child svg[data-v-0dc3b51b]{display:none}li.active[data-v-0dc3b51b]:last-child{margin:0}li.active[data-v-0dc3b51b]:first-child:before{display:none}svg[data-v-0dc3b51b]{height:9.4em;position:absolute;right:-44%}svg[data-v-0dc3b51b]:not(.active){display:none}svg.blue .blue[data-v-0dc3b51b],svg.green .green[data-v-0dc3b51b],svg.orange .orange[data-v-0dc3b51b],svg.yellow .yellow[data-v-0dc3b51b]{opacity:1}svg.green .arrow[data-v-0dc3b51b]{transform:rotate(-57deg)}svg.yellow .arrow[data-v-0dc3b51b]{transform:rotate(-125deg)}svg.orange .arrow[data-v-0dc3b51b]{transform:rotate(-186deg)}svg .icon[data-v-0dc3b51b]{pointer-events:none}.outline[data-v-0dc3b51b]{opacity:0}.arrow-path[data-v-0dc3b51b]{stroke:var(--blue)}.arrow[data-v-0dc3b51b]{transform:rotate(0deg);transform-origin:65% 50%}',""]),t.exports=l},245:function(t,e,n){"use strict";n.r(e);n(26),n(69);var l={props:["active","subject","index"],data:function(){return{subjects:["blue","green","yellow","orange"]}},computed:{activeSubject:function(){return this.subjects[this.subject-1]},lessonLink:function(){return this.$route.fullPath.replace(/\/lesson\/[1-4]\/subject\/[1-4]/,"/lesson/".concat(this.index,"/subject/1"))}},methods:{navigate:function(t){var e=t.currentTarget,n=this.subjects.indexOf(e.id)+1,l=this.$route.fullPath.replace(/.$/,n);this.$router.push(l)}}},r=(n(242),n(42)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("NuxtLink",{attrs:{to:t.lessonLink}},[t._t("default")],2),t._v(" "),n("svg",{class:[{active:this.active},t.activeSubject],attrs:{viewBox:"0 0 156.41 208.5",width:"156.41",height:"208.5",xmlns:"http://www.w3.org/2000/svg"}},[n("defs",[n("style",[t._v("\n            .cls-1 {\n              fill: #ff9400;\n            }\n\n            .cls-2 {\n              fill: #54ba54;\n            }\n\n            .cls-3 {\n              fill: #e7ef37;\n            }\n\n            .cls-4 {\n              fill: #3f51b5;\n            }\n\n            .cls-5 {\n              fill: #f08a2a;\n            }\n\n            .cls-6 {\n              fill: #62cc62;\n            }\n\n            .cls-7 {\n              fill: #edf465;\n            }\n\n            .cls-8 {\n              fill: #5667c3;\n            }\n\n            .cls-9 {\n              fill: #fff;\n            }\n\n            .cls-10 {\n              fill: #ecda32;\n            }\n\n            .cls-11,\n            .cls-13,\n            .cls-14 {\n              fill: none;\n            }\n\n            .cls-11,\n            .cls-13 {\n              stroke: #fff;\n            }\n\n            .cls-11,\n            .cls-14 {\n              stroke-width: 2px;\n            }\n\n            .cls-12 {\n              fill: #d3751f;\n            }\n\n            .cls-13 {\n              stroke-width: 0.5px;\n            }\n\n            .cls-14 {\n              stroke: #222221;\n              stroke-miterlimit: 10;\n            }\n\n            .cls-15 {\n              fill: #010200;\n            }\n      ")])]),t._v(" "),n("g",{attrs:{id:"orange"},on:{click:t.navigate}},[n("path",{staticClass:"cls-1",attrs:{id:"Path_296","data-name":"Path 296",d:"M80.83,144.83,57.4,185.41a93.58,93.58,0,0,0,93.72,0l-23.46-40.59a46.88,46.88,0,0,1-46.87,0",transform:"translate(0)"}})]),t._v(" "),n("g",{attrs:{id:"green"},on:{click:t.navigate}},[n("path",{staticClass:"cls-2",attrs:{id:"Path_297","data-name":"Path 297",d:"M80.83,63.64,57.41,23.1a93.88,93.88,0,0,0-46.88,81.16H57.4A46.81,46.81,0,0,1,80.84,63.67",transform:"translate(0)"}})]),t._v(" "),n("g",{attrs:{id:"yellow"},on:{click:t.navigate}},[n("path",{staticClass:"cls-3",attrs:{id:"Path_298","data-name":"Path 298",d:"M63.66,127.67a46.73,46.73,0,0,1-6.28-23.44H10.53A93.64,93.64,0,0,0,57.4,185.41l23.43-40.58a46.72,46.72,0,0,1-17.17-17.16",transform:"translate(0)"}})]),t._v(" "),n("g",{attrs:{id:"blue"},on:{click:t.navigate}},[n("path",{staticClass:"cls-4",attrs:{id:"Path_299","data-name":"Path 299",d:"M92.66,11.2A93,93,0,0,0,57.41,23.1h0L80.84,63.67a46.79,46.79,0,0,1,46.87,0L151.14,23.1A94.17,94.17,0,0,0,92.66,11.2",transform:"translate(0)"}})]),t._v(" "),n("g",{staticClass:"outline orange",attrs:{id:"oranje_outline","data-name":"oranje outline"}},[n("path",{staticClass:"cls-5",attrs:{id:"Path_300","data-name":"Path 300",d:"M115.86,197.26A94.16,94.16,0,0,1,57.4,185.41l-5.27,9.12a104.25,104.25,0,0,0,104.27,0l-5.27-9.13a93.21,93.21,0,0,1-35.27,11.87",transform:"translate(0)"}})]),t._v(" "),n("g",{staticClass:"outline green",attrs:{id:"groene_outline","data-name":"groene outline"}},[n("path",{staticClass:"cls-6",attrs:{id:"Path_301","data-name":"Path 301",d:"M13.74,80A93.38,93.38,0,0,1,57.41,23.1L52.14,14A104.19,104.19,0,0,0,0,104.26H10.53A94.12,94.12,0,0,1,13.74,80",transform:"translate(0)"}})]),t._v(" "),n("g",{staticClass:"outline yellow",attrs:{id:"gele_outline","data-name":"gele outline"}},[n("path",{staticClass:"cls-7",attrs:{id:"Path_302","data-name":"Path 302",d:"M47.72,179a93.64,93.64,0,0,1-37.19-74.77H0a104.4,104.4,0,0,0,52.13,90.3l5.27-9.12A94.83,94.83,0,0,1,47.72,179",transform:"translate(0)"}})]),t._v(" "),n("g",{staticClass:"outline blue",attrs:{id:"blauwe_outline","data-name":"blauwe outline"}},[n("path",{staticClass:"cls-8",attrs:{id:"Path_303","data-name":"Path 303",d:"M57.41,23.1a93.84,93.84,0,0,1,93.73,0L156.41,14A104.2,104.2,0,0,0,52.14,14l5.27,9.13",transform:"translate(0)"}})]),t._v(" "),n("g",{staticClass:"icon",attrs:{id:"tandwielen"}},[n("path",{staticClass:"cls-9",attrs:{id:"Path_304","data-name":"Path 304",d:"M48.27,66.19l-.63.38a1.12,1.12,0,0,1-1.3-.12,8.18,8.18,0,0,0-1.47-1.08,1.1,1.1,0,0,1-.5-1.21l.18-.72a1.1,1.1,0,0,0-.8-1.34l-1.22-.3a1.09,1.09,0,0,0-1.33.8h0l-.18.73a1.12,1.12,0,0,1-1,.83,7.82,7.82,0,0,0-1.8.26,1.1,1.1,0,0,1-1.2-.5l-.38-.63a1.08,1.08,0,0,0-1.49-.38h0l-1.07.64a1.11,1.11,0,0,0-.42,1.51l0,0,.35.59A1.1,1.1,0,0,1,33.88,67a8.18,8.18,0,0,0-1.12,1.49,1.1,1.1,0,0,1-1.21.49l-.64-.16a1.1,1.1,0,0,0-1.34.79h0l-.3,1.22a1.12,1.12,0,0,0,.8,1.33h0l.58.14a1.09,1.09,0,0,1,.83,1,8.79,8.79,0,0,0,.27,1.9,1.11,1.11,0,0,1-.51,1.21l-.48.29a1.09,1.09,0,0,0-.38,1.5h0L31,79.3a1.08,1.08,0,0,0,1.48.38h0L33,79.4a1.09,1.09,0,0,1,1.31.14,9.7,9.7,0,0,0,1.58,1.18,1.08,1.08,0,0,1,.51,1.21l-.13.5a1.11,1.11,0,0,0,.8,1.33h0l1.22.3a1.1,1.1,0,0,0,1.34-.8h0l.12-.5a1.09,1.09,0,0,1,1-.83,9.2,9.2,0,0,0,2-.3,1.1,1.1,0,0,1,1.23.5l.26.45a1.11,1.11,0,0,0,1.51.37h0l1.08-.64a1.09,1.09,0,0,0,.38-1.5h0l-.29-.49A1.13,1.13,0,0,1,47,79a8.15,8.15,0,0,0,1.13-1.56,1.1,1.1,0,0,1,1.22-.51l.58.14a1.1,1.1,0,0,0,1.33-.79h0l.3-1.22a1.09,1.09,0,0,0-.79-1.33h0l-.64-.16a1.11,1.11,0,0,1-.84-1A8.72,8.72,0,0,0,49,70.73a1.1,1.1,0,0,1,.5-1.22l.59-.35a1.11,1.11,0,0,0,.38-1.51h0l-.65-1.08a1.1,1.1,0,0,0-1.51-.39h0M43.13,77.5A5.32,5.32,0,1,1,45,70.19a5.33,5.33,0,0,1-1.83,7.31h0",transform:"translate(0)"}}),t._v(" "),n("path",{staticClass:"cls-9",attrs:{id:"Path_305","data-name":"Path 305",d:"M57.35,58.47H57a.63.63,0,0,1-.57-.42,4.86,4.86,0,0,0-.38-.91.58.58,0,0,1,.1-.7l.28-.29a.6.6,0,0,0,0-.84l-.48-.48a.6.6,0,0,0-.84,0l-.29.28a.61.61,0,0,1-.7.1,4.5,4.5,0,0,0-.91-.38.6.6,0,0,1-.42-.57v-.4a.6.6,0,0,0-.6-.6h-.68a.6.6,0,0,0-.6.6h0v.37a.61.61,0,0,1-.43.58,4,4,0,0,0-.94.37.61.61,0,0,1-.7-.1l-.25-.26a.6.6,0,0,0-.84,0l-.48.48a.59.59,0,0,0,0,.83l0,0,.22.22a.6.6,0,0,1,.1.72,5.34,5.34,0,0,0-.41.95.59.59,0,0,1-.57.42h-.3a.6.6,0,0,0-.6.6h0v.68a.59.59,0,0,0,.58.6h.3a.59.59,0,0,1,.57.43,5.35,5.35,0,0,0,.4,1,.61.61,0,0,1-.1.7l-.2.2a.61.61,0,0,0,0,.85l.48.48a.61.61,0,0,0,.85,0l.2-.2a.58.58,0,0,1,.7-.1,5.09,5.09,0,0,0,1,.4.58.58,0,0,1,.42.57V65a.6.6,0,0,0,.6.6h.68a.6.6,0,0,0,.6-.6h0v-.3a.6.6,0,0,1,.42-.58,4.38,4.38,0,0,0,1-.41.61.61,0,0,1,.71.1l.23.23A.61.61,0,0,0,56,64l.48-.48a.6.6,0,0,0,0-.84l-.26-.26a.59.59,0,0,1-.1-.7,5.3,5.3,0,0,0,.37-.93.59.59,0,0,1,.58-.43h.37a.6.6,0,0,0,.6-.6h0V59.1a.62.62,0,0,0-.6-.6m-5.54,3.83a2.89,2.89,0,1,1,2.81-3v0h0a2.89,2.89,0,0,1-2.89,2.89h0",transform:"translate(0)"}})]),t._v(" "),n("g",{staticClass:"icon",attrs:{id:"mindset"}},[n("path",{staticClass:"cls-9",attrs:{id:"Path_306","data-name":"Path 306",d:"M35,133.86l4.51-3.72,6.29-1.43,3,1.43,3.2,3.72,1,4.57-3.11,8.42v5l-10.39,2L35,150l-2.75-5.18Z",transform:"translate(0)"}}),t._v(" "),n("path",{staticClass:"cls-10",attrs:{id:"Path_308","data-name":"Path 308",d:"M49.47,135.51h-.29a.44.44,0,0,1-.41-.3,3,3,0,0,0-.28-.66.44.44,0,0,1,.08-.52l.2-.2a.44.44,0,0,0,0-.62h0l-.35-.35a.45.45,0,0,0-.61,0h0l-.21.21a.42.42,0,0,1-.51.08,2.73,2.73,0,0,0-.66-.28.44.44,0,0,1-.3-.41v-.3a.43.43,0,0,0-.43-.43h-.5a.43.43,0,0,0-.43.43v.27a.44.44,0,0,1-.31.42,3,3,0,0,0-.68.27.46.46,0,0,1-.51-.07l-.19-.19a.44.44,0,0,0-.61,0h0l-.35.35a.42.42,0,0,0,0,.6h0l.17.17a.41.41,0,0,1,.07.51,4,4,0,0,0-.3.7.43.43,0,0,1-.41.31h-.23a.43.43,0,0,0-.43.43h0v.5a.43.43,0,0,0,.43.43h.2a.42.42,0,0,1,.42.31,3.74,3.74,0,0,0,.29.72.41.41,0,0,1-.07.51l-.14.14a.44.44,0,0,0,0,.62h0l.34.34a.44.44,0,0,0,.62,0h0l.14-.14a.41.41,0,0,1,.51-.07,4.51,4.51,0,0,0,.72.29.42.42,0,0,1,.31.42v.2a.43.43,0,0,0,.43.43h.5a.43.43,0,0,0,.43-.43V140a.42.42,0,0,1,.31-.41,7.37,7.37,0,0,0,.7-.3.41.41,0,0,1,.51.07l.17.17a.44.44,0,0,0,.61,0h0l.35-.35a.43.43,0,0,0,0-.61h0l-.19-.19a.44.44,0,0,1-.07-.51,4.37,4.37,0,0,0,.27-.68.42.42,0,0,1,.42-.31h.27a.43.43,0,0,0,.43-.43v-.5a.43.43,0,0,0-.43-.43m-4,2.78a2.1,2.1,0,1,1,2.1-2.1,2.1,2.1,0,0,1-2.1,2.1h0",transform:"translate(0)"}}),t._v(" "),n("g",{attrs:{id:"Laag_15","data-name":"Laag 15"}},[n("path",{staticClass:"cls-11",attrs:{id:"Path_307","data-name":"Path 307",d:"M43.71,128.45A9.73,9.73,0,0,0,34,138.17v1.42l-2.34,4.69a.82.82,0,0,0,.37,1.09.9.9,0,0,0,.36.08H34v3.9A1.63,1.63,0,0,0,35.62,151h.27l3-.5v3.1a.81.81,0,0,0,.81.81h.14l9.71-1.62a.8.8,0,0,0,.67-.8v-5a4.15,4.15,0,0,1,1-2.59,9.7,9.7,0,0,0-7.5-15.9Z",transform:"translate(0)"}})])]),t._v(" "),n("g",{staticClass:"icon",attrs:{id:"lampje"}},[n("path",{staticClass:"cls-9",attrs:{id:"Path_309","data-name":"Path 309",d:"M108.17,42.22v1a1.59,1.59,0,0,1-1.35,1.57l-.24.91a1.13,1.13,0,0,1-1.09.83H103A1.13,1.13,0,0,1,102,45.7l-.24-.91a1.6,1.6,0,0,1-1.35-1.58v-1a1,1,0,0,1,1-1h5.88a1,1,0,0,1,1,1m4.42-13.46a8.36,8.36,0,0,1-2.36,5.85,7.68,7.68,0,0,0-2.07,4.2A1.41,1.41,0,0,1,106.85,40h-5.19a1.39,1.39,0,0,1-1.37-1.17,7.87,7.87,0,0,0-2.09-4.22,8.43,8.43,0,1,1,14.5-5.84Zm-7.47-5.1a1,1,0,0,0-1-1,6.1,6.1,0,0,0-6.08,6.08,1,1,0,0,0,1.91,0,4.18,4.18,0,0,1,4.18-4.18,1,1,0,0,0,1-.94Z",transform:"translate(0)"}})]),t._v(" "),n("g",{staticClass:"icon",attrs:{id:"potlood_icoon","data-name":"potlood icoon"}},[n("path",{staticClass:"cls-9",attrs:{id:"Path_310","data-name":"Path 310",d:"M96.77,165.2h15a3,3,0,0,1,3,3v14a3,3,0,0,1-3,3h-15a3,3,0,0,1-3-3v-14a3,3,0,0,1,3-3",transform:"translate(0)"}}),t._v(" "),n("path",{staticClass:"cls-12",attrs:{id:"Path_313","data-name":"Path 313",d:"M109,170.31a1.71,1.71,0,0,0-2.41,0l-6.77,6.6a.29.29,0,0,0-.1.16l-.89,3.14a.41.41,0,0,0,.1.36.45.45,0,0,0,.37.1l3.21-.87a1,1,0,0,0,.17-.1l6.77-6.6a1.65,1.65,0,0,0,0-2.31h0Zm-8.35,6.84,5.54-5.4,1.78,1.74-5.54,5.4Zm-.36.7,1.43,1.39-2,.53Zm8.62-5.27-.4.39-1.78-1.74.4-.39a1,1,0,0,1,1.34,0l.44.43a.89.89,0,0,1,0,1.28h0Z",transform:"translate(0)"}}),t._v(" "),n("path",{staticClass:"cls-12",attrs:{id:"Path_314","data-name":"Path 314",d:"M106,171.35l2.13-1.08,1.43,1.78-1.43,1.21-.25.46L106,175.85l-4.48,3.86.67-.51-2.14-1.54Z",transform:"translate(0)"}}),t._v(" "),n("g",{attrs:{id:"Laag_11","data-name":"Laag 11"}},[n("path",{staticClass:"cls-13",attrs:{id:"Path_312","data-name":"Path 312",d:"M114.07,176.94a.53.53,0,0,0-.53.53h0v4.77a1.63,1.63,0,0,1-1.61,1.61H96.86a1.62,1.62,0,0,1-1.61-1.61v-14a1.61,1.61,0,0,1,1.61-1.61h4.8a.54.54,0,0,0,.46-.61.53.53,0,0,0-.46-.46h-4.8a2.68,2.68,0,0,0-2.69,2.67v14a2.7,2.7,0,0,0,2.69,2.68h15.07a2.68,2.68,0,0,0,2.68-2.68v-4.77a.52.52,0,0,0-.52-.54h0Z",transform:"translate(0)"}})]),t._v(" "),n("g",{attrs:{id:"Laag_12","data-name":"Laag 12"}},[n("path",{staticClass:"cls-9",attrs:{id:"Path_311","data-name":"Path 311",d:"M114.07,176.94a.53.53,0,0,0-.53.53h0v4.77a1.63,1.63,0,0,1-1.61,1.61H96.86a1.62,1.62,0,0,1-1.61-1.61v-14a1.61,1.61,0,0,1,1.61-1.61h4.8a.54.54,0,0,0,.46-.61.53.53,0,0,0-.46-.46h-4.8a2.68,2.68,0,0,0-2.69,2.67v14a2.7,2.7,0,0,0,2.69,2.68h15.07a2.68,2.68,0,0,0,2.68-2.68v-4.77a.52.52,0,0,0-.52-.54h0Z",transform:"translate(0)"}})])]),t._v(" "),n("g",{attrs:{id:"pijl"}},[n("path",{staticClass:"cls-14 arrow-path",attrs:{id:"Path_315","data-name":"Path 315",d:"M127.79,145a47,47,0,1,1,0-81.48",transform:"translate(0)"}}),t._v(" "),n("path",{staticClass:"cls-15 arrow",attrs:{id:"Path_317","data-name":"Path 317",d:"M 101.537 62.478 L 108.047 56.738 L 99.887 53.948 Z M 100.887 64.378 L 98.587 52.458 L 109.987 56.348 Z",transform:"matrix(0.749459, 0.66205, -0.66205, 0.749459, 64.803784, -54.40716)"}}),t._v(" "),n("g",{attrs:{id:"Laag_8","data-name":"Laag 8"}},[n("path",{staticClass:"cls-15 arrow",attrs:{id:"Path_316","data-name":"Path 316",d:"M 99.406 53.457 L 109.186 56.797 L 101.376 63.687 Z",transform:"matrix(0.743316, 0.668941, -0.668941, 0.743316, 65.952334, -54.733329)"}})])])])],1)}),[],!1,null,"0dc3b51b",null);e.default=component.exports},246:function(t,e,n){"use strict";n(241)},247:function(t,e,n){var l=n(97)(!1);l.push([t.i,"nav[data-v-38292ee6]{grid-column:12/14}nav[data-v-38292ee6],ul[data-v-38292ee6]{display:flex;justify-content:center;align-items:center}ul[data-v-38292ee6]{flex-direction:column;margin-bottom:1em;list-style:none}",""]),t.exports=l},257:function(t,e,n){"use strict";n.r(e);var l={props:["lessons","active","subject"],mounted:function(){console.log(this.subject)}},r=(n(246),n(42)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",t._l(t.lessons,(function(e){return n("OnionItem",{key:e.index,class:e.index==t.active?"active":"",attrs:{index:e.index,active:e.index==t.active,subject:t.subject}},[t._v("\n      "+t._s("intro"==e.index?e.index:"1."+e.index)+"\n    ")])})),1)])}),[],!1,null,"38292ee6",null);e.default=component.exports;installComponents(component,{OnionItem:n(245).default})}}]);