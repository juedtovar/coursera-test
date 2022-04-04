var Student = {
    name: "",
    type: "student"
};

document.addEventListener('DOMContentLoaded',contentLoaded);

function contentLoaded(event){
    document.getElementById('fullname').addEventListener("keyup",keyUp);
}

function keyUp(event){
    calculateNumericOutput();
}

function calculateNumericOutput(){
    Student.name = document.getElementById('fullname').value;

    var totalNameValue = 0;
    for (var i=0; i<Student.name.length;i++){
        totalNameValue += Student.name.charCodeAt(i);
    }

    var output = "Total Numeric value of person´s name is " + totalNameValue;
    document.getElementById('output').innerText = output; 
}