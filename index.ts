let bmw = document.querySelector(".f30");
let nissan = document.querySelector(".gtr");

function movePlayer(element, incrX, incrY) {
    let x = Number(element.getAttribute('data-x')) + incrX;
    let y = Number(element.getAttribute('data-y')) + incrY;
    if (incrX > 0) {
        element.style.transform = " translate(".concat(x, "px, ").concat(y, "px) scaleX(1)");
    }
    else {
        element.style.transform = " translate(".concat(x, "px, ").concat(y, "px) scaleX(-1)");
    }
    element.setAttribute('data-x', x.toString());
    element.setAttribute('data-y', y.toString());
}
window.addEventListener('keydown', function (e){
     if (bmw !== null) {
        if (e.key === 'ArrowRight') {
            bmw.classList.add('caminar');
            movePlayer(bmw, 10, 0);
        }
        else if (e.key === 'ArrowLeft') {
            bmw.classList.add('caminar');
            movePlayer(bmw, -10, 0);
        }else if(e.key === 'ArrowDown'){
            bmw.classList.add('caminar')
            movePlayer(bmw, 0, 10)
        }else if(e.key === 'ArrowUp'){
            bmw.classList.add('caminar')
            movePlayer(bmw, 0, -10)
        }
}
     if (nissan !== null) {
        if (e.keyCode === 68) {
            nissan.classList.add('caminar');
            movePlayer(nissan, 10, 0);
        }
        else if (e.keyCode === 65) {
            nissan.classList.add('caminar');
            movePlayer(nissan, -10, 0);
        }else if(e.keyCode === 83){
            nissan.classList.add('caminar')
            movePlayer(nissan, 0, 10)
        }else if(e.keyCode === 	87){
            nissan.classList.add('caminar')
            movePlayer(nissan, 0, -10)
        }
    }
});
window.addEventListener('keyup', function (e) {
    if (bmw !== null) {
        bmw.classList.remove('caminar');
    }
        if (nissan !== null) {
        nissan.classList.remove('caminar');
    }
});
