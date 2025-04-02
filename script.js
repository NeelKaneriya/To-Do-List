// firstcretedElement
const taskInput = document.getElementById('taskInput');
        const tasksContainer = document.getElementById('tasks');
        const completedContainer = document.getElementById('completed');
        const deletedContainer = document.getElementById('deleted');

        const clearbtn = document.getElementById('clear-btn')

        
// Arrayto store the task
        const completedTasks = [];
        const deletedTasks = [];
// adding new task
        function addTask() {
            const text = taskInput.value.trim();
            if (text == '') {
                alert('Please Enter Task');
                return;
            }
            
            let newele = document.createElement('div');
            newele.classList.add('task');
            newele.innerHTML = `
                <span class="task-text">${text}</span>
                <div class="task-buttons">
                    <button class="com_btn">Complete</button>
                    <button class="del_btn">Delete</button>
                </div>`;
            tasksContainer.appendChild(newele);
            taskInput.value = '';
        }
// add events
        tasksContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('com_btn')) {
                let elem = event.target.closest('.task');
                completedTasks.push(elem);
                elem.remove();
            }
            if (event.target.classList.contains('del_btn')) {
                let elem = event.target.closest('.task');
                deletedTasks.push(elem);
                elem.remove();
            }
        });
// tooglesection
        function toggleSection(section) {
            const container = section == 'completed' ? completedContainer : deletedContainer;
            const tasksArray = section == 'completed' ? completedTasks : deletedTasks;
            
            if (tasksArray.length > 0) {
                tasksArray.forEach((elem) => {
                    elem.querySelectorAll('button').forEach(btn => btn.remove());
                    if (section == 'completed') {
                        let deleteBtn = document.createElement('button');
                        deleteBtn.textContent = 'Delete';
                        deleteBtn.classList.add('del_btn');
                        deleteBtn.onclick = () => {
                            deletedTasks.push(elem);
                            elem.remove();
                        };
                        elem.querySelector('.task-buttons').appendChild(deleteBtn);
                    }
                    container.appendChild(elem);
                });
                tasksArray.length = 0;
            }
        }

        clearbtn.addEventListener('click', ()=>{  
            // deletedTasks.length = 0
            console.log(deletedTasks, 'deleted task');
            
            // deletedTasks = []
            deletedContainer.innerHTML = ''
        })