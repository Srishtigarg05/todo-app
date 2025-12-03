let c4=document.getElementById("black");
c4.addEventListener("click",function(e){
    document.body.classList.toggle("dark");
});
let value=document.addEventListener('keypress',(enter)=>{
    if(enter.key==="Enter"){
        myfunc();
    }
});
function myfunc(){
    const val=document.getElementById("task").value;
    if(val.length==0){
        alert("Please Enter a Task");
        return;
    }
    const list=`
    <div class="item" style
    ="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
        <input type="checkbox" class="check"/>
        <p class="task">${val}</p>
        <button class="delete">🗑️</button>
    </div>
    `;
    document.getElementById("result").innerHTML+=list;
    document.getElementById("result").addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});
 
 document.getElementById("result").addEventListener("click", function(e) {
    if (e.target.classList.contains("check")) {
        const item = e.target.parentElement;

        if (e.target.checked) {
            item.style.textDecoration = "line-through";
            item.style.backgroundColor = "green";
        } else {
            item.style.textDecoration = "none";
            item.style.backgroundColor = "white";
        }
    }
});

}