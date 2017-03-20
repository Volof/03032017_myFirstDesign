//____dataTable___//

$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": {
            "url": "json/data.json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "Avatar" },
            { "data": "Full Name" },
            { "data": "Department" },
            { "data": "email" },
            { "data": "ip_address" },
            { "data": "Salary" }
        ]
    } );
} );
