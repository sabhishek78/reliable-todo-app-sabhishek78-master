function readInput(){
    let newTask=document.getElementById("input").value;
    console.log("new task= "+newTask);
    let pendingTasksDiv = document.getElementById('pendingTasks');
    let newTaskText = document.createTextNode(newTask);
    let newTaskElement=document.createElement('p');
    newTaskElement.appendChild(newTaskText);
    pendingTasksDiv.appendChild(newTaskElement);

}