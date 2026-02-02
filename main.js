let tasks = [];

let intext = document.getElementById("input");

function showTask() {
    let intextvalues = intext.value;
    
    if (intextvalues === "") {
        alert("No Tasks");
        li.classList.remove("li")
    }
    
    tasks.push(intextvalues);
    intext.value = "";
    
    let li = document.createElement("li");
    let ul = document.getElementById("ul");
    li.textContent = intextvalues;  
    ul.append(li);
    
    // console.log(intextvalues);
}
