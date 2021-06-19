var chec = document.querySelector("#check");
const menu = document.querySelector("#menu");

menu.addEventListener ("click", function ck(op){
    op.checked = false;
    ck(chec);
});
