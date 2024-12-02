let array = model.app.array;
let array5 = array.filter(function(item){
    return [0 - 4].indexOf(item.id) != -1;
})

function updateViewLights(){
    

    app.innerHTML = /*HTML*/ `
    <div> 
    <div> @{array5} </div>
    </div>
    `
}