const head = document.querySelector('#heading');
const input1 = document.querySelector('#ip1');
const input2 = document.querySelector('#ip2');
const opr = document.querySelector('.operators');
const equ = document.querySelector('.equal');

const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const mul = document.querySelector('#mul');
const div = document.querySelector('#div');
const reset = document.querySelector('#reset');

const result = document.querySelector('#result');

add.addEventListener('click', () => {
    res = Number(input1.value) + Number(input2.value);
    result.innerHTML = res;
});

sub.addEventListener('click', () => {
    res = Number(input1.value) - Number(input2.value);
    result.innerHTML = res;
});

mul.addEventListener('click', () => {
    res = Number(input1.value) * Number(input2.value);
    result.innerHTML = res;
});

div.addEventListener('click', () => {
    res = Number(input1.value) / Number(input2.value);
    result.innerHTML = res;
});

reset.addEventListener('click', () => {
    input1.value = ('');
    input2.value = ('');
    result.innerHTML = ('Result will show here');
});