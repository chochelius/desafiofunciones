let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    div1.style.backgroundColor = 'yellow';
    div2.style.backgroundColor = 'blue';
    div3.style.backgroundColor = 'red';
    div4.style.backgroundColor = 'green';
    } else if (event.key === 's') {
    div1.style.backgroundColor = 'blue';
    div2.style.backgroundColor = 'yellow';
    div3.style.backgroundColor = 'green';
    div4.style.backgroundColor = 'red';
    } else if (event.key === 'd') {
    div1.style.backgroundColor = 'green';
    div2.style.backgroundColor = 'red';
    div3.style.backgroundColor = 'blue';
    div4.style.backgroundColor = 'yellow';
    }
});