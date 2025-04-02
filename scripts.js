function scroll(elementId){
    document.getElementById(elementId).addEventListener("click", function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}