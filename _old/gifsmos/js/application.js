$(function(){var a,b=$("#preview-image")[0],c=$("#calculator"),d=$(".loading"),e=$("#record-icon"),f=$("#desmos-url"),g=$("#import-form"),h=$("#interval-select"),i=$("#width-input"),j=$("#height-input"),k=$("#save-button"),l=$("#save-icon"),m=$("input"),n=$("#snapshot-button"),o=$("#reset-button"),p=$("#processing"),q=[],r=[],s=!1,t=.1,u=500,v=500,w=function(){if(s){var b=E.screenshot({width:200,height:200});q.length&&q[q.length-1].src===b||z(),a=setTimeout(w,1)}},x=function(){s=!s,s?(B(),b.src="/images/recording.gif",m.prop("disabled",!0),w()):(clearTimeout(a),y(),m.prop("disabled",!1)),e.toggleClass("glyphicon-record").toggleClass("glyphicon-stop"),o.toggleClass("disabled")},y=function(){q.length&&(b.src="/images/processing_lg.gif",p.show(),k.addClass("disabled"),l.removeClass("glyphicon-floppy-save").addClass("glyphicon-floppy-disk"),gifshot.createGIF({images:q,interval:t},function(a){a.error||(b.src=a.image)}),gifshot.createGIF({images:r,interval:t,gifWidth:u,gifHeight:v},function(a){a.error||(k.attr("download","gifsmos.gif"),k[0].href=a.image,k.removeClass("disabled"),l.removeClass("glyphicon-floppy-disk").addClass("glyphicon-floppy-save"),p.hide())}))},z=function(){var a=document.createElement("img");a.src=E.screenshot({width:200,height:200}),q.push(a);var b=document.createElement("img");b.src=E.screenshot({width:u,height:v}),r.push(b)},A=function(){z(),s||setTimeout(y,100)},B=function(){q=[],r=[],b.src="/images/preview.png",k[0].href="",k.addClass("disabled"),l.removeClass("glyphicon-floppy-save").addClass("glyphicon-floppy-disk"),p.hide()},C=function(){$(".alert-danger").remove();var a=$("<div class='alert alert-danger fade in'><a class='close' href='#' data-dismiss='alert' role='alert')>&times;</a><strong>Whoops!</strong> ¯\\_(ツ)_/¯ Looks like there isn't a graph there...check your URL.</div>");g.after(a),a.fadeIn()},D=function(){var a=f.val();a&&$.getJSON(a).done(function(a){E.setState(JSON.stringify(a.state)),f.val(""),$(".alert-danger").remove()}).fail(function(){C()})};$("#record-button").click(x),$(".import-button").click(D),n.click(A),o.click(function(){B()}),g.submit(function(a){a.preventDefault(),D(),f.blur()}),h.change(function(){t=parseFloat($(this).val()),s||y()}),i.change(function(){u=parseInt($(this).val(),10)}),j.change(function(){v=parseInt($(this).val(),10)}),$(".btn").click(function(){$(this).blur()}),$(document).keydown(function(a){70===a.which&&a.altKey&&(A(),a.preventDefault())}),$('[data-toggle="tooltip"]').tooltip({container:"body"});var E=Desmos.Calculator(c[0]);d.remove()});