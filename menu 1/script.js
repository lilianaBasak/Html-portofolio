const menuToggler=document.querySelector(".menuToggler")
const navigation = document.querySelector(".navigation")
menuToggler.onclick=function(){
    navigation.classList.toggle("open")
}
const list= document.querySelectorAll(".list")
function activatelink(){
    list.forEach((item)=>
    item.classList.remove("active")) 
    this.classList.add("active")
}
list.forEach((item)=>
item.addEventListener("click",activatelink)
)
