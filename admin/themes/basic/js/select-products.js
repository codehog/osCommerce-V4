/*! For license information please see select-products.js.LICENSE.txt */
var selectProducts;(()=>{"use strict";var t={};function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,c=new Array(e);n<e;n++)c[n]=t[n];return c}(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t),$.fn.selectProducts=function(t){var n=jQuery.extend({selectedName:"",selectedProducts:[],selectedPrefix:"",selectedSortName:"",selectedBackLink:"",selectedBackLink_c:""},t);this.each((function(){if($(this).hasClass("js-app"))return null;$(this).addClass("js-app");var t=$('\n                <div class="products-content bundl-box">\n        \n                    <div class="products-container">\n                        <div class="products-container-from">\n                            <div class="search">\n                                <input type="text" name="search" value="" class="form-control" autocomplete="off" placeholder="'.concat(entryData.tr.TEXT_TYPE_CHOOSE_PRODUCT,'">\n                            </div>\n                            <div class="breadcrumbs"></div>\n                            <div class="product-folders"></div>\n                        </div>\n                        <div class="products-container-to">\n                            <div class="search">\n                                <div class="title">').concat(entryData.tr.FIELDSET_ASSIGNED_PRODUCTS,'</div>\n                                <input type="text" name="search" value="" class="form-control" autocomplete="off" placeholder="').concat(entryData.tr.SEARCH_BY_ATTR,'">\n                            </div>\n                            <div class="product-holder">\n                                 ').concat(entryData.tr.TEXT_PRODUCT_NOT_SELECTED,"\n                            </div>\n                        </div>\n                    </div>\n        \n                </div>\n            "));$(this).append(t);var c={set:function(e,n,c){return e[n]=c,"length"===n&&(t.trigger("selectedProducts"),$(".products-container-from .item",t).trigger("selectedProducts")),!0}},a=new Proxy(n.selectedProducts,c);t.on("selectedProducts",u).trigger("selectedProducts");var r=$(".product-folders",t),o=$(".products-container .breadcrumbs",t),i={},s=[],d=[],l="",p=!1;function u(){if(a.length){var e=$(".products-container-to .search input",t).val(),c=$('\n                    <table class="table assig-attr-sub-table">\n                        <thead>\n                        <tr role="row">\n                            '.concat(n.selectedSortName?"<th></th>":"","\n                            <th>").concat(entryData.tr.TEXT_IMG,"</th>\n                            <th>").concat(entryData.tr.TEXT_LABEL_NAME,"</th>\n                            ").concat(n.selectedBackLink?'\n                                <th class="back-link">\n                                    '.concat(entryData.tr.TEXT_BACKLINK,'\n                                    <input type="checkbox"').concat(p?" checked":"",' class="js-backlink-batch uniform">\n                                </th>\n                            '):"","\n                            <th>").concat(entryData.tr.TEXT_PRICE,"</th>\n                            <th></th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        </tbody>\n                    </table>\n                ")),r=$("tbody",c),o=$(".uniform",c).uniform();if(r.html(""),a.forEach((function(t,c){var o=$("<div>".concat(t.name,"</div>")).text();if(e&&-1===o.toLowerCase().search(e.toLowerCase()))return null;if(e){var i=new RegExp("("+e+")","i");o=o.replace(i,'<span class="keywords">$1</span>')}var s=$('\n                            <tr role="row" prefix="'.concat(n.selectedPrefix).concat(t.id,'"').concat(t.status_class?' class="'.concat(t.status_class,'"'):"",">\n                                ").concat(n.selectedSortName?'<td class="sort-pointer"></td>':"",'\n                                <td class="img-ast img-ast-img">\n                                    ').concat(t.image||'<span class="product-ico"></span>','\n                                </td>\n                                <td class="name-ast name-ast-xl">\n                                    ').concat(o,"                                   \n                                </td>\n                                ").concat(n.selectedBackLink?'\n                                    <td class="back-link">\n                                        <input type="checkbox" class="js-backlink uniform" name="'.concat(n.selectedBackLink,'[]" ').concat(t.backlink||p?"checked":"",' value="').concat(t.id,'">\n                                        ').concat(t.backlink?'\n                                            <input type="hidden" name="'.concat(n.selectedBackLink_c,'[]" value="').concat(t.id,'">\n                                        '):"","\n                                    </td>\n                                "):"",'\n                                <td class="ast-price ast-price-xl">\n                                    ').concat(t.price,'\n                                    <input type="hidden" name="').concat(n.selectedName,'[]" value="').concat(t.id,'">\n                                </td>\n                                <td>\n                                    <span class="remove-ast"></span>\n                                </td>\n                            </tr>\n                    '));$("img",s).on("error",(function(){$(".img-ast",$item).html('<span class="product-ico"></span>')})),$(".uniform",s).uniform(),r.append(s),$(".remove-ast",s).on("click",(function(){a.splice(c,1)}))})),n.selectedBackLink){var i=$(".js-backlink",r);o.on("change",(function(){o.prop("checked")?(p=!0,i.prop("checked",!0).uniform("refresh")):(p=!1,i.prop("checked",!1).uniform("refresh"))})),i.on("change",(function(){$(this).prop("checked")||(p=!1,o.prop("checked",!1).uniform("refresh"));var t=!0;i.each((function(){$(this).prop("checked")||(t=!1)})),t&&(p=!0,o.prop("checked",!0).uniform("refresh"))})).trigger("change")}if($(".product-holder",t).html(c),n.selectedSortName){var s=$('<input type="hidden" name="'.concat(n.selectedSortName,'">'));r.sortable({handle:".sort-pointer",axis:"y",update:function(t,e){var n=$(this).sortable("serialize",{attribute:"prefix"});s.val(n)}}),$(".product-holder",t).append(s)}}else $(".product-holder",t).html('<div class="product-not-selected">'.concat(entryData.tr.TEXT_PRODUCT_NOT_SELECTED,"</div>"))}function f(t,n,c){var a=[];t.forEach((function(t){var r;t.children&&f(t.children,[].concat(function(t){if(Array.isArray(t))return e(t)}(r=n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?e(t,n):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[t]),c),"p"==t.key.at()&&a.push(t)})),a.length&&d.push({categories:n,products:a})}function v(t){var e=s.findIndex((function(e){return e.key==t.key}));-1==e?s.push(t):s.splice(e+1,100),o.html(""),s.forEach((function(t){var e=$("<div>".concat(t.title,"</div>")).text(),n=$("<div>".concat(e,"</div>"));o.append(n),n.on("click",(function(){return r.trigger("item-click",t)}))}))}function h(t,e){if("string"==typeof t&&"p"==t.slice(0,1))return r.html("").append(m(e)),void $.post("categories/seacrh-product",{products_id:e.products_id,action:"load_product"},(function(t){r.html("").append(m(e))}),"json");i[t]&&(r.html(""),i[t].forEach((function(t){return r.append(g(t))})),$(".item:first",r).addClass("selected")),$.post("categories/load-tree",{do:"missing_lazy",id:t,selected:0},(function(e){r.html(""),e.forEach((function(t){return r.append(g(t))})),$(".item:first",r).addClass("selected"),i[t]=e}),"json")}function m(t,e){var n,c=$("<div>".concat(t.title,"</div>")).text();n=t.image?"<img"==t.image.slice(0,4)?t.image:'<img src="'.concat(entryData.tr.DIR_WS_CATALOG_IMAGES).concat(t.image,'" />'):'<img src="'.concat(entryData.tr.DIR_WS_CATALOG_IMAGES,'na.png" />');var a=$('\n            <div class="product-content '.concat(t.products_id?"product":"catalog",'">\n                <div class="back-bar">').concat(entryData.tr.IMAGE_BACK,'</div>\n                <div class="image">').concat(n,'</div>\n                <div class="product-info">\n                    <div class="title" title="').concat(c,'">\n                        <div>').concat(t.title,'</div>\n                    </div>\n\n                    <div class="description">\n                        <span class="">').concat(t.description,'</span>\n                    </div>\n                    <div class="model">\n                        <span>').concat(entryData.tr.TEXT_MODEL,':</span>\n                        <span class="value">').concat(t.products_model,'</span>\n                    </div>\n\n                    <div class="price">\n                        <span>').concat(entryData.tr.TABLE_HEADING_PRICE_EXCLUDING_TAX,':</span>\n                        <span class="value">').concat(t.price_ex,'</span>\n                    </div>\n                    \n                    <div class="stock">\n                        <span>').concat(entryData.tr.TEXT_STOCK_QTY,': </span>\n                        <span class="value">').concat(t.stock,'</span>\n                    </div>\n                    <div class="btn btn-primary btn-add-product2">').concat(entryData.tr.TEXT_ADD,"</div>\n\n                </div>\n            </div>\n        "));return $(".btn-add-product2",a).on("click",(function(){return k(t)})),$("img",a).on("error",(function(){$(".image",a).html('<span class="product-ico"></span>')})),$(".back-bar",a).on("click",(function(){r.trigger("item-back",s.at(-2))})),a}function g(t,e){var n,c=$("<div>".concat(t.title,"</div>")).text();n=t.image?"<img"==t.image.slice(0,4)?t.image:'<img src="'.concat(entryData.tr.DIR_WS_CATALOG_IMAGES).concat(t.image,'" />'):t.products_id?'<span class="product-ico"></span>':'<span class="catalog-ico"></span>';var o=c;e&&(o=c.replace(new RegExp("("+e+")","i"),'<span class="search-key">$1</span>'),t.model&&-1!==t.model.search(new RegExp(e,"i"))&&(o='<div class="model">${ entryData.tr.TEXT_MODEL }: '+t.model.replace(new RegExp("("+e+")","i"),'<span class="search-key">$1</span>')+"</div>"+o));var i=$('\n            <div class="item '.concat(t.products_id?"product":"catalog"," ").concat(t.stock<1?"stock-empty":"",'">\n                <div class="image">').concat(n,'</div>\n                <div class="title" title="').concat(c,'"><div>').concat(o,"</div></div>\n                ").concat(t.products_id?'\n                    <div class="row-prod">\n                        <div class="price">'.concat(t.price_ex,'</div>\n                        <div class="button-add">\n                            <span class="btn btn-primary">').concat(entryData.tr.TEXT_ADD,"</span>\n                        </div>\n                    </div>\n                "):"","\n            </div>\n        "));return i.on("selectedProducts",(function(){a.find((function(e){return e.id==t.products_id}))?i.addClass("hidden"):i.removeClass("hidden")})).trigger("selectedProducts"),$("img",i).on("error",(function(){var e;e=t.products_id?'<span class="product-ico"></span>':'<span class="catalog-ico"></span>',$(".image",i).html(e)})),$(".image, .title",i).on("click",(function(){return r.trigger("item-click",t)})),$(".button-add .btn",i).on("click",(function(){return k(t)})),i.on("mouseenter",(function(){$(".selected",r).removeClass("selected"),$(this).addClass("selected")})),i}function k(t){if(a.find((function(e){return e.id==t.products_id}))){var e=alertMessage("Already added","alert-message");return setTimeout((function(){return e.fadeOut(200)}),300),setTimeout((function(){return e.remove()}),500),null}a.push({image:t.image,name:t.title,price:t.price_ex,id:t.products_id})}h(0),v({title:entryData.tr.TEXT_ROOT,key:0}),r.on("item-click",(function(t,e){h(e.key,e),v(e)})),r.on("item-back",(function(t,e){h(e.key,e),v(e),setTimeout((function(){return r.scrollTop(l)}),0)})),r.on("scroll",(function(){var t=s.at(-1);(1==s.length||"string"==typeof t.key&&"c"==t.key.at())&&(l=r.scrollTop())})),$(".products-container-from .search input",t).on("keyup",(function(t){if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key))!function(t){var e=$(".selected",r);e.removeClass("selected");var n=e,c=Math.round(r.width()/e.width());switch(t){case"ArrowUp":for(var a=0;a<c;a++)(n=n.prev()).length||(n=$(".item:last",r));break;case"ArrowDown":for(var o=0;o<c;o++)(n=n.next()).length||(n=$(".item:first",r));break;case"ArrowRight":(n=e.next()).length||(n=$(".item:first",r));break;case"ArrowLeft":(n=e.prev()).length||(n=$(".item:last",r))}if(n.addClass("selected"),n.position().top+n.height()>r.height()){var i=r.scrollTop()+n.position().top+n.height()-r.height();r.animate({scrollTop:i},300)}if(n.position().top<0){var s=r.scrollTop()+n.position().top;r.animate({scrollTop:s},300)}}(t.key);else if(["Escape","Enter"].includes(t.key))!function(t){if("Enter"==t)$(".selected .image, .product-info .btn-add-product2",r).trigger("click");else if("Escape"==t){var e=$(" > div",o),n=e.eq(e.length-2);n.length&&n.trigger("click")}}(t.key);else{var e=$(this).val();e.length>2?$.get("categories/seacrh-product",{search:e},(function(t){r.html(""),d.length=0,f(t,[],e);var n=s.slice(1).map((function(t){return t.key}));d.sort((function(t,e){var c=0,a=0;return n.forEach((function(n,r){t.categories[r]&&t.categories[r].key==n&&c++,e.categories[r]&&e.categories[r].key==n&&a++})),c==a?Math.abs(n.length-c)-Math.abs(n.length-a):a-c})),d.forEach((function(t){var n;r.append((n=t.categories,'\n                <div class="categories-tree">\n                    '.concat(n.reduce((function(t,e){return t+"<div>".concat(e.title,"</div>")}),""),"\n                </div>"))),t.products.forEach((function(t){return r.append(g(t,e))})),$(".item:first",r).addClass("selected")}))}),"json"):e||(h(0),v({title:entryData.tr.TEXT_ROOT,key:0}))}})),$(".products-container-to .search input",t).on("keyup",u),$(".products-container-from, .popup-heading").on("click",(function(){return $("#search_text").trigger("focus")}))}))},selectProducts=t})();