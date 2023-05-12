let h = document.getElementById('h');
let m = document.getElementById('m');
let s = document.getElementById('s');

function displaytime(){



    let date = new Date();
    let hh =date.getHours();
    let mm =date.getMinutes();
    let ss =date.getSeconds();

    let hrotation = 30*hh + mm/2;
    let mrotation = 6*mm;
    let srotation = 6*ss;

    h.style.transform = `rotate(${hrotation}deg)`;
    m.style.transform = `rotate(${mrotation}deg)`;
    s.style.transform = `rotate(${srotation}deg)`;
}

setInterval(displaytime,1000);