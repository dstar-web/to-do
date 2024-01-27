//const todolist=[];
const list2 = [{
    name:'',
    duedate:''
}];
//display();
//rendertodolist();
/*
function rendertodolist(){
    let todolisthtml='';
    for (let i=0;i<todolist.length;i++){
        const todo = todolist[i];
        const html = `
        <p>
         ${todo}
        <button onclick=
         "todolist.splice(${i},1); 
         rendertodolist();
         ">Delete</button>
        </p>
        `;
        todolisthtml+=html;
    }
    document.querySelector('.js-todo-list').innerHTML = todolisthtml
    console.log(todolisthtml);
}


function addtodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name = inputElement.value;
    todolist.push(name);
    console.log(todolist);
    inputElement.value='';
    //rendertodolist();

}
*/
function displaytodo(){
    const displayElement=document.querySelector('.js-input-display');
    const task = displayElement.value;
    const duedateInput = document.querySelector('.js-due-date-input');
    const duedate = duedateInput.value;
    list2.push({
        name: task,
        duedate: duedate
    });
    //console.log(list2);
    displayElement.value='';
    display();
}


function display(){
let show = '';
    for (let i=0 ;i<list2.length;i++){
        const todo = list2[i];
        const {name,duedate} = todo;
        const html = `
            <div>${name}</div>
            <div>${duedate}</div>
            <button onclick="
                list2.splice(${i},1);
                display();
            " class="delete-button">Delete</button>
        `;
        show+=html;
    }
    document.querySelector('.todolist').innerHTML = show
}
