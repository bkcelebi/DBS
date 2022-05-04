let baseURL='https://burak.dbsprojects.ie:8080/';


// let doIt=()=>{
//     let tab=document.getElementById("tab1");
//     let rows=tab1.getElementsByTagName('tr');
//     fetch(baseURL)
//       .then(response => response.json())
//       .then(data=>data.Results.forEach(  //.slice(0,3)
//         x=>{
//           let newRow=rows[0].cloneNode(true);
//           let divs=newRow.getElementsByTagName('td');
//           divs[0].innerHTML=x['ID'];
//           divs[1].innerHTML=x['Name'];
//           divs[2].innerHTML=x['Email'];
//           tab1.appendChild(newRow);
//         }
//       )
//     );
// }

// window.onload = doIt;

let loadData = () => {
    fetch(baseURL).then(
        res => {
            res.json().then(
                data => {
                    console.log(data);
                    if(data.Results.length > 0){
                        var temp = "";
                        data.Results.forEach((x) => {
                            temp += "<tr>";
                            temp += "<td>"+x.ID+"</td>";
                            temp += "<td>"+x.Name+"</td>";
                            temp += "<td>"+x.Email+"</td>";
                            temp += "<td>"+"<span> Update </span>" + 
                            "<span class='btn btn-outline-danger btn-sm' onclick=`deleteStudent('${x.ID}')`> Delete </span>" +
                            "</td></tr>"
                        })
                    
                        document.getElementById("tableBody").innerHTML = temp;
                    
                    }
                }  
            )
        }
    )
}

window.onload = loadData;
 

// let deleteStudent = () => {   
//     let deleteEntr = document.getElementById('deleteEnt').value;   
//     fetch(baseURL+'delete?id='+deleteEntr)
//     .then((resp) => {
//         alert("Student Deleted");
//         location.reload();
//     });
// }

let deleteStudent = (id) => {   
    // let deleteEntr = document.getElementById('deleteEnt').value;   
    fetch(baseURL+'delete?id='+id)
    .then((resp) => {
        alert("Student Deleted");
        location.reload();
    });
}

let updateStudent = () => {
    let updateID = document.getElementById('updateID').value;
    let updateName = document.getElementById('updateName').value;
    let updateEmail = document.getElementById('updateEmail').value;
    fetch(baseURL+'update?id='+updateID+'&name='+updateName+'&email='+updateEmail)
    .then((resp) => {
        alert("Student Updated");
        location.reload();
    });
}

let addStudent = () => {
    let studentId = document.getElementById('studentId').value;
    let studentName = document.getElementById('studentName').value;
    let studentMail = document.getElementById('studentMail').value;
    fetch(baseURL+'add?id='+studentId+'&name='+studentName+'&email='+studentMail)
    .then((resp) => {
        alert("Student Added");
        location.reload();      
    });
}
