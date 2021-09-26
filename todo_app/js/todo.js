/*this function gets the task from input*/
function get_todos() {
    /*this creates an array of tasks that are inputed*/
    var todos = new Array;
    /*this pulls the task that was saved in the b\web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /* if the input is not null the JSON.parse will
    communicate with the web browser to make the task a JavaScript object. */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*This function adds the inputed task to the get_todos function array*/
function add() {
    /*This takes the inputed task and creates a varible of it*/
    var task = document.getElementById("task").value;

    var todos = get_todos();
    /*This adds a new task the end of the arrat*/
    todos.push(task);
    /*this converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/*this function keeps the tasks permanetly displayed on the screem*/
function show() {
    /*this sets the task that was retrieved as a variable*/
    var todos =get_todos();

    /*this sets up each task as an unorlered list*/
    var html ='<ul>';
    /*This displays a task to the list in the order that it is inputed*/
    for (var i = 0; i<todos.length; i++) {
        /*this also displays the task as a list and creats the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    /* this displays the task as a list*/
    document.getElementById(todos).innerHTML = html;

    /*This tells the browser how to display the todo
    array after an item has been removed*/
    var buttons = document.getElementsByClassName('remove');
    for (var i =0; i <buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };

}

/*This displays the inputed task when the 'Add Item buttin is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this will keep the inputs displayed permantaly on the screen*/
show();

/*this creates the functionality of removing a todo item from the array*/
function remove() {
    var id =this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*this looks in the  show() how to display a removed item from the screen */
    show();

    return false;
}