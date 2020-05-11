$(document).ready(function () {

    let tableRowId = 1;

    $('#addRow').click(function() {
        let firstName = $("#first-name").val();
        $("#first-name").val('');

        let lastName = $('#last-name').val();
        $('#last-name').val('');

        let addRow = '';

        addRow = addRow + `<tr id='row_remove_${tableRowId}'><td>${firstName}</td>`;
        addRow = addRow + `<td>${lastName}</td>`;
        addRow = addRow + `<td><button id='remove_${tableRowId}' type='button'><i class='fa fa-minus'></i></button></td></tr>`;

        $('table > #placeData').append(addRow);

        tableRowId = tableRowId + 1;

        let success = document.querySelector('.success'); 

        success.innerHTML = `<div class="alert alert-success" role="alert">Success<button class="close" data-dismiss="alert" aria-label="close"><i class='fa fa-minus'></i></button></div>`;
    });

    $(document).on('click', '[id^=remove_]', function(event) {
        let id = $(this).attr("id");

        if (confirm("Are you sure you wish to delete?"))
            $('#row_' + id).remove();
    });

});
