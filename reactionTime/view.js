let array = model.app.array;
let array5 = array.slice(0,4);


function updateView(){
    

    app.innerHTML = /*HTML*/ `
    <div> 
    <div> @{array[0]} </div>
    </div>
    `
}