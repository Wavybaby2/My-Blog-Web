let toggle_btn;
let big_wrapper;

function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
}
const main = document.querySelector("main");
declare();
let dark = false;
function toggleAnimation() {
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if(dark === true){
        clone.classList.remove("Light");
        clone.classList.add("dark");
    }
    else{
            clone.classList.remove("dark");
            clone.classList.add("Light");
        }
        clone.classList.add("copy");
    main.appendChild(clone);

        //document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
       // document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    });
}
function events() {
    toggle_btn.addEventListener('click', toggleAnimation);
}
    events();