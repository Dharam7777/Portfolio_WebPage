let navbar=document.querySelector("nav");
let val;
window.onscroll=function(){
    if(document.documentElement.scrollTop >19)
    {
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

