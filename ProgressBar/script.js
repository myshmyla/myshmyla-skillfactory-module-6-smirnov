const execute = e => {
const progress = document.getElementById('progress');
progress.style.width = (parseInt(progress.style.width) + parseInt(e.target.dataset.value)) + '%'
}
 
let buttons = document.getElementsByTagName('button');
[].forEach.call(buttons, (button) => {
button.onclick = execute;
})

