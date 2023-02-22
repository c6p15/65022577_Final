
function addRow() {
    let NameInput = document.getElementById('NameInput');
        let Name = NameInput.value;
        console.log(Name);
    let SurnameInput = document.getElementById('SurnameInput');
        let Surname = SurnameInput.value;
        console.log(Surname);
    let Date = document.getElementById('DateInput');
        let BirthDate = DateInput.value;
        console.log(BirthDate);
    let langauge = document.getElementById('Gender');
        choose = langauge.value;
        console.log(choose);



    if (Name.length <= 0 || Surname.length <= 0){
        window.alert("missing information");
    }else{

        var tableBody = document.getElementById("table");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");      
        var row = document.createElement("tr");
        
        td1.innerHTML = NameInput.value;
        td2.innerHTML  = SurnameInput.value;
        td3.innerHTML  = DateInput.value;
        td4.innerHTML  = langauge.value;
        
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        
        tableBody.appendChild(row);
    }
}
