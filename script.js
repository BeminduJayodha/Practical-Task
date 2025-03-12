document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded!");
    
    let currentIndex = 1;
    const totalSlides = 2;
    
    document.querySelectorAll(".slider-nav button").forEach((btn, index) => {
        btn.addEventListener("click", function() {
            if (index === 0 && currentIndex > 1) {
                currentIndex--;
            } else if (index === 1 && currentIndex < totalSlides) {
                currentIndex++;
            }
            document.querySelector(".slider-nav span").textContent = `${currentIndex} / ${totalSlides}`;
        });
    });
});
