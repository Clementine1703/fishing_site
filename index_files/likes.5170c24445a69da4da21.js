﻿(()=>{"use strict";var e,t,i,n,r,a,o={700069:(e,t,i)=>{i.d(t,{Likes:()=>y});i(682772),i(319601),i(426833),i(804723),i(115306);var n=i(873589),r=i(152278),a=i(290846),o=i(342269),s=i(631351),l=i(274642),u=i(733164),c=i(146143),d=i(608021),v=i(465864),p=i(325698),_=i(95146),h=i(908706),w=i(107337),m=i(576772),k=i(210277);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},f.apply(this,arguments)}var y={toggle(e,t,i,a){if((0,r.cancelEvent)(t),(0,u.isObject)(window.cur)&&(0,u.isFunction)(cur.viewAsBox))return cur.viewAsBox();if(vk.widget&&!vk.id)return window.Widgets.oauth();var o=(0,n.hasClass)(e,"active");(0,n.addClass)(e,"animate"),this.clientUpdate(i,p.LikeButtonTypes.like,o?-1:1,!o);var s=()=>{(0,n.toggleClass)(e,"active",o),this.clientUpdate(i,p.LikeButtonTypes.like,o?1:-1,o)};window.ajax.post("like.php",{act:o?"a_do_unlike":"a_do_like",object:i,hash:a,list:cur.pvListId,wall:2,from:this._getReference(i),from_widget:vk.widget?1:0},{onDone:t=>{if(t.unauth_action_box)return s(),void m.UnauthActionBox.show(t.unauth_action_box);this.update(i,t);var n=i.match(/^(wall|market)(.*)/);n&&cur.onLike&&cur.onLike(e,n[1],n[2],o)},onFail:()=>(s(),!1)}),(0,u.intval)((0,n.domData)(e,"count"))>0?y.showLikes(e,i,{fast:!0}):e.tt&&e.tt.destroy&&e.tt.destroy()},_getReference:e=>cur.pvShown?"photo_viewer":e===cur.wallLayer?"wkview":window.mvcur&&window.mvcur.mvShown?"videoview":cur.wallType?"feed"===cur.wallType?"news"===cur.section?`feed_${cur.subsection?cur.subsection:cur.section}`:"recommended"===cur.section?"feed_recommended"+("recent"!==cur.subsection?"_"+cur.subsection:""):(0,o.inArray)(cur.section,["friends","groups","videos","photos"])?"feed_"+(cur.subsection?"_"+cur.subsection:""):`feed_${cur.section}`:"top"===cur.wallType?"wall_top":"wall_"+(cur.onepost?"one":(cur.wallType||"").indexOf("full_")?"page":"full"):cur.module,share(e,t){if(void 0===t&&(t={}),vk.widget&&!vk.id)return window.Widgets.oauth();if((0,u.isObject)(window.cur)&&(0,u.isFunction)(cur.viewAsBox))return cur.viewAsBox();var i=(0,v.parseLikeObjectId)(e),n=i.objectType,r=i.objectId;(vk.widget?window.showBox:c.showBox)("like.php",f({act:"publish_box",object:e,from_widget:vk.widget?1:0},t),{onDone:(e,t)=>{t.unauth_action_box&&(e.hide(),m.UnauthActionBox.show(t.unauth_action_box))},stat:["page.js","page.css","wide_dd.js","wide_dd.css",window.jsc("web/sharebox.js")]}),"wall"===n&&window.Wall&&window.Wall.triggerAdPostStat(r,"share_post"),cur.RpcMethods&&(cur.RpcMethods.likeFullUpdate=t=>y.update(e,window.cleanObj(t)))},clientUpdate(e,t,i,r){var a=this._getButtonsByType(e,t);if(a.length){var o=(0,u.intval)((0,n.domData)(a[0],"count"))+i;this._updateDom(e,t,o,r),this.updateExternalIndex(e,{type:t,count:o,isActive:r})}},update(e,t){if(!isNaN(parseInt(t.like_num))){var i=(0,u.isUndefined)(t.like_my)?void 0:!!(0,u.intval)(t.like_my);this._updateDom(e,p.LikeButtonTypes.like,t.like_num,i,t.like_title),this.updateExternalIndex(e,{type:p.LikeButtonTypes.like,count:t.like_num,isActive:i})}if(!isNaN(parseInt(t.share_num))){var n=(0,u.isUndefined)(t.share_my)?void 0:!!(0,u.intval)(t.share_my);this._updateDom(e,p.LikeButtonTypes.share,t.share_num,n,t.share_title),this.updateExternalIndex(e,{type:p.LikeButtonTypes.share,count:t.share_num})}if((0,o.isNumeric)(t.views_num)&&this._updateDom(e,p.LikeButtonTypes.views,t.views_num,void 0,t.views_title),(0,o.isNumeric)(t.comment_num)&&this._updateDom(e,p.LikeButtonTypes.comment,t.comment_num),t[_.REACTIONS_COUNTS_RESPONSE_FIELD]){var r=!!t.isQueueUpdate;(0,w.triggerReactionsUpdate)(e,t[_.REACTIONS_COUNTS_RESPONSE_FIELD],void 0,{isQueueUpdate:r,isUserAction:!1,previewVisibility:h.previewVisibilityUseCurrent})}},updateComments(e,t){this.update(e,{comment_num:t})},_updateDom(e,t,i,r,a){var l=this._getButtonsByType(e,t),c=t===p.LikeButtonTypes.views;if(null==l?void 0:l.length){var _="";c?_=i:i>0&&(_=vk.widget?(0,o.formatCount)(i):(0,d.langNumeric)(i,"%s",!0)),c||(i=(0,u.intval)(i));for(var h=0;h<l.length;h++){var w=l[h];if(!(0,n.hasClass)(w,"no_counter")){var m,f=c?l[h]:(0,v.getElementLikeButtonCount)(l[h]);if((0,s.animateCount)(f,_,{str:"auto",noWrapWidth:!c,noSpaceIfEmpty:!0}),(0,n.toggleClass)(w,"empty",i<=0),"boolean"==typeof r&&(0,n.toggleClass)(w,"active",r),(0,n.attr)(l[h],"data-count",i),(0,k.updateAriaLabelCounter)(w,i,t),c)null==w||null==w.closest||null==(m=w.closest(".like_views"))||m.setAttribute("title",a||"");var y=l[h].tt;if(y){var b=(0,n.domByClass)(y.container,"_content"),g=(0,n.domByClass)(y.container,"_value"),L=(0,n.domByClass)(y.container,"_title"),T=(0,u.intval)((0,n.val)(g));(0,n.val)(g,i),a&&(0,n.val)(L,a),(0,u.isObject)(y)&&(y.likeInvalidated=!0),(T!==i&&T<7||!1===a)&&(t===p.LikeButtonTypes.like?w.needReinitLikesTT=!0:t===p.LikeButtonTypes.share&&(w.needReinitShareTT=!0)),t===p.LikeButtonTypes.like&&(0,n.toggleClass)(b,"me_hidden",!r),!1===a&&y.destroy&&y.destroy()}}}}},_getButtonsByType:(e,t)=>(0,n.domQuery)(`._like_${e} ._${t}, ._like_${e} [data-like-button-type="${t}"]`),showLikes(e,t,i){var r;if(void 0===i&&(i={}),e&&e instanceof HTMLElement&&!e.postDontShowLikes&&(!vk.widget||!vk.show_external_auth_box)){var s=i.views?{views:1}:i.share?{published:1}:{};i.listId&&(s.list=i.listId),i.like_hash&&(s.like_hash=i.like_hash),i.like_stats_params&&Object.assign(s,i.like_stats_params);var l=!!(0,n.geByClass1)("share",(0,n.gpeByClass)("like_wrap",e)),c=document.body,d=!1,p=getComputedStyle(e),_=(0,u.intval)(p.getPropertyValue("padding-left").replace("px","")),h=(0,u.intval)(p.getPropertyValue("padding-top").replace("px","")),w=(0,v.getElementLikeButtonIcon)(e),m=40;"wpost"===i.from&&(m=24);var k,f,b=[m-(0,n.getSize)(w)[0]/2-_,10-h],g=i.cl||"";if(i.share)g+="likes_tt_share";else if(g+="likes_tt_like","widget_community"===i.from)b[0]=6;else if("wcomments"===i.from||"widget_comments"===cur.wallType){b[0]=(0,n.getSize)(e)[0]+16-(0,n.getSize)(w)[0]/2-10}else"photo_carousel"===i.from&&(b[1]=10);if(!!(null==(r=i)?void 0:r.isFromReactionsPreview)){var L=e.querySelector("._ReactionsPreview__itemsContainer");if(L){var T=L.querySelector(".ReactionsPreviewItem"),S=(0,n.getXYRect)(T,!1),O=(S.width||0)/2,C=O;c=L,S.left+S.width/2>window.innerWidth/2&&(d=!0,C=L.offsetWidth-O),b[0]=-C+m}}i.share?(k="needReinitLikesTT",f="resetLikesTTTimer"):(k="needReinitShareTT",f="resetShareTTTimer"),clearTimeout(e[f]),(0,a.showTooltip)(e,{url:"/like.php",params:(0,o.extend)({act:"a_get_stats",object:t,has_share:l?1:""},s),appendEl:c,slide:15,shift:b,ajaxdt:i.fast?0:100,showdt:i.fast?0:400,hidedt:200,dir:"auto",checkLeft:!0,needLeft:d,reverseOffset:80,noZIndex:!0,hasover:!0,tip:{over:()=>{y.showLikes(e,t,i)}},typeClass:"like_tt",className:g,onHide:()=>{clearTimeout(e[f]),e[k]&&(e[f]=setTimeout((()=>{delete e[k],e.tt&&e.tt.destroy&&e.tt.destroy()}),200))}})}},showShare:function(e,t,i){y.showLikes(e,t,(0,o.extend)(i,{share:1}))},updateViews:(e,t)=>{vk.widget&&vk.show_external_auth_box||window.ajax.post("like.php",{act:"a_get_stats",object:e,views:1},{cache:1,onDone(t,i){var r=(0,n.ce)("div",{innerHTML:i});y._updateDom(e,p.LikeButtonTypes.views,t,void 0,r.innerText||r.textContent)}})},makeTemplate(e,t){if(!e)return"";(t=(0,o.extend)({buttons_prepend:"",object_raw:"",likes_count:"",liked:!1,share_count:"",shared:"",views_count:"",share_opts:{},like_opts:{},class_name:"",like_cont_class:"",like_class_name:"",[_.REACTIONS_COUNTS_RESPONSE_FIELD]:"",reactions_class_name:""},t)).like_active=t.liked?"active":"",t.share_active=t.shared?"active":"",t.comment_active="",t.likes_formatted_count=t.likes_count>0?(0,d.langNumeric)(t.likes_count,"%s",!0):"",t.share_formatted_count=t.share_count>0?(0,d.langNumeric)(t.share_count,"%s",!0):"",t.share_opts=this._convertOptsToString(t.share_opts),t.like_opts=this._convertOptsToString(t.like_opts),t.like_class_name+=t.likes_count>0?"":" empty",t.share_class_name=t.share_count>0?"":"empty";var i=t[_.REACTIONS_COUNTS_RESPONSE_FIELD],r=!!i&&Object.values(i).some((e=>!!e));return t.reactions_class_name+=r?"":" PostBottomAction--empty",(0,n.rs)(e,t)},_convertOptsToString:e=>JSON.stringify(e).replace(/\"/g,"'"),updateExternalIndex(e,t){void 0===t&&(t={});var i=(0,v.parseLikeObjectId)(e),n=i.objectType,r=i.objectId;switch(n){case"photo":if(!cur.pvShown||!cur.pvCurPhoto||cur.pvCurPhoto.id!==r)return;var a=cur.pvListId,o=cur.pvIndex,s=cur.pvData[a][o];t.type===p.LikeButtonTypes.like?(s.likes=t.count,s.liked=t.isActive,cur.pvCommsLikes[s.id][1]=t.count):t.type===p.LikeButtonTypes.share&&(s.shares=t.count);break;case"video":if(window.mvcur&&window.mvcur.mvShown&&window.mvcur.videoRaw===r&&t.type===p.LikeButtonTypes.like){var l=window.Videoview.getMvData();l.likes=t.count,void 0!==t.isActive&&(l.liked=t.isActive,window.Videoview.playerOnLiked(t.isActive),window.Videoview.recache())}break;case"clip":t.type===p.LikeButtonTypes.like&&window.Videoview.playerOnLiked(t.isActive)}},showLikesList(e,t){cur.viewAsBox||(0,n.hasClass)((0,n.gpeByClass)("like_btn",e),"no_counter")||(0,l.showWiki)({w:"likes/"+(0,o.clean)(t)},!1,!1,{queue:1})},showSharesList(e,t){cur.viewAsBox||(0,n.hasClass)((0,n.gpeByClass)("like_btn",e),"no_counter")||(0,l.showWiki)({w:"shares/"+(0,o.clean)(t)},!1,!1,{queue:1})}}},910460:(e,t,i)=>{i.r(t);var n=i(700069);window.Likes=n.Likes;try{window.stManager.done(window.jsc("web/likes.js"))}catch(e){}},465864:(e,t,i)=>{i.d(t,{parseLikeObjectId:()=>r,likePostObjectId:()=>a,likeReplyObjectId:()=>o,getElementLikeButtonCount:()=>s,getElementLikeButtonIcon:()=>l,getElementLikeButtonLabel:()=>u});var n=i(570655);function r(e){var t=e.match(/^([a-z_]+)([0-9\-_]+)$/);if(!t)return null;var i=(0,n.__read)(t,3);return{objectType:i[1],objectId:i[2]}}var a=function(e){return"wall"+e},o=function(e){return"wall_reply"+e},s=function(e){var t;return null!==(t=null==e?void 0:e.querySelector(".like_button_count, ._like_button_count"))&&void 0!==t?t:void 0},l=function(e){var t;return null!==(t=null==e?void 0:e.querySelector(".like_button_icon, ._like_button_icon"))&&void 0!==t?t:void 0},u=function(e){var t;return null!==(t=e.querySelector(".like_button_label, ._like_button_label"))&&void 0!==t?t:void 0}},325698:(e,t,i)=>{i.d(t,{LikeButtonTypes:()=>n});var n={like:"like",share:"share",views:"views",comment:"comment"}},908706:(e,t,i)=>{i.d(t,{isVariantInActionStatusBar:()=>r,isVariantHidden:()=>a,previewVisibilityUseCurrent:()=>o,isIntentPreviewInActionStatusBar:()=>s,isIntentPreviewHidden:()=>l,isIntentPreviewUseCurrent:()=>u,previewVisibilityIntentForVariant:()=>c,parsePreviewVariant:()=>d});var n=i(404608),r=function(e){return e===n.PreviewVariantActionStatusBar},a=function(e){return e===n.PreviewVariantHidden},o={kind:"useCurrent"},s=function(e){return e.kind===n.PreviewVariantActionStatusBar},l=function(e){return e.kind===n.PreviewVariantHidden},u=function(e){return"useCurrent"===e.kind},c=function(e){return e?{kind:e}:o},d=function(e){return n.PreviewVariants.includes(e)?e:void 0}},404608:(e,t,i)=>{i.d(t,{PreviewVariantActionStatusBar:()=>n,PreviewVariantHidden:()=>r,PreviewVariants:()=>a});var n="action_status_bar",r="hidden",a=[n,r]},95146:(e,t,i)=>{i.d(t,{SUPPORTED_OBJECT_TYPES:()=>n,SIZE_32:()=>r,SIZE_40:()=>a,SIZE_96:()=>o,SIZE_128:()=>s,REACTIONS_COUNTS_RESPONSE_FIELD:()=>l,WK_SECTION_PREFIX_REACTIONS:()=>u});var n={wall:"wall",wall_reply:"wall_reply"},r={width:32,height:32},a={width:40,height:40},o={width:96,height:96},s={width:128,height:128},l="reactions_counts",u="reactions"},665872:(e,t,i)=>{i.d(t,{reactionsCountsUpdatePayload:()=>a,isReactionsFullUpdatePayload:()=>o,reactionsCountsOnlyUpdatePayload:()=>s});var n=i(570655),r=i(571904),a=function(e,t){return(0,n.__assign)((0,n.__assign)({kind:r.PayloadKindFull},e),{reactionIdState:{reactionId:t.id}})},o=function(e){return e.kind===r.PayloadKindFull},s=function(e){return(0,n.__assign)({kind:r.PayloadKindCountsOnly},e)}},571904:(e,t,i)=>{i.d(t,{PayloadKindCountsOnly:()=>n,PayloadKindFull:()=>r});var n="counts_only",r="counts_with_current_reaction"},107337:(e,t,i)=>{i.d(t,{triggerReactionsUpdate:()=>s});var n=i(465864),r=i(95146),a=i(453580),o=i(665872),s=function(e,t,i,s){var l=(0,n.parseLikeObjectId)(e);l&&l.objectType===r.SUPPORTED_OBJECT_TYPES.wall&&l.objectId?(0,a.emitEvent)(a.WallDataEvents.post_reactions_counts_update,function(e,t,i,n){var r={counts:e,isFromWkLayer:null==t?void 0:t.isFromWkLayer,isPrimaryLikeButtonClick:null==t?void 0:t.isPrimaryLikeButtonClick,isQueueUpdate:null==t?void 0:t.isQueueUpdate,isUserAction:t.isUserAction,postFullId:i.objectId,previewVisibility:t.previewVisibility,reactionIdState:n?{reactionId:n.id}:void 0,suggestSubscribe:t.suggestSubscribe};return n?(0,o.reactionsCountsUpdatePayload)(r,n):(0,o.reactionsCountsOnlyUpdatePayload)(r)}(t,s,l,i)):l&&l.objectType===r.SUPPORTED_OBJECT_TYPES.wall_reply&&l.objectId?(0,a.emitEvent)(a.WallDataEvents.reply_reactions_counts_update,{counts:t,replyFullId:l.objectId,reactionIdState:i?{reactionId:i.id}:void 0}):console.warn("Unsupported reactions object update",e)}},453580:(e,t,i)=>{i.d(t,{WallDataEvents:()=>o,registerUniqueListener:()=>u,registerNonGlobalNonUniqueListener:()=>c,emitEvent:()=>d});var n=i(570655),r=i(480816),a=i(419223),o={post_reactions_counts_update:"wall/post_reactions_counts_update",reply_reactions_counts_update:"wall/reply_reactions_counts_update",post_subscribe_update:"wall/post_subscribe_update"},s=(0,a.makeSharedState)("wall-data",(function(){return{emitter:new r.default,keyedListeners:Object.create(null)}}),{version:0}),l=function(e,t,i){var r,a,o=s(),l=null===(a=null===(r=o.keyedListeners)||void 0===r?void 0:r[e])||void 0===a?void 0:a[t];return l&&o.emitter.removeListener(e,l),function(e,t,i){var r,a=s();return a.emitter.addListener(e,i),a.keyedListeners[e]=(0,n.__assign)((0,n.__assign)({},a.keyedListeners[e]),((r={})[t]=i,r)),function(){var n,r;a.emitter.removeListener(e,i),(null===(n=a.keyedListeners[e])||void 0===n?void 0:n[t])===i&&(null===(r=a.keyedListeners[e])||void 0===r||delete r[t])}}(e,t,i)},u=function(e,t,i){return l(t,e,i)},c=function(e,t){return function(e,t){var i=s();return i.emitter.addListener(e,t),function(){i.emitter.removeListener(e,t)}}(e,t)},d=function(e,t){s().emitter.emit(e,t)}},210277:(e,t,i)=>{i.d(t,{updateAriaLabelCounter:()=>a});var n=i(608021),r=i(325698),a=function(e,t,i){if("number"==typeof t&&e instanceof HTMLElement&&e.classList.contains("PostBottomAction")){var a=function(e){var t=void 0;switch(e){case r.LikeButtonTypes.comment:t=(0,n.getLang)("likes_comments_N_aria_short","raw");break;case r.LikeButtonTypes.like:t=(0,n.getLang)("likes_likes_N_aria_short","raw");break;case r.LikeButtonTypes.share:t=(0,n.getLang)("likes_shares_N_aria_short","raw")}return t}(i);if(a){var o=(0,n.langNumeric)(t,a,!1);e.setAttribute("aria-label",o)}}}}},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return o[e].call(i.exports,i,i.exports,l),i.exports}l.m=o,e=[],l.O=(t,i,n,r)=>{if(!i){var a=1/0;for(c=0;c<e.length;c++){for(var[i,n,r]=e[c],o=!0,s=0;s<i.length;s++)(!1&r||a>=r)&&Object.keys(l.O).every((e=>l.O[e](i[s])))?i.splice(s--,1):(o=!1,r<a&&(a=r));if(o){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,n,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);l.r(r);var a={};t=t||[null,i({}),i([]),i(i)];for(var o=2&n&&e;"object"==typeof o&&!~t.indexOf(o);o=i(o))Object.getOwnPropertyNames(o).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,l.d(r,a),r},l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,i)=>(l.f[i](e,t),t)),[])),l.u=e=>9375===e?"voice_message_player.d1a99d2fb03dee0b5b9e.js":28762===e?"speech.ab96ba6be98edbced9d1.js":57468===e?"SilentModeForms.72ae7e7ab3113aba80ce.js":75980===e?"menu_settings.0f17151bd588fe6a5267.js":void 0,l.miniCssF=e=>e+"."+{57468:"e8ff075aa833e1ee9a17",75980:"3a98749ca45868f84306"}[e]+".css",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},l.l=(e,t,i,r)=>{if(n[e])n[e].push(t);else{var a,o;if(void 0!==i)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var c=s[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")=="vk:"+i){a=c;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack","vk:"+i),a.src=e),n[e]=[t];var d=(t,i)=>{a.onerror=a.onload=null,clearTimeout(v);var r=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((e=>e(i))),t)return t(i)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),o&&document.head.appendChild(a)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/dist/",r=e=>new Promise(((t,i)=>{var n=l.miniCssF(e),r=l.p+n;if(((e,t)=>{for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var r=(o=i[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var o;if((r=(o=a[n]).getAttribute("data-href"))===e||r===t)return o}})(n,r))return t();((e,t,i,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=a=>{if(r.onerror=r.onload=null,"load"===a.type)i();else{var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=s,r.parentNode.removeChild(r),n(l)}},r.href=t,document.head.appendChild(r)})(e,r,t,i)})),a={22568:0},l.f.miniCss=(e,t)=>{a[e]?t.push(a[e]):0!==a[e]&&{57468:1,75980:1}[e]&&t.push(a[e]=r(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))},(()=>{var e={22568:0};l.f.j=(t,i)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else if(75980!=t){var r=new Promise(((i,r)=>n=e[t]=[i,r]));i.push(n[2]=r);var a=l.p+l.u(t),o=new Error;l.l(a,(i=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,n[1](o)}}),"chunk-"+t,t)}else e[t]=0},l.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[a,o,s]=i,u=0;for(n in o)l.o(o,n)&&(l.m[n]=o[n]);if(s)var c=s(l);for(t&&t(i);u<a.length;u++)r=a[u],l.o(e,r)&&e[r]&&e[r][0](),e[a[u]]=0;return l.O(c)},i=self.webpackChunkvk=self.webpackChunkvk||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var u=l.O(void 0,[76429,75514,24509,56990,98066,76400,40885,68592],(()=>l(910460)));u=l.O(u)})();