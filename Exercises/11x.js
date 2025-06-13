const todoList1 = [];
      const todoList2 = [];

      function addTodo1(){
        const inputElement1 = document.querySelector('.js-name-input-1');
        const name1 = inputElement1.value;
        todoList1.push(name1); // buat push value ke array
        console.log(todoList1);

        inputElement1.value = ''; // input kosong lagi stlh klik tombol add
      }

      function addTodo2(){
        const inputElement2 = document.querySelector('.js-name-input-2');
        const name2 = inputElement2.value;
        todoList2.push(name2); // buat push value ke array
        
        let todoListHTML = '';
        for(let i = 0; i < todoList2.length; i++){
          const todo2 = todoList2[i];
          const html = `<p>${todo2}</p>`; // generate html
          todoListHTML += html;
        }

        document.querySelector('.js-list2')
          .innerHTML = todoListHTML;

        inputElement2.value = ''; // input kosong lagi stlh klik tombol add
      }

      const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
      renderTodoList(); // menampilkan data yg sudah disimpan

      function renderTodoList(){
        let todoListHTML = '';

        for(let i = 0; i < todoList.length; i++){
          const todoObject = todoList[i];
          // const name = todoObject.name;
          // const dueDate = todoObject.dueDate;
          const {name, dueDate} = todoObject;
          const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-button" onclick="
              todoList.splice(${i}, 1);
              renderTodoList();
            ">Delete</button>      
          `;
          todoListHTML += html;
        }

        document.querySelector('.js-todo-list')
          .innerHTML = todoListHTML; 
      }

      function addTodoFix(){
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value;
        
        const dateInputElement = document.querySelector('.js-due-date-input');
        const dueDate = dateInputElement.value;

        // todoList.push({name: name, dueDate: dueDate});
        todoList.push({name, dueDate}); // shorcut, karena nama property dan nama variablenya sama
        
        inputElement.value = '';
        dateInputElement.value = '';

        renderTodoList();
        saveToStorage();
      }

      function saveToStorage(){
        localStorage.setItem('todoList', JSON.stringify(todoList));
      }

      