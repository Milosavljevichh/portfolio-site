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
