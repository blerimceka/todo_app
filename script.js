var button = document.getElementById("button");

button.addEventListener('click', function(){
    var input = document.getElementById("addTodo").value;
    var ul = document.getElementById("todos");
    var li = document.createElement("li");
    var text = document.createTextNode(input);

    li.appendChild(text);
    li.classList.add("list-group-item");

    if(input === ""){
        document.getElementById("error").innerHTML = "You must write something";
    }else{
        //krijimi i buttonit mbrenda <li>
        var btnli = document.createElement("button");
        btnli.classList.add("btn");
        btnli.classList.add("btn2");
        
        //krijimi i iconave mbrenda <button>
        var icon = document.createElement("i");
        icon.classList.add("fa");
        icon.classList.add("fa-check-circle");
        btnli.appendChild(icon);

        li.appendChild(btnli);
        ul.appendChild(li);

    }
    btnli.addEventListener('click', function(){
        alert("Completed!!!!");
        li.style.display = "none";
    })

    document.getElementById("addTodo").value = "";
    
})

