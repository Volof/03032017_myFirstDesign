$('#myTabs a[href="#tab1"]').tab("show"),$("#myTabs a:first").tab("show"),$("#myTabs a:last").tab("show"),$("#myTabs li:eq(2) a").tab("show"),$(document).ready(function(){$("#myCarousel").carousel({interval:1e4}),$(".fdi-Carousel .item").each(function(){var t=$(this).next();t.length||(t=$(this).siblings(":first")),t.children(":first-child").clone().appendTo($(this)),t.next().length>0?t.next().children(":first-child").clone().appendTo($(this)):$(this).siblings(":first").children(":first-child").clone().appendTo($(this))})});var vForm=document.forms.vForm,vForm_2=document.forms.vForm_2;$(document).ready(function(){$('input[type="text"]').tooltipster({trigger:"custom",position:"bottom",animation:"swing"}),$("#myform").validate({errorPlacement:function(t,a){var e=$(a),i=$(t),n=i.text();null!=n&&""!==n&&(e.tooltipster("content",n),e.tooltipster("open"))},unhighlight:function(t,a,e){$(t).removeClass(a).addClass(e).tooltipster("close")},rules:{field1:{required:!0,email:!0,minlength:5}},submitHandler:function(t){return vForm.reset(),swal({title:"Thank you for subscribing",text:"Always stay full",type:"success",confirmButtonColor:"#f15a29",animation:"slide-from-top"}),!1}})}),$(function(){$("#example1").barrating({theme:"fontawesome-stars",initialRating:"4"}),$("#example2").barrating({theme:"fontawesome-stars",initialRating:"5"}),$("#example3").barrating({theme:"fontawesome-stars",initialRating:"2"}),$("#example4").barrating({theme:"fontawesome-stars",initialRating:"4"}),$("#example5").barrating({theme:"fontawesome-stars",initialRating:"3"}),$("#example6").barrating({theme:"fontawesome-stars",initialRating:"4"})}),$(document).ready(function(){$("#example").DataTable({ajax:{url:"json/data.json",dataSrc:""},columns:[{data:"Avatar"},{data:"Full Name"},{data:"Department"},{data:"email"},{data:"ip_address"},{data:"Salary"}]})});