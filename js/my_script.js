var tab_one = document.getElementById("tab-1"), tab_content_one = document.getElementById("tab-1-content");
var tab_two = document.getElementById('tab-2'), tab_content_two = document.getElementById("tab-2-content");
var tab_three = document.getElementById('tab-3'), tab_content_three = document.getElementById("tab-3-content");

function tab_1() {
    tab_one.classList.add("tab-border");
    tab_content_one.classList.add("show");
    tab_two.classList.remove("tab-border");
    tab_content_two.classList.remove("show");
    tab_three.classList.remove("tab-border");
    tab_content_three.classList.remove("show");
}
function tab_2() {
    tab_one.classList.remove("tab-border");
    tab_content_one.classList.remove("show");
    tab_two.classList.add("tab-border");
    tab_content_two.classList.add("show");
    tab_three.classList.remove("tab-border");
    tab_content_three.classList.remove("show");
}
function tab_3() {
    tab_one.classList.remove("tab-border");
    tab_content_one.classList.remove("show");
    tab_two.classList.remove("tab-border");
    tab_content_two.classList.remove("show");
    tab_three.classList.add("tab-border");
    tab_content_three.classList.add("show");
}

tab_one.addEventListener('click', tab_1);
tab_two.addEventListener('click', tab_2);
tab_three.addEventListener('click', tab_3);