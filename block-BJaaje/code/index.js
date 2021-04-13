const draggable=document.querySelectorAll(".draggable");
const dropable=document.querySelectorAll(".droppable");
//draggable events 
draggable.forEach(elem=>{
elem.addEventListener("dragstart",dragStart)
elem.addEventListener("dragend",dragEnd)
});


function dragStart(e){
    //saveID
    e.dataTransfer.setData("id",e.target.id)
}
function dragEnd(){
    //if draggable==dropable use id to set opacity to 0.5 and draggable to false
}
//dropable events
dropable.forEach(elem=>{
    elem.addEventListener("dragenter",dragEnter)
    elem.addEventListener("dragover",dragOver)
    elem.addEventListener("dragleave",dragleave)
    elem.addEventListener("drop",dragDrop)
})

function dragEnter(e){
    if(e.target.getAttribute("data-draggable-id")!=null){
 e.dataTransfer.setData("val",e.target.getAttribute("data-draggable-id"))
    }   
};
function dragOver(e){
    e.preventDefault();
}
function dragleave(e){

}

function dragDrop(e){

    const idVal=e.dataTransfer.getData("id");
    const valBox=e.dataTransfer.getData("val");
    console.log("val1:",valBox,"val2:",idVal);
   if(valBox===idVal){
    console.log(valBox,idVal);
     // <i class="fab fa-whatsapp draggable" draggable="true" id="whatsapp"></i>
    const i= document.createElement('i')
    i.classList.add("fab")
    i.classList.add(`fa-${e.dataTransfer.getData("id")}`)
    i.classList.add("draggable-newLoc")
    e.target.setAttribute("draggable","false");
    e.target.setAttribute("id",`${e.dataTransfer.getData("id")}`);
    e.target.innerHTML=""
    e.target.append(i)
   }
   console.log(valBox,idVal);
   // <i class="fab fa-whatsapp draggable" draggable="true" id="whatsapp"></i>
  const i= document.createElement('i')
  i.classList.add("fab")
  i.classList.add(`fa-${e.dataTransfer.getData("id")}`)
  i.classList.add("draggable-newLoc")
  e.target.setAttribute("draggable","false");
  e.target.setAttribute("id",`${e.dataTransfer.getData("id")}`);
  e.target.innerHTML=""
  e.target.append(i)

}