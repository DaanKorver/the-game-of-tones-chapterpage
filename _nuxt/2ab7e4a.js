(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{241:function(t,n,e){var content=e(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(98).default)("9a168772",content,!0,{sourceMap:!1})},247:function(t,n,e){"use strict";e(241)},248:function(t,n,e){var r=e(97)(!1);r.push([t.i,".hidden[data-v-1df3f2f2]{-webkit-animation:hide-data-v-1df3f2f2 .3s ease-out forwards;animation:hide-data-v-1df3f2f2 .3s ease-out forwards;opacity:0}svg[data-v-1df3f2f2]{position:absolute!important;-webkit-animation:show-data-v-1df3f2f2 .3s ease-out forwards;animation:show-data-v-1df3f2f2 .3s ease-out forwards}@-webkit-keyframes hide-data-v-1df3f2f2{0%{transform:scale(1);opacity:1;pointer-events:all}to{transform:scale(.3);opacity:0;pointer-events:none}}@keyframes hide-data-v-1df3f2f2{0%{transform:scale(1);opacity:1;pointer-events:all}to{transform:scale(.3);opacity:0;pointer-events:none}}@-webkit-keyframes show-data-v-1df3f2f2{0%{transform:scale(.3);opacity:0;pointer-events:none}to{transform:scale(1);opacity:1;pointer-events:all}}@keyframes show-data-v-1df3f2f2{0%{transform:scale(.3);opacity:0;pointer-events:none}to{transform:scale(1);opacity:1;pointer-events:all}}",""]),t.exports=r},261:function(t,n,e){"use strict";e.r(n);e(26),e(69),e(100);var r={data:function(){return{hidden:!0}},props:["chapter","active"],mounted:function(){this.setActiveMenu()},watch:{active:function(){this.setActiveMenu()}},methods:{setActiveMenu:function(){this.chapter==this.active?this.hidden=!1:this.hidden=!0},navigate:function(t){var n=t.currentTarget.dataset.lesson,e=this.$route.fullPath.replace(/\/menu\/?/,"/chapter/".concat(this.chapter,"/lesson/").concat(n,"/subject/1"));this.$router.push(e)},navigateIntro:function(){var t=this.$route.fullPath.replace(/\/menu\/?/,"/chapter/".concat(this.chapter,"/intro"));this.$router.push(t)}}},c=(e(247),e(42)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{class:{hidden:t.hidden},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 285.05 285.05"}},[e("defs",[e("style",[t._v('\n      .cls-4 {\n        cursor: pointer;\n      }\n\n      text {\n        pointer-events: none;\n        user-select: none;\n      }\n\n      .cls-1,\n      .cls-14,\n      .cls-5 {\n        fill: none;\n      }\n\n      .cls-13,\n      .cls-2,\n      .cls-3 {\n        fill: #2f4969;\n      }\n\n      .cls-13,\n      .cls-14,\n      .cls-2 {\n        stroke: #254768;\n      }\n\n      .cls-13,\n      .cls-14,\n      .cls-2,\n      .cls-5 {\n        stroke-miterlimit: 10;\n      }\n\n      .cls-2 {\n        stroke-width: 9px;\n      }\n\n      .cls-28,\n      .cls-4 {\n        fill: #fff;\n      }\n\n      .cls-5 {\n        stroke: #fff;\n        pointer-events: none;\n        stroke-dasharray: 12;\n      }\n\n      .cls-13,\n      .cls-14,\n      .cls-5 {\n        stroke-width: 3px;\n      }\n\n      .cls-29,\n      .cls-6 {\n        fill: #2f4969;\n      }\n\n      .cls-6 {\n        opacity: 0.3;\n      }\n\n      .cls-24,\n      .cls-26,\n      .cls-30,\n      .cls-7 {\n        font-size: 13px;\n      }\n\n      .cls-30,\n      .cls-7 {\n        fill: #2f4969;\n      }\n\n      .cls-15,\n      .cls-19,\n      .cls-20,\n      .cls-24,\n      .cls-26,\n      .cls-30,\n      .cls-7 {\n        font-family: "Poppins";\n      }\n\n      .cls-10,\n      .cls-12,\n      .cls-15,\n      .cls-19,\n      .cls-20,\n      .cls-24,\n      .cls-26,\n      .cls-30,\n      .cls-7 {\n        font-weight: 500;\n      }\n\n      .cls-8 {\n        letter-spacing: -0.06em;\n      }\n\n      .cls-9 {\n        letter-spacing: -0.08em;\n      }\n\n      .cls-10,\n      .cls-12 {\n        font-size: 8px;\n        font-family: "Poppins";\n      }\n\n      .cls-10,\n      .cls-12,\n      .cls-15,\n      .cls-19,\n      .cls-20 {\n        fill: #254767;\n      }\n\n      .cls-11 {\n        font-family: "Poppins";\n        font-weight: 500;\n      }\n\n      .cls-12,\n      .cls-24,\n      .cls-27,\n      .cls-28,\n      .cls-29,\n      .cls-30 {\n        opacity: 0;\n      }\n\n      .cls-15 {\n        font-size: 10px;\n      }\n\n      .cls-16 {\n        letter-spacing: 0.02em;\n      }\n\n      .cls-17 {\n        letter-spacing: 0.01em;\n      }\n\n      .cls-18 {\n        letter-spacing: 0.04em;\n      }\n\n      .cls-19 {\n        font-size: 12px;\n      }\n\n      .cls-20 {\n        font-size: 15px;\n      }\n\n      .cls-21 {\n        clip-path: url(#clip-path);\n        pointer-events: none;\n      }\n\n      .cls-22 {\n        fill: #4f7bb0;\n      }\n\n      .cls-23 {\n        fill: #668069;\n      }\n\n      .cls-24,\n      .cls-26 {\n        fill: #254768;\n      }\n\n      .cls-25 {\n        letter-spacing: -0.01em;\n      }\n\n      .cls-31 {\n        clip-path: url(#clip-path-2);\n      }\n    ')]),t._v(" "),e("clipPath",{attrs:{id:"clip-path",transform:"translate(-35.97 -30.91)"}},[e("rect",{staticClass:"cls-1",attrs:{x:"172.01",y:"248.65",width:"12.77",height:"12.77"}})]),t._v(" "),e("clipPath",{attrs:{id:"clip-path-2",transform:"translate(-35.97 -30.91)"}},[e("rect",{staticClass:"cls-1",attrs:{x:"97.09",y:"194.25",width:"12.77",height:"12.77"}})])]),t._v(" "),e("g",{attrs:{id:"circle_2_in_sphere","data-name":"circle 2 in sphere"}},[e("g",{attrs:{id:"cirkel_1.1"}},[e("circle",{staticClass:"cls-4",attrs:{cx:"96.03",cy:"78.18",r:"24.9","data-lesson":"1"},on:{click:t.navigate}})])]),t._v(" "),e("g",{attrs:{id:"verbindingstukje_2_circle","data-name":"verbindingstukje 2 circle"}},[e("g",{attrs:{id:"verbindingsstreepje_2","data-name":"verbindingsstreepje 2"}},[e("path",{staticClass:"cls-5",attrs:{d:"M97.23,182.61",transform:"translate(-35.97 -30.91)"}}),t._v(" "),e("path",{staticClass:"cls-5",attrs:{d:"M119.73,116.3a81.91,81.91,0,1,1,74.48,137.35",transform:"translate(-35.97 -30.91)"}})])]),t._v(" "),e("g",{attrs:{id:"verbindingstreepje_1_circle","data-name":"verbindingstreepje 1 circle"}},[e("g",{attrs:{id:"verbindingsstreepje"}},[e("line",{staticClass:"cls-5",attrs:{x1:"142.63",y1:"142.32",x2:"94.49",y2:"76.06"}})])]),t._v(" "),e("g",{attrs:{id:"circle_5_in_sphere","data-name":"circle 5 in sphere"}},[e("g",{attrs:{id:"cirkel_putting_it_together","data-name":"cirkel putting it together","data-lesson":"4"},on:{click:t.navigate}},[e("circle",{staticClass:"cls-4",attrs:{cx:"142.63",cy:"221.61",r:"24.9"}})])]),t._v(" "),e("g",{attrs:{id:"circle_4_in_sphere","data-name":"circle 4 in sphere"}},[e("g",{attrs:{id:"cirkel_1.3","data-name":"cirkel 1.3","data-lesson":"3"},on:{click:t.navigate}},[e("circle",{staticClass:"cls-4",attrs:{cx:"218.02",cy:"166.82",r:"24.9"}})])]),t._v(" "),e("g",{attrs:{id:"circle_1_in_sphere","data-name":"circle 1 in sphere"},on:{click:t.navigateIntro}},[e("g",{attrs:{id:"cirkel_intro","data-name":"cirkel intro"}},[e("circle",{staticClass:"cls-4",attrs:{cx:"142.63",cy:"142.32",r:"24.9"}})])]),t._v(" "),e("g",{attrs:{id:"circle_3_in_spere","data-name":"circle 3 in spere"}},[e("g",{attrs:{id:"cirkel_1.2","data-name":"cirkel 1.2"}},[e("circle",{staticClass:"cls-4",attrs:{cx:"189.24",cy:"78.18",r:"24.9","data-lesson":"2"},on:{click:t.navigate}})])]),t._v(" "),e("g",{attrs:{id:"_1.1_circle","data-name":"1.1 circle"}},[e("text",{staticClass:"cls-7",attrs:{transform:"translate(86.61 85.08)"}},[e("tspan",{staticClass:"cls-8"},[t._v(t._s(t.chapter))]),t._v(" "),e("tspan",{staticClass:"cls-9",attrs:{x:"7.26",y:"0"}},[t._v(".")]),t._v(" "),e("tspan",{attrs:{x:"10.23",y:"0"}},[t._v("1")])])]),t._v(" "),e("g",{attrs:{id:"chapter_1","data-name":"chapter 1"}},[e("text",{staticClass:"cls-10",attrs:{transform:"translate(38.2 175.52)"}},[t._v("\n      Chapter "+t._s(t.chapter)+"\n      "),e("tspan",{staticClass:"cls-11"},[e("tspan",{attrs:{x:"0",y:"9.6"}},[t._v("Pitch Successions")])])])]),t._v(" "),e("g",{attrs:{id:"tekst_h2","data-name":"tekst h2"}},[e("text",{staticClass:"cls-12",attrs:{transform:"translate(38.2 116.54)"}},[t._v("\n      Chapter 2\n      "),e("tspan",{staticClass:"cls-11"},[e("tspan",{attrs:{x:"0",y:"9.6"}},[t._v("Tonality")])])])]),t._v(" "),e("g",{attrs:{id:"putting_it_together_circle","data-name":"putting it together circle"}},[e("g",{staticClass:"cls-21"},[e("g",{attrs:{id:"Group_376","data-name":"Group 376"}},[e("path",{staticClass:"cls-22",attrs:{id:"Path_271","data-name":"Path 271",d:"M177.31,259.34h-4.63a.67.67,0,0,1-.67-.67V254h5.3Z",transform:"translate(-35.97 -30.91)"}}),t._v(" "),e("path",{staticClass:"cls-22",attrs:{id:"Path_272","data-name":"Path 272",d:"M176.7,257.38v-1.71h1.05a.86.86,0,0,1,0,1.71Z",transform:"translate(-35.97 -30.91)"}}),t._v(" "),e("path",{staticClass:"cls-3",attrs:{id:"Path_273","data-name":"Path 273",d:"M182.82,256.12v-.45a.85.85,0,1,0-1.7,0s0,0,0,0v.45h-1.68v1.68h.44a.86.86,0,0,1,0,1.71h-.44v1.91h4.67a.67.67,0,0,0,.67-.67v-4.63Z",transform:"translate(-35.97 -30.91)"}}),t._v(" "),e("path",{staticClass:"cls-3",attrs:{id:"Path_274","data-name":"Path 274",d:"M177.31,248.65h-4.63a.67.67,0,0,0-.67.67V254h5.3Z",transform:"translate(-35.97 -30.91)"}}),t._v(" "),e("path",{staticClass:"cls-23",attrs:{id:"Path_275","data-name":"Path 275",d:"M176.7,250.61v1.7h1.05a.85.85,0,0,0,0-1.7Z",transform:"translate(-35.97 -30.91)"}}),t._v(" "),e("path",{staticClass:"cls-22",attrs:{id:"Path_276","data-name":"Path 276",d:"M177.31,250.61h-.44a.85.85,0,0,0,0,1.7h.48V254H179v-.44a.85.85,0,0,1,1.7,0V254h1.91v-4.67a.67.67,0,0,0-.67-.67h-4.63Z",transform:"translate(-35.97 -30.91)"}})])])]),t._v(" "),e("g",{attrs:{id:"intro"}},[e("text",{staticClass:"cls-26",attrs:{transform:"translate(129.09 146.66)"}},[t._v("Intro")])]),t._v(" "),e("g",{attrs:{id:"_1.2_circle","data-name":"1.2 circle"}},[e("g",{attrs:{id:"_1.2","data-name":"1.2"}},[e("text",{staticClass:"cls-7",attrs:{transform:"translate(179.56 84.8)"}},[e("tspan",{staticClass:"cls-8"},[t._v(t._s(t.chapter))]),t._v(" "),e("tspan",{attrs:{x:"7.26",y:"0"}},[t._v(".2")])])])]),t._v(" "),e("g",{attrs:{id:"verbindingstreepje_h2","data-name":"verbindingstreepje h2"}},[e("g",{staticClass:"cls-27"},[e("path",{staticClass:"cls-5",attrs:{d:"M161,253.48q-3.76-.82-7.41-2a82,82,0,0,1-56.49-68.69",transform:"translate(-35.97 -30.91)"}})])]),t._v(" "),e("g",{attrs:{id:"extra_circle_h2","data-name":"extra circle h2"}},[e("circle",{staticClass:"cls-28",attrs:{cx:"67.14",cy:"167.02",r:"24.9"}})]),t._v(" "),e("g",{attrs:{id:"_1.3_circle","data-name":"1.3 circle"}},[e("text",{staticClass:"cls-7",attrs:{id:"_1.3","data-name":"1.3",transform:"translate(208.38 173.39)"}},[e("tspan",{staticClass:"cls-8"},[t._v(t._s(t.chapter))]),t._v(" "),e("tspan",{attrs:{x:"7.26",y:"0"}},[t._v(".3")])])]),t._v(" "),e("g",{attrs:{id:"_2.4","data-name":"2.4"}},[e("text",{staticClass:"cls-30",attrs:{id:"_1.3-2","data-name":"1.3",transform:"translate(132.39 228.48)"}},[t._v("\n      2.4\n    ")])]),t._v(" "),e("g",{attrs:{id:"putting_it_together_h2","data-name":"putting it together h2"}},[e("g",{staticClass:"cls-27"},[e("g",{staticClass:"cls-31"},[e("g",{attrs:{id:"Group_376-2","data-name":"Group 376"}},[e("path",{staticClass:"cls-22",attrs:{id:"Path_271-2","data-name":"Path 271",d:"M102.4,204.94H97.76a.67.67,0,0,1-.67-.67V199.6h5.31Z",transform:"translate(-35.97 -30.91)"}}),t._v(" "),e("path",{staticClass:"cls-22",attrs:{id:"Path_272-2","data-name":"Path 272",d:"M101.78,203v-1.7h1.06a.85.85,0,0,1,0,1.7Z",transform:"translate(-35.97 -30.91)"}}),t._v(" "),e("path",{staticClass:"cls-3",attrs:{id:"Path_273-2","data-name":"Path 273",d:"M107.9,201.72v-.44a.85.85,0,1,0-1.7,0v.48h-1.68v1.69H105a.85.85,0,0,1,0,1.7h-.44V207h4.68a.67.67,0,0,0,.66-.67v-4.63Z",transform:"translate(-35.97 -30.91)"}}),t._v(" "),e("path",{staticClass:"cls-3",attrs:{id:"Path_274-2","data-name":"Path 274",d:"M102.4,194.25H97.76a.67.67,0,0,0-.67.67v4.68h5.31Z",transform:"translate(-35.97 -30.91)"}}),t._v(" "),e("path",{staticClass:"cls-23",attrs:{id:"Path_275-2","data-name":"Path 275",d:"M101.78,196.21v1.71h1.06a.86.86,0,0,0,0-1.71Z",transform:"translate(-35.97 -30.91)"}}),t._v(" "),e("path",{staticClass:"cls-22",attrs:{id:"Path_276-2","data-name":"Path 276",d:"M102.39,196.21H102a.86.86,0,0,0,0,1.71h.48v1.68h1.69v-.45a.86.86,0,0,1,1.71,0v.45h1.9v-4.68a.67.67,0,0,0-.66-.67h-4.64Z",transform:"translate(-35.97 -30.91)"}})])])])])])}),[],!1,null,"1df3f2f2",null);n.default=component.exports}}]);