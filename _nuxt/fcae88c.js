(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{295:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("10f3528e",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n(295)},325:function(t,e,n){var c=n(21)(!1);c.push([t.i,'.form-control[data-v-0a5b9c05]{width:100%;color:#48555b;font-size:13px;font-weight:700;max-width:100%;padding:.5rem .75rem .375rem}.form-control[data-v-0a5b9c05],.text-muted[data-v-0a5b9c05]{font-style:normal;letter-spacing:0}.text-muted[data-v-0a5b9c05]{color:rgba(51,51,51,.501961)!important;opacity:.5;line-height:29px;font-size:14px!important;font-weight:400;margin-right:50px}.swiper-pagination-bullet[data-v-0a5b9c05]{width:12px;height:12px;display:inline-block;border-radius:50%;background:#e8c300;opacity:1}.swiper-container-horizontal>.swiper-pagination-bullets[data-v-0a5b9c05]{bottom:0}@media (max-width:575px){.swiper-button-next[data-v-0a5b9c05],.swiper-container-rtl .swiper-button-prev[data-v-0a5b9c05]{right:0;left:auto}.swiper-button-prev[data-v-0a5b9c05],.swiper-container-rtl .swiper-button-next[data-v-0a5b9c05]{left:0;right:auto}}.contacts[data-v-0a5b9c05]{max-width:1500px;margin:0 auto}.contacts__title[data-v-0a5b9c05]{font-family:"Banny",sans-serif;font-size:36px;line-height:48px;letter-spacing:0;text-align:center;margin-top:100px}.contacts__line[data-v-0a5b9c05]{width:59px;height:5px;background-color:#e8c300;border-radius:50px;margin:5px auto 20px}.contacts__subtitle[data-v-0a5b9c05]{font-size:18px;font-weight:700;line-height:28px;letter-spacing:0;text-align:center;max-width:520px;margin:0 auto 50px}.contacts__content[data-v-0a5b9c05]{padding:0 80px 100px}.content[data-v-0a5b9c05]{display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:60px 120px 60px;grid-column-gap:11px;grid-row-gap:23px}.content__email[data-v-0a5b9c05],.content__name[data-v-0a5b9c05],.content__phone[data-v-0a5b9c05]{grid-column-start:span 2}.content__message[data-v-0a5b9c05]{grid-column-start:span 6}.content__button[data-v-0a5b9c05],.content__connection[data-v-0a5b9c05]{grid-column-start:span 3}.connection[data-v-0a5b9c05]{display:flex;justify-content:space-between;flex-wrap:wrap;align-items:center;width:100%}.connection__icon[data-v-0a5b9c05]{color:#e8c300;font-size:15px;stroke:#1da1f2}.connection__text[data-v-0a5b9c05]{font-size:12px;font-style:normal;font-weight:700;line-height:12px;letter-spacing:0;text-align:left;color:rgba(51,51,51,.501961);margin-left:15px}.connection__element[data-v-0a5b9c05]{display:flex;align-items:center}.connection__element[data-v-0a5b9c05]:last-child{margin-right:40px}.icon-phone[data-v-0a5b9c05]{transform:rotate(-90deg)}@media (max-width:1400px){.connection__element[data-v-0a5b9c05]:last-child{margin-right:0}}@media (max-width:767px){.content[data-v-0a5b9c05]{display:flex;flex-direction:column}.connection__element[data-v-0a5b9c05]{margin-bottom:10px}.contacts__subtitle[data-v-0a5b9c05]{padding:0 20px;margin-bottom:20px}.contacts__content[data-v-0a5b9c05]{padding:0 40px}}@media (max-width:480px){.contacts__subtitle[data-v-0a5b9c05]{padding:0 10px}.contacts__content[data-v-0a5b9c05]{padding:0 20px}}',""]),t.exports=c},403:function(t,e,n){"use strict";n.r(e);var c=n(63),o={name:"Contacts",data:function(){return{subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.",customerName:"",customerPhone:"",customerEmail:"",customerMessage:""}},methods:{showMessageModal:function(){this.ShowModal({key:c.default.message,name:this.customerName,phone:this.customerPhone,email:this.customerEmail,message:this.customerMessage})}}},r=(n(324),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts"},[n("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(e){var c=e.handleSubmit;return[n("div",{staticClass:"contacts__title"},[t._v("\n      "+t._s(t.$t("hunger.contacts.contactsTitle"))+"\n    ")]),t._v(" "),n("div",{staticClass:"contacts__line"}),t._v(" "),n("div",{staticClass:"contacts__subtitle"},[t._v("\n      "+t._s(t.subtitle)+"\n    ")]),t._v(" "),n("div",{staticClass:"contacts__content content"},[n("custom-area",{staticClass:"content__name",attrs:{placeholder:t.$t("hunger.contacts.name"),"is-input":!0,rules:"required|alpha_spaces",name:t.$t("hunger.contacts.nameField")},model:{value:t.customerName,callback:function(e){t.customerName=e},expression:"customerName"}}),t._v(" "),n("custom-area",{staticClass:"content__email",attrs:{placeholder:t.$t("hunger.contacts.email"),"is-input":!0,rules:"required|email",name:t.$t("hunger.contacts.emailField")},model:{value:t.customerEmail,callback:function(e){t.customerEmail=e},expression:"customerEmail"}}),t._v(" "),n("custom-area",{staticClass:"content__phone",attrs:{placeholder:t.$t("hunger.contacts.phone"),rules:"required|phone","is-input":!0,name:t.$t("hunger.contacts.phoneField")},model:{value:t.customerPhone,callback:function(e){t.customerPhone=e},expression:"customerPhone"}}),t._v(" "),n("custom-area",{staticClass:"content__message",attrs:{placeholder:t.$t("hunger.contacts.message"),"is-text-area":!0,rules:"required|min:10",name:t.$t("hunger.contacts.messageField")},model:{value:t.customerMessage,callback:function(e){t.customerMessage=e},expression:"customerMessage"}}),t._v(" "),n("div",{staticClass:"content__connection connection"},[n("span",{staticClass:"connection__element"},[n("span",{staticClass:"connection__icon icon-map-marker"}),t._v(" "),n("span",{staticClass:"connection__text"},[t._v("\n            "+t._s(t.$t("hunger.contacts.address"))+"\n          ")])]),t._v(" "),n("span",{staticClass:"connection__element"},[n("span",{staticClass:"connection__icon icon-phone"}),t._v(" "),n("span",{staticClass:"connection__text"},[t._v("\n            "+t._s(t.$t("hunger.contacts.telephone"))+"\n          ")])]),t._v(" "),n("span",{staticClass:"connection__element"},[n("span",{staticClass:"connection__icon icon-envelope"}),t._v(" "),n("span",{staticClass:"connection__text"},[t._v("\n            "+t._s(t.$t("hunger.contacts.emailAddress"))+"\n          ")])])]),t._v(" "),n("custom-button",{staticClass:"content__button",attrs:{mode:"yellow"},on:{click:function(e){return c(t.showMessageModal)}}},[t._v("\n        "+t._s(t.$t("hunger.contacts.sendMessage"))+"\n      ")])],1)]}}])})],1)}),[],!1,null,"0a5b9c05",null);e.default=component.exports}}]);