/// menu tragol start 

const Open = document.getElementById("open");
const Close = document.getElementById("close");
const Menu = document.getElementById("menu");


Open.addEventListener("click", () => {
    if (Menu.classList.contains("d-none")) {
        Menu.classList.remove("d-none");
        Menu.classList.add("d-block");
        Close.style.display = "block";
        Open.style.display = "none";
       
    }
});

Close.addEventListener("click", () => {
    if (Menu.classList.contains("d-block")) {
        Menu.classList.remove("d-block");
        Menu.classList.add("d-none");
        Close.style.display = "none";
        Open.style.display = "block";
    }
});



const Faqopen = document.querySelectorAll(".btn-link");
const FaqClose = document.querySelectorAll(".collapse1");

Faqopen.forEach((FAQ, index) => {
    FAQ.addEventListener("click", () => {
        // Loop through all FaqClose elements and close them except the clicked one
        FaqClose.forEach((collapse, i) => {
            if (i !== index) {
                collapse.classList.add("collapse");  // Ensure all others are collapsed
                collapse.classList.remove("show");   // Remove the 'show' class for others
            }
        });

        // Toggle the clicked FAQ (index)
        const correspondingFaqClose = FaqClose[index];
        if (correspondingFaqClose.classList.contains("collapse")) {
            correspondingFaqClose.classList.remove("collapse");
            correspondingFaqClose.classList.add("show");
        } else {
            correspondingFaqClose.classList.add("collapse");
            correspondingFaqClose.classList.remove("show");
        }
    });
});

