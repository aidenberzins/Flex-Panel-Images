

// Select element
const panels = document.querySelectorAll(".panel");
console.log(panels);
panels.forEach(function(panel){
  panel.addEventListener("mouseover", openpanel);
  panel.addEventListener("mouseout", closepanel);
})

// Add class on mouse over
function openpanel(panel) {
  this.classList.add('open')
  this.addEventListener("transitionend", function(){
      this.classList.add("opened");
  });
}
// Remove class on mouse over
function closepanel(panel) {
  this.classList.remove('open')
  this.addEventListener("transitionend", function(){
      this.classList.remove("opened");
  });
}
