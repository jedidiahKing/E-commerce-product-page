$(".add-to-bag").on("click", ()=>{
    $(".container123").css("visibility", "visible")
})

$("#close-popup").on("click", ()=>{
    $(".container123").css("visibility", "hidden")
})


/*---image changing when hover on---*/

var myMainImg = document.getElementById("main-img"),
    myImg1 = document.getElementById("img1"),
    myImg2 = document.getElementById("img2"),
    myImg3 = document.getElementById("img3"),
    imgNum;

function ChangeImg(imgNum){
    if(imgNum === 1)
    {
        myMainImg.firstElementChild.setAttribute("src",myImg1.firstElementChild.src);
    }

   else if(imgNum === 2)
    {
        myMainImg.firstElementChild.setAttribute("src",myImg2.firstElementChild.src);
    }

   else if(imgNum === 3)
    {
        myMainImg.firstElementChild.setAttribute("src",myImg3.firstElementChild.src);
    }

}