<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/fontawesome.min.css" integrity="sha384-zIaWifL2YFF1qaDiAo0JFgsmasocJ/rqu7LKYH8CoBEXqGbb9eO+Xi3s6fQhgFWM" crossorigin="anonymous">
    <i class="fa-brands fa-angellist"></i>
    <link rel="stylesheet" href="./app.css"/>
    <title>Document</title>
</head>
<body>
  
    <header>
        <h1>My ToDo list</h1>
        <form id="Add-list">
            <input type="text" 
                   id="todo-input"
                   placeholder="Add ToDo list"/>
            <input 
                 type="submit"
                 id="new-task-submit"
                 value="Add Task"/>
        </form>
    </header>
    <main>

        <section class="task-list">
            <h2>Tasks</h2>

            <!-- <div id="tasks">
                <div class="task">
                    <div class="content">
                        <input type="text" 
                        class="text" 
                        value="item1" 
                        readonly/>
                    </div>
                    <div class="actions">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
            </div> -->

           
        </section>
    </main>
    
    
    <script src="./app.js"></script>
</body>
</html>