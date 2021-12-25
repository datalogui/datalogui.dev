"use strict";(self.webpackChunkdatalogui_dev=self.webpackChunkdatalogui_dev||[]).push([[885],{453:function(t,e,n){var r=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},i=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},o=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(i(arguments[e]));return t},a=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0});var u=n(9173);e.Unconstrained=Symbol("Unconstrained");function s(t,e,n){if(void 0===n&&(n=0),t.length-n<=0||!e(t[n]))return n;for(var r=1;n+r<t.length&&e(t[n+r]);)n+=r,r<<=1;for(r>>=1;r>0;)n+r<t.length&&e(t[n+r])&&(n+=r),r>>=1;return n+1}function c(t){return"\n"+t.map((function(t){return(y(t)?"RETRACTION":"")+JSON.stringify(t.map((function(t){return t===e.Unconstrained?"\xbf\xbf":t})))})).join("\n").toString()}e.gallop=s,e.sortTuple=function(t,n){if(t===e.Unconstrained||n===e.Unconstrained)return 0;if("object"!=typeof t&&"object"!=typeof n)return t<n?-1:t===n?0:1;if(t.length!=n.length)throw new Error("Can't sort different sized tuples. Tuples are not the same length");for(var r=0;r<t.length;r++){var i=t[r],o=n[r];if(i!==e.Unconstrained&&o!==e.Unconstrained&&i!==o)return Array.isArray(i)?e.sortTuple(i,o):i<o?-1:1}return 0};var l=function(){function t(t,n,r,i,o,a){void 0===a&&(a=!1),this.startIdx=0,this.endIdx=0,this.__cachedKeyLen=0,this.keyFunc=t,this.outputKeys=r,this.relation=i,this.isAnti=a;var u=o.slice(n).reduce((function(t,e,n){return t[n]=r.indexOf(e),t}),{});this.outputTupleFunc=function(t){var n=new Array(r.length);return n.fill(e.Unconstrained),t.map((function(t,e){u[e]>-1&&(n[u[e]]=t)})),n}}return t.prototype.toString=function(){var t=this;return"\n"+JSON.stringify(this.relation.keyOrdering)+"\n"+JSON.stringify(this.outputKeys)+"\nisAnti:"+this.isAnti+":\n"+c(this.relation.elements.map((function(e){return t._reshape(e,t.__cachedKeyLen)})))+"\n"},t.prototype.count=function(t,n){var r=this.keyFunc(t);if(this.__cachedKeyLen=r.length,0===this.relation.elements.length)return 0;if(1===e.sortTuple(this.relation.elements[0].slice(0,r.length),r)?this.startIdx=this.relation.elements.length:this.startIdx=s(this.relation.elements,(function(t){return-1===e.sortTuple(t.slice(0,r.length),r)})),this.startIdx===this.relation.elements.length)return this.endIdx=this.startIdx,this.isAnti?1e12:0;this.endIdx=s(this.relation.elements,(function(t){return 0===e.sortTuple(t.slice(0,r.length),r)}),this.startIdx);var i=this.endIdx-this.startIdx;return this.isAnti?n&&i>0?0:1e12:i},t.prototype.isRetraction=function(t){return y(t)},t.prototype._reshape=function(t,e){var n=this.outputTupleFunc(t.slice(e));return this.isRetraction(t)&&(n[p]={isRetraction:!0}),n},t.prototype.propose=function(t){var e=this,n=this.keyFunc(t).length;if(this.isAnti)throw new Error("Antis shouldn't propose");return this.relation.elements.slice(this.startIdx,this.endIdx).map((function(t){return e._reshape(t,n)}))},t.prototype.intersect=function(t,n){var r=this,i=this.keyFunc(t).length;for(var a=this.startIdx,u=[],c=0,l=function(){var t=n[c],l=y(t),h=f._reshape(f.relation.elements[a],i),d=y(h),p=e.sortTuple(h,t);if(p>0)return h.some((function(t){return t===e.Unconstrained}))&&(a=f.startIdx),f.isAnti&&u.push(t),c++,"continue";var v=0===p;if(v&&f.isAnti)return c++,h.some((function(t){return t===e.Unconstrained}))&&(a=f.startIdx),"continue";if(!v)return a=s(f.relation.elements,(function(n){var o=r._reshape(n,i);return-1===e.sortTuple(o,t)}),a),"continue";if(a++,v&&!f.isAnti){var b=null;if(t.forEach((function(n,r){n===e.Unconstrained&&h[r]!==e.Unconstrained&&(null==b&&(b=o(t)),b[r]=h[r])})),b)return(l||d)&&m(b,!0),u.push(b),a===f.endIdx&&h.some((function(t){return t===e.Unconstrained}))&&(c++,a=f.startIdx),"continue";u.push(t)}c++},f=this;c<n.length&&a<this.endIdx;)l();if(this.isAnti)for(var h=c;h<n.length;h++)u.push(n[h]);return u},t}();function f(t){if(0===t.length)return[];if(1===t.length)return t[0];var e=new Set([]);return t.forEach((function(t){t.forEach((function(t){return e.add(t)}))})),o(e)}function h(t,e){var n=new Set(t);return e.filter((function(t){return n.has(t)}))}function d(t,e,n){var r,i,o,u;if(0!==e.length)if(e.every((function(t){return t.isAnti})))t.elements.forEach((function(t){if(!e.some((function(e){return 0===e.count(t,!0)}))){var r=y(t);n(t,[],r)}}));else try{for(var s=a(t.elements),c=s.next();!c.done;c=s.next()){for(var l=c.value,f=1/0,h=1/0,d=0;d<e.length;d++){(v=e[d]).count||console.warn("!!!!! - No leapers!",v);var p=v.count(l);0,p<h&&(h=p,f=d)}if(h>0){var m=e[f].propose(l);0;for(d=0;d<e.length;d++){var v;if(d!==f)m=(v=e[d]).intersect(l,m)}var b=y(l);try{for(var g=(o=void 0,a(m)),w=g.next();!w.done;w=g.next()){var A=w.value,x=y(A);n(l,A,b||x||!1)}}catch(S){o={error:S}}finally{try{w&&!w.done&&(u=g.return)&&u.call(g)}finally{if(o)throw o.error}}}}}catch(O){r={error:O}}finally{try{c&&!c.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}else t.elements.forEach((function(t){var e=y(t);n(t,[],e)}))}e.ExtendWithUnconstrained=l,e.joinKeyOrdering=f,e.filterKeys=h,e.leapJoinHelper=d;var p=Symbol("meta");function y(t){var e;return!!(null===(e=t[p])||void 0===e?void 0:e.isRetraction)}function m(t,e){t[p]={isRetraction:e}}var v=function(){function t(t,e){this.elements=t,this.keyOrdering=e}return t.prototype.toString=function(){return this.elements.map((function(t){return(y(t)?"RETRACTION:":"")+JSON.stringify(t)})).join("\n")},t.prototype.clone=function(){return new t(o(this.elements),o(this.keyOrdering))},t.prototype.dedup=function(){!function(t,e){for(var n=1,r=1;r<t.length;r++){var i=t[r];e(i,t[n-1])||(r!==n&&(t[r]=t[n],t[n]=i),n++)}t.splice(n)}(this.elements,(function(t,n){return 0===e.sortTuple(t,n)}))},t.prototype.indexBy=function(n){var r=this.keyOrdering.reduce((function(t,e,n){return t[e]=n,t}),{}),i=this.elements.map((function(t){var e=n.map((function(e){return t[r[e]]}));return y(t)&&m(e,!0),e}));return i.sort((function(t,n){return e.sortTuple(t,n)})),new t(i,n)},t.prototype.filterElements=function(n,r){var i=this;return void 0===r&&(r=!1),function(t){if(t===e.EmptyObj)return!0;for(var n in t)if(t.hasOwnProperty(n))return!1;return!0}(n)?this:new t(this.elements.filter((function(t){return t.every((function(t,e){var o=n[i.keyOrdering[e]];if(void 0!==o){var a=t===o;return r?!a:a}return!0}))})),this.keyOrdering)},t.prototype.assert=function(t){this.insertRow(this.keyOrdering.map((function(e){return t[e]})))},t.prototype.retract=function(t){var e=this.keyOrdering.map((function(e){return t[e]}));e[p]={isRetraction:!0},this.insertRow(e,!0)},t.prototype.insertRow=function(t,n){void 0===n&&(n=!1);var r=s(this.elements,(function(n){return-1===e.sortTuple(n,t)})),i=this.elements[r];if(n){if(i&&!y(i)&&0===e.sortTuple(i,t))return void this.elements.splice(r,1)}else if(i&&y(i)&&0===e.sortTuple(i,t))return void this.elements.splice(r,1);this.elements.splice(r,0,t)},t}();e.RelationIndex=v;var b=function(){function t(){this.relations=[],this.relations=[]}return t.prototype.toString=function(){var t;return this.relations[0]?"["+(null===(t=this.relations[0])||void 0===t?void 0:t.elements.map((function(t){return y(t)?"RETRACTION: "+JSON.stringify(t):JSON.stringify(t)})).join(", "))+"]":""},t.prototype.dedup=function(){this.relations.forEach((function(t){return t.dedup()}))},Object.defineProperty(t.prototype,"length",{get:function(){return 0===this.relations.length?0:this.relations[0].elements.length},enumerable:!0,configurable:!0}),t.prototype.clone=function(){var e=new t;return e.relations=this.relations.map((function(t){return t.clone()})),e},t.prototype.merge=function(t){var e=this,n=t.keys();t.relations[0].elements.forEach((function(t){var r=y(t),i=n.reduce((function(e,n,r){return e[n]=t[r],e}),{});r?e.retract(i):e.assert(i)}))},t.prototype.createInitialRelation=function(t,e){void 0===e&&(e=!1);var n=Object.entries(t),r=n.map((function(t){return i(t,1)[0]})),o=n.map((function(t){return i(t,2)[1]}));e&&(o[p]={isRetraction:!0});var a=new v([o],r);this.relations.push(a)},t.prototype.assert=function(t){0!==this.relations.length?this.relations.forEach((function(e){return e.assert(t)})):this.createInitialRelation(t)},t.prototype.retract=function(t){0!==this.relations.length?this.relations.forEach((function(e){return e.retract(t)})):this.createInitialRelation(t,!0)},t.prototype._isIndexedByK=function(t){return this.relations.findIndex((function(e){return e.keyOrdering[0]===t}))},t.prototype._isIndexedBy=function(t){return this.relations.findIndex((function(e){return e.keyOrdering.every((function(e,n){return e===t[n]}))}))},t.prototype.isIndexedByK=function(t){return this._isIndexedByK(t)},t.prototype.isIndexedBy=function(t){return this._isIndexedBy(t)},t.prototype.keys=function(){return this.relations[0].keyOrdering},t.prototype.indexByK=function(t){if(0===this.relations.length){console.warn("No Data to index by");var e=new v([],[t]);return this.relations.push(e),e}var n=this._isIndexedByK(t);if(-1!==n)return this.relations[n];var r=this.keys(),i=o([t],r.filter((function(e){return e!==t}))),a=this.relations[0].indexBy(i);return this.relations.push(a),a},t.prototype.indexBy=function(t){if(0===this.relations.length)return new v([],t);var e=this._isIndexedBy(t);if(-1!==e)return this.relations[e];var n=this.relations[0].indexBy(t);return this.relations.push(n),n},t}();e.Relation=b,e.Added=Symbol("DatumAdded"),e.Removed=Symbol("DatumRemoved"),e.Modified=Symbol("DatumModified");var g=function(){function t(){this.stable=new b,this.recent=new b,this.toAdd=[],this._recentChanges=[],this._subscribers=[],this.meta={isAnti:!1},this.counts=new Map,this.name="",this.lastReadAllData=null}return t.prototype.setName=function(t){this.name=t},t.prototype.toString=function(){return"\nVariable "+this.name+":\n    Counts: "+JSON.stringify(o(this.counts))+"\n    Stable: "+this.stable.toString()+"\n    Recent: "+this.recent.toString()+"\n    ToAdd: "+this.toAdd.map((function(t){return t.toString()}))+"\n\n"},t.prototype.clone=function(){var e=new t;return e.stable=this.stable.clone(),e.recent=this.recent.clone(),e.toAdd=this.toAdd.map((function(t){return t.clone()})),e.counts=new Map(o(this.counts)),e},t.prototype.isEmpty=function(){return 0===this.stable.length&&0===this.recent.length&&0===this.toAdd.length},t.prototype.cloneAndTrack=function(){var t=this.clone();return this.onAssert((function(e,n){return n?t.retract(e):t.assert(e)})),t},t.prototype.keys=function(){if(this.stable.length)return this.stable.keys();if(this.recent.length)return this.recent.keys();if(this.toAdd.length&&this.toAdd[0].length)return this.toAdd[0].keys();throw new Error("Relation doesn't have any data. Can't infer schema")},t.prototype.recentData=function(){var t=this;return this.changed()?this.recent.relations[0].elements.map((function(n){var r=k(n.map((function(e,n){return[t.recent.relations[0].keyOrdering[n],e]})));return{kind:y(n)?e.Removed:e.Added,datum:r}})):null},t.prototype.readAllData=function(){var t=this;if(!this.changed()&&null!==this.lastReadAllData)return this.lastReadAllData;for(;this.changed(););return this.stable.relations[0]?(this.lastReadAllData=this.stable.relations[0].elements.filter((function(t){return!y(t)})).map((function(e){return k(e.map((function(e,n){return[t.stable.relations[0].keyOrdering[n],e]})))})),this.lastReadAllData):[]},t.prototype._remapKeys=function(e){var n=new t;return n.stable=this.stable,n.recent=this.recent,n.toAdd=this.toAdd,n},t.prototype.assert=function(t){0===this.toAdd.length&&this.toAdd.push(new b),1===this.updateCount(t,!0)&&(this.toAdd[0].assert(t),this._subscribers.forEach((function(e){return e(t,!1)})))},t.prototype.retract=function(t){0===this.toAdd.length&&this.toAdd.push(new b),0===this.updateCount(t,!1)&&(this.toAdd[0].retract(t),this._subscribers.forEach((function(e){return e(t,!0)})))},t.prototype.updateCount=function(t,e){var n,r=Object.entries(t).sort((function(t,e){var n=i(t,1)[0],r=i(e,1)[0];return n===r?0:n<r?-1:1})),o=JSON.stringify(r),a=(null!==(n=this.counts.get(o))&&void 0!==n?n:0)+(e?1:-1);return this.counts.set(o,a),a},t.prototype.getCount=function(t){var e,n=Object.entries(t).sort((function(t,e){var n=i(t,1)[0],r=i(e,1)[0];return n===r?0:n<r?-1:1})),r=JSON.stringify(n);return null!==(e=this.counts.get(r))&&void 0!==e?e:0},t.prototype.onAssert=function(t){this._subscribers.push(t)},t.prototype.removeOnAssert=function(t){this._subscribers=this._subscribers.filter((function(e){return t!==e}))},t.prototype.onChange=function(t){var e=this,n=function(e,n){t()};return this.recent.length||t(),this.onAssert(n),function(){e.removeOnAssert(n)}},t.prototype.onNewDatum=function(t){var n=this,r=function(n,r){t({kind:r?e.Removed:e.Added,datum:n})};return this.onAssert(r),function(){n.removeOnAssert(r)}},t.prototype.changed=function(){if(this.recent.length>0){var t=this.recent;this.recent=new b,0===this.stable.relations.length?this.stable=t:this.stable.merge(t)}if(this.toAdd.length>0){for(var n=function(t){var n=r.toAdd[t];if(0===r.stable.relations.length)return n.dedup(),r.recent=n,"continue";var i,o=-1,a=r.stable.relations.findIndex((function(t){return o=n.isIndexedBy(t.keyOrdering)})),u=void 0;if(-1!==a&&-1!==o?(i=r.stable.relations[a],u=n.relations[o]):(i=r.stable.indexBy(r.stable.keys()),u=n.indexBy(r.stable.keys())),void 0===u||void 0===i)throw new Error("Shouldn't happen");u.elements=u.elements.filter((function(t){var n=s(i.elements,(function(n){return e.sortTuple(n,t)<0}));return!(n<i.elements.length&&0===e.sortTuple(i.elements[n],t))||!!y(t)}))},r=this,i=0;i<this.toAdd.length;i++)n(i);for(var o=this.toAdd.pop();o&&this.toAdd.length>0;)o.merge(this.toAdd.pop());o&&(this.recent=o)}return!!this.recent.length},t}();function w(t,e){return t.map((function(t){return t in e?e[t]:t}))}function A(t,e){return w(t,Object.entries(e).map((function(t){var e=i(t,2),n=e[0];return[e[1],n]})).reduce((function(t,e){var n=i(e,2),r=n[0],o=n[1];return t[r]=o,t}),{}))}function x(t,e,n,r){for(void 0===r&&(r=[]);e.some((function(t){return t.changed()}));)S(t,e,n,r,!1)}function S(t,n,r,i,o){if(void 0===i&&(i=[]),n[0].meta.isAnti)throw new Error("First Table in Query cannot be an anti (.not) query.");2===n.length&&n[1].meta.isAnti;var a=Object.values(r[0]),u=f(n.map((function(t,e){return Object.values(r[e])}))),s=u.slice(a.length),c=r.slice(1).map((function(t,e){return h(Object.values(t),u)}));var p=c.map((function(t){return new Set(t)})),y=p.map((function(t){return a.filter((function(e){return t.has(e)})).length})),m=Math.pow(2,n.length)-1,v=0;for(o&&(v=(m+=1)-1);v<m;){if(n.some((function(t,e){return v>>e&1?0===t.stable.relations.length:0===t.recent.relations.length})))v++;else{0;var b=n.map((function(t,o){var u=v>>o&1?t.stable:t.recent;if(0!==o){var f=c[o-1],h=p[o-1],d=y[o-1],m=u.indexBy(A(f,r[o]));return void 0!==i[o]&&i[o]!==e.EmptyObj&&(m=m.filterElements(i[o])),new l((function(t){return t.filter((function(t,e){return h.has(a[e])}))}),d,s,m,f,n[o].meta.isAnti)}var b=u.indexBy(A(a,r[o]));return void 0!==i[o]&&i[o]!==e.EmptyObj&&(b=b.filterElements(i[o])),b}));d(b[0],b.slice(1),(function(e,n,r){var i={};a.reduce((function(t,n,r){return _(n)||(t[n]=e[r]),t}),i),s.reduce((function(t,e,r){return _(e)||(t[e]=n[r]),t}),i),t(i,r)})),v++}}}e.Variable=g,e.remapKeys=w,e.reverseRemapKeys=A,e.variableJoinHelper=x,e.variableJoinHelperGen=function(t,e,n){var i,o,u,s,c,l;return void 0===n&&(n=[]),r(this,(function(r){switch(r.label){case 0:i=[],x((function(t){return i.push(t)}),t,e,n),r.label=1;case 1:r.trys.push([1,6,7,8]),o=a(i),u=o.next(),r.label=2;case 2:return u.done?[3,5]:[4,u.value];case 3:r.sent(),r.label=4;case 4:return u=o.next(),[3,2];case 5:return[3,8];case 6:return s=r.sent(),c={error:s},[3,8];case 7:try{u&&!u.done&&(l=o.return)&&l.call(o)}finally{if(c)throw c.error}return[7];case 8:return[2]}}))},e.innerVariableJoinHelper=S;var O=function(){function t(){this.implicationState=null,this.variables=[],this.remapKeys=[],this.constants=[],this.antiVariablesIndices=new Set}return t.prototype.addVariable=function(t,e,n){this.variables.push(t),this.remapKeys.push(e),this.constants.push(n)},t}();function k(t){var n,r,o=!1,u={};try{for(var s=a(t),c=s.next();!c.done;c=s.next()){var l=i(c.value,2),f=l[0],h=l[1];o=!0,u[f]=h}}catch(d){n={error:d}}finally{try{c&&!c.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}return o?u:e.EmptyObj}var D=new O,V=D;function T(t){return"___"+t+Math.random().toString(36).substring(2,10)}function _(t){return t.startsWith("___")}function E(t,e,n){var r=t||new g,o=function(t){if(V.implicationState){var e=t;V.implicationState.isRetraction?r.retract(e):r.assert(e)}else{var o=k(Object.entries(t).filter((function(t){var e=i(t,2),n=(e[0],e[1]);return"object"!=typeof n||!n||!("ns"in n)||n.ns!==j}))),a=n?Object.keys(n):r.keys(),u=k(Object.entries(t).map((function(t){var e=i(t,2),n=e[0],r=e[1];return"object"==typeof r&&r&&"ns"in r&&r.ns===j?[n,r.k]:[n,T(n)]})));a.forEach((function(t){t in u||(u[t]=T(t))})),V.addVariable(r,u,o)}};return o.not=function(t){o(t),V.antiVariablesIndices.add(V.variables.length-1)},o._innerVar=r,e||(o.assert=function(t){var e;(null===(e=V.implicationState)||void 0===e?void 0:e.isRetraction)?r.retract(t):r.assert(t)},o.retract=function(t){var e;(null===(e=V.implicationState)||void 0===e?void 0:e.isRetraction)?r.assert(t):r.retract(t)}),o.view=function(){var t=r.cloneAndTrack(),e=function(){var t=r.cloneAndTrack();return t.copy=e,t};return t.copy=e,t},o.viewExt=function(){return new u.Impl(o.view())},o.toString=function(){return r.toString()},o}e.newTable=function(t){return E(void 0,!1,t)},e.StringType={typeName:"string",validate:function(t){return"string"==typeof t}},e.NumberType={typeName:"number",validate:function(t){return"number"==typeof t}},e.BoolType={typeName:"boolean",validate:function(t){return"boolean"==typeof t}},e.ObjectType={typeName:"object",validate:function(t){return"object"==typeof t}},e.ArrayType={typeName:"object",validate:function(t){return Array.isArray(t)}},e._newTable=E;var j=Symbol("FreeVariable"),I=new Proxy({},{get:function(t,e){return{ns:j,k:e}}});e.EmptyObj={},e.query=function(t){V=new O,t(I);var n=V;V=new O;var r=[[]],o=new Set(Object.values(n.remapKeys[0])),a=n.variables.map((function(t,e){var r=t.cloneAndTrack();if(n.antiVariablesIndices.has(e))for(r.meta.isAnti=!0,r.onAssert((function(){for(;r.changed(););}));r.changed(););return r}));n.remapKeys.forEach((function(t,e){if(0===e)return r[0]=[[a[0]],[t],[n.constants[0]]];var i=r[r.length-1],u=Object.values(t);if(u.some((function(t){return o.has(t)})))i[0].push(a[e]),i[1].push(n.remapKeys[e]),i[2].push(n.constants[e]),u.forEach((function(t){o.add(t)}));else{o=new Set(u);var s=[[a[e]],[n.remapKeys[e]],[n.constants[e]]];r.push(s)}}));var u=r.map((function(t){var e=i(t,3),n=e[0],r=e[1],o=e[2],a=new g;return[a,function(){x((function(t,e){e?a.retract(t):a.assert(t)}),n,r,o)}]})),s=new g,c=function(t,e){e?s.retract(t):s.assert(t)},l=u.map((function(t){return i(t,1)[0]})),f=u.map((function(){return e.EmptyObj})),h=[];a.forEach((function(t){t.onAssert((function(){h.forEach((function(t){return t()}))}))}));var d=function(t,n,r){new g;var i=E(t,!0);return i.runQuery=n,i.implies=function(t){var r,o=i.view(),a=new O,u=function(r){var i=r.kind,o=r.datum;if(V=a,i===e.Added)V.implicationState={isRetraction:!1},t(o,i);else{if(i!==e.Removed)throw new Error("Unhandle modification ??");V.implicationState={isRetraction:!0},t(o,i)}V=D,n()};return o.onChange((function(){var t;null===(t=o.recentData())||void 0===t||t.map(u)})),null===(r=o.recentData())||void 0===r||r.map(u),i},i.onDependencyChange=r,i}(s,(function(){if(u.forEach((function(t){var e=i(t,2);e[0];(0,e[1])()})),!u.some((function(t){return i(t,1)[0].isEmpty()}))){var t=u.map((function(t){var e=i(t,2),n=e[0];e[1];return k(n.keys().map((function(t){return[t,t]})))}));x(c,l,t,f)}}),(function(t){return h.push(t),function(){h=h.filter((function(e){return e!==t}))}}));return d.runQuery(),d.queryVariables=a,s.setName("Query"),d.toString=function(){return s.toString()},d},e.intoTable=function(t){var e,n,r=E(void 0,!1,void 0);try{for(var i=a(t),o=i.next();!o.done;o=i.next()){var u=o.value;r.assert(u)}}catch(s){e={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}},6913:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(453);e.Added=r.Added,e.ArrayType=r.ArrayType,e.BoolType=r.BoolType,e.Modified=r.Modified,e.NumberType=r.NumberType,e.ObjectType=r.ObjectType,e.Removed=r.Removed,e.StringType=r.StringType,e.intoTable=r.intoTable,e.newTable=r.newTable,e.query=r.query;var i=n(9173);e.Impl=i.Impl,e.IndexedImpl=i.IndexedImpl,e.SingleItemView=i.SingleItemView},9173:function(t,e,n){var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(453)),o=function(){function t(t){this.subscribers=[],this.newDatumSubscribers=[],this.modifiedSinceLastPolled=!0,this.currentVal=t,this.lastValSincePoll=null}return t.prototype.copy=function(){var e=new t(this.currentVal);return e.lastValSincePoll=this.lastValSincePoll,e},t.prototype._setValue=function(t){var e=this;this.modifiedSinceLastPolled=!0,this.currentVal=t,this.newDatumSubscribers.forEach((function(n){return n({kind:i.Modified,datum:t,oldDatum:e.lastValSincePoll})})),this.subscribers.map((function(t){return t()}))},t.prototype.recentData=function(){var t=this.lastValSincePoll,e=this.modifiedSinceLastPolled;return this.modifiedSinceLastPolled=!1,this.lastValSincePoll=this.currentVal,null===t?[{kind:i.Added,datum:this.currentVal}]:e?[{kind:i.Modified,datum:this.currentVal,oldDatum:t}]:null},t.prototype.readAllData=function(){return this.modifiedSinceLastPolled=!1,this.lastValSincePoll=this.currentVal,[this.currentVal]},t.prototype.onChange=function(t){var e=this;return this.subscribers.push(t),this.modifiedSinceLastPolled&&t(),function(){return e.subscribers=e.subscribers.filter((function(e){return e!==t}))}},t.prototype.onNewDatum=function(t){var e=this;return this.newDatumSubscribers.push(t),function(){return e.newDatumSubscribers=e.newDatumSubscribers.filter((function(e){return e!==t}))}},t}();e.SingleItemView=o;var a=function(){function t(t,e){var n=this;this.changes=[],this.subscribers=[],this.newDatumSubscribers=[],this.innerView=t,this.mapFn=e,this.changes=this.innerView.readAllData().map((function(t){return{kind:i.Added,datum:{index:t.index,datum:e(t.datum)}}}));var r=function(t){var r=[];switch(t.kind){case i.Added:r.push({kind:i.Added,datum:{index:t.datum.index,datum:e(t.datum.datum)}});break;case i.Removed:r.push({kind:i.Removed,datum:{index:t.datum.index,datum:e(t.datum.datum)}});break;case i.Modified:r.push({kind:i.Modified,datum:{index:t.datum.index,datum:e(t.datum.datum)},oldDatum:{index:t.oldDatum.index,datum:e(t.oldDatum.datum)}})}n.changes=n.changes.concat(r),n.newDatumSubscribers.forEach((function(t){r.forEach((function(e){return t(e)}))})),n.subscribers.forEach((function(t){t()}))};this.innerView.onChange((function(){var t=n.innerView.recentData();null==t||t.map(r)}))}return t.prototype.recentData=function(){if(this.changes.length>0){var t=this.changes;return this.changes=[],t}return null},t.prototype.readAllData=function(){var t=this;return this.changes=[],this.innerView.readAllData().map((function(e){var n=e.index,r=e.datum;return{index:n,datum:t.mapFn(r)}}))},t.prototype.onChange=function(t){var e=this;return this.subscribers.push(t),function(){e.subscribers=e.subscribers.filter((function(e){return e!==t}))}},t.prototype.onNewDatum=function(t){var e=this;return this.newDatumSubscribers.push(t),function(){e.newDatumSubscribers=e.newDatumSubscribers.filter((function(t){}))}},t.prototype.copy=function(){return new t(this.innerView,this.mapFn)},t}(),u=function(){function t(t,e){var n=this;this.sorted=[],this.changes=[],this.subscribers=[],this.newDatumSubscribers=[],this.innerView=t,this.sorted=this.innerView.readAllData().sort(e),this.changes=this.sorted.map((function(t,e){return{kind:i.Added,datum:{index:e,datum:t}}})),this.sortFn=e;var r=function(t){var r=t.kind,o=t.datum,a=[];if(0===n.sorted.length){if(r!==i.Added)throw new Error("Unexpected! We don't have anything to remove or modify");return n.changes.push({kind:i.Added,datum:{index:0,datum:o}}),void n.sorted.push(o)}switch(r){case i.Added:var u=i.gallop(n.sorted,(function(t){return-1===e(t,o)}));n.sorted.splice(u,0,o),a.push({kind:i.Added,datum:{index:u,datum:o}});break;case i.Removed:var s=i.gallop(n.sorted,(function(t){return-1===e(t,o)}));if(0!==i.sortTuple(n.sorted[s],o))throw new Error("Tried to remove a value that doesn't exist!!");n.sorted.splice(s,1),a.push({kind:i.Removed,datum:{index:s,datum:o}});break;case i.Modified:throw new Error("Not implemented! \u2013 Modification datum on indexed View")}n.changes=n.changes.concat(a),n.newDatumSubscribers.forEach((function(t){a.forEach((function(e){return t(e)}))})),n.subscribers.forEach((function(t){t()}))};this.innerView.onChange((function(){var t=n.innerView.recentData();null==t||t.map(r)}))}return t.prototype.recentData=function(){if(this.changes.length>0){var t=this.changes;return this.changes=[],t}return null},t.prototype.readAllData=function(){return this.changes=[],this.sorted.map((function(t,e){return{index:e,datum:t}}))},t.prototype.onChange=function(t){var e=this;return this.subscribers.push(t),function(){e.subscribers=e.subscribers.filter((function(e){return e!==t}))}},t.prototype.onNewDatum=function(t){var e=this;return this.newDatumSubscribers.push(t),function(){e.newDatumSubscribers=e.newDatumSubscribers.filter((function(t){}))}},t.prototype.copy=function(){return new t(this.innerView,this.sortFn)},t}(),s=function(){function t(t){this.innerView=t}return t.prototype.recentData=function(){return this.innerView.recentData()},t.prototype.readAllData=function(){return this.innerView.readAllData()},t.prototype.copy=function(){return this.innerView.copy()},t.prototype.onChange=function(t){return this.innerView.onChange(t)},t.prototype.onNewDatum=function(t){return this.innerView.onNewDatum(t)},t.prototype.map=function(e){var n=this,r=i._newTable(),o=function(t){var n=t.kind,o=t.datum;n===i.Added?r.assert(e(o)):r.retract(e(o))};return this.innerView.onChange((function(){var t;null===(t=n.innerView.recentData())||void 0===t||t.map(o)})),new t(r.view())},t.prototype.mapEffect=function(t){var e=this,n=new o({}),r=function(e){t(e)};return this.innerView.onChange((function(){var t;null===(t=e.innerView.recentData())||void 0===t||t.map(r),n._setValue({})})),n._setValue({}),n},t.prototype.reduce=function(e,n){var r=this,i=new o(n),a=function(t){var n=i.currentVal,r=e(i.currentVal,t);n!==r&&i._setValue(r)};return this.innerView.onChange((function(){var t;null===(t=r.innerView.recentData())||void 0===t||t.map(a)})),new t(i)},t.prototype.sortBy=function(t){return new c(new u(this.innerView,t))},t.prototype.orderBy=function(t,e){void 0===e&&(e=!0);return this.sortBy((function(n,r){var i=n[t],o=r[t];return(i<o?-1:i>o?1:0)*(e?1:-1)}))},t}();e.Impl=s;var c=function(){function t(t){this.filters={},this.innerView=new s(t)}return t.prototype.take=function(t){var e=this.copy();return e.filters.take=t,e.filters.drop=this.filters.drop,e},t.prototype.drop=function(t){var e=this.copy();return e.filters.drop=(this.filters.drop||0)+t,e.filters.take=this.filters.take?Math.max(this.filters.take-t,0):this.filters.take,e},t.prototype.passThruDatum=function(t){return!this.filters.take&&!this.filters.drop||t.index>=(this.filters.drop||0)&&t.index<(this.filters.take||1/0)+(this.filters.drop||0)},t.prototype.recentData=function(){var t,e=this;return(null===(t=this.innerView.recentData())||void 0===t?void 0:t.filter((function(t){return t.kind===i.Modified?e.passThruDatum(t.datum)||e.passThruDatum(t.oldDatum):e.passThruDatum(t.datum)})))||null},t.prototype.readAllData=function(){var t=this;return this.innerView.readAllData().filter((function(e){return t.passThruDatum(e)}))},t.prototype.onChange=function(t){return this.innerView.onChange(t)},t.prototype.onNewDatum=function(t){return this.innerView.onNewDatum(t)},t.prototype.copy=function(){return new t(this.innerView.copy())},t.prototype.map=function(t){return this.innerView.map(t)},t.prototype.mapIndexed=function(e){return new t(new a(this.innerView,e))},t.prototype.mapEffect=function(t){return this.innerView.mapEffect(t)},t.prototype.reduce=function(t,e){return this.innerView.reduce(t,e)},t.prototype.sortBy=function(t){return this.innerView.sortBy(t)},t.prototype.orderBy=function(t,e){return void 0===e&&(e=!0),this.innerView.orderBy(t,e)},t}();e.IndexedImpl=c},4772:function(t,e,n){var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=n(7294),a=i(n(6913));e.useQuery=function(t,e){var n=o.useCallback(t,e||[]),i=o.useMemo((function(){return a.query(n)}),[n]),u=o.useMemo((function(){return i.view()}),[i]),s=r(o.useState(0),2),c=s[0],l=s[1];return o.useEffect((function(){return i.onDependencyChange((function(){i.runQuery(),l((function(t){return t+1}))}))})),o.useMemo((function(){return u.readAllData()}),[c])}},3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),h=c(n),d=i,p=h["".concat(s,".").concat(d)]||h[d]||f[d]||o;return n?r.createElement(p,a(a({ref:e},l),{},{components:n})):r.createElement(p,a({ref:e},l))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=h;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);