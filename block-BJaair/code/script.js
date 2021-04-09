let form=document.querySelector('form');
let ul=document.querySelector('ul');

//collection of data
let collection=JSON.parse(localStorage.getItem('cards'))||[];


form.addEventListener('submit', event => {
    event.preventDefault();
   let title=event.target.elements.title.value;
   let catigory=event.target.elements.catigory.value
   collection.push({title,catigory});
   localStorage.setItem('cards',JSON.stringify(collection))
   createUI(collection,ul)
 });

 function createUI(collection,root=ul){
     root.innerText='';
       /*
    basic aproach is everytime you run a forEach loop>
     you take in the values of title and catigory>
     and you append it to the DOM.. this is expensive
     so you can use documentFragment();
     here we append everything to documentFragment() and then 
     we append documentFragment to the root.
     so instead of dom getting manupilated n times it will get changed 
     only once
    */
    let fragment=new DocumentFragment();
//collection is a array of objects so run a forEach on it:)
collection.forEach((tile,index)=>{
    //each tile is one collection of {title,catigory}
    let li=document.createElement('li');
    let p=document.createElement('p');
    p.addEventListener('dblclick',(event)=>replaceC(tile.catigory,event,index))
    p.innerText=tile.catigory;
    let h2=document.createElement('h2');
    h2.innerText=tile.title;
    h2.addEventListener('dblclick',(event)=>replaceT(tile.catigory,event,index))
    li.append(p,h2)
    fragment.appendChild(li)
})
    root.append(fragment)
 }


 function replaceC(catig,event,index){
    //get element you want to replace
    let elem=event.target;
    //create input element
    let input=document.createElement('input')

    //replace text with input element 
    let parent=event.target.parentElement;
    parent.replaceChild(input,elem);

    //add current value in input element
    input.value=catig;//placeholder

    input.addEventListener("keyup",(event)=>{
        if(event.keyCode===13){
           let newVal= event.target.value;
           console.log(newVal);
           //update collection with the new value
           collection[index].catigory=newVal;
           //call createUi again
           createUI(collection,ul);
        }
    })


console.log(event.target.innerText);
}

function replaceT(catig,event,index){
    //get element you want to replace
    let elem=event.target;
    //create input element
    let input=document.createElement('input')

    //replace text with input element 
    let parent=event.target.parentElement;
    parent.replaceChild(input,elem);

    //add current value in input element
    input.value=catig;//placeholder

    input.addEventListener("keyup",(event)=>{
        if(event.keyCode===13){
           let newVal= event.target.value;
           console.log(newVal);
           //update collection with the new value
           collection[index].title=newVal;
           //call createUi again
           createUI(collection,ul);
        }
    })


console.log(event.target.innerText);
}
 createUI(collection,ul)