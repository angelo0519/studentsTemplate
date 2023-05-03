document.addEventListener("DOMContentLoaded",()=>{
    //1. FETCH API Para consumir un json con un objeto "student.json"
    // getStudent();
    //2.FETCH API para consumir un JSON con un array de objetos 
    //getStudents();
    //3. FETCH API para consumir un JSON desde una WEB API publicada en internet 
    getStudentFromPublicApi()
})
    //1. FETCH API Para consumir un json con un objeto "student.json"

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
    //2.FETCH API para consumir un JSON con un array de objetos 

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
        const {id_usuario,nombre,programa,sexo,jornada}=student 
        const rows = document.createElement('tr');
        rows.innerHTML=`
        
        <td> ${id_usuario}</td>
        <td> ${nombre}</td>
        <td> ${programa}</td>
        <td> ${sexo}</td>
        <td> ${jornada}</td>
        `;
        contenedor.appendChild(rows)
    });
    
}

    //3. FETCH API para consumir un JSON desde una WEB API publicada en internet 
async function getStudentFromPublicApi(){
    const url="https://vermenmasterchief.tk/estudiantes.php";
    try {
        const response = await fetch(url);
        const data = await response.json();
        showOneStudent(data.datos)

    } catch (error) {
        console.log(error);        
    }
}
    // fetch(url)
    //     .then(response  =>{
    //         return response.json();
    //         // console.log(response);
    //     })
    //     .then(data =>{
    //         showOneStudent  (data.datos);
    //         console.log(data);
    //     })
    