$(document).ready(function ($) {
    $(".button").click(function () {
        $.get("https://reqres.in/api/users?page=2", function (data, status) {
            console.log(`Data: ${data} \nStatus: ${status}`);
            display(data.data);
        });
    });
});

function display(data) {
    console.log(data)
    
let convertedData = data;
    
    let rowToAdd = '';
    for (let i = 0; i < convertedData.length; i++) {        
        rowToAdd = rowToAdd.concat('<tr>');
        rowToAdd = rowToAdd.concat('<th> ' + convertedData[i].id + ' </th>');
        rowToAdd = rowToAdd.concat('<td> ' + convertedData[i].first_name + ' </td>');
        rowToAdd = rowToAdd.concat('<td> ' + convertedData[i].last_name + ' </td>');
        rowToAdd = rowToAdd.concat('<td> ' + convertedData[i].email + ' </td>');
        rowToAdd = rowToAdd.concat('<td> <img class="avatar" src = "' + convertedData[i].avatar + '"> </td>');
        rowToAdd = rowToAdd.concat('</tr>');
    };

         $('#data-placeholder').html(rowToAdd);
};

// --------------- Week 9 Example ----------

$(document).ready(function () {

    $('.button1').click(function () {
        $('.replace').text("I am the new replacement")
    })
});