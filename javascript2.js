var img = document.getElementById("img");

img.addEventListener("mouseover", function(){
    this.src = "2.jpg";
})
img.addEventListener("mouseout", function(){
    this.src = "1.jpg";
})