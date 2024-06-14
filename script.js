let picContainer = document.getElementById("about-pics");
let pics = picContainer.querySelectorAll('img');

let i = -1; 
function timeout() {setTimeout(
     () => {
         
         if (i > 8) {
            i=0;
        } else {
            i++;
        }

        if (pics[i-1]) {
            pics[i-1].classList.remove('grow');
        }
        if (pics[i]) {
            pics[i].classList.add('grow');
        }
        

        timeout();
    }, 1000)
};
timeout()

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
