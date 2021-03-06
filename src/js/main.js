$('#myTabs a[href="#tab1"]').tab('show');// Select tab by name
$('#myTabs a:first').tab('show'); // Select first tab
$('#myTabs a:last').tab('show');// Select last tab
$('#myTabs li:eq(2) a').tab('show');// Select third tab (0-indexed)

// ____"Thumbnail Carousel - Single image sliding"____
$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 10000
    });
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});

//____Validation___//
var vForm = document.forms["vForm"];
var vForm_2 = document.forms["vForm_2"];

//_____tooltips____//
$(document).ready(function () {
    // initialize tooltipster on text input elements
    $('input[type="text"]').tooltipster({ //find more options on the tooltipster page
        trigger: 'custom', // default is 'hover' which is no good here
        position: 'bottom',
        animation: 'swing'
    });
    // initialize validate plugin on the form
    $("#myform").validate({
        errorPlacement: function (error, element) {
            var ele = $(element),
                err = $(error),
                msg = err.text();
            if (msg != null && msg !== "") {
                ele.tooltipster('content', msg);
                ele.tooltipster('open'); //open only if the error message is not blank. By default jquery-validate will return a label with no actual text in it so we have to check the innerHTML.
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass).tooltipster('close');
        },
        rules: {
            field1: {
                required: true,
                email: true,
                minlength: 5
            }
        },
        submitHandler: function (form) { // for demo
            vForm.reset();
            swal({
                title: "Thank you for subscribing",
                text: "Always stay full",
                type: "success",
                confirmButtonColor: "#f15a29",
                animation: "slide-from-top"
            });
            return false;
        }
    });
});

//___rating_stars__//
$(function() {
    $('#example1').barrating({
        theme: 'fontawesome-stars',
        initialRating: "4",
        color: "#fd5823"
    });
    $('#example2').barrating({
        theme: 'fontawesome-stars',
        initialRating: "5"
    });
    $('#example3').barrating({
        theme: 'fontawesome-stars',
        initialRating: "2"
    });
    $('#example4').barrating({
        theme: 'fontawesome-stars',
        initialRating: "4"
    });
    $('#example5').barrating({
        theme: 'fontawesome-stars',
        initialRating: "3"
    });
    $('#example6').barrating({
        theme: 'fontawesome-stars',
        initialRating: "4"
    });
});

//____Scroll____//

$(document).ready(function() {
    $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 2000);
        return false;
    });
});
//____nav_top_btn_color___//
var btnHappy = document.getElementById("btn_happy"),
    btnParty = document.getElementById("btn_party"),
    breakfast_swap= document.getElementById("breakfast_swap"),
    lunch_swap = document.getElementById("lunch_swap"),
    dinner_swap= document.getElementById("dinner_swap");

btnHappy.addEventListener("click", function (e) {
    e.preventDefault();
    btn_happy.style.background = "#f15a29";
    btn_happy.style.color = "#fff";
    btn_party.style.background = "#fff";
    btn_party.style.color = "#4b4b4b";
    breakfast_swap.style.backgroundImage = "url('/img/content/nav-menu/Prime_Rib_Dinner_H.jpg')";
    lunch_swap.style.backgroundImage = "url('/img/content/nav-menu/Prime_H.jpg')";
    dinner_swap.style.backgroundImage = "url('/img/content/nav-menu/HH.jpg')";
});
btnParty.addEventListener("click", function (e) {
    e.preventDefault();
    btn_party.style.background = "#f15a29";
    btn_party.style.color = "#fff";
    btn_happy.style.background = "#fff";
    btn_happy.style.color = "#4b4b4b";
    breakfast_swap.style.backgroundImage = "url('/img/content/nav-menu/breakfast.jpg')";
    lunch_swap.style.backgroundImage = "url('/img/content/nav-menu/launch.jpg')";
    dinner_swap.style.backgroundImage = "url('/img/content/nav-menu/dinner.jpg')";
});
//_____
$("#demo01").animatedModal({
    color: "#f15a29",
    animatedIn: "lightSpeedIn",
    animatedOut: "bounceOutDown"
});
// $("#demo02").animatedModal({
//     color: "#f15a29",
//     animatedIn: "lightSpeedIn",
//     animatedOut: "bounceOutDown"
// });

