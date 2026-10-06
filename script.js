let one_btn = document.querySelector(".one_btn");
let one_table = document.querySelector(".one_table");

one_btn.addEventListener("click", () => {
    one_btn.classList.toggle("on");
    one_table.classList.toggle("on");
});

let two_btn = document.querySelector(".two_btn");
let two_table = document.querySelector(".two_table");

two_btn.addEventListener("click", () => {
    two_btn.classList.toggle("on");
    two_table.classList.toggle("on");
});

//btn_array 생성

let btn_array = [];
for(let i = 0; i < 3; i++) {
    btn_array.push(`document.querySelector(".btn${i+1}")`);
}

//table_array 생성

let table_array = [];
for(let i = 0; i < 3; i++) {
    
}
