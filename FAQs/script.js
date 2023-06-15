const q=document.querySelectorAll(".box");
q.forEach((question)=>
{
    const btn=question.querySelector(".btn");
    
    btn.addEventListener("click",()=>
    {
        
        let a=question.querySelector(".answer");
        console.log(a.innerHTML);
        a.classList.toggle("change");
        btn.classList.toggle("rotate");
        
    })
})
