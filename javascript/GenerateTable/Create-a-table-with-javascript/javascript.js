let button = document.getElementById("btn");
button.addEventListener("click", function(){
    let colums = document.getElementById("getColums").value;
    let rows = document.getElementById("getRows").value;
    getTable(colums, rows);
});


function getTable(colums, rows){

    table = document.getElementById("genTable");
     //refresh 
    let tags = "";
    table.innerHTML = tags;

    //create
    tags = "<table border='3'>";

        for(i= 0; i < colums ; i++){
              tags += " <tr>";

            for(k=0;k < rows; k++){
                 tags+=`<th>row ${i +1} colum ${k +1}</th>`;
                }


        tags+= " </tr>";
           }

        //apply
        tags += "</table>"
        table.innerHTML = tags;
}

