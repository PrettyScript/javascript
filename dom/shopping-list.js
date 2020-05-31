const ul = document.querySelector('ul');
document.body.appendChild(ul);
const input = document.querySelector('input');
input.value = '';
const button = document.querySelector('button');

function buttonClicked() {
    console.log('button clicked');
    let currentValue = input.value;

    const listItem = document.createElement('li');
    const anotherButton = document.createElement('button');
    const span = document.createElement('span');

    span.innerHTML = currentValue;

    listItem.appendChild(span);
    listItem.appendChild(anotherButton);
    anotherButton.innerHTML = 'Delete';
    document.body.appendChild(listItem);

    ul.appendChild(listItem);

    anotherButton.addEventListener('click', deleteItem);
    input.focus();

    function deleteItem() {
        console.log('removed');
        listItem.parentNode.removeChild(listItem);
    
    }
    
    input.value = '';

}






