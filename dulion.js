const { jsx } = require("react/jsx-runtime");

function openModal(serviceName, imageSrc) {
    modal.style.display = "block";
    title.innerText = serviceName;

    // NEW ADDITION: show image
    document.getElementById("serviceImage").src = imageSrc;

    if(serviceName === "Book Printing"){
        pricing.innerHTML = `
            <p>10-20: ₦7,000 <button class="order-btn">Order</button></p>
            <p>30-40: ₦12,000 <button class="order-btn">Order</button></p>
            <p>50-100: ₦20,000 <button class="order-btn">Order</button></p>
            <p>100-200: ₦35,000 <button class="order-btn">Order</button></p>
        `;
    }
    else if(serviceName === "Book Design"){
        pricing.innerHTML = `
            <p>10-20: ₦4,000 <button class="order-btn">Order</button></p>
            <p>30-40: ₦7,000 <button class="order-btn">Order</button></p>
            <p>50-100: ₦12,000 <button class="order-btn">Order</button></p>
        `;
    }


    else if(serviceName === "T-Shirt Printing"){
        pricing.innerHTML = `<p>₦5,000 – ₦8,000</p>`;
    }


    else if(serviceName === "Hoodie Printing"){
        pricing.innerHTML = `<p>₦10,000 – ₦18,000</p>`;
    }

    else if(serviceName === "Mug Printing"){
        pricing.innerHTML = `<p>₦3,000 – ₦5,000</p>`;
    }

    else if(serviceName === "Flyers Printing"){
        pricing.innerHTML = `<p>₦15,000 – ₦30,000 (1000 copies)</p>`;
    }

    else if(serviceName === "Roll-up Banner"){
        pricing.innerHTML = `<p>₦25,000 – ₦45,000</p>`;
    }
    
    else {
        pricing.innerHTML = `
            <p>10-20: ₦5,000 <button class="order-btn">Order</button></p>
            <p>30-40: ₦8,000 <button class="order-btn">Order</button></p>
            <p>50-100: ₦15,000 <button class="order-btn">Order</button></p>
        `;
    }



} 


function toggleDropdown(button) {

    const currentDropdown =
        button.nextElementSibling;

    const currentArrow =
        button.querySelector(".arrow");

    const allDropdowns =
        document.querySelectorAll(".dropdown-content");

    const allArrows =
        document.querySelectorAll(".arrow");

    allDropdowns.forEach(dropdown => {

        if(dropdown !== currentDropdown){
            dropdown.style.display = "none";
        }

    });

    allArrows.forEach(arrow => {
        if(arrow !== currentArrow){
            arrow.style.transform = "rotate(0deg)";
        }
    });

    if(currentDropdown.style.display === "block"){

        currentDropdown.style.display = "none";
        currentArrow.style.transform = "rotate(0deg)";

    } else {

        currentDropdown.style.display = "block";
        currentArrow.style.transform = "rotate(180deg)";
    }
}