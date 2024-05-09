const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list= document.querySelector('id="list"');
const li = document.createElement('li');

const deletebutton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

addButton.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(deleteButton);

        list.appendChild(li);

        input.value = '';

        input.focus();
    } else {
        alert('Please enter a chapter.');
        input.focus();

    }
});