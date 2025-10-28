//buttonScript.js
function displayMessage() {
    alert('Hello')
}

function addParagraph() {
    const newElement = document.createElement('p');
    newElement.textContent = 'New Paragraph';
    document.querySelector('.container').appendChild(newElement);
}

function removeParagraph() {
    document.querySelector('.container').children[document.querySelector('.container').children.length-1].remove();
}