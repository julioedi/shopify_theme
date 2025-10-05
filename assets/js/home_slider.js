const products_slider = document.querySelector("#products_slider");
const products_slider_content = document.querySelector("#products_slider .content_products");
if (products_slider && products_slider_content) {
    let index = 0;
    let length = products_slider.querySelectorAll(".product").length
    const left = document.createElement("div");
    left.className = "mso nav_icon prev";
    left.setAttribute("data-icon","chevron_backward");
    products_slider.appendChild(left);
    left.addEventListener("click",() =>{
        const scroll = products_slider.clientWidth;
        index = index < 1 ? length - 1 : index - 1;
        products_slider_content.scrollTo({
            left: scroll * index,
            behavior:"smooth",
        })
    });


    const right = document.createElement("div");
    right.className = "mso nav_icon next";
    right.setAttribute("data-icon","chevron_forward");
    products_slider.appendChild(right);
    right.addEventListener("click",() =>{
        const scroll = products_slider.clientWidth;
        index = index >= length - 1  ? 0 : index + 1;
        products_slider_content.scrollTo({
            left: scroll * index,
            behavior:"smooth",
        })
    });
}