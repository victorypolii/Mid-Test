//SEARCHING
function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.querySelector("#search");
    filter = input.value.toLowerCase();
    table = document.querySelector("#myTable");
    tr = table.querySelectorAll("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].querySelectorAll("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

//SELECT_FACULTY_AND_PRODY
function selectFaculty() {
    let facultyName=document.querySelector("#formAddStudent").addFaculty.value;
    if(facultyName=="Pascasarjana"){
        document.querySelector("#addProg").innerHTML="<option value='Magister Management'>Magister Management</option><option value ='Magister Filsafat'>Magister Filsafat</option>";
    }else if(facultyName=="FEKON"){
        document.querySelector("#addProg").innerHTML="<option value='Management'>Management</option><option value ='Akuntansi'>Akuntansi</option>";
    }else if(facultyName=="FKIP"){
        document.querySelector("#addProg").innerHTML="<option value='Pendidikan Agama'>Pendidikan Agama</option><option value ='Pendidikan Ekonomi'>Pendidikan Ekonomi</option><option value ='Pendidikan Inggris'>Pendidikan Bahasa Inggris</option><option value ='Pendidikan Luar Sekolah'>Pendidikan Luar Sekolah</option>";
    }else if(facultyName=="FFIL"){
        document.querySelector("#addProg").innerHTML="<option value='Filsafat'>Filsafat Agama Kristen Advent</option>";
    }else if(facultyName=="FIK"){
        document.querySelector("#addProg").innerHTML="<option value='Sistem Informasi'>Sistem Informasi</option><option value ='Informatika'>Informatika</option>";
    }else if(facultyName=="FKEP"){
        document.querySelector("#addProg").innerHTML="<option value='Perawat'>Keperawatan</option><option value='Ners'>Ners</option>";
    }else if(facultyName=="FAPERTA"){
        document.querySelector("#addProg").innerHTML="<option value='Pertanian'>Agronomi</option>";
    }else if(facultyName=="ASMIK"){
        document.querySelector("#addProg").innerHTML="<option value='Akademi'>Sekretari D-III</option>";
    }
}

//ADD_STUDENT_TO_LIST
const form = document.querySelector("#formAddStudent");
form.addEventListener('submit', addNewStudent);
function addNewStudent(event){
    event.preventDefault();
    let studentId=document.querySelector('#inputStudentId');
    let fullName=document.querySelector('#studentName');
    let gender=document.getElementsByClassName('gender');    
    let faculty=document.querySelector('#addFaculty');
    let prody=document.querySelector('#addProg');
    
    const indukTable=document.getElementById('myTable');
    const barisBaru=indukTable.insertRow(-1);
    const sel1=barisBaru.insertCell(0);
    const idStudent=document.createTextNode(`${studentId.value}`);
    sel1.appendChild(idStudent);

    const sel2=barisBaru.insertCell(1);
    const studentName=document.createTextNode(`${fullName.value}`);
    sel2.appendChild(studentName);

    if (Male.checked) {
        gender.value='Male';
    }else{
        gender.value='Female';
    }

    const sel3=barisBaru.insertCell(2);
    sel3.innerHTML=gender.value;

    const sel4=barisBaru.insertCell(3);
    const facultyName=document.createTextNode(`${faculty.value}`);
    sel4.appendChild(facultyName);

    const sel5=barisBaru.insertCell(4);
    const prodyName=document.createTextNode(`${prody.value}`);
    sel5.appendChild(prodyName);

    const sel6=barisBaru.insertCell(5);
    sel6.innerHTML="<a href='#' class='link-danger' onclick='deleteRow(this)'><i class='bi bi-trash'></i></a>";

    studentId.value='';
    fullName.value='';
    gender.value='';
    faculty.value='';
    prody.value='';
}


// DELETE_DATA
function deleteRow(event) { 
    var validation=confirm("Are you sure to delete this row?");
    if (validation) {
        var rowDelete = event.parentNode.parentNode.rowIndex;
        document.querySelector("#myTable").deleteRow(rowDelete);
    } else{
        false;
    }    
  }

  //FILTER_STUDENT_BY
function filterStudent(){
    let facultyNameFilter=document.querySelector("#selectFacultyFilter").value;
    if (facultyNameFilter=="Pascasarjana" || facultyNameFilter=="FEKON" || facultyNameFilter=="FKIP" ||facultyNameFilter=="FFIL" || facultyNameFilter=="FAPERTA" || facultyNameFilter=="FIK" || facultyNameFilter=="FKEP" || facultyNameFilter=="ASMIK") {
        var table = document.querySelector("#myTable");
        var tr = table.querySelectorAll("tr");
        for (var i = 0; i < tr.length; i++) {
            var td = tr[i].querySelectorAll("td")[3];
            if (td) {
                var txtValue = td.textContent;
                if (txtValue == facultyNameFilter) {
                tr[i].style.display = "";
                } else {
                tr[i].style.display = "none";
                }
            }       
        }
    }
}
function filterStudentByPrody(){
    let prodyName=document.querySelector("#selectProg").value;
    if (prodyName=="Magister Management" || prodyName=="Magister Filsafat" || prodyName=="Management" ||prodyName=="Akuntansi" || prodyName=="Pendidikan Agama" || prodyName=="Pendidikan Bahasa Inggris" || prodyName=="Pendidikan Ekonomi" || prodyName=="Pendidikan Luar Sekolah" || prodyName=="Filsafat" || prodyName=="Informatika" || prodyName=="Sistem Informasi" || prodyName=="Keperawatan" || prodyName=="Agronomi" || prodyName=="Sekretari") {
        var table = document.querySelector("#myTable");
        var tr = table.querySelectorAll("tr");
        for (var i = 0; i < tr.length; i++) {
            var td = tr[i].querySelectorAll("td")[4];
            if (td) {
                var txtValue = td.textContent;
                if (txtValue == prodyName) {
                tr[i].style.display = "";
                } else {
                tr[i].style.display = "none";
                }
            }       
        }
    }
}

//SHOW/HIDE FORM
function showHideForm() {        
    if(document.querySelector("#formAddStudent").classList.contains('collapse')){
        let collapseName = document.querySelector('#formAddStudent');
        collapseName.classList="show";
        document.querySelector('#showForm').innerHTML="Hide Form Add New Student";
    }else{
        let collapseName = document.querySelector('#formAddStudent');
        collapseName.classList="collapse";
        document.querySelector('#showForm').innerHTML="Show Form Add New Student";
    }
}
