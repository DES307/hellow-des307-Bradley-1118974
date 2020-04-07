function des307Fetch() {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {

            // console.log(JSON.parse(this.responseText)['data']);

            // document.getElementById('data-placeholder').innerHTML = this.responseText;

            // let rowToAdd = '';
            // rowToAdd = rowToAdd.concat('<tr>');
            // rowToAdd = rowToAdd.concat('<td> Brad</th>');
            // rowToAdd = rowToAdd.concat('</tr>');
            // document.getElementById('data-placeholder').innerHTML = rowToAdd;

            let myData = JSON.parse(this.responseText)['data'];

            for (var i = 0; i < myData.length; i++) {
                let rowToAdd = '';
                rowToAdd = rowToAdd.concat('<tr>');
                rowToAdd = rowToAdd.concat('<th> '+ myData[i].id+' </th>');
                rowToAdd = rowToAdd.concat('<td> '+ myData[i].first_name+' </td>');
                rowToAdd = rowToAdd.concat('<td> '+ myData[i].last_name+' </td>');
                rowToAdd = rowToAdd.concat('<td> '+ myData[i].email+' </td>');
                rowToAdd = rowToAdd.concat('<td> <img class="avatar" src = "'+myData[i].avatar+'"> </td>');
                rowToAdd = rowToAdd.concat('</tr>');
                document.getElementById("data-placeholder").innerHTML += rowToAdd;
            };


        };
    };
    xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
    xhttp.send();

};
