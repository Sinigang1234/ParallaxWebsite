const parallax_el = document.querySelectorAll(".parallax"); //parallax from CSS

let xValue = 0, yValue = 0;



window.addEventListener("mousemove", (e) => { //Mouse Movement
    xValue = (e.clientX - window.innerWidth / 2) ; // Adjust multiplier as needed
    yValue = (e.clientY - window.innerHeight / 2) ; // Adjust multiplier as needed

    parallax_el.forEach((el) => {
        let speedx = parseFloat(el.getAttribute('data-speedx'));
        let speedy = parseFloat(el.getAttribute('data-speedy')); // Get the speedx attribute as a number
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * 0.3; // Adjust multiplier as needed

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedx}px)) 
        perspective(3800px) translateZ(${zValue}px)`;
    });
});
