$(document).ready(function () {

    let tableRowId = 1;

    $('#addRow').click(function() {
        console.log('hi');
        let addRow = '';

        addRow = addRow + `<tr id='row_remove_${tableRowId}'><td>John</td>`;
        addRow = addRow + `<td>Smith</td>`;
        addRow = addRow + `<td><button id='remove_${tableRowId}' type='button'><i class='fa fa-minus'></i></button></td></tr>`;

        $('table > #placeData').append(addRow);

        tableRowId = tableRowId + 1;

        function noDisplay() {
            let success = document.querySelector('.success'); 

            success.innerHTML = `<p><span class="badge badge-success">Success</span></p>`;
        }
        setTimeout(noDisplay, 000);
        clearTimeout(noDisplay, 2000);

    });

    $(document).on('click', '[id^=remove_]', function(event) {
        let id = $(this).attr("id");

        if (confirm("Are you sure you wish to delete"))
            $('#row_' + id).remove();
    });

});
