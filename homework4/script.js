const listItems = document.querySelectorAll('#list li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        listItems.forEach(li => li.style.color = 'blue');
    });
});

const cats = ["Whiskers", "Felix", "Garfield", "Tom", "Simba"];
const catsList = document.getElementById('cats-list');

cats.forEach(cat => {
    const li = document.createElement('li');
    li.textContent = cat;
    catsList.appendChild(li);
});

const form = document.getElementById('myForm');
const input = document.getElementById('input');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    message.textContent = ''; 
    
    const value = input.value.trim();
    
    if (value === '') {
        message.textContent = 'Please Provide a Value';
        message.style.color = 'red';
    } else {
        message.textContent = 'Success';
        message.style.color = 'green';
    }
});
