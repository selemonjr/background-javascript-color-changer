let btnEl = document.querySelector("#btn-el");
let colors = ["#FF7F50","#fff","#00FA9A","#FFD700","#00FF00","#6B8E23","#008080","#00BFFF"];
function color() {
    let numbers = Math.floor(Math.random() * 8)
    for(let i = 0; i < colors.length; i++) {
        let name = colors[numbers]
        return name
    }
}
console.log(color())
btnEl.addEventListener("click",function(){
    document.body.style.backgroundColor = color()
});