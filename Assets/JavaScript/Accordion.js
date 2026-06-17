var acc = document.getElementsByClassName("accordion");
var i;

//Set up Open
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    var panel = this.nextElementSibling; /*It will change the state of the  element below the botton*/
    if (panel.style.display === "block") {
      panel.style.display = "none";
       this.classList.remove("js-active");
    } else {
      panel.style.display = "block";
       this.classList.add("js-active");
    }
    console.log("acc:" + i);
  });
}

//Set up collapse
var col = document.getElementsByClassName("collapse");
for (i = 0; i < col.length; i++) {
  col[i].addEventListener("click", function() {
   var panel = this.parentElement;
   
   panel.style.display = "none";

    panel.previousElementSibling.classList.remove("js-active");
    
    console.log("col:" + i);
  });
}