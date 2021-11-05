// Write your code here!
const main = document.querySelector('main');
main.remove('main');


let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'victory';
document.body.appendChild(newHeader);

newHeader.innerHTML = "YOUR-NAME is the champion";
