document.addEventListener("DOMContentLoaded",()=>{
    //1. FETCH API Para consumir un json con un objeto "student.json"
    // getStudent();
    getStudents();
})

function getStudent(){
    fetch('../API/student.json')
       .then(response =>{
            return response.json();
            // console.log(response);
        })
        .then(data =>{
            // console.log(data);
            showOneStudent(data)
        })
}
function showOneStudent({idUsuario,nombre,carrera,sexo,jornada }){
    const contenedor = document.querySelector('tbody');
    const row =document.createElement("tr")
    row.innerHTML = `
    <td> ${idUsuario}</td>
    <td> ${nombre}</td>
    <td> ${carrera}</td>
    <td> ${sexo}</td>
    <td> ${jornada}</td>
    `;
    contenedor.appendChild(row)
}

function getStudents(){
    const url="../API/students.json";
    fetch(url)
        .then(response  =>{
            return response.json();
            // console.log(response);
        })
        .then(data =>{
            // console.log(data);
            showOneStudent(data);
        })
}
function showOneStudent(students){
    const contenedor = document.querySelector('tbody')
    students.forEach((student) => {
        const {idUsuario,nombre,carrera,sexo,jornada}=student 
        const rows = document.createElement('tr');
        rows.innerHTML=`
        
        <td> ${idUsuario}</td>
        <td> ${nombre}</td>
        <td> ${carrera}</td>
        <td> ${sexo}</td>
        <td> ${jornada}</td>
        `;
        contenedor 
    });
    
}