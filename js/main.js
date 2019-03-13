(() => {
    
    var textIndex = 1;
    
    let phil = document.querySelector(".phil"),
        unknown = document.querySelector(".unknown"),
        philButton = document.querySelector(".philip"),
        unknownButton = document.querySelector(".second"),
        arrowDown = document.querySelector(".oneA"),
        arrowUp = document.querySelector(".twoA");
        
    
    function showText(x) {
        var textScroll = document.querySelectorAll(".textSwap");
        if (x > textScroll.length) {
            //textIndex = 1;
            textIndex = 3;
            return false;
        }
        if (x < 1) {
            //textIndex = textScroll.length;
            textIndex = 1;
            return false;
        }
        for (i = 0; i < textScroll.length; i++) {
            textScroll.forEach(text => {
                text.classList.add("hidden");
            });
        }
        textScroll[textIndex-1].classList.remove("hidden");
    }
    
    unknown.classList.add("hidden");
    
    unknownButton.addEventListener("click", function() {
        phil.classList.add("hidden");
        unknown.classList.remove("hidden");
    });
    
    philButton.addEventListener("click", function() {
        phil.classList.remove("hidden");
        unknown.classList.add("hidden");
    });
    
    arrowDown.addEventListener("click", function() {
        showText(textIndex += 1); 
    });
    
    arrowUp.addEventListener("click", function() {
        showText(textIndex -= 1);
    });
    
    showText(textIndex);
    
})();
