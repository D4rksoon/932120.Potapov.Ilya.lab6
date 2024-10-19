document.addEventListener("DOMContentLoaded", function() {  
    document.querySelector(".button1").addEventListener("click", function (){
        document.querySelector(".right_img img").style.display = "none";
        document.querySelector(".left_img img").style.cssText = "width: 75%";
        document.querySelector(".left_img").style.cssText = "width: 100%";
        document.querySelector(".right_img").style.width = "30px";
    });
    document.querySelector(".button2").addEventListener("click", function (){
        document.querySelector(".left_img img").style.cssText = "width: 100%";
        document.querySelector(".right_img img").style.cssText = "width: 100%";
        document.querySelector(".right_img").style.width = "calc(50% - 30px)";
        document.querySelector(".left_img").style.width = "calc(50% - 30px)";
    });
    document.querySelector(".button3").addEventListener("click", function (){
        document.querySelector(".left_img img").style.display = "none";
        document.querySelector(".right_img img").style.cssText = "width: 75%";
        document.querySelector(".right_img").style.cssText = "width: 100%";
        document.querySelector(".left_img").style.width = "30px";
    });
});