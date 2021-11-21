const btns = document.querySelectorAll('.nav-item')
console.log(btns)

for (let i = 0; i < btns.length; i++) {
    console.log();
    btns[i].addEventListener('click', function click(){
        console.log(i)
    })
}