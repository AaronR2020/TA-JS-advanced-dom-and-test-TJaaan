let form=document.querySelector("form");
let ul=document.querySelector("ul");
let cardsData=JSON.parse(localStorage.getItem('cards'));

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let title=event.target.element.title.value;
    let catigory=event.target.element.title.catigory;
    cardsData.push({title,catigory});
    localStorage.setItem('cards',JSON.stringify(cardsData));
    createUI(cardsData,ul);
});

function handleEdit(event,info,id,lable){
    let elem=event.target;
    let input=document.createElement('input');
    input.value=info;
    input.addEventListener('keyup',(e)=>{
        if(e.keyCode===13){
            let updatedValue=e.target.value;
            cardsData[id][lable]=updatedValue;
            createUI();
            localStorage.setItem('cards',JSON.stringify(cardsData))
        }
    });
    let parent=event.target.parentElement;
    parent.replaceChild(input,elem);
}
function createUI(date=cardsData,root=ul){
root.innerHTML="";
let fragment=new DocumentFragment();
DataCue.forEach((cardInfo,index)=>{
    let li=document.createElement("li");
    let p=document.createElement('p');
    p.addEventListener('dblclick',(e)=>{
        handleEdit(e,cardInfo,catigory,index,catigory);
        p.innerText=cardsInfo.catigory;
        
        
    })
    let h2=document.createElement('h2');
    h2.addEventListener('dblclick',(e)=>{
        handleEdit(e,cardInfo,catigory,index,catigory);

    })
    li.append(p,h2);
    fragment.appendChild(li);
    root.append(fragment);
})
}
createUI(cardsData,ul)