//btn_array 작성
let btn_array = [];
for(let i = 0; i < 3; i++) {
    btn_array.push(`document.querySelector(".btn${i+1}")`);
}

//table_array 생성

let table_array = [];
for(let i = 0; i < 3; i++) {
    table_array.push(`document.querySelector(".table${i+1}")`);
}

for (let i = 0; i < btn_array.length; i++) {
    btn_array[i].addEventListener("click", ()=> {
        table_array[i].classList.toggle("on");
    });
}
