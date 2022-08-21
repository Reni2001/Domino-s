window.onload = function() {
    var incrementBTN = document.getElementsByClassName("plus");
    var decrementBTN = document.getElementsByClassName("minus");
    var confirmOrder = document.getElementsByClassName("order");

    // console.log(incrementBTN);
    // console.log(decrementBTN);
    // console.log(confirmOrder);

    for(var i = 0; i<confirmOrder.length; i++){
        var notification = confirmOrder[i];
        notification.addEventListener('click',()=>{
            alert("Your order has been sucessfully placed!");
        });
    }

    for(var i = 0; i < incrementBTN.length; i++) {
        var button = incrementBTN[i];
        button.addEventListener("click",function(event){
            var btnClicked = event.target;
            // console.log(btnClicked);
            var input = btnClicked.parentElement.children[1];
            //console.log(input); 
            var inputValue = input.value;
            // console.log(inputValue);
            var newValue = parseInt(inputValue) + 1;
            //console.log(newValue); 
            input.value = newValue;
        });
    }

    for(var i = 0; i < decrementBTN.length; i++) {
        var button = decrementBTN[i];
        button.addEventListener("click",function(event){
            var btnClicked = event.target;
            // console.log(btnClicked);
            var input = btnClicked.parentElement.children[1];
            //console.log(input); 
            var inputValue = input.value;
            // console.log(inputValue);
            var newValue = parseInt(inputValue) - 1;
            // console.log(newValue);
            if(newValue >= 0) {
                
                input.value = newValue;
            } else {
                input.value = 0;
            }
        });
    }
}


function scrollToDeals() {
    const ourStory = document.getElementById("divFirst");
    ourStory.scrollIntoView();

}
function scrollTooffer() {
    const ourStory = document.getElementById("offer");
    ourStory.scrollIntoView();
}
function scrollTomenu() {
    const ourStory = document.getElementById("menu");
    ourStory.scrollIntoView();
}
function scrollTofeedback() {
    const ourStory = document.getElementById("feedback");
    ourStory.scrollIntoView();

}
function scrollTocontact() {
    const ourStory = document.getElementById("footer");
    ourStory.scrollIntoView();

}
