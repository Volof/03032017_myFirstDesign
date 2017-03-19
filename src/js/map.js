
//___GOOGLE___//

(function ($, google) {
    var myLatLng = {lat: 49.551620, lng: 25.617050};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: myLatLng,
//            center: new google.maps.LatLng(49.551688, 25.617261),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Help me!',
        animation: google.maps.Animation.DROP
    });
    map.addListener('center_changed', function () {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function () {
            map.panTo(marker.getPosition());
        }, 3000);
    });

    marker.addListener('click', function () {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
    });


    $('.btn-group').colorDrop({
        onChange: function () {
            changeMapStyles(map);
        }
    });

    $('#map').height($(window).height());

    function changeMapStyles(map) {

        var hueColor = $('#hue-list').colorDrop('val'),
            roadColor = $('#road-list').colorDrop('val'),
            waterColor = $('#water-list').colorDrop('val'),
            parkColor = $('#park-list').colorDrop('val'),
            landscapeColor = $('#landscape-list').colorDrop('val');

        var featureOpts = [
            {
                stylers: [
                    {hue: hueColor}
                ]
            }, {
                elementType: "labels",
                stylers: [{
                    visibility: "on"
                }]
            }, {
                featureType: "road",
                stylers: [{
                    visibility: "on"
                }, {
                    color: roadColor
                }]
            }, {
                featureType: "water",
                stylers: [{
                    visibility: "on"
                }, {
                    color: waterColor
                }]
            },
            {
                featureType: "poi"
                , stylers: [{
                visibility: "on"
            }, {
                color: parkColor
            }]
            },
            {
                featureType: "landscape",
                stylers: [{
                    visibility: "on"
                }, {
                    color: landscapeColor
                }]
            }
        ];

        map.setOptions({
            styles: featureOpts
        });

    };

    changeMapStyles(map);

})(jQuery, google);

//____show_map__//
var show_map = document.getElementById("show_map");
var close_map = document.getElementById("close_map");
show_map.addEventListener("click", function (e) {
    e.preventDefault();
    wrap_map.style.display = "block";
    google.maps.event.trigger(map, 'resize');
    // map.setCenter(49.551620,25.617050);
    contact.style.display = "none";


});
close_map.addEventListener("click", function (e) {
    e.preventDefault();
    wrap_map.style.display = "none";
    contact.style.display = "block";
});


