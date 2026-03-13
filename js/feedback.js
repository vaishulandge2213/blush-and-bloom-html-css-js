const stars = document.querySelectorAll(".star");
const reaction = document.getElementById("reaction");


stars.forEach(star => {
    star.addEventListener("click", () => {

        rating = star.getAttribute("data-value");

        stars.forEach(s => {
            s.classList.remove("active");
        });

        for (let i = 0; i < rating; i++) {
            stars[i].classList.add("active");
        }

        if(index==1) reaction.textContent="😠";
        if(index==1) reaction.textContent="😞";
        if(index==2) reaction.textContent="😐";
        if(index==3) reaction.textContent="😊";
        if(index==4) reaction.textContent="😍";

    });
 
});

document.getElementById("feedbackForm").addEventListener("submit", function (e) {

    e.preventDefault();



});
