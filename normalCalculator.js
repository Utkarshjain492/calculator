const input1 = document.querySelector('#ip1');
const input2 = document.querySelector('#ip2');
const head = document.querySelector('#heading');

const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const mul = document.querySelector('#mul');
const div = document.querySelector('#div');

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