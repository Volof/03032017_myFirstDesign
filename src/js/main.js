$('#myTabs a[href="#tab1"]').tab('show');// Select tab by name
$('#myTabs a:first').tab('show'); // Select first tab
$('#myTabs a:last').tab('show');// Select last tab
$('#myTabs li:eq(2) a').tab('show');// Select third tab (0-indexed)

// ____"Thumbnail Carousel - Single image sliding"____
$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 10000
    })
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
                email: true
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
        initialRating: "4"
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
