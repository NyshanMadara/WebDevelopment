// CODE EXPLAINED channel

// Select the Elements
const list = document.getElementById("list");
const input = document.getElementById("input");
const addBtn = document.getElementById("add-task-btn");


// Classes names
const CHECK = "fa-check-square";
const UNCHECK = "fa fa-square-o";


// Variables
let LIST, id;

// add to do function
function addToDo(toDo, id, done, trash){
    
    if(trash){ return; }
     
    const DONE = done ? CHECK : UNCHECK;
       
    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;
    
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}

addBtn.addEventListener("click", function(){
    const toDo = input.value;  

    if(toDo){
        addToDo(toDo, id, false, false);
        
        LIST.push({
            name : toDo,
            id : id,
            done : false,
            trash : false
        });
            id++;
    }

    input.value = "";
});

// add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        
        // if the input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);
            
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });

            id++;
        }

        input.value = "";
    }
    
});

// complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
}

// remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;
}

// target the items created dynamically
list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete
    
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }

     
});


















