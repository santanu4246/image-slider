const main = document.querySelector(".backImgContainer");
const box = document.querySelectorAll(".box1")

console.log(box);
box.forEach((b,index)=>{
    b.addEventListener('click',()=>{
        main.style.transform=`translateX(${-100 * index}%)`
    })
})


/*
0 -> transform: translateX(0%);
1 -> transform: translateX(-100%);
2 -> transform: translateX(-200%);
3 -> transform: translateX(-300%);
*/