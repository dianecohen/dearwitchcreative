var maxMedia;jQuery(document).ready(function($){var maxMedia=function(){this.callback=null,this.parent="#poststuff",this.window_loaded=null,this.maxm=null,this.closeOnCallback=!0};maxMedia.prototype.init=function(){this.maxm=new maxModal,this.maxm.init(),$(document).on("click",".maxbutton_media_button",$.proxy(this.clickAddButton,this)),this.callback="this.buttonToEditor"},maxMedia.prototype.setCallback=function(callback){if("function"!=typeof callback)if("function"==typeof window[callback])callback=window[callback];else{if("function"!=typeof eval(callback))return!1;callback=eval(callback)}this.callback=callback},maxMedia.prototype.showShortcodeOptions=function(t,a){this.closeOnCallback=!1,$currentModal=this.maxm.currentModal;var o=$('[data-button="'+t+'"]').find(".shortcode-container");options=$('<div class="shortcode_options">'),$("<input>",{type:"hidden",id:"mb_shortcode_id",name:"button_id"}).val(t).appendTo(options),$("<h3>").text("Shortcode Options").appendTo(options),$('<div class="button_example">').append(o).appendTo(options),$("<label>",{for:"mb_shortcode_url"}).text(mbtrans.short_url_label).appendTo(options),$("<input>",{type:"text",id:"mb_shortcode_url",name:"shortcode_url",placeholder:"http://"}).on("change, keyup",function(t){var a=$(t.target).val();$(".button_example").find(".maxbutton").prop("href",a)}).appendTo(options),$("<label>",{for:"mb_shortcode_text"}).text(mbtrans.short_text_label).appendTo(options),$("<input>",{type:"text",name:"shortcode_text",id:"mb_shortcode_text"}).on("change, keyup",function(t){var a=$(t.target).val();$(".button_example").find(".mb-text").text(a)}).appendTo(options),$("<p>").text(mbtrans.short_options_explain).appendTo(options),$("<input>",{type:"button",name:"add_shortcode",class:"button-primary",value:mbtrans.short_add_button}).on("click",$.proxy(this.addShortcodeOptions,this)).appendTo(options),this.maxm.setContent(options),this.maxm.checkResize()},maxMedia.prototype.addShortcodeOptions=function(t){t.preventDefault();var a=$("#mb_shortcode_url").val(),o=$("#mb_shortcode_text").val(),e=$("#mb_shortcode_id").val();this.buttonToEditor(e,a,o)},maxMedia.prototype.clickAddButton=function(t){t.preventDefault(),t.stopPropagation(),$(document).off("click",".pagination span");var a=this;void 0!==$(t.target).data("callback")&&this.setCallback($(t.target).data("callback")),void 0!==$(t.target).data("parent")&&(this.parent=$(t.target).data("parent")),$(document).on("click",".button-row",$.proxy(function(t){var a=$(t.target);void 0===$(a).data("button")&&(a=$(a).parents(".button-row"));var o=$(a).data("button");$(".button-row").removeClass("selected"),$(a).addClass("selected"),$(".controls .insert").data("button",o),this.maxm.currentModal.find(".controls .insert").removeClass("disabled")},this)),$(document).on("click",".pagination span, .pagination-links a",function(t){if(t.preventDefault(),$(t.target).hasClass("disabled"))return!1;var o=$(t.target).data("page");o<=1&&(o=1),a.loadPostEditScreen(o)}),$(document).on("change",".input-paging",function(t){t.preventDefault();var o=parseInt($(t.target).val());a.loadPostEditScreen(o)}),this.loadPostEditScreen(0)},maxMedia.prototype.loadPostEditScreen=function(t){void 0===t&&(t=0);var a={action:"getAjaxButtons",paged:t},o=mbtrans.ajax_url,e=this;return $(".media-buttons .loading").css("visibility","visible"),$.ajax({url:o,data:a,success:function(t){e.putResults(t)}}),!1},maxMedia.prototype.showPostEditScreen=function(){this.maxm.parent=this.parent,this.maxm.newModal("media-buttons"),this.maxm.setTitle(mbtrans.windowtitle),$(document).trigger("mb_media_buttons_open",this.maxm),this.maxm.show(),this.window_loaded=!0},maxMedia.prototype.putResults=function(t){this.showPostEditScreen(),$(".media-buttons .loading").css("visibility","hidden"),this.maxm.addControl("insert","",$.proxy(this.insertAction,this)),this.maxm.setContent(t),this.maxm.setControls(),this.maxm.checkResize(),this.resize(),$(window).on("resize",$.proxy(this.resize,this)),$(document).on("click",".maxbutton-preview",function(t){t.preventDefault()}),$(document).trigger("mb_media_put_results",[t,this.maxm])},maxMedia.prototype.resize=function(t){null!==this.maxm.currentModal&&(topHeight=this.maxm.currentModal.find(".modal_header").height()+17,controlsHeight=this.maxm.currentModal.find(".controls").height()+21,modalHeight=this.maxm.currentModal.height(),this.maxm.currentModal.find(".modal_content").css("height",modalHeight-topHeight-controlsHeight),this.maxm.currentModal.find(".controls .insert").addClass("disabled"))},maxMedia.prototype.insertAction=function(t){t.preventDefault();var a=$(t.target).data("button");void 0===a||parseInt(a)<=0||("function"==typeof this.callback&&this.callback(a,$(t.target)),this.closeOnCallback&&(this.maxm.close(),$(document).trigger("mb_media_buttons_close")))},maxMedia.prototype.buttonToEditor=function(t,a,o){var e='[maxbutton id="'+t+'"';void 0!==a&&a.length>1&&(e+=' url="'+a+'"'),void 0!==o&&o.length>1&&(e+=' text="'+o+'"'),e+=" ] ",window.send_to_editor(e),this.maxm.close()},maxMedia.prototype.getEditor=function(){var t='line-height: 32px; padding-left: 40px; background: url("'+mbtrans.icon+'") no-repeat',a=$("<div>",{id:"maxbutton-add-button",class:"content"});return a.append($("<h2>",{style:t}).text(mbtrans.insert)).append($("<p>").text(mbtrans.select)).append($("<div>",{id:"mb_media_buttons"}).append('<div class="loading"></div>')),a},(maxMedia=new maxMedia).init(),window.maxMedia=maxMedia});