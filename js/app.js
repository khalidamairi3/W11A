var hover = document.getElementById("hover");
hover.addEventListener("mouseover" ,function(){
    hover.style.color = "red";
})

var click = document.getElementById("click");
click.addEventListener("click", function(){
    click.style.fontSize = "48px";
});


document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      document.getElementById("space").innerHTML = "<h2> Space is pressed </h2>";
    }
  })