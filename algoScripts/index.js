//gettng all  ids in variables


var arrSize = document.getElementById('arr-size');

var newArr = document.getElementById('generate-new-arr');

var sortingAlgo =document.querySelectorAll('#algorithms button');



var arr =[];
var div =[];
var size =arrSize.value;

var arrCon = document.getElementById('arr-container');


arrSize.addEventListener('input',inputArray);
newArr.addEventListener('click',generateArray);









function generateArray(){
     arrCon.innerHTML="";

     for(let i=0;i<size;i++){
        arr[i] = Math.floor(Math.random()*5*(arrSize.max-arrSize.min))+10;
        div[i] = document.createElement("div");
        arrCon.appendChild(div[i]);
        div[i].style = "height: "+ (arr[i]) +"px;background-color:#3AAFA9; width :" + 100/(size-4)+"%;margin: "+ 0.12 + "%;";

     }
     console.log("generate")
}



function inputArray(){
    size =arrSize.value
    generateArray();
    console.log('inputarr')


}


//for getting an array before hand
window.onload = inputArray();


//selecting algorithms
for(let i=0;i<sortingAlgo.length;i++){
    sortingAlgo[i].addEventListener('click',algo)
}


function algo(){
   
    
    //using switch function for handling innerHTML cases
    switch(this.id)
    {

        case "insertion":
            insertionSort();
            break;
        
        case "merge":
            mergeSort();
            break;


        case "bubble":
            bubbleSort();
            break;
       
        case "selection":
            selectionSort();
            break;
        
        case "quick":
            quickSort();
            break;
    
    }
}




var time=1000/(Math.floor(size/10)*10);
var delay=0;

//update divs

function update(arrCon,color,height){
    window.setTimeout(function(){
        arrCon.style= "height: "+ height +"px;background-color:"+color+"; width :" + 100/(size-4)+"%;margin: "+ 0.12 + "%;"
    },delay+=time)
}