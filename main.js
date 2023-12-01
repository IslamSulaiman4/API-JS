var httpRequest= new XMLHttpRequest();
httpRequest.open('GET','https://forkify-api.herokuapp.com/api/search?q=pizza');
httpRequest.send();
var result=[];

httpRequest.onreadystatechange=function () { 
    if(httpRequest.readyState==4){
        result=JSON.parse(httpRequest.response).recipes;
        print();

    }
}


function print(){
    var data="";
    for(var i=0;i<result.length;i++){
        data +=
        `<div class=" col-md-4 text-center mt-5 " style="height:450px ">
        <div class="">
        
        <h2 style="height:80px">${result[i].title}</h2>
        <img class="img-fluid w-100 pb-5" style="height:300px" src="${result[i].image_url}"/>
        <a class="text-decoration-none text-dark fw-semibold bg-dark text-white rounded p-2" href="details.html?rId=${result[i].recipe_id}" >Read More</a>
        </div> 
        </div>
     `
    }
    document.getElementById("pizza").innerHTML=data;
}
