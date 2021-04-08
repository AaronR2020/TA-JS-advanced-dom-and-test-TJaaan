console.log("testingA");

let root=document.querySelector(".quotes");
let max=4;
let index=0;

function addQuotes(){
    console.log("testingB");//not entering
    for(let i=0;i<max;i++){
        let li=document.createElement("li");
        let blockquote=document.createElement("blockquote");
        let cite=document.createElement("cite");
        blockquote.innerHTML=quotes[index].quoteText;
        cite.innerHTML=quotes[index].quoteAuthor;
        index++;
        max++;
        li.append(blockquote,cite)
        root.append(li);   
    }
}
document.addEventListener('scroll',()=>{
   let scrollTop=document.documentElement.scrollTop;
   let scrollHeight=document.documentElement.scrollHeight;
   let clientHeight=document.documentElement.clientHeight;
  if(scrollTop+clientHeight>=scrollHeight){
        addQuotes();
    }
});





