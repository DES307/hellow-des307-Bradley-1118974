// ------------------------- Week 10 --------------------

$(document).ready(function() {

    $('#show-message').click(function() {
        $('.alert').slideDown();
    });

    $('#hide-message').click(function() {
        $('.alert').slideUp();
    });


    $('#plus').click(function() {
        let number = $('.badge').text();
        
        number = parseInt(number) + 1;

        $('.badge').text(number);

        if (number > 10) {
            alert('You need to read your messages!');
        };
    });

    $('#minus').click(function() {
       let numberMinus = $('.badge').text();

       numberMinus = parseInt(numberMinus) - 1;

       $('.badge').text(numberMinus);

       if (numberMinus < 0) {
            numberMinus = 0;
            $('.badge').text(numberMinus);
            alert('You have no new messages')
       };
    });


    let tableRowId = 1;

    // let now = new Date(Date.now());
    // let formatted = now.getHours() +':'+ now.getMinutes() +'.'+ now.getSeconds();

    $('#addRow').click(function() {

        // Date() method needs to be in function, to keep geting live time update
        let time = new Date();
        time = `${time.getHours()}:${time.getMinutes()}.${time.getSeconds()}`;
        
        let tempRow = `<tr id="table_row_${tableRowId}"><th>${tableRowId}</th>`;

        tempRow = tempRow + `<td>${time}</td>`;
        tempRow = tempRow + `<td><button id="row_${tableRowId}" type="button" class="btn btn-dark"><i class="fa fa-trash"></i></button></td></tr>`;

        $('.table > tbody:last-child').append(tempRow);
        tableRowId = tableRowId + 1;
    });

    // Wild Cards
    //$('[id^=row_]') ^ starting with row_
    //$('[id$=row_]') $ ending with row_

    $(document).on('click', '[id^=row_]', function(event) {
        let id = $(this).attr("id");

        if (confirm("Are you sure you wish to delete"))
            $('#table_' + id).remove();
        else 
            alert('You saved me from deleting my row');
    });

});