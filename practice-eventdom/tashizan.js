b = document.querySelector('button#calc');
b.addEventListener('click', enzan);
function enzan() {
    let x = document.querySelector('input[name="right"]');
    let y = document.querySelector('input[name="left"]');
    let right = x.value;
    let left = y.value;
    let r = Number(right);
    let l = Number(left);
    let answer = (r + l);
    let a = document.querySelector('span#answer');
    a.textContent = answer;
}