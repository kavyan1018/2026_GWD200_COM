// syntax of addEventListener

// element.addEventListener("btn");  // event type


const btn = document.getElementById("myButton");
document.write(btn);

btn.addEventListener("click", () => {
    btn.innerText = "Button Clicked";
})

btn.addEventListener("dblclick", () => {
    document.write("Button Double Clicked");
})


btn.addEventListener("mouseover", () => {

    btn.style.backgroundColor = "red";

})

const box = document.getElementsByClassName("box");

box[0].addEventListener("mouseover", () => {
    box[1].style.backgroundColor = "blue";
})

box[0].addEventListener("mouseout", () => {
    box[0].style.backgroundColor = "red";
})

box[1].addEventListener("mouseover", () => {
    box[1].style.backgroundColor = "green";
})